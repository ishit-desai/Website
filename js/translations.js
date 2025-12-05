// Multi-language support
const translations = {
    en: {
        nav: {
            home: "Home",
            products: "Products",
            about: "About",
            contact: "Contact Us",
            downloads: "Downloads",
            enquiry: "Enquiry",
            contactUs: "Contact Us",
            infusionTransfusion: "Infusion & Transfusion"
        },
        brand: {
            name: "Shri Gurukrupa",
            type: "SURGICAL"
        },
        search: {
            placeholder: "Search..."
        },
        home: {
            title: "Welcome to Shrigurukrupa Surgical",
            subtitle: "Your Trusted Partner in Quality Surgical Products & Equipment"
        },
        hero: {
            title: "Quality Surgical Products for Healthcare Excellence",
            subtitle: "Supplying premium surgical instruments and medical equipment to healthcare professionals worldwide with uncompromising quality standards.",
            contactUs: "Contact Us",
            learnMore: "Learn More"
        },
        products: {
            title: "Our Products",
            subtitle: "We supply premium surgical products and medical equipment to healthcare professionals worldwide",
            infusionTransfusion: {
                title: "Infusion & Transfusion",
                description: "Complete range of infusion and transfusion products for safe fluid delivery and blood transfusion procedures."
            }
        },
        about: {
            title: "About Shrigurukrupa Surgical",
            subtitle: "Excellence in Surgical Products Since 1995",
            description1: "Shrigurukrupa Surgical has been a trusted supplier of premium surgical products for over 25 years, committed to supporting healthcare professionals with quality equipment and instruments.",
            description2: "Our state-of-the-art manufacturing facility is equipped with the latest technology, and our team of experienced professionals is dedicated to maintaining the highest quality standards for all our products.",
            learnMore: "Learn More",
            story: "Our Story",
            mission: "Our Mission",
            missionText: "To provide healthcare professionals worldwide with reliable, high-quality surgical products that meet the highest industry standards, enabling them to deliver exceptional patient care.",
            vision: "Our Vision",
            visionText: "To be the leading supplier of surgical products in India and globally, recognized for our commitment to quality, innovation, and customer satisfaction.",
            commitment: "Our Commitment",
            commitmentText: "We are committed to continuous improvement, investing in advanced manufacturing technologies, and maintaining strict quality control processes to ensure our products meet international standards.",
            whyChoose: "Why Choose Us?",
            experience: "25+ Years of Experience",
            quality: "Premium Quality Products",
            trusted: "Trusted by Healthcare Professionals",
            pricing: "Competitive Pricing",
            service: "Excellent Customer Service"
        },
        enquiry: {
            title: "Product Enquiry",
            subtitle: "Get detailed information about our surgical products and equipment",
            formTitle: "Submit Your Enquiry",
            formSubtitle: "We're here to help you with all your surgical product requirements. Please fill out the form below and we'll get back to you within 24 hours.",
            fullName: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            company: "Company/Organization",
            productCategory: "Product Category",
            selectCategory: "Select Product Category",
            surgicalInstruments: "Surgical Instruments",
            medicalEquipment: "Medical Equipment",
            disposables: "Disposables",
            orthopedic: "Orthopedic Products",
            other: "Other",
            quantity: "Quantity Required",
            quantityPlaceholder: "e.g. 100 units",
            message: "Message / Product Details",
            messagePlaceholder: "Please provide details about the specific products you're interested in, quantities, delivery requirements, or any other relevant information...",
            city: "City/Location",
            cityPlaceholder: "Your city or delivery location",
            submit: "Submit Enquiry",
            reset: "Reset Form",
            required: "*",
            thankYou: "Thank you for your enquiry! We will get back to you within 24 hours.",
            sending: "Sending..."
        },
        infusionProducts: {
            title: "Infusion Products",
            features: "Product Features",
            medicalGrade: "Medical Grade Materials",
            sterile: "Sterile & Single-Use Design",
            certified: "FDA & CE Certified",
            biocompatible: "Biocompatible Components",
            leakProof: "Leak-Proof Connections",
            flowControl: "Precise Flow Control",
            ivCannula: {
                name: "IV Cannula",
                description: "Sterile intravenous cannulas for safe vascular access"
            },
            ivSets: {
                name: "IV Administration Sets",
                description: "Complete IV fluid administration systems with precise flow control"
            },
            pumps: {
                name: "Infusion Pumps",
                description: "Electronic infusion pumps for accurate medication delivery"
            },
            catheters: {
                name: "IV Catheters",
                description: "Central and peripheral IV catheters for various clinical needs"
            },
            stopcocks: {
                name: "Three-Way Stopcocks",
                description: "Multi-port connectors for IV line management"
            },
            extensions: {
                name: "Extension Lines",
                description: "IV extension tubing for flexible patient care"
            },
            pressureBags: {
                name: "Pressure Bags",
                description: "IV pressure infusion bags for rapid fluid delivery"
            },
            poles: {
                name: "IV Poles & Stands",
                description: "Mobile and stationary IV equipment support systems"
            }
        },
        transfusionProducts: {
            title: "Transfusion Products",
            bloodSets: {
                name: "Blood Transfusion Sets",
                description: "Sterile blood administration sets with inline filters"
            },
            bloodBags: {
                name: "Blood Bags",
                description: "FDA approved blood collection and storage bags"
            },
            plasmaSets: {
                name: "Plasma Transfer Sets",
                description: "Specialized equipment for plasma separation and transfer"
            },
            warmers: {
                name: "Blood Warmers",
                description: "Temperature control systems for safe blood transfusion"
            },
            cuffs: {
                name: "Blood Pressure Cuffs",
                description: "Manual and automated blood pressure monitoring"
            },
            filters: {
                name: "Transfusion Filters",
                description: "Leukocyte reduction and microaggregate filters"
            },
            tubes: {
                name: "Blood Collection Tubes",
                description: "Vacuum tubes for blood sample collection"
            },
            apheresis: {
                name: "Apheresis Sets",
                description: "Complete systems for therapeutic apheresis procedures"
            }
        },
        downloads: {
            title: "Downloads",
            subtitle: "Download our product catalogues, brochures, and technical documentation",
            catalogues: "Product Catalogues",
            catalogueDescription: "Browse and download our comprehensive product catalogues with detailed specifications and pricing information.",
            mainCatalogue: "Main Product Catalogue",
            mainCatalogueDesc: "Complete catalogue featuring all our surgical products and medical equipment with detailed specifications.",
            infusionCatalogue: "Infusion & Transfusion Catalogue",
            infusionCatalogueDesc: "Specialized catalogue for infusion and transfusion products with technical specifications.",
            certifications: "Certifications & Quality Standards",
            certificationsDesc: "ISO certifications, quality standards, and compliance documentation.",
            updated: "Updated: Dec 2024",
            download: "Download PDF",
            needHelp: "Need Help?",
            helpText: "If you need assistance with downloads or have questions about our products, please contact us.",
            contactSupport: "Contact Support",
            downloadInfo: "Download Information",
            infoItem1: "All catalogues are in PDF format for easy viewing and printing",
            infoItem2: "Files are regularly updated with latest product information",
            infoItem3: "No registration required for downloads",
            infoItem4: "For bulk orders, please contact us for special pricing",
            downloadStarted: "Download started successfully!"
        },
        common: {
            getQuote: "Get Quote",
            viewProducts: "View Products",
            goHome: "Go Home",
            pageNotFound: "Page Not Found",
            pageNotFoundText: "The page you're looking for doesn't exist."
        },
        footer: {
            about: "About Shrigurukrupa Surgical",
            description: "We supply premium surgical products and medical equipment to healthcare professionals worldwide.",
            products: "Our Products",
            quickLinks: "Quick Links",
            contact: "Contact Information",
            address: "Amardeep Estate, 4, Khokhra Rd, opposite Anupam Cinema Road, Amraiwadi, Ahmedabad, Gujarat 380021",
            rights: "All rights reserved."
        }
    },
    es: {
        nav: {
            home: "Inicio",
            products: "Productos",
            about: "Acerca de",
            contact: "Contáctanos",
            downloads: "Descargas",
            enquiry: "Consulta",
            contactUs: "Contáctanos",
            infusionTransfusion: "Infusión y Transfusión",
            surgicalInstruments: "Instrumentos Quirúrgicos",
            medicalEquipment: "Equipos Médicos",
            disposables: "Desechables",
            orthopedic: "Productos Ortopédicos"
        },
        search: {
            placeholder: "Buscar..."
        },
        hero: {
            title: "Productos Quirúrgicos de Calidad para la Excelencia en el Cuidado de la Salud",
            subtitle: "Suministrando instrumentos quirúrgicos premium y equipos médicos a profesionales de la salud en todo el mundo con estándares de calidad sin compromiso.",
            contactUs: "Contáctanos",
            learnMore: "Saber Más"
        },
        services: {
            title: "Nuestros Servicios",
            subtitle: "Proporcionamos servicios integrales de atención médica para satisfacer todas sus necesidades médicas",
            emergency: {
                title: "Atención de Emergencia",
                description: "Servicios médicos de emergencia 24/7 con respuesta rápida y atención experta."
            },
            surgery: {
                title: "Cirugía",
                description: "Procedimientos quirúrgicos avanzados con equipos de vanguardia y cirujanos experimentados."
            },
            pediatrics: {
                title: "Pediatría",
                description: "Atención especializada para niños desde la infancia hasta la adolescencia."
            },
            cardiology: {
                title: "Cardiología",
                description: "Servicios integrales de cuidado del corazón incluyendo diagnóstico y tratamiento."
            }
        },
        about: {
            title: "Acerca de Shrigurukrupa Surgical",
            subtitle: "Excelencia en Productos Quirúrgicos Desde 1995",
            description1: "Shrigurukrupa Surgical ha sido un proveedor confiable de productos quirúrgicos premium por más de 25 años, comprometido a apoyar a profesionales de la salud con equipos e instrumentos de calidad.",
            description2: "Nuestra instalación de fabricación de vanguardia está equipada con la última tecnología, y nuestro equipo de profesionales experimentados se dedica a mantener los más altos estándares de calidad para todos nuestros productos.",
            learnMore: "Saber Más"
        },
        footer: {
            about: "Acerca de Shrigurukrupa Surgical",
            description: "Suministramos productos quirúrgicos y equipos médicos de alta calidad a profesionales de la salud en todo el mundo.",
            products: "Nuestros Productos",
            quickLinks: "Enlaces Rápidos",
            contact: "Información de Contacto",
            address: "Amardeep Estate, 4, Khokhra Rd, frente a Anupam Cinema Road, Amraiwadi, Ahmedabad, Gujarat 380021",
            rights: "Todos los derechos reservados."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            products: "Produits",
            about: "À propos",
            contact: "Nous contacter",
            downloads: "Téléchargements",
            enquiry: "Demande",
            contactUs: "Nous contacter",
            infusionTransfusion: "Perfusion et Transfusion"
        },
        search: {
            placeholder: "Rechercher..."
        },
        hero: {
            title: "Votre Santé est Notre Priorité",
            subtitle: "Fournir des services de santé complets avec des installations de pointe et des professionnels médicaux expérimentés.",
            bookAppointment: "Prendre RDV",
            learnMore: "En Savoir Plus"
        },
        services: {
            title: "Nos Services",
            subtitle: "Nous fournissons des services de santé complets pour répondre à tous vos besoins médicaux",
            emergency: {
                title: "Soins d'Urgence",
                description: "Services médicaux d'urgence 24h/24 et 7j/7 avec réponse rapide et soins experts."
            },
            surgery: {
                title: "Chirurgie",
                description: "Procédures chirurgicales avancées avec équipements de pointe et chirurgiens expérimentés."
            },
            pediatrics: {
                title: "Pédiatrie",
                description: "Soins spécialisés pour les enfants de la naissance à l'adolescence."
            },
            cardiology: {
                title: "Cardiologie",
                description: "Services complets de soins cardiaques incluant diagnostic et traitement."
            }
        },
        about: {
            title: "À propos de Shrigurukrupa Surgical",
            subtitle: "Excellence en Produits Chirurgicaux Depuis 1995",
            description1: "Shrigurukrupa Surgical est un fournisseur de confiance de produits chirurgicaux premium depuis plus de 25 ans, engagé à soutenir les professionnels de la santé avec des équipements et instruments de qualité.",
            description2: "Notre installation de fabrication de pointe est équipée de la dernière technologie, et notre équipe de professionnels expérimentés se consacre à maintenir les plus hauts standards de qualité pour tous nos produits.",
            learnMore: "En Savoir Plus"
        },
        footer: {
            about: "À propos de Shrigurukrupa Surgical",
            description: "Nous fournissons des produits chirurgicaux et des équipements médicaux de qualité supérieure aux professionnels de la santé du monde entier.",
            products: "Nos Produits",
            quickLinks: "Liens Rapides",
            contact: "Informations de Contact",
            address: "Amardeep Estate, 4, Khokhra Rd, en face de Anupam Cinema Road, Amraiwadi, Ahmedabad, Gujarat 380021",
            rights: "Tous droits réservés."
        }
    },
    de: {
        nav: {
            home: "Startseite",
            products: "Produkte",
            about: "Über uns",
            contact: "Kontakt aufnehmen",
            downloads: "Downloads",
            enquiry: "Anfrage",
            contactUs: "Kontakt aufnehmen",
            infusionTransfusion: "Infusion und Transfusion"
        },
        search: {
            placeholder: "Suchen..."
        },
        hero: {
            title: "Ihre Gesundheit ist Unsere Priorität",
            subtitle: "Umfassende Gesundheitsdienste mit modernsten Einrichtungen und erfahrenen medizinischen Fachkräften.",
            bookAppointment: "Termin buchen",
            learnMore: "Mehr erfahren"
        },
        services: {
            title: "Unsere Dienstleistungen",
            subtitle: "Wir bieten umfassende Gesundheitsdienste für alle Ihre medizinischen Bedürfnisse",
            emergency: {
                title: "Notfallbetreuung",
                description: "24/7 medizinische Notfalldienste mit schneller Reaktion und fachkundiger Betreuung."
            },
            surgery: {
                title: "Chirurgie",
                description: "Fortgeschrittene chirurgische Verfahren mit modernster Ausrüstung und erfahrenen Chirurgen."
            },
            pediatrics: {
                title: "Kinderheilkunde",
                description: "Spezialisierte Betreuung für Kinder vom Säuglingsalter bis zur Adoleszenz."
            },
            cardiology: {
                title: "Kardiologie",
                description: "Umfassende Herzpflegedienste einschließlich Diagnose und Behandlung."
            }
        },
        about: {
            title: "Über Shrigurukrupa Surgical",
            subtitle: "Exzellenz in Chirurgischen Produkten Seit 1995",
            description1: "Shrigurukrupa Surgical ist seit über 25 Jahren ein vertrauenswürdiger Lieferant von Premium-Chirurgieprodukten, der sich dafür einsetzt, Gesundheitsfachkräfte mit hochwertigen Geräten und Instrumenten zu unterstützen.",
            description2: "Unsere hochmoderne Produktionsanlage ist mit der neuesten Technologie ausgestattet, und unser Team erfahrener Fachkräfte widmet sich der Aufrechterhaltung höchster Qualitätsstandards für alle unsere Produkte.",
            learnMore: "Mehr Erfahren"
        },
        footer: {
            about: "Über Shrigurukrupa Surgical",
            description: "Wir liefern hochwertige chirurgische Produkte und medizinische Geräte an Gesundheitsfachkräfte weltweit.",
            products: "Unsere Produkte",
            quickLinks: "Schnelle Links",
            contact: "Kontaktinformationen",
            address: "Amardeep Estate, 4, Khokhra Rd, gegenüber Anupam Cinema Road, Amraiwadi, Ahmedabad, Gujarat 380021",
            rights: "Alle Rechte vorbehalten."
        }
    },
    hi: {
        nav: {
            home: "होम",
            products: "उत्पाद",
            about: "हमारे बारे में",
            contact: "संपर्क करें",
            downloads: "डाउनलोड",
            enquiry: "पूछताछ",
            contactUs: "संपर्क करें",
            infusionTransfusion: "इन्फ्यूज़न और ट्रांसफ्यूज़न"
        },
        brand: {
            name: "श्री गुरुकृपा",
            type: "सर्जिकल"
        },
        search: {
            placeholder: "खोजें..."
        },
        hero: {
            title: "स्वास्थ्य सेवा में उत्कृष्टता के लिए गुणवत्तापूर्ण सर्जिकल उत्पाद",
            subtitle: "विश्वभर के स्वास्थ्य सेवा पेशेवरों को बेजोड़ गुणवत्ता मानकों के साथ प्रीमियम सर्जिकल उपकरण और मेडिकल उपकरण प्रदान करना।",
            contactUs: "संपर्क करें",
            learnMore: "और जानें"
        },
        products: {
            title: "हमारे उत्पाद",
            subtitle: "हम दुनिया भर के स्वास्थ्य सेवा पेशेवरों को प्रीमियम सर्जिकल उत्पाद और मेडिकल उपकरण की आपूर्ति करते हैं",
            surgicalInstruments: {
                title: "सर्जिकल उपकरण",
                description: "सटीक ऑपरेशन और चिकित्सा प्रक्रियाओं के लिए उच्च गुणवत्ता वाले सर्जिकल उपकरण।"
            },
            medicalEquipment: {
                title: "मेडिकल उपकरण",
                description: "अस्पतालों और स्वास्थ्य सुविधाओं के लिए अत्याधुनिक मेडिकल उपकरण।"
            },
            disposables: {
                title: "डिस्पोजेबल",
                description: "सुरक्षित और स्वच्छ स्वास्थ्य सेवा प्रदान करने के लिए स्टेराइल डिस्पोजेबल मेडिकल उत्पाद।"
            },
            orthopedic: {
                title: "ऑर्थोपेडिक उत्पाद",
                description: "हड्डी और जोड़ों की सर्जरी के लिए विशेष ऑर्थोपेडिक इंप्लांट और उपकरण।"
            }
        },
        about: {
            title: "श्रीगुरुकृपा सर्जिकल के बारे में",
            subtitle: "1995 से सर्जिकल उत्पादों में उत्कृष्टता",
            description1: "श्रीगुरुकृपा सर्जिकल 25 से अधिक वर्षों से प्रीमियम सर्जिकल उत्पादों का एक विश्वसनीय आपूर्तिकर्ता है, जो स्वास्थ्य सेवा पेशेवरों को गुणवत्तापूर्ण उपकरण और उपकरण प्रदान करने के लिए प्रतिबद्ध है।",
            description2: "हमारी अत्याधुनिक विनिर्माण सुविधा नवीनतम तकनीक से लैस है, और हमारे अनुभवी पेशेवरों की टीम हमारे सभी उत्पादों के लिए उच्चतम गुणवत्ता मानकों को बनाए रखने के लिए समर्पित है।",
            learnMore: "और जानें",
            story: "हमारी कहानी",
            mission: "हमारा मिशन",
            missionText: "दुनिया भर के स्वास्थ्य सेवा पेशेवरों को विश्वसनीय, उच्च गुणवत्ता वाले सर्जिकल उत्पाद प्रदान करना जो सर्वोच्च उद्योग मानकों को पूरा करते हैं।",
            vision: "हमारी दृष्टि",
            visionText: "भारत और विश्व स्तर पर सर्जिकल उत्पादों के अग्रणी आपूर्तिकर्ता बनना, गुणवत्ता और नवाचार के लिए पहचाना जाना।",
            commitment: "हमारी प्रतिबद्धता",
            commitmentText: "निरंतर सुधार के लिए प्रतिबद्ध हैं, उन्नत तकनीकों में निवेश और अंतर्राष्ट्रीय मानकों को पूरा करना।",
            whyChoose: "हमें क्यों चुनें?",
            experience: "25+ वर्षों का अनुभव",
            quality: "प्रीमियम गुणवत्ता उत्पाद",
            trusted: "स्वास्थ्य पेशेवरों द्वारा विश्वसनीय",
            pricing: "प्रतिस्पर्धी मूल्य",
            service: "उत्कृष्ट ग्राहक सेवा"
        },
        enquiry: {
            title: "उत्पाद पूछताछ",
            subtitle: "हमारे सर्जिकल उत्पादों और उपकरणों की विस्तृत जानकारी प्राप्त करें",
            formTitle: "अपनी पूछताछ भेजें",
            formSubtitle: "हम आपकी सभी सर्जिकल उत्पाद आवश्यकताओं में मदद के लिए यहाँ हैं। कृपया नीचे फॉर्म भरें और हम 24 घंटों के भीतर आपसे संपर्क करेंगे।",
            fullName: "पूरा नाम",
            email: "ईमेल पता",
            phone: "फोन नंबर",
            company: "कंपनी/संगठन",
            productCategory: "उत्पाद श्रेणी",
            selectCategory: "उत्पाद श्रेणी चुनें",
            surgicalInstruments: "सर्जिकल उपकरण",
            medicalEquipment: "मेडिकल उपकरण",
            disposables: "डिस्पोजेबल",
            orthopedic: "ऑर्थोपेडिक उत्पाद",
            other: "अन्य",
            quantity: "आवश्यक मात्रा",
            quantityPlaceholder: "जैसे 100 इकाइयां",
            message: "संदेश / उत्पाद विवरण",
            messagePlaceholder: "कृपया आपको जिन विशिष्ट उत्पादों में रुचि है, मात्रा, डिलीवरी आवश्यकताओं या किसी अन्य प्रासंगिक जानकारी का विवरण प्रदान करें...",
            city: "शहर/स्थान",
            cityPlaceholder: "आपका शहर या डिलीवरी स्थान",
            submit: "पूछताछ भेजें",
            reset: "फॉर्म रीसेट करें",
            required: "*",
            thankYou: "आपकी पूछताछ के लिए धन्यवाद! हम 24 घंटों के भीतर आपसे संपर्क करेंगे।",
            sending: "भेजा जा रहा है..."
        },
        infusionProducts: {
            title: "इन्फ्यूज़न उत्पाद",
            features: "उत्पाद विशेषताएं",
            medicalGrade: "मेडिकल ग्रेड सामग्री",
            sterile: "स्टेरिल और सिंगल-यूज डिज़ाइन",
            certified: "FDA और CE प्रमाणित",
            biocompatible: "बायो-कम्पैटिबल घटक",
            leakProof: "लीक-प्रूफ कनेक्शन",
            flowControl: "सटीक फ्लो नियंत्रण"
        },
        transfusionProducts: {
            title: "ट्रांसफ्यूज़न उत्पाद"
        },
        common: {
            getQuote: "कोटेशन प्राप्त करें",
            viewProducts: "उत्पाद देखें",
            goHome: "होम पर जाएं",
            pageNotFound: "पेज नहीं मिला",
            pageNotFoundText: "आप जिस पेज की तलाश कर रहे हैं वह मौजूद नहीं है।"
        },
        footer: {
            about: "श्रीगुरुकृपा सर्जिकल के बारे में",
            description: "हम दुनिया भर के स्वास्थ्य सेवा पेशेवरों को प्रीमियम सर्जिकल उत्पाद और मेडिकल उपकरण की आपूर्ति करते हैं।",
            products: "हमारे उत्पाद",
            quickLinks: "त्वरित लिंक",
            contact: "संपर्क जानकारी",
            address: "अमरदीप एस्टेट, 4, खोखरा रोड, अनुपम सिनेमा रोड के सामने, अमरईवाड़ी, अहमदाबाद, गुजरात 380021",
            rights: "सभी अधिकार सुरक्षित।"
        }
    },
    gu: {
        nav: {
            home: "ઘર",
            products: "ઉત્પાદનો",
            about: "અમારા વિશે",
            contact: "સંપર્ક કરો",
            downloads: "ડાઉનલોડ",
            enquiry: "પૂછપરછ",
            contactUs: "સંપર્ક કરો",
            infusionTransfusion: "ઇન્ફ્યુઝન અને ટ્રાન્સફ્યુઝન"
        },
        brand: {
            name: "શ્રી ગુરુકૃપા",
            type: "સર્જિકલ"
        },
        search: {
            placeholder: "શોધો..."
        },
        hero: {
            title: "આરોગ્ય સેવામાં ઉત્કૃષ્ટતા માટે ગુણવત્તાયુક્ત સર્જિકલ ઉત્પાદનો",
            subtitle: "વિશ્વભરના આરોગ્ય સેવા વ્યાવસાયિકોને અદ્વિતીય ગુણવત્તા ધોરણો સાથે પ્રીમિયમ સર્જિકલ સાધનો અને મેડિકલ સાધનો પ્રદાન કરવું.",
            contactUs: "સંપર્ક કરો",
            learnMore: "વધુ જાણો"
        },
        products: {
            title: "અમારા ઉત્પાદનો",
            subtitle: "અમે વિશ્વભરના આરોગ્ય સેવા વ્યાવસાયિકોને પ્રીમિયમ સર્જિકલ ઉત્પાદનો અને મેડિકલ સાધનોની પૂરવઠો કરીએ છીએ",
            surgicalInstruments: {
                title: "સર્જિકલ સાધનો",
                description: "ચોક્કસ ઓપરેશન અને મેડિકલ પ્રક્રિયાઓ માટે ઉચ્ચ ગુણવત્તાવાળા સર્જિકલ સાધનો."
            },
            medicalEquipment: {
                title: "મેડિકલ સાધનો",
                description: "હોસ્પિટલો અને આરોગ્ય સુવિધાઓ માટે અત્યાધુનિક મેડિકલ સાધનો."
            },
            disposables: {
                title: "ડિસ્પોઝેબલ",
                description: "સુરક્ષિત અને સ્વચ્છ આરોગ્ય સેવા પ્રદાન કરવા માટે સ્ટેરાઇલ ડિસ્પોઝેબલ મેડિકલ ઉત્પાદનો."
            },
            orthopedic: {
                title: "ઓર્થોપેડિક ઉત્પાદનો",
                description: "હાડકા અને સંધિ સર્જરી માટે વિશિષ્ટ ઓર્થોપેડિક ઇમ્પ્લાન્ટ અને સાધનો."
            }
        },
        about: {
            title: "શ્રીગુરુકૃપા સર્જિકલ વિશે",
            subtitle: "1995 થી સર્જિકલ ઉત્પાદનોમાં ઉત્કૃષ્ટતા",
            description1: "શ્રીગુરુકૃપા સર્જિકલ 25 વર્ષથી વધુ સમયથી પ્રીમિયમ સર્જિકલ ઉત્પાદનોના વિશ્વસનીય પૂરવઠાકર્તા છે, જે આરોગ્ય સેવા વ્યાવસાયિકોને ગુણવત્તાયુક્ત સાધનો અને સાધનો પ્રદાન કરવા માટે પ્રતિબદ્ધ છે.",
            description2: "અમારી અત્યાધુનિક ઉત્પાદન સુવિધા નવીનતમ તકનીકથી સજ્જ છે, અને અમારી અનુભવી વ્યાવસાયિકોની ટીમ અમારા તમામ ઉત્પાદનો માટે સર્વોચ્ચ ગુણવત્તા ધોરણો જાળવવા માટે સમર્પિત છે.",
            learnMore: "વધુ જાણો"
        },
        footer: {
            about: "શ્રીગુરુકૃપા સર્જિકલ વિશે",
            description: "અમે વિશ્વભરના આરોગ્ય સેવા વ્યાવસાયિકોને પ્રીમિયમ સર્જિકલ ઉત્પાદનો અને મેડિકલ સાધનો પૂરા પાડીએ છીએ.",
            products: "અમારા ઉત્પાદનો",
            quickLinks: "ઝડપી લિંક્સ",
            contact: "સંપર્ક માહિતી",
            address: "અમરદીપ એસ્ટેટ, 4, ખોખરા રોડ, અનુપમ સિનેમા રોડની સામે, અમરાઈવાડી, અમદાવાદ, ગુજરાત 380021",
            rights: "તમામ અધિકારો સુરક્ષિત."
        }
    }
};

let currentLanguage = 'en';

// Change language function
function changeLanguage() {
    const selector = document.getElementById('languageSelector');
    if (selector.value && selector.value !== '') {
        currentLanguage = selector.value;
        window.currentLanguage = currentLanguage; // Ensure global sync
        localStorage.setItem('selectedLanguage', currentLanguage);
        updatePageText();
    }
}

// Update all text on the page
function updatePageText() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[currentLanguage], key);
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = getNestedTranslation(translations[currentLanguage], key);
        if (translation) {
            element.placeholder = translation;
        }
    });
}

// Helper function to get nested translation
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        // User has previously selected a language
        currentLanguage = savedLanguage;
        window.currentLanguage = currentLanguage; // Ensure global sync
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = currentLanguage;
        }
    } else {
        // Default to English
        currentLanguage = 'en';
        window.currentLanguage = currentLanguage; // Ensure global sync
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = 'en';
        }
    }
    updatePageText();
});

// Export for use in other modules
window.translations = translations;
window.currentLanguage = currentLanguage;
window.changeLanguage = changeLanguage;
window.updatePageText = updatePageText;