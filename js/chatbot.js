// Chatbot functionality
class Chatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
        this.sessionStartTime = null;
        this.userDetails = null;
        this.inactivityTimer = null;
        this.inactivityWarningTimer = null;
        this.INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes
        this.INACTIVITY_WARNING = 4 * 60 * 1000; // 4 minutes (1 min warning)
        this.sessionEnded = false;
        this.conversationLog = [];
        this.waitingForUserDetails = false;
        this.pendingQuestion = null;
        this.init();
    }

    init() {
        this.createChatbot();
        this.setupEventListeners();
        this.addWelcomeMessage();
    }

    createChatbot() {
        // Create chatbot HTML
        const chatbotHTML = `
            <!-- Chat Button -->
            <div id="chatButton" class="chat-button" title="Chat with us">
                <i class="fas fa-comments"></i>
                <div class="chat-notification" id="chatNotification">1</div>
            </div>

            <!-- Chat Window -->
            <div id="chatWindow" class="chat-window">
                <div class="chat-header">
                    <div class="chat-header-info">
                        <div class="chat-avatar">
                            <i class="fas fa-user-md"></i>
                        </div>
                        <div class="chat-details">
                            <h4 data-translate="chat.title">Medical Support</h4>
                            <span data-translate="chat.status">Online Now</span>
                        </div>
                    </div>
                    <button id="chatClose" class="chat-close" title="Close Chat">
                        <i class="fas fa-times"></i>
                    </button>
                    <button id="chatEnd" class="chat-close" title="End Chat Session" style="margin-right: 10px;">
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
                </div>

                <div class="chat-messages" id="chatMessages">
                    <!-- Messages will be dynamically added here -->
                </div>

                <div class="chat-typing" id="chatTyping" style="display: none;">
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span data-translate="chat.typing">Support is typing...</span>
                </div>

                <div class="chat-input-container">
                    <div class="chat-quick-replies" id="chatQuickReplies">
                        <button class="quick-reply-btn" data-message="products" data-translate="chat.quickProducts">Our Products</button>
                        <button class="quick-reply-btn" data-message="quote" data-translate="chat.quickQuote">Get Quote</button>
                        <button class="quick-reply-btn" data-message="contact" data-translate="chat.quickContact">Contact Info</button>
                        <button class="quick-reply-btn" data-message="help" data-translate="chat.quickHelp">Help</button>
                    </div>
                    <div class="chat-input">
                        <input type="text" id="chatInput" placeholder="Type your message..." data-translate-placeholder="chat.inputPlaceholder">
                        <button id="chatSend" class="chat-send-btn">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add chatbot to body
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    setupEventListeners() {
        const chatButton = document.getElementById('chatButton');
        const chatClose = document.getElementById('chatClose');
        const chatEnd = document.getElementById('chatEnd');
        const chatSend = document.getElementById('chatSend');
        const chatInput = document.getElementById('chatInput');
        const quickReplyBtns = document.querySelectorAll('.quick-reply-btn');

        chatButton.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.closeChat());
        chatEnd.addEventListener('click', () => this.endChatSession());
        chatSend.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Track user activity
        chatInput.addEventListener('input', () => this.resetInactivityTimer());
        chatInput.addEventListener('focus', () => this.resetInactivityTimer());

        quickReplyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const message = e.target.getAttribute('data-message');
                this.sendQuickReply(message);
            });
        });
    }

    toggleChat() {
        const chatWindow = document.getElementById('chatWindow');
        const chatButton = document.getElementById('chatButton');
        const chatNotification = document.getElementById('chatNotification');

        if (this.isOpen) {
            this.closeChat();
        } else {
            chatWindow.style.display = 'flex';
            chatButton.classList.add('active');
            chatNotification.style.display = 'none';
            this.isOpen = true;

            // Start session if not already started
            if (!this.sessionStartTime) {
                this.startNewSession();
            }

            // Start inactivity timer
            this.resetInactivityTimer();

            // Focus input
            setTimeout(() => {
                document.getElementById('chatInput').focus();
            }, 300);
        }
    }

    closeChat() {
        const chatWindow = document.getElementById('chatWindow');
        const chatButton = document.getElementById('chatButton');

        chatWindow.style.display = 'none';
        chatButton.classList.remove('active');
        this.isOpen = false;

        // Clear inactivity timers but keep session alive
        this.clearInactivityTimers();
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }

    addWelcomeMessage() {
        const t = this.getTranslation();
        const welcomeMessage = {
            text: t.chat?.welcome || "👋 Hello! Welcome to Shri Gurukrupa Surgical. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        };
        this.messages.push(welcomeMessage);
        this.renderMessage(welcomeMessage);

        // Log welcome message
        this.logMessage(welcomeMessage);
    }

    startNewSession() {
        this.sessionStartTime = new Date();
        this.sessionEnded = false;
        this.conversationLog = [];
        this.userDetails = null;
        this.waitingForUserDetails = false;
        this.pendingQuestion = null;
        console.log('New chat session started at:', this.sessionStartTime);
    }

    requestUserDetails(userQuestion) {
        if (this.userDetails || this.sessionEnded) return;

        this.waitingForUserDetails = true;
        this.pendingQuestion = userQuestion; // Store the user's question

        const t = this.getTranslation();
        const detailsMessage = {
            text: t.chat?.userDetailsRequest || "Before I help you with that, could you please share your name and contact number?",
            sender: 'bot',
            timestamp: new Date()
        };
        this.messages.push(detailsMessage);
        this.renderMessage(detailsMessage);
        this.logMessage(detailsMessage);
    }

    resetInactivityTimer() {
        if (this.sessionEnded) return;

        // Clear existing timers
        this.clearInactivityTimers();

        // Set warning timer (4 minutes)
        this.inactivityWarningTimer = setTimeout(() => {
            this.showInactivityWarning();
        }, this.INACTIVITY_WARNING);

        // Set timeout timer (5 minutes)
        this.inactivityTimer = setTimeout(() => {
            this.handleInactivityTimeout();
        }, this.INACTIVITY_TIMEOUT);
    }

    clearInactivityTimers() {
        if (this.inactivityTimer) {
            clearTimeout(this.inactivityTimer);
            this.inactivityTimer = null;
        }
        if (this.inactivityWarningTimer) {
            clearTimeout(this.inactivityWarningTimer);
            this.inactivityWarningTimer = null;
        }
    }

    showInactivityWarning() {
        if (this.sessionEnded || !this.isOpen) return;

        const t = this.getTranslation();
        const warningMessage = {
            text: t.chat?.inactivityWarning || "⏰ Are you still there? I'll automatically end this chat in 1 minute if there's no response.",
            sender: 'bot',
            timestamp: new Date()
        };
        this.messages.push(warningMessage);
        this.renderMessage(warningMessage);
        this.logMessage(warningMessage);
    }

    handleInactivityTimeout() {
        if (this.sessionEnded) return;

        const t = this.getTranslation();
        const timeoutMessage = {
            text: t.chat?.inactivityTimeout || "⏰ This chat session has been automatically ended due to inactivity. Thank you for visiting Shri Gurukrupa Surgical! Feel free to start a new chat anytime.",
            sender: 'bot',
            timestamp: new Date()
        };
        this.messages.push(timeoutMessage);
        this.renderMessage(timeoutMessage);
        this.logMessage(timeoutMessage);

        // End the session
        setTimeout(() => {
            this.endChatSession(true); // true = auto-ended
        }, 3000);
    }

    endChatSession(autoEnded = false) {
        if (this.sessionEnded) return;

        this.sessionEnded = true;
        this.clearInactivityTimers();

        // Add end session message
        if (!autoEnded) {
            const t = this.getTranslation();
            const endMessage = {
                text: t.chat?.chatEnded || "Thank you for chatting with Shri Gurukrupa Surgical! 👋 Your conversation has been ended. Have a great day!",
                sender: 'bot',
                timestamp: new Date()
            };
            this.messages.push(endMessage);
            this.renderMessage(endMessage);
            this.logMessage(endMessage);
        }

        // Send conversation data silently if user details exist
        if (this.userDetails) {
            if (autoEnded) {
                // Auto-timeout: send silently (no popup)
                this.sendConversationSilently();
            } else {
                // Manual end: send silently (no popup)
                this.sendConversationSilently();
            }
        }

        // Close chat immediately for manual end, with delay for auto end
        const closeDelay = autoEnded ? 3000 : 500; // Close quickly for manual end
        setTimeout(() => {
            this.closeChat();
            // Reset for new session
            setTimeout(() => {
                this.resetChatSession();
            }, 1000);
        }, closeDelay);
    }

    resetChatSession() {
        this.messages = [];
        this.conversationLog = [];
        this.sessionStartTime = null;
        this.sessionEnded = false;
        this.userDetails = null;
        this.waitingForUserDetails = false;
        this.pendingQuestion = null;

        // Clear chat messages UI
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
            chatMessages.innerHTML = '';
        }

        // Add welcome message for next session
        this.addWelcomeMessage();
    }

    logMessage(message) {
        this.conversationLog.push({
            text: message.text,
            sender: message.sender,
            timestamp: message.timestamp.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        });
    }

    sendConversationToWhatsApp() {
        if (this.conversationLog.length <= 1 || !this.userDetails) return;

        const conversationText = this.formatConversationData();

        try {
            const whatsappNumber = '919925648962'; // +91 99256 48962
            const encodedMessage = encodeURIComponent(conversationText);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            console.log('Chat conversation sent to WhatsApp successfully');
        } catch (error) {
            console.error('Error sending conversation to WhatsApp:', error);
        }
    }

    sendConversationSilently() {
        if (this.conversationLog.length <= 1 || !this.userDetails) return;

        const conversationData = {
            userDetails: this.userDetails,
            sessionInfo: {
                startTime: this.sessionStartTime,
                endTime: new Date(),
                duration: Math.round((new Date() - this.sessionStartTime) / 1000 / 60),
                messageCount: this.conversationLog.length
            },
            conversation: this.conversationLog,
            formatted: this.formatConversationData()
        };

        // Log to console for debugging
        console.log('Chat conversation logged silently:', conversationData);

        // Option 1: Store in localStorage for later retrieval
        try {
            const existingChats = JSON.parse(localStorage.getItem('chatLogs') || '[]');
            existingChats.push({
                id: Date.now(),
                timestamp: new Date().toISOString(),
                data: conversationData
            });
            // Keep only last 50 chats
            if (existingChats.length > 50) {
                existingChats.splice(0, existingChats.length - 50);
            }
            localStorage.setItem('chatLogs', JSON.stringify(existingChats));
            console.log('Chat saved to localStorage');
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }

        // Option 2: Send to your backend API (uncomment when ready)
        /*
        try {
            fetch('/api/chat-logs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(conversationData)
            }).then(response => {
                if (response.ok) {
                    console.log('Chat conversation sent to backend successfully');
                } else {
                    console.error('Failed to send conversation to backend');
                }
            });
        } catch (error) {
            console.error('Error sending conversation to backend:', error);
        }
        */

        // Option 3: Send to WhatsApp silently using a background service
        // This would require a backend service to send WhatsApp messages
        /*
        try {
            fetch('/api/send-whatsapp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: '919925648962',
                    message: conversationData.formatted
                })
            });
        } catch (error) {
            console.error('Error sending to WhatsApp service:', error);
        }
        */
    }

    formatConversationData() {
        const sessionDuration = this.sessionStartTime ?
            Math.round((new Date() - this.sessionStartTime) / 1000 / 60) : 0;

        // Format conversation text
        let conversationText = `🤖 *New Chat Session Report*\n\n`;
        conversationText += `📅 *Session Date:* ${this.sessionStartTime?.toLocaleDateString('en-IN', {timeZone: 'Asia/Kolkata'})}\n`;
        conversationText += `⏰ *Session Time:* ${this.sessionStartTime?.toLocaleTimeString('en-IN', {timeZone: 'Asia/Kolkata'})}\n`;
        conversationText += `⏱️ *Duration:* ${sessionDuration} minutes\n`;
        conversationText += `💬 *Total Messages:* ${this.conversationLog.length}\n`;

        // Add user details
        conversationText += `👤 *User Details:*\n`;
        conversationText += `   • Name: ${this.userDetails?.name || 'Not provided'}\n`;
        conversationText += `   • Phone: ${this.userDetails?.phone || 'Not provided'}\n`;

        conversationText += `\n📝 *Conversation Log:*\n\n`;

        this.conversationLog.forEach((msg, index) => {
            const sender = msg.sender === 'user' ? '👤 User' : '🤖 Bot';
            conversationText += `${sender} (${msg.timestamp}):\n${msg.text}\n\n`;
        });

        conversationText += `_This chat log was auto-generated from shrigurukrupasurgical.com_`;

        return conversationText;
    }

    sendMessage() {
        const chatInput = document.getElementById('chatInput');
        const messageText = chatInput.value.trim();

        if (!messageText || this.sessionEnded) return;

        // Add user message
        const userMessage = {
            text: messageText,
            sender: 'user',
            timestamp: new Date()
        };
        this.messages.push(userMessage);
        this.renderMessage(userMessage);
        this.logMessage(userMessage);

        // Clear input
        chatInput.value = '';

        // Reset inactivity timer
        this.resetInactivityTimer();

        // Check if we're waiting for user details
        if (this.waitingForUserDetails) {
            this.handleUserDetailsResponse(messageText);
            return;
        }

        // If no user details yet and this is first question, ask for details
        if (!this.userDetails) {
            this.requestUserDetails(messageText);
            return;
        }

        // User details provided - respond normally
        this.processNormalMessage(messageText);
    }

    handleUserDetailsResponse(messageText) {
        // Try to extract user details from response
        this.extractUserDetails(messageText);

        if (this.userDetails && this.userDetails.name && this.userDetails.phone) {
            // Details provided successfully
            this.waitingForUserDetails = false;

            // Show typing indicator
            this.showTyping();

            setTimeout(() => {
                this.hideTyping();

                // Thank user for details
                const thanksMessage = {
                    text: `Thank you ${this.userDetails.name}! 😊 Now let me help you with your question.`,
                    sender: 'bot',
                    timestamp: new Date()
                };
                this.messages.push(thanksMessage);
                this.renderMessage(thanksMessage);
                this.logMessage(thanksMessage);

                // Answer their original question if we have it
                if (this.pendingQuestion) {
                    setTimeout(() => {
                        this.processNormalMessage(this.pendingQuestion);
                        this.pendingQuestion = null;
                    }, 1000);
                }
            }, 1000);
        } else {
            // Details not complete - ask again
            setTimeout(() => {
                const t = this.getTranslation();
                const askAgainMessage = {
                    text: t.chat?.needBothDetails || "I need both your name and phone number to help you better. Please provide both details.",
                    sender: 'bot',
                    timestamp: new Date()
                };
                this.messages.push(askAgainMessage);
                this.renderMessage(askAgainMessage);
                this.logMessage(askAgainMessage);
            }, 1000);
        }
    }

    processNormalMessage(messageText) {
        // Show typing indicator
        this.showTyping();

        // Generate bot response
        setTimeout(() => {
            this.hideTyping();
            const botResponse = this.generateBotResponse(messageText);
            this.messages.push(botResponse);
            this.renderMessage(botResponse);
            this.logMessage(botResponse);
        }, 1000 + Math.random() * 2000);
    }

    extractUserDetails(message) {
        const lowerMessage = message.toLowerCase();

        // Initialize userDetails if not exists
        if (!this.userDetails) {
            this.userDetails = { name: null, phone: null, providedAt: new Date() };
        }

        // Extract name patterns
        const namePatterns = [
            /(?:my name is|i'm|i am|this is|call me)\s+([a-zA-Z\s]+)/i,
            /(?:name|naam)[\s:]+([a-zA-Z\s]+)/i,
            /^([a-zA-Z\s]+)\s+(?:and|phone|number)/i // "John Smith and my phone is..."
        ];

        // Extract phone patterns
        const phonePatterns = [
            /(?:phone|number|contact|mobile)[\s:]*([+]?[0-9\s\-\(\)]{7,15})/i,
            /(\+91[\s\-]?[789]\d{9})/,
            /([789]\d{9})/,
            /([0-9\s\-\(\)]{10,15})/
        ];

        // Try to extract name
        if (!this.userDetails.name) {
            for (const pattern of namePatterns) {
                const match = message.match(pattern);
                if (match) {
                    let name = match[1].trim();
                    // Clean up name
                    name = name.replace(/[^a-zA-Z\s]/g, '').trim();
                    if (name.length > 1 && !['phone', 'number', 'is', 'and', 'my'].includes(name.toLowerCase())) {
                        this.userDetails.name = name;
                        break;
                    }
                }
            }
        }

        // Try to extract phone
        if (!this.userDetails.phone) {
            for (const pattern of phonePatterns) {
                const match = message.match(pattern);
                if (match) {
                    let phone = match[1].trim();
                    // Clean phone number
                    phone = phone.replace(/[^\d+\-\(\)\s]/g, '').replace(/\s+/g, '');

                    // Validate phone (should be 10+ digits)
                    const digitsOnly = phone.replace(/\D/g, '');
                    if (digitsOnly.length >= 10) {
                        this.userDetails.phone = phone;
                        break;
                    }
                }
            }
        }

        console.log('User details extracted:', this.userDetails);
    }

    sendQuickReply(messageType) {
        if (this.sessionEnded) return;

        let messageText = '';
        switch(messageType) {
            case 'products':
                messageText = 'Tell me about your products';
                break;
            case 'quote':
                messageText = 'I need a quote';
                break;
            case 'contact':
                messageText = 'What are your contact details?';
                break;
            case 'help':
                messageText = 'I need help';
                break;
        }

        // Reset inactivity timer
        this.resetInactivityTimer();

        // Simulate typing the quick reply
        const chatInput = document.getElementById('chatInput');
        chatInput.value = messageText;
        this.sendMessage();
    }

    showTyping() {
        const chatTyping = document.getElementById('chatTyping');
        chatTyping.style.display = 'flex';
        this.isTyping = true;
        this.scrollToBottom();
    }

    hideTyping() {
        const chatTyping = document.getElementById('chatTyping');
        chatTyping.style.display = 'none';
        this.isTyping = false;
    }

    renderMessage(message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${message.sender}`;

        const timeString = message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-text">${this.formatMessageText(message.text)}</div>
                <div class="message-time">${timeString}</div>
            </div>
        `;

        chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    formatMessageText(text) {
        // Convert URLs to links
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        text = text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

        // Convert line breaks
        text = text.replace(/\n/g, '<br>');

        return text;
    }

    generateBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let responseText = '';

        // Product inquiries
        if (lowerMessage.includes('product') || lowerMessage.includes('equipment') || lowerMessage.includes('surgical')) {
            responseText = "We offer a comprehensive range of surgical products including:\n\n🔹 Infusion Therapy Products\n🔹 Anaesthesia Equipment\n🔹 Urology Products\n🔹 Dialysis Equipment\n🔹 Gastroenterology Products\n🔹 Surgical Instruments\n🔹 Face Masks\n🔹 General Medical Supplies\n\nWould you like to explore any specific category?";
        }
        // Quote requests
        else if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            responseText = "I'd be happy to help you get a quote! 📋\n\nFor detailed pricing information, please:\n\n1️⃣ Visit our Enquiry page\n2️⃣ Fill out the quote request form\n3️⃣ Our team will respond within 24 hours\n\nYou can also call us directly at +91 (982) 504-8962 for immediate assistance.";
        }
        // Contact information
        else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('address') || lowerMessage.includes('email')) {
            responseText = "Here's how you can reach us: 📞\n\n🏢 **Address:**\n4, Amardeep Estate, Opposite Anupam Cinema\nKhokhara Road, Ahmedabad - 380021\nGujarat, India\n\n📞 **Phone:** +91 (982) 504-8962\n📧 **Email:** shrigurukrupa54@gmail.com\n\n⏰ **Business Hours:**\nMon-Fri: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed";
        }
        // Catalogue/Downloads
        else if (lowerMessage.includes('catalogue') || lowerMessage.includes('download') || lowerMessage.includes('brochure')) {
            responseText = "📥 You can download our complete SGS Products Catalogue from our Downloads section.\n\nIt includes:\n✅ Complete product range\n✅ Technical specifications\n✅ High quality images\n✅ Updated 2025 information\n\nThe catalogue is available in PDF format and free to download!";
        }
        // Infrastructure
        else if (lowerMessage.includes('infrastructure') || lowerMessage.includes('facility') || lowerMessage.includes('manufacturing')) {
            responseText = "🏭 Our state-of-the-art infrastructure includes:\n\n✅ Modern 50,000 sq ft manufacturing facility\n✅ ISO-certified clean room environments\n✅ Fully equipped quality control laboratory\n✅ Advanced German and Japanese machinery\n✅ Climate-controlled warehouse\n✅ 24/7 production capability\n\nVisit our Infrastructure page to learn more!";
        }
        // Quality/Certification
        else if (lowerMessage.includes('quality') || lowerMessage.includes('certificate') || lowerMessage.includes('iso')) {
            responseText = "🏆 We maintain the highest quality standards:\n\n✅ ISO 9001:2015 Certified\n✅ CE Marking Compliant\n✅ FDA Approved products\n✅ Medical Grade materials\n✅ Automated quality control systems\n✅ Real-time production monitoring\n\nQuality is our top priority!";
        }
        // Help or general inquiries
        else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
            responseText = "I'm here to help! 😊\n\nI can assist you with:\n\n🔹 Product information\n🔹 Quote requests\n🔹 Contact details\n🔹 Downloads\n🔹 Company information\n\nWhat would you like to know more about?";
        }
        // Greetings
        else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            responseText = "Hello! 👋 Welcome to Shri Gurukrupa Surgical!\n\nWe're a leading supplier of premium surgical products and medical equipment. How can I assist you today?";
        }
        // Default response
        else {
            const responses = [
                "Thank you for your message! 😊 Our team specializes in surgical products and medical equipment. Could you please provide more details about what you're looking for?",
                "I'd be happy to help! For specific product inquiries or detailed information, please feel free to contact our sales team at +91 (982) 504-8962.",
                "Thanks for reaching out! If you need immediate assistance, you can also fill out our enquiry form and our team will get back to you within 24 hours."
            ];
            responseText = responses[Math.floor(Math.random() * responses.length)];
        }

        return {
            text: responseText,
            sender: 'bot',
            timestamp: new Date()
        };
    }

    scrollToBottom() {
        const chatMessages = document.getElementById('chatMessages');
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100);
    }

    // Get current translations
    getTranslation() {
        const currentLang = window.currentLanguage || 'en';
        return window.translations?.[currentLang] || window.translations?.en || {};
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.chatbot = new Chatbot();
});

// Utility function to retrieve stored chat logs
window.getChatLogs = function() {
    try {
        const logs = JSON.parse(localStorage.getItem('chatLogs') || '[]');
        console.log('Retrieved chat logs:', logs);
        return logs;
    } catch (error) {
        console.error('Error retrieving chat logs:', error);
        return [];
    }
};

// Utility function to clear chat logs
window.clearChatLogs = function() {
    try {
        localStorage.removeItem('chatLogs');
        console.log('Chat logs cleared');
        return true;
    } catch (error) {
        console.error('Error clearing chat logs:', error);
        return false;
    }
};

// Utility function to export chat logs as WhatsApp messages
window.exportChatLogsToWhatsApp = function() {
    const logs = window.getChatLogs();
    logs.forEach((log, index) => {
        setTimeout(() => {
            const whatsappNumber = '919925648962';
            const encodedMessage = encodeURIComponent(log.data.formatted);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }, index * 2000); // 2 second delay between each WhatsApp window
    });
};

// Make chatbot available globally
window.Chatbot = Chatbot;