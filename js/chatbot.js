// Chatbot functionality
class Chatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
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
                    <button id="chatClose" class="chat-close">
                        <i class="fas fa-times"></i>
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
        const chatSend = document.getElementById('chatSend');
        const chatInput = document.getElementById('chatInput');
        const quickReplyBtns = document.querySelectorAll('.quick-reply-btn');

        chatButton.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.closeChat());
        chatSend.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

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
    }

    addWelcomeMessage() {
        const welcomeMessage = {
            text: "👋 Hello! Welcome to Shri Gurukrupa Surgical. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        };
        this.messages.push(welcomeMessage);
        this.renderMessage(welcomeMessage);
    }

    sendMessage() {
        const chatInput = document.getElementById('chatInput');
        const messageText = chatInput.value.trim();

        if (!messageText) return;

        // Add user message
        const userMessage = {
            text: messageText,
            sender: 'user',
            timestamp: new Date()
        };
        this.messages.push(userMessage);
        this.renderMessage(userMessage);

        // Clear input
        chatInput.value = '';

        // Show typing indicator
        this.showTyping();

        // Generate bot response
        setTimeout(() => {
            this.hideTyping();
            const botResponse = this.generateBotResponse(messageText);
            this.messages.push(botResponse);
            this.renderMessage(botResponse);
        }, 1000 + Math.random() * 2000);
    }

    sendQuickReply(messageType) {
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
            responseText = "Here's how you can reach us: 📞\n\n🏢 **Address:**\n4, Amardeep Estate, Opposite Anupam Cinema\nKhokhara Road, Ahmedabad - 380021\nGujarat, India\n\n📞 **Phone:** +91 (982) 504-8962\n📧 **Email:** shrigurukrupa@yahoo.co.uk\n\n⏰ **Business Hours:**\nMon-Fri: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed";
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

// Make chatbot available globally
window.Chatbot = Chatbot;