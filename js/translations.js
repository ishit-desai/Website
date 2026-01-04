// Multi-language support
const translations = {
    en: {
        nav: {
            home: "Home",
            products: "Products",
            about: "About",
            infrastructure: "Infrastructure",
            achievements: "Achievements",
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
            title: "Welcome to Shri Gurukrupa Surgical",
            subtitle: "A Legacy of Quality Since 1992",
            aboutSection: "About"
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
                description: "Complete range of infusion and transfusion products for safe fluid delivery and blood procedures"
            },
            anesthesiaRespiratory: {
                title: "Anesthesia & Respiratory",
                description: "Complete anesthesia equipment and respiratory supplies for surgical and critical care procedures"
            },
            urologyGastroenterology: {
                title: "Urology & Gastroenterology",
                description: "Specialized products for urinary tract and digestive system procedures and interventions"
            },
            miscellaneous: {
                title: "Miscellaneous",
                description: "Additional medical supplies including surgical instruments, face masks, and general medical equipment"
            },
            infusionTherapy: {
                title: "Infusion Therapy",
                description: "Complete range of infusion therapy products for safe fluid delivery and medication administration.",
                infusionSetsEconomy: {
                    name: "Infusion Sets - Economy Models",
                    description: "Basic infusion sets for standard medical applications"
                },
                infusionSetsPremium: {
                    name: "Infusion Set - Premium Models",
                    description: "High-quality premium infusion sets with enhanced features"
                },
                infusionSetsUltra: {
                    name: "Infusion Sets - Ultra Models",
                    description: "Ultra-premium infusion sets with advanced flow control"
                },
                infusionSetsLuerLock: {
                    name: "Infusion Sets with Luer Lock and 'Y' Section",
                    description: "Infusion sets featuring secure Luer lock connections and Y-section design"
                },
                infusionSetsAirvented: {
                    name: "Infusion Sets Airvented with DEHP Free Tube",
                    description: "Airvented infusion sets with DEHP-free tubing for enhanced safety"
                },
                buretteSet: {
                    name: "Burette Set",
                    description: "Graduated burette sets for precise volume control"
                },
                extensionLine: {
                    name: "Extension Line",
                    description: "IV extension lines for flexible patient positioning"
                },
                pressureMonitoringLines: {
                    name: "Pressure Monitoring Lines",
                    description: "Specialized lines for accurate pressure monitoring"
                },
                threeWayStopcock: {
                    name: "3 Way Stopcock",
                    description: "Multi-port stopcocks for efficient IV line management"
                }
            },
            anaesthesia: {
                title: "Anaesthesia",
                description: "Complete anaesthesia equipment and supplies for surgical procedures.",
                nasalOxygenCatheter: {
                    name: "Nasal Oxygen Catheter/Oxygen Connecting Tube",
                    description: "Nasal catheters and connecting tubes for oxygen delivery"
                },
                oxygenMaskNonRebreathing: {
                    name: "Oxygen Mask/Non-Rebreathing Mask with Tubing",
                    description: "High-flow oxygen masks with non-rebreathing design and tubing"
                },
                nasalOxygenCannula: {
                    name: "Nasal Oxygen Cannula",
                    description: "Comfortable nasal cannulas for low-flow oxygen therapy"
                },
                guedelAirways: {
                    name: "Guedel Airways",
                    description: "Oropharyngeal airways for maintaining airway patency"
                },
                nebulizerMaskTubing: {
                    name: "Nebulizer Mask with Tubing",
                    description: "Nebulizer masks with connecting tubing for aerosol medication delivery"
                },
                venturiMask: {
                    name: "Venturi Mask",
                    description: "Precision oxygen delivery masks with controlled FiO2"
                },
                manualResuscitationAmbuBag: {
                    name: "Manual Resuscitation (Ambu Bag)",
                    description: "Self-inflating resuscitation bags for emergency ventilation"
                },
                bainCircuit: {
                    name: "Bain Circuit",
                    description: "Co-axial breathing circuits for anaesthesia delivery"
                },
                breathingCircuitVentilatorHME: {
                    name: "Breathing Circuit/ Ventilator Circuit/HME Filter/Catheter Mount",
                    description: "Complete breathing circuits with HME filters and catheter mounts"
                },
                ventilatorCircuit: {
                    name: "Ventilator Circuit",
                    description: "Specialized circuits for mechanical ventilation"
                },
                hmeFilterBVFilter: {
                    name: "HME Filter/ BV Filter",
                    description: "Heat and moisture exchange filters for breathing circuits"
                },
                nebulizerKitTMouth: {
                    name: "Nebulizer Kit with T Mouth",
                    description: "Complete nebulizer kits with T-piece mouthpieces"
                },
                highConcentrationOxygenMask: {
                    name: "High Concentration Oxygen Mask",
                    description: "High-concentration oxygen delivery masks for critical care"
                }
            },
            urology: {
                title: "Urology",
                description: "Specialized urology products for urinary tract procedures and interventions.",
                urinaryCatheters: {
                    name: "Urinary Catheters",
                    description: "Foley catheters and urinary drainage systems for patient care"
                },
                urologyStents: {
                    name: "Urology Stents",
                    description: "Ureteral and urethral stents for urinary tract procedures"
                },
                nephrostomySets: {
                    name: "Nephrostomy Sets",
                    description: "Complete nephrostomy drainage sets for kidney procedures"
                },
                cystitisSets: {
                    name: "Cystitis Sets",
                    description: "Specialized sets for cystitis treatment and bladder procedures"
                },
                urodynamics: {
                    name: "Urodynamics Equipment",
                    description: "Urodynamic testing equipment for bladder function assessment"
                },
                biopsyNeedles: {
                    name: "Biopsy Needles",
                    description: "Precision biopsy needles for urological tissue sampling"
                },
                urologyLaser: {
                    name: "Urology Laser Systems",
                    description: "Advanced laser systems for minimally invasive urological procedures"
                },
                cystoscopes: {
                    name: "Cystoscopes",
                    description: "Flexible and rigid cystoscopes for bladder examination"
                },
                lithotripsy: {
                    name: "Lithotripsy Equipment",
                    description: "Shock wave lithotripsy systems for kidney stone treatment"
                },
                urologyBaskets: {
                    name: "Urology Retrieval Baskets",
                    description: "Stone retrieval baskets for endourological procedures"
                }
            },
            dialysis: {
                title: "Dialysis",
                description: "Complete dialysis products and accessories for renal replacement therapy.",
                haemodialysisCatheter: {
                    name: "Haemodialysis Catheter",
                    description: "Specialized catheters for hemodialysis access and blood circulation"
                },
                bloodLineHaemodialysis: {
                    name: "Blood Line of Haemodialysis",
                    description: "Sterile blood lines specifically designed for hemodialysis procedures"
                }
            },
            gastroenterology: {
                title: "Gastroenterology",
                description: "Specialized gastroenterology products for digestive system procedures.",
                feedingTube: {
                    name: "Feeding Tube",
                    description: "Specialized tubes for enteral feeding and nutrition delivery"
                },
                rylesTube: {
                    name: "Ryle's Tube",
                    description: "Nasogastric tubes for gastric decompression and feeding"
                },
                yanakaurSuctionSet: {
                    name: "Yankaur Suction Set",
                    description: "Surgical suction sets for airway management and fluid removal"
                }
            },
            surgery: {
                title: "Surgery",
                description: "Premium surgical instruments and equipment for various surgical procedures.",
                closedWoundSuctionUnit: {
                    name: "Closed Wound Suction Unit Redon Drain with Radio Opaque",
                    description: "Closed wound drainage system with radio-opaque marking for surgical procedures"
                },
                skinStapler: {
                    name: "Skin Stapler",
                    description: "Surgical stapler designed for fast and secure skin closure"
                }
            },
            faceMask: {
                title: "Face Mask",
                description: "Complete range of medical face masks for respiratory protection and therapy.",
                earLoopMask: {
                    name: "Ear Loop Mask",
                    description: "Comfortable disposable face masks with ear loop design"
                },
                n95FaceMask: {
                    name: "N-95 Face Mask",
                    description: "High-filtration N95 respiratory protection face masks"
                }
            },
            general: {
                title: "General",
                description: "General medical supplies and consumables for everyday healthcare needs.",
                infantMucusExtractor: {
                    name: "Infant Mucus Extractor",
                    description: "Specialized device for safely extracting mucus from infant airways"
                },
                umbilicalCordClamp: {
                    name: "Umbilical Cord Clamp",
                    description: "Sterile clamps for secure umbilical cord clamping during delivery"
                },
                respiratoryExerciser: {
                    name: "Respiratory Exerciser",
                    description: "Medical device for respiratory muscle training and lung capacity improvement"
                }
            }
        },
        about: {
            title: "About Shri Gurukrupa Surgical",
            subtitle: "Your Trusted Partner in Advanced Surgical Solutions & Medical Excellence",
            description1: "Shri Gurukrupa Surgical has been a trusted supplier of premium surgical products for over 25 years, committed to supporting healthcare professionals with quality equipment and instruments.",
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
        contact: {
            title: "Contact Us",
            subtitle: "Get in touch with us for any queries or business inquiries",
            getInTouch: "Get In Touch",
            description: "We'd love to hear from you. Contact us through any of the following ways:",
            office: "Our Office",
            callUs: "Call Us",
            emailUs: "Email Us",
            businessHours: "Business Hours",
            hours: "Monday - Friday: 9:00 AM - 6:00 PM",
            saturday: "Saturday: 9:00 AM - 2:00 PM",
            sunday: "Sunday: Closed",
            followUs: "Follow Us",
            needQuote: "Need a Quote?",
            quoteText: "Submit a detailed enquiry for specific product requirements and pricing.",
            submitEnquiry: "Submit Enquiry",
            findUsHere: "Find Us Here",
            getDirections: "Get Directions",
            fastDelivery: "Fast Delivery",
            deliveryText: "Quick shipping across India and international locations.",
            support247: "24/7 Support",
            supportText: "Round-the-clock customer support for all your queries.",
            qualityAssured: "Quality Assured",
            qualityText: "ISO certified products with international quality standards."
        },
        common: {
            getQuote: "Get Quote",
            viewProducts: "View Products",
            goHome: "Go Home",
            pageNotFound: "Page Not Found",
            pageNotFoundText: "The page you're looking for doesn't exist.",
            close: "Close",
            needQuote: "Need a Quote?",
            contactForPricing: "Contact us for detailed pricing information and bulk orders."
        },
        infrastructure: {
            title: "Our Infrastructure",
            subtitle: "State-of-the-art facilities and advanced manufacturing capabilities",
            overview: "Infrastructure Overview",
            description: "Shri Gurukrupa Surgical operates from a modern manufacturing facility equipped with cutting-edge technology and advanced production systems. Our infrastructure is designed to maintain the highest quality standards while ensuring efficient production and timely delivery.",
            manufacturing: "Manufacturing Facility",
            manufacturingDesc: "Modern 50,000 sq ft manufacturing facility with advanced machinery and automated production lines for precision manufacturing.",
            qualityLab: "Quality Control Laboratory",
            qualityLabDesc: "Fully equipped quality control laboratory with latest testing equipment to ensure all products meet international standards.",
            warehouse: "Warehouse & Storage",
            warehouseDesc: "Climate-controlled warehouse with advanced inventory management systems for optimal storage and quick dispatch.",
            cleanroom: "Clean Room Facilities",
            cleanroomDesc: "ISO-certified clean room environments for sterile product manufacturing with controlled air filtration systems.",
            machinery: "Advanced Machinery",
            machineryDesc: "Latest German and Japanese machinery for precision manufacturing, injection molding, and automated assembly processes.",
            team: "Skilled Workforce",
            teamDesc: "Highly trained technical team and skilled workforce with extensive experience in medical device manufacturing.",
            features: "Key Features",
            feature1: "ISO 9001: 2015 Certified Facility",
            feature2: "24/7 Production Capability",
            feature3: "Automated Quality Control Systems",
            feature4: "Environment-Friendly Processes",
            feature5: "Real-time Production Monitoring",
            feature6: "Advanced Safety & Security Systems",
            ctaText: "Get in touch to learn more about our manufacturing capabilities and how we can support your requirements."
        },
        achievements: {
            title: "Our Achievements",
            subtitle: "Recognitions, certifications, and milestones that define our excellence",
            overview: "Our Journey of Excellence",
            description: "Over the years, Shri Gurukrupa Surgical has achieved significant milestones and earned prestigious certifications that reflect our commitment to quality, innovation, and customer satisfaction. Our achievements stand as testimony to our dedication to excellence in the medical industry.",
            yearsExperience: "30+",
            yearsLabel: "Years of Excellence",
            productsRange: "500+",
            productsLabel: "Medical Products",
            clientsServed: "1000+",
            clientsLabel: "Satisfied Clients",
            countriesReach: "15+",
            countriesLabel: "Countries Served",
            iso: "ISO 9001: 2015 Certification",
            isoDesc: "Internationally recognized quality management system certification ensuring consistent quality in all our processes.",
            isoYear: "Certified since 2018",
            iso8000: "ISO 13485: 2016 Certification",
            iso8000Desc: "Medical devices quality management system certification ensuring safe and effective medical device production and management.",
            iso8000Year: "Certified 2020",
            exportExcellence: "Export Excellence Award",
            exportDesc: "Recognition for outstanding export performance and quality products in international markets.",
            exportYear: "Received 2023",
            quality: "Best Quality Supplier",
            qualityDesc: "Awarded by major healthcare institutions for consistent quality and reliable supply chain management.",
            qualityYear: "2019-2024",
            global: "Global Market Presence",
            globalDesc: "Successfully expanded operations to serve clients across multiple continents with consistent quality standards.",
            globalYear: "Ongoing since 2015",
            green: "Green Manufacturing Initiative",
            greenDesc: "Recognition for implementing sustainable and environment-friendly manufacturing processes.",
            greenYear: "Implemented 2022",
            milestones: "Key Milestones",
            milestone1: "Company Established",
            milestone1Desc: "Founded Shri Gurukrupa Surgical with a vision to provide quality medical products.",
            milestone2: "Manufacturing Facility Expansion",
            milestone2Desc: "Expanded manufacturing capabilities to meet growing demand.",
            milestone3: "International Export Launch",
            milestone3Desc: "Started exporting products to international markets.",
            milestone4: "ISO 9001: 2015 Certification Achieved",
            milestone4Desc: "Obtained ISO 9001: 2015 certification for quality management.",
            milestone5: "ISO 13485: 2016 Certification Achieved",
            milestone5Desc: "Obtained ISO 13485: 2016 certification for medical devices quality management systems.",
            milestone6: "Digital Transformation",
            milestone6Desc: "Launched digital platform and modernized operations for enhanced customer experience.",
            ctaText: "Partner with an award-winning company committed to excellence in medical products and services."
        },
        chat: {
            title: "Medical Support",
            status: "Online Now",
            typing: "Support is typing...",
            inputPlaceholder: "Type your message...",
            quickProducts: "Our Products",
            quickQuote: "Get Quote",
            quickContact: "Contact Info",
            quickHelp: "Help",
            welcome: "👋 Hello! Welcome to Shri Gurukrupa Surgical. How can I help you today?",
            userDetailsRequest: "Before I help you with that, could you please share your name and contact number?",
            thankYou: "Thank you for contacting us! Your inquiry has been recorded and our team will get back to you soon.",
            goodbye: "Thank you for your interest in our products! Have a great day!",
            error: "I apologize, but I didn't understand that. Could you please rephrase your question?",
            validation: "Please provide valid contact information.",
            productInfo: "Here's information about our surgical products:",
            contactInfo: "Here's our contact information:",
            quote: "For pricing information, please contact our sales team.",
            inactivityWarning: "⏰ Are you still there? I'll automatically end this chat in 1 minute if there's no response.",
            inactivityTimeout: "⏰ This chat session has been automatically ended due to inactivity. Thank you for visiting Shri Gurukrupa Surgical! Feel free to start a new chat anytime.",
            chatEnded: "Thank you for chatting with Shri Gurukrupa Surgical! 👋 Your conversation has been ended. Have a great day!",
            needBothDetails: "I need both your name and phone number to help you better. Please provide both details."
        },
        footer: {
            about: "About Shri Gurukrupa Surgical",
            description: "We supply premium surgical products and medical equipment to healthcare professionals worldwide.",
            products: "Our Products",
            quickLinks: "Quick Links",
            contact: "Contact Information",
            address: "4, Amardeep Estate, Opposite Anupam Cinema, Besides Bhagar Dhana Dal Estate, Khokhara Road, Ahmedabad - 380021, Gujarat, India",
            rights: "All rights reserved."
        }
    },
    es: {
        nav: {
            home: "Inicio",
            products: "Productos",
            about: "Acerca de",
            infrastructure: "Infraestructura",
            achievements: "Logros",
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
        home: {
            title: "Bienvenido a Shri Gurukrupa Surgical",
            subtitle: "Un Legado de Calidad Desde 1992",
            aboutSection: "Acerca de"
        },
        hero: {
            title: "Productos Quirúrgicos de Calidad para la Excelencia en el Cuidado de la Salud",
            subtitle: "Suministrando instrumentos quirúrgicos premium y equipos médicos a profesionales de la salud en todo el mundo con estándares de calidad sin compromiso.",
            contactUs: "Contáctanos",
            learnMore: "Saber Más"
        },
        products: {
            title: "Nuestros Productos",
            subtitle: "Suministramos productos quirúrgicos premium y equipos médicos a profesionales de la salud en todo el mundo",
            infusionTransfusion: {
                title: "Infusión y Transfusión",
                description: "Gama completa de productos de infusión y transfusión para la entrega segura de fluidos y procedimientos de transfusión de sangre"
            },
            anesthesiaRespiratory: {
                title: "Anestesia y Respiratorio",
                description: "Equipos completos de anestesia y suministros respiratorios para procedimientos quirúrgicos y cuidados críticos"
            },
            urologyGastroenterology: {
                title: "Urología y Gastroenterología",
                description: "Productos especializados para procedimientos del tracto urinario y sistema digestivo e intervenciones"
            },
            miscellaneous: {
                title: "Diversos",
                description: "Suministros médicos adicionales incluyendo instrumentos quirúrgicos, mascarillas y equipos médicos generales"
            },
            surgicalInstruments: {
                title: "Instrumentos Quirúrgicos",
                description: "Instrumentos quirúrgicos de calidad premium diseñados para precisión y confiabilidad en procedimientos médicos.",
                forceps: {
                    name: "Fórceps Quirúrgicos",
                    description: "Fórceps quirúrgicos de precisión para agarrar, sostener y manipular tejidos"
                },
                scissors: {
                    name: "Tijeras Quirúrgicas",
                    description: "Tijeras quirúrgicas de alta calidad para cortar tejidos y suturas con precisión"
                },
                scalpels: {
                    name: "Bisturíes y Hojas",
                    description: "Bisturíes afilados y estériles con hojas desechables para incisiones quirúrgicas"
                },
                retractors: {
                    name: "Retractores Quirúrgicos",
                    description: "Retractores autoestáticos y manuales para exposición óptima del campo quirúrgico"
                },
                clamps: {
                    name: "Pinzas Quirúrgicas",
                    description: "Pinzas hemostáticas y de tejido para control de sangrado y manejo de tejidos"
                },
                needleHolders: {
                    name: "Portaagujas",
                    description: "Portaagujas de precisión para agarre y control seguro de agujas de sutura"
                }
            },
            disposables: {
                title: "Desechables",
                description: "Productos médicos desechables de un solo uso que garantizan higiene y seguridad en entornos de atención médica.",
                syringes: {
                    name: "Jeringas Desechables",
                    description: "Jeringas estériles de un solo uso en varios tamaños para administración segura de medicamentos"
                },
                gloves: {
                    name: "Guantes Médicos",
                    description: "Guantes de examen de látex y nitrilo para control de infecciones y seguridad"
                },
                masks: {
                    name: "Mascarillas Quirúrgicas",
                    description: "Mascarillas quirúrgicas de tres capas que proporcionan filtración bacterial y de partículas"
                },
                gowns: {
                    name: "Batas Quirúrgicas",
                    description: "Batas quirúrgicas desechables que ofrecen protección y barrera estéril"
                },
                caps: {
                    name: "Gorros Quirúrgicos",
                    description: "Gorros quirúrgicos desechables para cobertura del cabello y prevención de contaminación"
                },
                gauze: {
                    name: "Gasas y Vendajes",
                    description: "Gasas estériles y vendajes para cuidado de heridas y apósitos"
                }
            },
            orthopedic: {
                title: "Ortopédico",
                description: "Implantes ortopédicos especializados e instrumentos para procedimientos quirúrgicos de huesos y articulaciones.",
                implants: {
                    name: "Implantes Ortopédicos",
                    description: "Implantes de titanio y acero inoxidable para reconstrucción ósea y reemplazo de articulaciones"
                },
                plates: {
                    name: "Placas Óseas",
                    description: "Placas ortopédicas para fijación de fracturas y procedimientos de estabilización ósea"
                },
                screws: {
                    name: "Tornillos Ortopédicos",
                    description: "Tornillos quirúrgicos en varios tamaños para fijación ósea segura y curación"
                },
                nails: {
                    name: "Clavos Intramedulares",
                    description: "Clavos IM para fracturas de huesos largos y procedimientos de fijación interna"
                },
                pins: {
                    name: "Pines Ortopédicos",
                    description: "Pines quirúrgicos y alambres para alineación ósea y fijación temporal"
                },
                wires: {
                    name: "Alambres Quirúrgicos",
                    description: "Alambres de acero inoxidable para fijación ósea y aplicaciones ortopédicas"
                }
            }
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
            title: "Acerca de Shri Gurukrupa Surgical",
            subtitle: "Su Socio de Confianza en Soluciones Quirúrgicas Avanzadas y Excelencia Médica",
            description1: "Shri Gurukrupa Surgical ha sido un proveedor confiable de productos quirúrgicos premium por más de 25 años, comprometido a apoyar a profesionales de la salud con equipos e instrumentos de calidad.",
            description2: "Nuestra instalación de fabricación de vanguardia está equipada con la última tecnología, y nuestro equipo de profesionales experimentados se dedica a mantener los más altos estándares de calidad para todos nuestros productos.",
            learnMore: "Saber Más"
        },
        contact: {
            title: "Contáctanos",
            subtitle: "Ponte en contacto con nosotros para cualquier consulta o consultas comerciales",
            getInTouch: "Ponte en Contacto",
            description: "Nos encantaría saber de ti. Contáctanos a través de cualquiera de las siguientes formas:",
            office: "Nuestra Oficina",
            callUs: "Llámanos",
            emailUs: "Envíanos un Email",
            businessHours: "Horario de Atención",
            hours: "Lunes - Viernes: 9:00 AM - 6:00 PM",
            saturday: "Sábado: 9:00 AM - 2:00 PM",
            sunday: "Domingo: Cerrado",
            followUs: "Síguenos",
            needQuote: "¿Necesitas una Cotización?",
            quoteText: "Envía una consulta detallada para requisitos específicos del producto y precios.",
            submitEnquiry: "Enviar Consulta",
            findUsHere: "Encuéntranos Aquí",
            getDirections: "Obtener Direcciones",
            fastDelivery: "Entrega Rápida",
            deliveryText: "Envío rápido en toda India y ubicaciones internacionales.",
            support247: "Soporte 24/7",
            supportText: "Atención al cliente las 24 horas del día para todas sus consultas.",
            qualityAssured: "Calidad Garantizada",
            qualityText: "Productos certificados ISO con estándares de calidad internacional."
        },
        common: {
            getQuote: "Obtener Cotización",
            viewProducts: "Ver Productos",
            goHome: "Ir al Inicio",
            pageNotFound: "Página No Encontrada",
            pageNotFoundText: "La página que buscas no existe.",
            close: "Cerrar",
            needQuote: "¿Necesitas una Cotización?",
            contactForPricing: "Contáctanos para información detallada de precios y pedidos al por mayor."
        },
        enquiry: {
            title: "Consulta de Producto",
            subtitle: "Obtenga información detallada sobre nuestros productos quirúrgicos y equipos",
            formTitle: "Envíe su Consulta",
            formSubtitle: "Estamos aquí para ayudarle con todos sus requisitos de productos quirúrgicos. Por favor complete el formulario a continuación y nos pondremos en contacto con usted dentro de 24 horas.",
            fullName: "Nombre Completo",
            email: "Dirección de Email",
            phone: "Número de Teléfono",
            company: "Empresa/Organización",
            productCategory: "Categoría de Producto",
            selectCategory: "Seleccionar Categoría de Producto",
            surgicalInstruments: "Instrumentos Quirúrgicos",
            medicalEquipment: "Equipos Médicos",
            disposables: "Desechables",
            orthopedic: "Productos Ortopédicos",
            other: "Otro",
            quantity: "Cantidad Requerida",
            quantityPlaceholder: "ej. 100 unidades",
            message: "Mensaje / Detalles del Producto",
            messagePlaceholder: "Por favor proporcione detalles sobre los productos específicos que le interesan, cantidades, requisitos de entrega o cualquier otra información relevante...",
            city: "Ciudad/Ubicación",
            cityPlaceholder: "Su ciudad o ubicación de entrega",
            submit: "Enviar Consulta",
            reset: "Restablecer Formulario",
            required: "*",
            thankYou: "¡Gracias por su consulta! Nos pondremos en contacto con usted dentro de 24 horas.",
            sending: "Enviando..."
        },
        downloads: {
            title: "Descargas",
            subtitle: "Descargue nuestros catálogos de productos, folletos y documentación técnica",
            catalogues: "Catálogos de Productos",
            catalogueDescription: "Navegue y descargue nuestros catálogos de productos completos con especificaciones detalladas e información de precios.",
            mainCatalogue: "Catálogo Principal de Productos",
            mainCatalogueDesc: "Catálogo completo con todos nuestros productos quirúrgicos y equipos médicos con especificaciones detalladas.",
            infusionCatalogue: "Catálogo de Infusión y Transfusión",
            infusionCatalogueDesc: "Catálogo especializado para productos de infusión y transfusión con especificaciones técnicas.",
            certifications: "Certificaciones y Estándares de Calidad",
            certificationsDesc: "Certificaciones ISO, estándares de calidad y documentación de cumplimiento.",
            updated: "Actualizado: Dic 2024",
            download: "Descargar PDF",
            needHelp: "¿Necesita Ayuda?",
            helpText: "Si necesita asistencia con descargas o tiene preguntas sobre nuestros productos, por favor contáctenos.",
            contactSupport: "Contactar Soporte",
            downloadInfo: "Información de Descarga",
            infoItem1: "Todos los catálogos están en formato PDF para fácil visualización e impresión",
            infoItem2: "Los archivos se actualizan regularmente con la información más reciente de productos",
            infoItem3: "No se requiere registro para descargas",
            infoItem4: "Para pedidos grandes, por favor contáctenos para precios especiales",
            downloadStarted: "¡Descarga iniciada exitosamente!"
        },
        infrastructure: {
            title: "Nuestra Infraestructura",
            subtitle: "Instalaciones de última generación y capacidades de fabricación avanzadas",
            overview: "Resumen de Infraestructura",
            description: "Shri Gurukrupa Surgical opera desde una moderna instalación de fabricación equipada con tecnología de vanguardia y sistemas de producción avanzados. Nuestra infraestructura está diseñada para mantener los más altos estándares de calidad mientras asegura una producción eficiente y entrega oportuna.",
            manufacturing: "Instalación de Fabricación",
            manufacturingDesc: "Moderna instalación de fabricación de 50,000 pies cuadrados con maquinaria avanzada y líneas de producción automatizadas para fabricación de precisión.",
            qualityLab: "Laboratorio de Control de Calidad",
            qualityLabDesc: "Laboratorio de control de calidad completamente equipado con el último equipo de pruebas para asegurar que todos los productos cumplan con estándares internacionales.",
            warehouse: "Almacén y Almacenamiento",
            warehouseDesc: "Almacén con clima controlado con sistemas avanzados de gestión de inventario para almacenamiento óptimo y despacho rápido.",
            cleanroom: "Instalaciones de Sala Limpia",
            cleanroomDesc: "Ambientes de sala limpia certificados ISO para fabricación de productos estériles con sistemas de filtración de aire controlado.",
            machinery: "Maquinaria Avanzada",
            machineryDesc: "La última maquinaria alemana y japonesa para fabricación de precisión, moldeo por inyección y procesos de ensamblaje automatizado.",
            team: "Fuerza Laboral Calificada",
            teamDesc: "Equipo técnico altamente entrenado y fuerza laboral calificada con amplia experiencia en fabricación de dispositivos médicos.",
            features: "Características Clave",
            feature1: "Instalación Certificada ISO 9001: 2015",
            feature2: "Capacidad de Producción 24/7",
            feature3: "Sistemas Automatizados de Control de Calidad",
            feature4: "Procesos Amigables con el Medio Ambiente",
            feature5: "Monitoreo de Producción en Tiempo Real",
            feature6: "Sistemas Avanzados de Seguridad y Protección",
            ctaText: "Póngase en contacto para obtener más información sobre nuestras capacidades de fabricación y cómo podemos apoyar sus requisitos."
        },
        achievements: {
            title: "Nuestros Logros",
            subtitle: "Reconocimientos, certificaciones e hitos que definen nuestra excelencia",
            overview: "Nuestro Viaje de Excelencia",
            description: "A lo largo de los años, Shri Gurukrupa Surgical ha logrado hitos significativos y obtenido certificaciones prestigiosas que reflejan nuestro compromiso con la calidad, innovación y satisfacción del cliente. Nuestros logros son testimonio de nuestra dedicación a la excelencia en la industria médica.",
            yearsExperience: "30+",
            yearsLabel: "Años de Excelencia",
            productsRange: "500+",
            productsLabel: "Productos Médicos",
            clientsServed: "1000+",
            clientsLabel: "Clientes Satisfechos",
            countriesReach: "15+",
            countriesLabel: "Países Servidos",
            iso: "Certificación ISO 9001: 2015",
            isoDesc: "Certificación de sistema de gestión de calidad internacionalmente reconocida que asegura calidad consistente en todos nuestros procesos.",
            isoYear: "Certificado desde 2018",
            iso8000: "Certificación ISO 13485: 2016",
            iso8000Desc: "Certificación de sistema de gestión de calidad para dispositivos médicos que asegura la producción y gestión segura y efectiva de dispositivos médicos.",
            iso8000Year: "Certificado 2020",
            exportExcellence: "Premio a la Excelencia en Exportación",
            exportDesc: "Reconocimiento por rendimiento excepcional en exportación y productos de calidad en mercados internacionales.",
            exportYear: "Recibido 2023",
            quality: "Mejor Proveedor de Calidad",
            qualityDesc: "Premiado por instituciones de salud importantes por calidad consistente y gestión confiable de la cadena de suministro.",
            qualityYear: "2019-2024",
            global: "Presencia Global en el Mercado",
            globalDesc: "Expandió exitosamente las operaciones para servir clientes en múltiples continentes con estándares de calidad consistentes.",
            globalYear: "Continuo desde 2015",
            green: "Iniciativa de Fabricación Verde",
            greenDesc: "Reconocimiento por implementar procesos de fabricación sostenibles y amigables con el medio ambiente.",
            greenYear: "Implementado 2022",
            milestones: "Hitos Clave",
            milestone1: "Empresa Establecida",
            milestone1Desc: "Fundó Shri Gurukrupa Surgical con una visión de proporcionar productos médicos de calidad.",
            milestone2: "Expansión de Instalación de Fabricación",
            milestone2Desc: "Expandió las capacidades de fabricación para satisfacer la creciente demanda.",
            milestone3: "Lanzamiento de Exportación Internacional",
            milestone3Desc: "Comenzó a exportar productos a mercados internacionales.",
            milestone4: "Certificación ISO 9001: 2015 Obtenida",
            milestone4Desc: "Obtuvo la certificación ISO 9001: 2015 para gestión de calidad.",
            milestone5: "Certificación ISO 13485: 2016 Obtenida",
            milestone5Desc: "Obtuvo la certificación ISO 13485: 2016 para sistemas de gestión de calidad de dispositivos médicos.",
            milestone6: "Transformación Digital",
            milestone6Desc: "Lanzó plataforma digital y modernizó operaciones para una experiencia mejorada del cliente.",
            ctaText: "Asóciese con una empresa galardonada comprometida con la excelencia en productos y servicios médicos."
        },
        chat: {
            title: "Soporte Médico",
            status: "En Línea Ahora",
            typing: "El soporte está escribiendo...",
            inputPlaceholder: "Escriba su mensaje...",
            quickProducts: "Nuestros Productos",
            quickQuote: "Obtener Cotización",
            quickContact: "Información de Contacto",
            quickHelp: "Ayuda",
            welcome: "👋 ¡Hola! Bienvenido a Shri Gurukrupa Surgical. ¿Cómo puedo ayudarte hoy?",
            userDetailsRequest: "Antes de ayudarte con eso, ¿podrías compartir tu nombre y número de contacto?",
            thankYou: "¡Gracias por contactarnos! Tu consulta ha sido registrada y nuestro equipo se pondrá en contacto contigo pronto.",
            goodbye: "¡Gracias por tu interés en nuestros productos! ¡Que tengas un gran día!",
            error: "Me disculpo, pero no entendí eso. ¿Podrías reformular tu pregunta?",
            validation: "Por favor proporciona información de contacto válida.",
            productInfo: "Aquí está la información sobre nuestros productos quirúrgicos:",
            contactInfo: "Aquí está nuestra información de contacto:",
            quote: "Para información de precios, por favor contacta a nuestro equipo de ventas."
        },
        footer: {
            about: "Acerca de Shri Gurukrupa Surgical",
            description: "Suministramos productos quirúrgicos y equipos médicos de alta calidad a profesionales de la salud en todo el mundo.",
            products: "Nuestros Productos",
            quickLinks: "Enlaces Rápidos",
            contact: "Información de Contacto",
            address: "4, Amardeep Estate, Frente a Anupam Cinema, Junto a Bhagar Dhana Dal Estate, Khokhara Road, Ahmedabad - 380021, Gujarat, India",
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
        home: {
            title: "Bienvenue chez Shri Gurukrupa Surgical",
            subtitle: "Un Héritage de Qualité Depuis 1992",
            aboutSection: "À propos"
        },
        hero: {
            title: "Votre Santé est Notre Priorité",
            subtitle: "Fournir des services de santé complets avec des installations de pointe et des professionnels médicaux expérimentés.",
            bookAppointment: "Prendre RDV",
            learnMore: "En Savoir Plus"
        },
        products: {
            title: "Nos Produits",
            subtitle: "Nous fournissons des produits chirurgicaux de qualité supérieure et des équipements médicaux aux professionnels de santé du monde entier",
            infusionTransfusion: {
                title: "Perfusion et Transfusion",
                description: "Gamme complète de produits de perfusion et de transfusion pour l'administration sécurisée de fluides et les procédures de transfusion sanguine"
            },
            anesthesiaRespiratory: {
                title: "Anesthésie et Respiratoire",
                description: "Équipements d'anesthésie complets et fournitures respiratoires pour les procédures chirurgicales et de soins critiques"
            },
            urologyGastroenterology: {
                title: "Urologie et Gastro-entérologie",
                description: "Produits spécialisés pour les procédures du tractus urinaire et du système digestif et interventions"
            },
            miscellaneous: {
                title: "Divers",
                description: "Fournitures médicales supplémentaires comprenant des instruments chirurgicaux, des masques et des équipements médicaux généraux"
            },
            surgicalInstruments: {
                title: "Instruments Chirurgicaux",
                description: "Instruments chirurgicaux de qualité supérieure conçus pour la précision et la fiabilité dans les procédures médicales.",
                forceps: {
                    name: "Forceps Chirurgicaux",
                    description: "Forceps chirurgicaux de précision pour saisir, tenir et manipuler les tissus"
                },
                scissors: {
                    name: "Ciseaux Chirurgicaux",
                    description: "Ciseaux chirurgicaux de haute qualité pour couper les tissus et les sutures avec précision"
                },
                scalpels: {
                    name: "Scalpels et Lames",
                    description: "Scalpels tranchants et stériles avec lames jetables pour les incisions chirurgicales"
                },
                retractors: {
                    name: "Rétracteurs Chirurgicaux",
                    description: "Rétracteurs auto-rétentifs et manuels pour une exposition optimale du champ opératoire"
                },
                clamps: {
                    name: "Pinces Chirurgicales",
                    description: "Pinces hémostatiques et tissulaires pour le contrôle des saignements et la gestion des tissus"
                },
                needleHolders: {
                    name: "Porte-Aiguilles",
                    description: "Porte-aiguilles de précision pour une prise et un contrôle sécurisés des aiguilles de suture"
                }
            },
            disposables: {
                title: "Produits Jetables",
                description: "Produits médicaux jetables à usage unique garantissant l'hygiène et la sécurité dans les environnements de soins de santé.",
                syringes: {
                    name: "Seringues Jetables",
                    description: "Seringues stériles à usage unique en diverses tailles pour une administration sécurisée de médicaments"
                },
                gloves: {
                    name: "Gants Médicaux",
                    description: "Gants d'examen en latex et nitrile pour le contrôle des infections et la sécurité"
                },
                masks: {
                    name: "Masques Chirurgicaux",
                    description: "Masques chirurgicaux trois couches offrant une filtration bactérienne et particulaire"
                },
                gowns: {
                    name: "Blouses Chirurgicales",
                    description: "Blouses chirurgicales jetables offrant protection et barrière stérile"
                },
                caps: {
                    name: "Bonnets Chirurgicaux",
                    description: "Bonnets chirurgicaux jetables pour la couverture des cheveux et la prévention de la contamination"
                },
                gauze: {
                    name: "Gaze et Pansements",
                    description: "Compresses de gaze stériles et pansements pour les soins de plaies et les pansements"
                }
            },
            orthopedic: {
                title: "Orthopédie",
                description: "Implants orthopédiques spécialisés et instruments pour les procédures chirurgicales osseuses et articulaires.",
                implants: {
                    name: "Implants Orthopédiques",
                    description: "Implants en titane et acier inoxydable pour la reconstruction osseuse et le remplacement articulaire"
                },
                plates: {
                    name: "Plaques Osseuses",
                    description: "Plaques orthopédiques pour la fixation de fractures et les procédures de stabilisation osseuse"
                },
                screws: {
                    name: "Vis Orthopédiques",
                    description: "Vis chirurgicales en diverses tailles pour une fixation osseuse sécurisée et la guérison"
                },
                nails: {
                    name: "Clous Intramédullaires",
                    description: "Clous IM pour les fractures d'os longs et les procédures de fixation interne"
                },
                pins: {
                    name: "Broches Orthopédiques",
                    description: "Broches chirurgicales et fils pour l'alignement osseux et la fixation temporaire"
                },
                wires: {
                    name: "Fils Chirurgicaux",
                    description: "Fils en acier inoxydable pour la fixation osseuse et les applications orthopédiques"
                }
            }
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
            title: "À propos de Shri Gurukrupa Surgical",
            subtitle: "Votre Partenaire de Confiance en Solutions Chirurgicales Avancées et Excellence Médicale",
            description1: "Shri Gurukrupa Surgical est un fournisseur de confiance de produits chirurgicaux premium depuis plus de 25 ans, engagé à soutenir les professionnels de la santé avec des équipements et instruments de qualité.",
            description2: "Notre installation de fabrication de pointe est équipée de la dernière technologie, et notre équipe de professionnels expérimentés se consacre à maintenir les plus hauts standards de qualité pour tous nos produits.",
            learnMore: "En Savoir Plus"
        },
        contact: {
            title: "Nous Contacter",
            subtitle: "Contactez-nous pour toute question ou demande commerciale",
            getInTouch: "Entrer en Contact",
            description: "Nous aimerions avoir de vos nouvelles. Contactez-nous par l'un des moyens suivants:",
            office: "Notre Bureau",
            callUs: "Appelez-nous",
            emailUs: "Envoyez-nous un Email",
            businessHours: "Heures d'Ouverture",
            hours: "Lundi - Vendredi: 9h00 - 18h00",
            saturday: "Samedi: 9h00 - 14h00",
            sunday: "Dimanche: Fermé",
            followUs: "Suivez-nous",
            needQuote: "Besoin d'un Devis?",
            quoteText: "Soumettez une demande détaillée pour des exigences spécifiques du produit et des prix.",
            submitEnquiry: "Soumettre une Demande",
            findUsHere: "Trouvez-nous Ici",
            getDirections: "Obtenir des Directions",
            fastDelivery: "Livraison Rapide",
            deliveryText: "Expédition rapide dans toute l'Inde et les emplacements internationaux.",
            support247: "Support 24/7",
            supportText: "Support client 24h/24 et 7j/7 pour toutes vos questions.",
            qualityAssured: "Qualité Assurée",
            qualityText: "Produits certifiés ISO avec des normes de qualité internationales."
        },
        common: {
            getQuote: "Obtenir un Devis",
            viewProducts: "Voir les Produits",
            goHome: "Retour à l'Accueil",
            pageNotFound: "Page Non Trouvée",
            pageNotFoundText: "La page que vous cherchez n'existe pas.",
            close: "Fermer",
            needQuote: "Besoin d'un Devis?",
            contactForPricing: "Contactez-nous pour des informations détaillées sur les prix et les commandes en gros."
        },
        enquiry: {
            title: "Demande de Produit",
            subtitle: "Obtenez des informations détaillées sur nos produits chirurgicaux et équipements",
            formTitle: "Soumettre Votre Demande",
            formSubtitle: "Nous sommes là pour vous aider avec tous vos besoins en produits chirurgicaux. Veuillez remplir le formulaire ci-dessous et nous vous contacterons dans les 24 heures.",
            fullName: "Nom Complet",
            email: "Adresse Email",
            phone: "Numéro de Téléphone",
            company: "Entreprise/Organisation",
            productCategory: "Catégorie de Produit",
            selectCategory: "Sélectionner la Catégorie de Produit",
            surgicalInstruments: "Instruments Chirurgicaux",
            medicalEquipment: "Équipements Médicaux",
            disposables: "Produits Jetables",
            orthopedic: "Produits Orthopédiques",
            other: "Autre",
            quantity: "Quantité Requise",
            quantityPlaceholder: "ex. 100 unités",
            message: "Message / Détails du Produit",
            messagePlaceholder: "Veuillez fournir des détails sur les produits spécifiques qui vous intéressent, les quantités, les exigences de livraison ou toute autre information pertinente...",
            city: "Ville/Emplacement",
            cityPlaceholder: "Votre ville ou lieu de livraison",
            submit: "Soumettre la Demande",
            reset: "Réinitialiser le Formulaire",
            required: "*",
            thankYou: "Merci pour votre demande ! Nous vous contacterons dans les 24 heures.",
            sending: "Envoi en cours..."
        },
        downloads: {
            title: "Téléchargements",
            subtitle: "Téléchargez nos catalogues de produits, brochures et documentation technique",
            catalogues: "Catalogues de Produits",
            catalogueDescription: "Parcourez et téléchargez nos catalogues de produits complets avec des spécifications détaillées et des informations de prix.",
            mainCatalogue: "Catalogue Principal de Produits",
            mainCatalogueDesc: "Catalogue complet présentant tous nos produits chirurgicaux et équipements médicaux avec des spécifications détaillées.",
            infusionCatalogue: "Catalogue Perfusion et Transfusion",
            infusionCatalogueDesc: "Catalogue spécialisé pour les produits de perfusion et transfusion avec spécifications techniques.",
            certifications: "Certifications et Normes de Qualité",
            certificationsDesc: "Certifications ISO, normes de qualité et documentation de conformité.",
            updated: "Mis à jour : Déc 2024",
            download: "Télécharger PDF",
            needHelp: "Besoin d'Aide ?",
            helpText: "Si vous avez besoin d'aide pour les téléchargements ou avez des questions sur nos produits, veuillez nous contacter.",
            contactSupport: "Contacter le Support",
            downloadInfo: "Informations de Téléchargement",
            infoItem1: "Tous les catalogues sont au format PDF pour un affichage et une impression faciles",
            infoItem2: "Les fichiers sont régulièrement mis à jour avec les dernières informations produits",
            infoItem3: "Aucune inscription requise pour les téléchargements",
            infoItem4: "Pour les commandes en gros, veuillez nous contacter pour des prix spéciaux",
            downloadStarted: "Téléchargement démarré avec succès !"
        },
        infrastructure: {
            title: "Notre Infrastructure",
            subtitle: "Installations de pointe et capacités de fabrication avancées",
            overview: "Aperçu de l'Infrastructure",
            description: "Shri Gurukrupa Surgical fonctionne à partir d'une installation de fabrication moderne équipée d'une technologie de pointe et de systèmes de production avancés. Notre infrastructure est conçue pour maintenir les plus hauts standards de qualité tout en assurant une production efficace et une livraison dans les temps.",
            manufacturing: "Installation de Fabrication",
            manufacturingDesc: "Installation de fabrication moderne de 50 000 pieds carrés avec des machines avancées et des lignes de production automatisées pour une fabrication de précision.",
            qualityLab: "Laboratoire de Contrôle Qualité",
            qualityLabDesc: "Laboratoire de contrôle qualité entièrement équipé avec les derniers équipements de test pour s'assurer que tous les produits répondent aux normes internationales.",
            warehouse: "Entrepôt et Stockage",
            warehouseDesc: "Entrepôt à climat contrôlé avec des systèmes avancés de gestion d'inventaire pour un stockage optimal et une expédition rapide.",
            cleanroom: "Installations de Salle Blanche",
            cleanroomDesc: "Environnements de salle blanche certifiés ISO pour la fabrication de produits stériles avec systèmes de filtration d'air contrôlé.",
            machinery: "Machines Avancées",
            machineryDesc: "Dernières machines allemandes et japonaises pour la fabrication de précision, le moulage par injection et les processus d'assemblage automatisé.",
            team: "Main-d'œuvre Qualifiée",
            teamDesc: "Équipe technique hautement formée et main-d'œuvre qualifiée avec une vaste expérience dans la fabrication de dispositifs médicaux.",
            features: "Caractéristiques Clés",
            feature1: "Installation Certifiée ISO 9001: 2015",
            feature2: "Capacité de Production 24/7",
            feature3: "Systèmes Automatisés de Contrôle Qualité",
            feature4: "Processus Respectueux de l'Environnement",
            feature5: "Surveillance de Production en Temps Réel",
            feature6: "Systèmes Avancés de Sécurité et Sûreté",
            ctaText: "Contactez-nous pour en savoir plus sur nos capacités de fabrication et comment nous pouvons soutenir vos exigences."
        },
        achievements: {
            title: "Nos Réalisations",
            subtitle: "Reconnaissances, certifications et jalons qui définissent notre excellence",
            overview: "Notre Parcours d'Excellence",
            description: "Au fil des années, Shri Gurukrupa Surgical a atteint des jalons significatifs et obtenu des certifications prestigieuses qui reflètent notre engagement envers la qualité, l'innovation et la satisfaction client. Nos réalisations témoignent de notre dévouement à l'excellence dans l'industrie médicale.",
            yearsExperience: "30+",
            yearsLabel: "Années d'Excellence",
            productsRange: "500+",
            productsLabel: "Produits Médicaux",
            clientsServed: "1000+",
            clientsLabel: "Clients Satisfaits",
            countriesReach: "15+",
            countriesLabel: "Pays Desservis",
            iso: "Certification ISO 9001: 2015",
            isoDesc: "Certification de système de gestion de la qualité internationalement reconnue assurant une qualité cohérente dans tous nos processus.",
            isoYear: "Certifié depuis 2018",
            iso8000: "Certification ISO 13485: 2016",
            iso8000Desc: "Certification de système de gestion de la qualité pour dispositifs médicaux assurant une production et gestion sûres et efficaces des dispositifs médicaux.",
            iso8000Year: "Certifié 2020",
            exportExcellence: "Prix d'Excellence à l'Exportation",
            exportDesc: "Reconnaissance pour une performance d'exportation exceptionnelle et des produits de qualité sur les marchés internationaux.",
            exportYear: "Reçu 2023",
            quality: "Meilleur Fournisseur de Qualité",
            qualityDesc: "Récompensé par les principales institutions de soins de santé pour une qualité cohérente et une gestion fiable de la chaîne d'approvisionnement.",
            qualityYear: "2019-2024",
            global: "Présence Mondiale sur le Marché",
            globalDesc: "Expansion réussie des opérations pour servir des clients sur plusieurs continents avec des normes de qualité cohérentes.",
            globalYear: "En cours depuis 2015",
            green: "Initiative de Fabrication Verte",
            greenDesc: "Reconnaissance pour l'implémentation de processus de fabrication durables et respectueux de l'environnement.",
            greenYear: "Implémenté 2022",
            milestones: "Jalons Clés",
            milestone1: "Entreprise Établie",
            milestone1Desc: "Fondation de Shri Gurukrupa Surgical avec une vision de fournir des produits médicaux de qualité.",
            milestone2: "Expansion de l'Installation de Fabrication",
            milestone2Desc: "Expansion des capacités de fabrication pour répondre à la demande croissante.",
            milestone3: "Lancement de l'Exportation Internationale",
            milestone3Desc: "Début de l'exportation de produits vers les marchés internationaux.",
            milestone4: "Certification ISO 9001: 2015 Obtenue",
            milestone4Desc: "Obtention de la certification ISO 9001: 2015 pour la gestion de la qualité.",
            milestone5: "Certification ISO 13485: 2016 Obtenue",
            milestone5Desc: "Obtention de la certification ISO 13485: 2016 pour les systèmes de gestion de la qualité des dispositifs médicaux.",
            milestone6: "Transformation Numérique",
            milestone6Desc: "Lancement de la plateforme numérique et modernisation des opérations pour une expérience client améliorée.",
            ctaText: "Partenariat avec une entreprise primée engagée dans l'excellence des produits et services médicaux."
        },
        chat: {
            title: "Support Médical",
            status: "En Ligne Maintenant",
            typing: "Le support tape...",
            inputPlaceholder: "Tapez votre message...",
            quickProducts: "Nos Produits",
            quickQuote: "Obtenir un Devis",
            quickContact: "Informations de Contact",
            quickHelp: "Aide"
        },
        footer: {
            about: "À propos de Shri Gurukrupa Surgical",
            description: "Nous fournissons des produits chirurgicaux et des équipements médicaux de qualité supérieure aux professionnels de la santé du monde entier.",
            products: "Nos Produits",
            quickLinks: "Liens Rapides",
            contact: "Informations de Contact",
            address: "4, Amardeep Estate, En face d'Anupam Cinema, À côté de Bhagar Dhana Dal Estate, Khokhara Road, Ahmedabad - 380021, Gujarat, India",
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
        brand: {
            name: "Shri Gurukrupa",
            type: "Chirurgisch"
        },
        search: {
            placeholder: "Suchen..."
        },
        home: {
            title: "Willkommen bei Shri Gurukrupa Surgical",
            subtitle: "Ein Vermächtnis der Qualität Seit 1992",
            aboutSection: "Über uns"
        },
        hero: {
            title: "Qualitätschirurgische Produkte für Exzellenz im Gesundheitswesen",
            subtitle: "Bereitstellung von Premium-Chirurgieinstrumenten und medizinischen Geräten für Gesundheitsexperten weltweit mit unvergleichlichen Qualitätsstandards.",
            contactUs: "Kontakt aufnehmen",
            learnMore: "Mehr erfahren"
        },
        products: {
            title: "Unsere Produkte",
            subtitle: "Wir liefern Premium-Chirurgieprodukte und medizinische Geräte an Gesundheitsexperten weltweit",
            infusionTransfusion: {
                title: "Infusion und Transfusion",
                description: "Vollständiges Sortiment von Infusions- und Transfusionsprodukten für sichere Flüssigkeitsverabreichung und Blutverfahren"
            },
            anesthesiaRespiratory: {
                title: "Anästhesie und Atemwegsprodukte",
                description: "Komplette Anästhesie-Ausrüstung und Atemwegsprodukte für chirurgische und kritische Pflegeverfahren"
            },
            urologyGastroenterology: {
                title: "Urologie und Gastroenterologie",
                description: "Spezialisierte Produkte für Harnwege- und Verdauungssystem-Verfahren und Interventionen"
            },
            miscellaneous: {
                title: "Verschiedenes",
                description: "Zusätzliche medizinische Verbrauchsmaterialien einschließlich chirurgischer Instrumente, Gesichtsmasken und allgemeiner medizinischer Geräte"
            },
            surgicalInstruments: {
                title: "Chirurgische Instrumente",
                description: "Hochwertige chirurgische Instrumente für präzise Operationen und medizinische Verfahren."
            },
            medicalEquipment: {
                title: "Medizinische Geräte",
                description: "Hochmoderne medizinische Geräte für Krankenhäuser und Gesundheitseinrichtungen."
            },
            disposableMedical: {
                title: "Einweg-Medizinprodukte",
                description: "Sterile Einwegprodukte für Infektionskontrolle und Patientensicherheit."
            }
        },
        about: {
            title: "Über Uns",
            subtitle: "Ihr Vertrauensvoller Partner für Fortschrittliche Chirurgische Lösungen und Medizinische Exzellenz",
            ourStory: {
                title: "Unsere Geschichte",
                description: "Seit 1992 ist Shri Gurukrupa Surgical ein vertrauenswürdiger Name in der medizinischen Industrie und liefert hochwertige chirurgische Produkte und medizinische Geräte."
            },
            mission: {
                title: "Unsere Mission",
                description: "Innovation von Gesundheitslösungen durch qualitativ hochwertige, zuverlässige medizinische Produkte, die Leben verbessern und Gesundheitsexperten weltweit unterstützen."
            },
            vision: {
                title: "Unsere Vision",
                description: "Ein weltweit führender Anbieter von chirurgischen und medizinischen Produkten zu werden, bekannt für Qualität, Innovation und Kundenservice."
            },
            whyChooseUs: {
                title: "Warum uns wählen",
                quality: "Qualität",
                qualityDesc: "Premium-medizinische Produkte mit internationalen Qualitätsstandards und Zertifizierungen.",
                innovation: "Innovation",
                innovationDesc: "Kontinuierliche Forschung und Entwicklung für modernste medizinische Lösungen.",
                service: "Service",
                serviceDesc: "Außergewöhnlicher Kundenservice mit technischer Unterstützung und pünktlicher Lieferung.",
                trust: "Vertrauen",
                trustDesc: "Über 30 Jahre Erfahrung und Tausende zufriedene Kunden weltweit."
            }
        },
        contact: {
            title: "Kontakt aufnehmen",
            subtitle: "Kontaktieren Sie uns für Ihre medizinischen Bedürfnisse",
            getInTouch: "Kontakt aufnehmen",
            address: "Adresse",
            phone: "Telefon",
            email: "E-Mail",
            businessHours: "Geschäftszeiten",
            mondayToFriday: "Montag bis Freitag: 9:00 - 18:00",
            saturday: "Samstag: 9:00 - 14:00",
            sunday: "Sonntag: Geschlossen",
            sendMessage: "Nachricht senden",
            fullName: "Vollständiger Name",
            emailAddress: "E-Mail-Adresse",
            phoneNumber: "Telefonnummer",
            subject: "Betreff",
            message: "Nachricht",
            submitMessage: "Nachricht senden"
        },
        enquiry: {
            title: "Produktanfrage",
            subtitle: "Kontaktieren Sie uns für detaillierte Produktinformationen und Preise",
            productName: "Produktname",
            fullName: "Vollständiger Name",
            emailAddress: "E-Mail-Adresse",
            phoneNumber: "Telefonnummer",
            companyName: "Firmenname",
            quantity: "Menge",
            message: "Nachricht",
            submitEnquiry: "Anfrage senden",
            selectProduct: "Produkt auswählen"
        },
        downloads: {
            title: "Downloads",
            subtitle: "Laden Sie unseren umfassenden SGS-Produktkatalog herunter"
        },
        footer: {
            about: "Über uns",
            quickLinks: "Schnelle Links",
            products: "Produkte",
            services: "Dienstleistungen",
            contact: "Kontakt",
            followUs: "Folgen Sie uns",
            copyright: "© 2024 Shri Gurukrupa Surgical. Alle Rechte vorbehalten.",
            privacyPolicy: "Datenschutzrichtlinie",
            termsOfService: "Nutzungsbedingungen"
        },
        common: {
            learnMore: "Mehr erfahren",
            contactUs: "Kontakt aufnehmen",
            readMore: "Mehr lesen",
            viewAll: "Alle anzeigen",
            getQuote: "Angebot erhalten",
            needQuote: "Benötigen Sie ein Angebot?",
            contactForPricing: "Kontaktieren Sie uns für detaillierte Preisinformationen und Großbestellungen.",
            loading: "Lädt...",
            error: "Fehler",
            success: "Erfolg",
            tryAgain: "Erneut versuchen"
        },
        chatbot: {
            welcome: "Hallo! Ich bin Ihr SGS-Assistent. Wie kann ich Ihnen helfen?",
            placeholder: "Geben Sie Ihre Nachricht ein...",
            send: "Senden",
            typing: "Tippt..."
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
        home: {
            title: "श्री गुरुकृपा सर्जिकल में आपका स्वागत है",
            subtitle: "1992 से गुणवत्ता की विरासत",
            aboutSection: "हमारे बारे में"
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
            infusionTransfusion: {
                title: "इन्फ्यूजन और ट्रांसफ्यूजन",
                description: "सुरक्षित द्रव वितरण और रक्त प्रक्रियाओं के लिए इन्फ्यूजन और ट्रांसफ्यूजन उत्पादों की पूर्ण श्रृंखला"
            },
            anesthesiaRespiratory: {
                title: "एनेस्थीसिया और श्वसन",
                description: "सर्जिकल और क्रिटिकल केयर प्रक्रियाओं के लिए पूर्ण एनेस्थीसिया उपकरण और श्वसन आपूर्ति"
            },
            urologyGastroenterology: {
                title: "यूरोलॉजी और गैस्ट्रोएंटरोलॉजी",
                description: "मूत्र पथ और पाचन तंत्र की प्रक्रियाओं और हस्तक्षेपों के लिए विशेष उत्पाद"
            },
            miscellaneous: {
                title: "विविध",
                description: "सर्जिकल उपकरण, फेस मास्क और सामान्य मेडिकल उपकरण सहित अतिरिक्त मेडिकल आपूर्ति"
            },
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
            title: "श्री गुरुकृपा सर्जिकल के बारे में",
            subtitle: "उन्नत सर्जिकल समाधान और चिकित्सा उत्कृष्टता में आपका विश्वसनीय भागीदार",
            description1: "श्री गुरुकृपा सर्जिकल 25 से अधिक वर्षों से प्रीमियम सर्जिकल उत्पादों का एक विश्वसनीय आपूर्तिकर्ता है, जो स्वास्थ्य सेवा पेशेवरों को गुणवत्तापूर्ण उपकरण और उपकरण प्रदान करने के लिए प्रतिबद्ध है।",
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
            pageNotFoundText: "आप जिस पेज की तलाश कर रहे हैं वह मौजूद नहीं है।",
            close: "बंद करें",
            needQuote: "कोटेशन चाहिए?",
            contactForPricing: "विस्तृत मूल्य जानकारी और थोक ऑर्डर के लिए हमसे संपर्क करें।"
        },
        infrastructure: {
            title: "हमारा बुनियादी ढांचा",
            subtitle: "अत्याधुनिक सुविधाएं और उन्नत विनिर्माण क्षमताएं",
            overview: "बुनियादी ढांचा अवलोकन",
            description: "श्री गुरुकृपा सर्जिकल एक आधुनिक विनिर्माण सुविधा से संचालित होता है जो अत्याधुनिक तकनीक और उन्नत उत्पादन प्रणालियों से लैस है। हमारा बुनियादी ढांचा कुशल उत्पादन और समय पर डिलीवरी सुनिश्चित करते हुए उच्चतम गुणवत्ता मानकों को बनाए रखने के लिए डिज़ाइन किया गया है।",
            manufacturing: "विनिर्माण सुविधा",
            manufacturingDesc: "सटीक विनिर्माण के लिए उन्नत मशीनरी और स्वचालित उत्पादन लाइनों के साथ आधुनिक 50,000 वर्ग फुट विनिर्माण सुविधा।",
            qualityLab: "गुणवत्ता नियंत्रण प्रयोगशाला",
            qualityLabDesc: "यह सुनिश्चित करने के लिए नवीनतम परीक्षण उपकरणों के साथ पूर्णतः सुसज्जित गुणवत्ता नियंत्रण प्रयोगशाला कि सभी उत्पाद अंतर्राष्ट्रीय मानकों को पूरा करें।",
            warehouse: "गोदाम और भंडारण",
            warehouseDesc: "इष्टतम भंडारण और त्वरित प्रेषण के लिए उन्नत इन्वेंटरी प्रबंधन प्रणालियों के साथ जलवायु नियंत्रित गोदाम।",
            cleanroom: "क्लीन रूम सुविधाएं",
            cleanroomDesc: "नियंत्रित वायु निस्पंदन प्रणालियों के साथ स्टेरिल उत्पाद निर्माण के लिए ISO प्रमाणित क्लीन रूम वातावरण।",
            machinery: "उन्नत मशीनरी",
            machineryDesc: "सटीक निर्माण, इंजेक्शन मोल्डिंग और स्वचालित असेंबली प्रक्रियाओं के लिए नवीनतम जर्मन और जापानी मशीनरी।",
            team: "कुशल कार्यबल",
            teamDesc: "चिकित्सा उपकरण निर्माण में व्यापक अनुभव के साथ उच्च प्रशिक्षित तकनीकी टीम और कुशल कार्यबल।",
            features: "मुख्य विशेषताएं",
            feature1: "ISO 9001: 2015 प्रमाणित सुविधा",
            feature2: "24/7 उत्पादन क्षमता",
            feature3: "स्वचालित गुणवत्ता नियंत्रण प्रणाली",
            feature4: "पर्यावरण-अनुकूल प्रक्रियाएं",
            feature5: "वास्तविक समय उत्पादन निगरानी",
            feature6: "उन्नत सुरक्षा और सुरक्षा प्रणाली",
            ctaText: "हमारी विनिर्माण क्षमताओं के बारे में और जानने के लिए संपर्क करें कि हम आपकी आवश्यकताओं का समर्थन कैसे कर सकते हैं।"
        },
        achievements: {
            title: "हमारी उपलब्धियां",
            subtitle: "मान्यताएं, प्रमाणन और मील के पत्थर जो हमारी उत्कृष्टता को परिभाषित करते हैं",
            overview: "हमारी उत्कृष्टता की यात्रा",
            description: "वर्षों से, श्री गुरुकृपा सर्जिकल ने महत्वपूर्ण मील के पत्थर हासिल किए हैं और प्रतिष्ठित प्रमाणन अर्जित किए हैं जो गुणवत्ता, नवाचार और ग्राहक संतुष्टि के प्रति हमारी प्रतिबद्धता को दर्शाते हैं।",
            yearsExperience: "30+",
            yearsLabel: "वर्षों की उत्कृष्टता",
            productsRange: "500+",
            productsLabel: "चिकित्सा उत्पाद",
            clientsServed: "1000+",
            clientsLabel: "संतुष्ट ग्राहक",
            countriesReach: "15+",
            countriesLabel: "सेवा प्रदान करने वाले देश",
            iso: "ISO 9001: 2015 प्रमाणन",
            isoDesc: "अंतर्राष्ट्रीय स्तर पर मान्यता प्राप्त गुणवत्ता प्रबंधन प्रणाली प्रमाणन।",
            isoYear: "2018 से प्रमाणित",
            iso8000: "ISO 13485: 2016 प्रमाणन",
            iso8000Desc: "चिकित्सा उपकरण गुणवत्ता प्रबंधन प्रणाली प्रमाणन जो सुरक्षित और प्रभावी चिकित्सा उपकरण उत्पादन और प्रबंधन सुनिश्चित करता है।",
            iso8000Year: "प्रमाणित 2020",
            exportExcellence: "निर्यात उत्कृष्टता पुरस्कार",
            exportDesc: "अंतर्राष्ट्रीय बाजारों में उत्कृष्ट निर्यात प्रदर्शन की मान्यता।",
            exportYear: "प्राप्त 2023",
            quality: "सर्वश्रेष्ठ गुणवत्ता आपूर्तिकर्ता",
            qualityDesc: "निरंतर गुणवत्ता के लिए प्रमुख स्वास्थ्य संस्थानों द्वारा पुरस्कृत।",
            qualityYear: "2019-2024",
            global: "वैश्विक बाजार उपस्थिति",
            globalDesc: "निरंतर गुणवत्ता मानकों के साथ कई महाद्वीपों में ग्राहकों की सेवा करना।",
            globalYear: "2015 से निरंतर",
            green: "हरित विनिर्माण पहल",
            greenDesc: "टिकाऊ और पर्यावरण-अनुकूल विनिर्माण प्रक्रियाओं को लागू करने की मान्यता।",
            greenYear: "लागू 2022",
            milestones: "मुख्य मील के पत्थर",
            milestone1: "कंपनी स्थापित",
            milestone1Desc: "गुणवत्तापूर्ण चिकित्सा उत्पाद प्रदान करने की दृष्टि के साथ श्री गुरुकृपा सर्जिकल की स्थापना।",
            milestone2: "विनिर्माण सुविधा विस्तार",
            milestone2Desc: "बढ़ती मांग को पूरा करने के लिए विनिर्माण क्षमताओं का विस्तार।",
            milestone3: "अंतर्राष्ट्रीय निर्यात लॉन्च",
            milestone3Desc: "अंतर्राष्ट्रीय बाजारों में उत्पादों का निर्यात शुरू किया।",
            milestone4: "ISO 9001: 2015 प्रमाणन प्राप्त",
            milestone4Desc: "गुणवत्ता प्रबंधन के लिए ISO 9001: 2015 प्रमाणन प्राप्त किया।",
            milestone5: "ISO 13485: 2016 प्रमाणन प्राप्त",
            milestone5Desc: "चिकित्सा उपकरण गुणवत्ता प्रबंधन प्रणालियों के लिए ISO 13485: 2016 प्रमाणन प्राप्त किया।",
            milestone6: "डिजिटल रूपांतरण",
            milestone6Desc: "डिजिटल प्लेटफॉर्म लॉन्च किया और बेहतर ग्राहक अनुभव के लिए संचालन का आधुनिकीकरण किया।",
            ctaText: "चिकित्सा उत्पादों और सेवाओं में उत्कृष्टता के लिए प्रतिबद्ध पुरस्कार विजेता कंपनी के साथ साझेदारी करें।"
        },
        downloads: {
            title: "डाउनलोड",
            subtitle: "हमारे उत्पाद कैटलॉग, ब्रोशर और तकनीकी दस्तावेज डाउनलोड करें",
            catalogues: "उत्पाद कैटलॉग",
            catalogueDescription: "विस्तृत विनिर्देशों और मूल्य जानकारी के साथ हमारे व्यापक उत्पाद कैटलॉग ब्राउज़ करें और डाउनलोड करें।",
            mainCatalogue: "मुख्य उत्पाद कैटलॉग",
            mainCatalogueDesc: "विस्तृत विनिर्देशों के साथ हमारे सभी सर्जिकल उत्पादों और चिकित्सा उपकरणों की पूरी कैटलॉग।",
            infusionCatalogue: "इन्फ्यूजन और ट्रांसफ्यूजन कैटलॉग",
            infusionCatalogueDesc: "तकनीकी विनिर्देशों के साथ इन्फ्यूजन और ट्रांसफ्यूजन उत्पादों के लिए विशेष कैटलॉग।",
            certifications: "प्रमाणन और गुणवत्ता मानक",
            certificationsDesc: "ISO प्रमाणन, गुणवत्ता मानक और अनुपालन दस्तावेज।",
            updated: "अपडेटेड: दिसंबर 2024",
            download: "PDF डाउनलोड करें",
            needHelp: "मदद चाहिए?",
            helpText: "यदि आपको डाउनलोड में सहायता की आवश्यकता है या हमारे उत्पादों के बारे में प्रश्न हैं, तो कृपया हमसे संपर्क करें।",
            contactSupport: "सहायता से संपर्क करें",
            downloadInfo: "डाउनलोड जानकारी",
            infoItem1: "सभी कैटलॉग आसान देखने और प्रिंटिंग के लिए PDF प्रारूप में हैं",
            infoItem2: "फाइलें नवीनतम उत्पाद जानकारी के साथ नियमित रूप से अपडेट की जाती हैं",
            infoItem3: "डाउनलोड के लिए कोई पंजीकरण आवश्यक नहीं",
            infoItem4: "थोक ऑर्डर के लिए, कृपया विशेष मूल्य निर्धारण के लिए हमसे संपर्क करें",
            downloadStarted: "डाउनलोड सफलतापूर्वक शुरू हो गया!"
        },
        chat: {
            title: "चिकित्सा सहायता",
            status: "अभी ऑनलाइन",
            typing: "सहायता टाइप कर रही है...",
            inputPlaceholder: "अपना संदेश टाइप करें...",
            quickProducts: "हमारे उत्पाद",
            quickQuote: "कोटेशन प्राप्त करें",
            quickContact: "संपर्क जानकारी",
            quickHelp: "मदद",
            welcome: "👋 नमस्ते! श्री गुरुकृपा सर्जिकल में आपका स्वागत है। आज मैं आपकी कैसे सहायता कर सकता हूं?",
            userDetailsRequest: "इससे पहले कि मैं आपकी मदद करूं, क्या आप कृपया अपना नाम और संपर्क नंबर साझा कर सकते हैं?",
            thankYou: "हमसे संपर्क करने के लिए धन्यवाद! आपकी पूछताछ दर्ज कर ली गई है और हमारी टीम जल्द ही आपसे संपर्क करेगी।",
            goodbye: "हमारे उत्पादों में आपकी रुचि के लिए धन्यवाद! आपका दिन शुभ हो!",
            error: "मुझे खेद है, लेकिन मैं इसे समझ नहीं सका। क्या आप कृपया अपना प्रश्न दोबारा पूछ सकते हैं?",
            validation: "कृपया वैध संपर्क जानकारी प्रदान करें।",
            productInfo: "यहां हमारे सर्जिकल उत्पादों की जानकारी है:",
            contactInfo: "यहां हमारी संपर्क जानकारी है:",
            quote: "मूल्य निर्धारण की जानकारी के लिए, कृपया हमारी बिक्री टीम से संपर्क करें।"
        },
        footer: {
            about: "श्री गुरुकृपा सर्जिकल के बारे में",
            description: "हम दुनिया भर के स्वास्थ्य सेवा पेशेवरों को प्रीमियम सर्जिकल उत्पाद और मेडिकल उपकरण की आपूर्ति करते हैं।",
            products: "हमारे उत्पाद",
            quickLinks: "त्वरित लिंक",
            contact: "संपर्क जानकारी",
            address: "4, अमरदीप एस्टेट, अनुपम सिनेमा के सामने, भगर धाना दाल एस्टेट के पास, खोखरा रोड, अहमदाबाद - 380021, गुजरात, भारत",
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
        home: {
            title: "શ્રી ગુરુકૃપા સર્જિકલમાં આપનું સ્વાગત છે",
            subtitle: "1992 થી ગુણવત્તાનો વારસો",
            aboutSection: "અમારા વિશે"
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
            infusionTransfusion: {
                title: "ઇન્ફ્યુઝન અને ટ્રાન્સફ્યુઝન",
                description: "સુરક્ષિત પ્રવાહી વિતરણ અને લોહી પ્રક્રિયાઓ માટે ઇન્ફ્યુઝન અને ટ્રાન્સફ્યુઝન ઉત્પાદનોની સંપૂર્ણ શ્રેણી"
            },
            anesthesiaRespiratory: {
                title: "એનેસ્થેસિયા અને શ્વસન",
                description: "સર્જિકલ અને ક્રિટિકલ કેર પ્રક્રિયાઓ માટે સંપૂર્ણ એનેસ્થેસિયા સાધનો અને શ્વસન પુરવઠો"
            },
            urologyGastroenterology: {
                title: "યુરોલોજી અને ગેસ્ટ્રોએન્ટેરોલોજી",
                description: "મૂત્રમાર્ગ અને પાચન તંત્રની પ્રક્રિયાઓ અને હસ્તક્ષેપો માટે વિશિષ્ટ ઉત્પાદનો"
            },
            miscellaneous: {
                title: "વિવિધ",
                description: "સર્જિકલ સાધનો, ફેસ માસ્ક અને સામાન્ય મેડિકલ સાધનો સહિત વધારાના મેડિકલ પુરવઠો"
            },
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
            title: "શ્રી ગુરુકૃપા સર્જિકલ વિશે",
            subtitle: "અદ્યતન સર્જિકલ સોલ્યુશન્સ અને મેડિકલ એક્સિલન્સમાં તમારો વિશ્વસનીય ભાગીદાર",
            description1: "શ્રી ગુરુકૃપા સર્જિકલ 25 વર્ષથી વધુ સમયથી પ્રીમિયમ સર્જિકલ ઉત્પાદનોના વિશ્વસનીય પૂરવઠાકર્તા છે, જે આરોગ્ય સેવા વ્યાવસાયિકોને ગુણવત્તાયુક્ત સાધનો અને સાધનો પ્રદાન કરવા માટે પ્રતિબદ્ધ છે.",
            description2: "અમારી અત્યાધુનિક ઉત્પાદન સુવિધા નવીનતમ તકનીકથી સજ્જ છે, અને અમારી અનુભવી વ્યાવસાયિકોની ટીમ અમારા તમામ ઉત્પાદનો માટે સર્વોચ્ચ ગુણવત્તા ધોરણો જાળવવા માટે સમર્પિત છે.",
            learnMore: "વધુ જાણો"
        },
        common: {
            getQuote: "ક્વોટ મેળવો",
            viewProducts: "ઉત્પાદનો જુઓ",
            goHome: "ઘરે જાઓ",
            pageNotFound: "પેજ મળ્યું નથી",
            pageNotFoundText: "તમે જે પેજ શોધી રહ્યા છો તે અસ્તિત્વમાં નથી.",
            close: "બંધ કરો",
            needQuote: "ક્વોટ જોઈએ?",
            contactForPricing: "વિગતવાર કિંમત માહિતી અને બલ્ક ઓર્ડર માટે અમારો સંપર્ક કરો."
        },
        infrastructure: {
            title: "અમારું ઈન્ફ્રાસ્ટ્રક્ચર",
            subtitle: "અત્યાધુનિક સુવિધાઓ અને અદ્યતન ઉત્પાદન ક્ષમતાઓ",
            overview: "ઈન્ફ્રાસ્ટ્રક્ચર ઝાંખી",
            description: "શ્રી ગુરુકૃપા સર્જિકલ અત્યાધુનિક તકનીક અને અદ્યતન ઉત્પાદન સિસ્ટમોથી સજ્જ આધુનિક ઉત્પાદન સુવિધામાંથી કામ કરે છે।",
            manufacturing: "ઉત્પાદન સુવિધા",
            manufacturingDesc: "ચોક્કસ ઉત્પાદન માટે અદ્યતન મશીનરી અને સ્વચાલિત ઉત્પાદન લાઇનો સાથે આધુનિક 50,000 ચોરસ ફૂટ ઉત્પાદન સુવિધા।",
            qualityLab: "ગુણવત્તા નિયંત્રણ પ્રયોગશાળા",
            qualityLabDesc: "તમામ ઉત્પાદનો આંતરરાષ્ટ્રીય ધોરણો પૂરા કરે છે તે સુનિશ્ચિત કરવા માટે નવીનતમ પરીક્ષણ સાધનો સાથે સંપૂર્ણ રીતે સજ્જ ગુણવત્તા નિયંત્રણ પ્રયોગશાળા।",
            warehouse: "વેરહાઉસ અને સ્ટોરેજ",
            warehouseDesc: "શ્રેષ્ઠ સંગ્રહ અને ઝડપી રવાનગી માટે અદ્યતન ઈન્વેન્ટરી મેનેજમેન્ટ સિસ્ટમો સાથે આબોહવા નિયંત્રિત વેરહાઉસ।",
            cleanroom: "ક્લીન રૂમ સુવિધાઓ",
            cleanroomDesc: "નિયંત્રિત હવા ગાળણ સિસ્ટમો સાથે જીવાણુરહિત ઉત્પાદન ઉત્પાદન માટે ISO પ્રમાણિત ક્લીન રૂમ વાતાવરણ।",
            machinery: "અદ્યતન મશીનરી",
            machineryDesc: "ચોક્કસ ઉત્પાદન, ઇન્જેક્શન મોલ્ડિંગ અને સ્વચાલિત એસેમ્બલી પ્રક્રિયાઓ માટે નવીનતમ જર્મન અને જાપાનીઝ મશીનરી.",
            team: "કુશળ કાર્યબળ",
            teamDesc: "મેડિકલ ડિવાઇસ ઉત્પાદનમાં વ્યાપક અનુભવ સાથે ઉચ્ચ પ્રશિક્ષિત તકનીકી ટીમ અને કુશળ કાર્યબળ।",
            features: "મુખ્ય લક્ષણો",
            feature1: "ISO 9001: 2015 પ્રમાણિત સુવિધા",
            feature2: "24/7 ઉત્પાદન ક્ષમતા",
            feature3: "સ્વચાલિત ગુણવત્તા નિયંત્રણ સિસ્ટમો",
            feature4: "પર્યાવરણ-અનુકૂળ પ્રક્રિયાઓ",
            feature5: "રીયલ-ટાઇમ પ્રોડક્શન મોનિટરિંગ",
            feature6: "અદ્યતન સલામતી અને સુરક્ષા સિસ્ટમો",
            ctaText: "અમારી ઉત્પાદન ક્ષમતાઓ વિશે વધુ જાણવા અને અમે તમારી આવશ્યકતાઓને કેવી રીતે સમર્થન આપી શકીએ તે માટે સંપર્ક કરો।"
        },
        achievements: {
            title: "અમારી સિદ્ધિઓ",
            subtitle: "માન્યતાઓ, પ્રમાણપત્રો અને સીમાચિહ્નો જે અમારી ઉત્કૃષ્ટતાને વ્યાખ્યાયિત કરે છે",
            overview: "અમારી ઉત્કૃષ્ટતાની યાત્રા",
            description: "વર્ષોથી, શ્રી ગુરુકૃપા સર્જિકલે નોંધપાત્ર સીમાચિહ્નો હાંસલ કર્યા છે અને પ્રતિષ્ઠિત પ્રમાણપત્રો મેળવ્યા છે જે ગુણવત્તા, નવીનતા અને ગ્રાહક સંતોષ પ્રત્યેની અમારી પ્રતિબદ્ધતાને દર્શાવે છે।",
            yearsExperience: "30+",
            yearsLabel: "વર્ષોની ઉત્કૃષ્ટતા",
            productsRange: "500+",
            productsLabel: "મેડિકલ પ્રોડક્ટ્સ",
            clientsServed: "1000+",
            clientsLabel: "સંતુષ્ટ ગ્રાહકો",
            countriesReach: "15+",
            countriesLabel: "સેવા આપતા દેશો",
            iso: "ISO 9001: 2015 પ્રમાણપત્ર",
            isoDesc: "આંતરરાષ્ટ્રીય સ્તરે માન્યતાપ્રાપ્ત ગુણવત્તા વ્યવસ્થાપન સિસ્ટમ પ્રમાણપત્ર.",
            isoYear: "2018 થી પ્રમાણિત",
            iso8000: "ISO 13485: 2016 પ્રમાણપત્ર",
            iso8000Desc: "મેડિકલ ડિવાઇસ ગુણવત્તા વ્યવસ્થાપન સિસ્ટમ પ્રમાણપત્ર જે સુરક્ષિત અને અસરકારક મેડિકલ ડિવાઇસ ઉત્પાદન અને વ્યવસ્થાપનને સુનિશ્ચિત કરે છે.",
            iso8000Year: "પ્રમાણિત 2020",
            exportExcellence: "નિકાસ ઉત્કૃષ્ટતા પુરસ્કાર",
            exportDesc: "આંતરરાષ્ટ્રીય બજારોમાં ઉત્કૃષ્ટ નિકાસ પ્રદર્શનની માન્યતા.",
            exportYear: "પ્રાપ્ત 2023",
            quality: "શ્રેષ્ઠ ગુણવત્તા સપ્લાયર",
            qualityDesc: "સતત ગુણવત્તા માટે મુખ્ય આરોગ્ય સંસ્થાઓ દ્વારા પુરસ્કાર.",
            qualityYear: "2019-2024",
            global: "વૈશ્વિક બજાર હાજરી",
            globalDesc: "સતત ગુણવત્તા ધોરણો સાથે અનેક ખંડોમાં ગ્રાહકોની સેવા કરવા માટે સફળતાપૂર્વક કામગીરીનું વિસ્તરણ.",
            globalYear: "2015 થી ચાલુ",
            green: "ગ્રીન મેન્યુફેક્ચરિંગ પહેલ",
            greenDesc: "ટકાઉ અને પર્યાવરણ-અનુકૂળ ઉત્પાદન પ્રક્રિયાઓ અમલમાં મૂકવાની માન્યતા.",
            greenYear: "અમલમાં મૂકેલ 2022",
            milestones: "મુખ્ય સીમાચિહ્નો",
            milestone1: "કંપની સ્થપાઈ",
            milestone1Desc: "ગુણવત્તાયુક્ત મેડિકલ ઉત્પાદનો પ્રદાન કરવાના વિઝન સાથે શ્રી ગુરુકૃપા સર્જિકલની સ્થાપના.",
            milestone2: "મેન્યુફેક્ચરિંગ ફેસિલિટી વિસ્તરણ",
            milestone2Desc: "વધતી માંગને પૂરી કરવા માટે ઉત્પાદન ક્ષમતાઓનું વિસ્તરણ.",
            milestone3: "આંતરરાષ્ટ્રીય નિકાસ લોન્ચ",
            milestone3Desc: "આંતરરાષ્ટ્રીય બજારોમાં ઉત્પાદનોની નિકાસ શરૂ કરી.",
            milestone4: "ISO 9001: 2015 પ્રમાણપત્ર હાંસલ",
            milestone4Desc: "ગુણવત્તા વ્યવસ્થાપન માટે ISO 9001: 2015 પ્રમાણપત્ર મેળવ્યું.",
            milestone5: "ISO 13485: 2016 પ્રમાણપત્ર હાંસલ",
            milestone5Desc: "મેડિકલ ડિવાઇસ ગુણવત્તા વ્યવસ્થાપન સિસ્ટમો માટે ISO 13485: 2016 પ્રમાણપત્ર મેળવ્યું.",
            milestone6: "ડિજિટલ ટ્રાન્સફોર્મેશન",
            milestone6Desc: "ડિજિટલ પ્લેટફોર્મ લોન્ચ કર્યું અને વધારેલા ગ્રાહક અનુભવ માટે કામગીરીનું આધુનિકીકરણ કર્યું.",
            ctaText: "મેડિકલ ઉત્પાદનો અને સેવાઓમાં ઉત્કૃષ્ટતા માટે પ્રતિબદ્ધ પુરસ્કાર વિજેતા કંપની સાથે ભાગીદારી કરો."
        },
        downloads: {
            title: "ડાઉનલોડ્સ",
            subtitle: "અમારા ઉત્પાદન કેટલોગ, બ્રોશર અને તકનીકી દસ્તાવેજો ડાઉનલોડ કરો",
            catalogues: "ઉત્પાદન કેટલોગ",
            catalogueDescription: "વિસ્તૃત વિશિષ્ટતાઓ અને કિંમતની માહિતી સાથે અમારા વ્યાપક ઉત્પાદન કેટલોગ બ્રાઉઝ કરો અને ડાઉનલોડ કરો.",
            mainCatalogue: "મુખ્ય ઉત્પાદન કેટલોગ",
            mainCatalogueDesc: "વિસ્તૃત વિશિષ્ટતાઓ સાથે અમારા તમામ સર્જિકલ ઉત્પાદનો અને મેડિકલ સાધનોની સંપૂર્ણ કેટલોગ.",
            infusionCatalogue: "ઇન્ફ્યુઝન અને ટ્રાન્સફ્યુઝન કેટલોગ",
            infusionCatalogueDesc: "તકનીકી વિશિષ્ટતાઓ સાથે ઇન્ફ્યુઝન અને ટ્રાન્સફ્યુઝન ઉત્પાદનો માટે વિશેષ કેટલોગ.",
            certifications: "પ્રમાણપત્રો અને ગુણવત્તા ધોરણો",
            certificationsDesc: "ISO પ્રમાણપત્રો, ગુણવત્તા ધોરણો અને અનુપાલન દસ્તાવેજીકરણ.",
            updated: "અપડેટ કરેલ: ડિસેમ્બર 2024",
            download: "PDF ડાઉનલોડ કરો",
            needHelp: "મદદ જોઈએ?",
            helpText: "જો તમને ડાઉનલોડ્સમાં સહાયતાની જરૂર હોય અથવા અમારા ઉત્પાદનો વિશે પ્રશ્નો હોય, તો કૃપા કરીને અમારો સંપર્ક કરો.",
            contactSupport: "સહાયતાનો સંપર્ક કરો",
            downloadInfo: "ડાઉનલોડ માહિતી",
            infoItem1: "સરળ જોવા અને પ્રિન્ટિંગ માટે તમામ કેટલોગ PDF ફોર્મેટમાં છે",
            infoItem2: "ફાઇલો નવીનતમ ઉત્પાદન માહિતી સાથે નિયમિતપણે અપડેટ થાય છે",
            infoItem3: "ડાઉનલોડ્સ માટે કોઈ નોંધણી જરૂરી નથી",
            infoItem4: "મોટા ઓર્ડર માટે, કૃપા કરીને વિશેષ કિંમત માટે અમારો સંપર્ક કરો",
            downloadStarted: "ડાઉનલોડ સફળતાપૂર્વક શરૂ થયું!"
        },
        chat: {
            title: "મેડિકલ સપોર્ટ",
            status: "હવે ઓનલાઇન",
            typing: "સપોર્ટ ટાઇપ કરી રહ્યું છે...",
            inputPlaceholder: "તમારો સંદેશ ટાઇપ કરો...",
            quickProducts: "અમારા ઉત્પાદનો",
            quickQuote: "ક્વોટ મેળવો",
            quickContact: "સંપર્ક માહિતી",
            quickHelp: "મદદ",
            welcome: "👋 નમસ્તે! શ્રી ગુરુકૃપા સર્જિકલમાં તમારું સ્વાગત છે। આજે હું તમારી કેવી રીતે મદદ કરી શકું?",
            userDetailsRequest: "તે પહેલાં કે હું તમારી મદદ કરું, શું તમે કૃપા કરીને તમારું નામ અને સંપર્ક નંબર શેર કરી શકો?",
            thankYou: "અમારો સંપર્ક કરવા બદલ આભાર! તમારી પૂછપરછ નોંધવામાં આવી છે અને અમારી ટીમ જલ્દીથી તમારો સંપર્ક કરશે।",
            goodbye: "અમારા ઉત્પાદનોમાં તમારી રુચિ બદલ આભાર! તમારો દિવસ શુભ રહે!",
            error: "મને માફ કરશો, પણ મને તે સમજાયું નહીં. શું તમે કૃપા કરીને તમારો પ્રશ્ન ફરીથી પૂછી શકશો?",
            validation: "કૃપા કરીને માન્ય સંપર્ક માહિતી પ્રદાન કરો.",
            productInfo: "અહીં અમારા સર્જિકલ ઉત્પાદનોની માહિતી છે:",
            contactInfo: "અહીં અમારી સંપર્ક માહિતી છે:",
            quote: "કિંમતની માહિતી માટે, કૃપા કરીને અમારી વેચાણ ટીમનો સંપર્ક કરો."
        },
        footer: {
            about: "શ્રી ગુરુકૃપા સર્જિકલ વિશે",
            description: "અમે વિશ્વભરના આરોગ્ય સેવા વ્યાવસાયિકોને પ્રીમિયમ સર્જિકલ ઉત્પાદનો અને મેડિકલ સાધનો પૂરા પાડીએ છીએ.",
            products: "અમારા ઉત્પાદનો",
            quickLinks: "ઝડપી લિંક્સ",
            contact: "સંપર્ક માહિતી",
            address: "4, અમરદીપ એસ્ટેટ, અનુપમ સિનેમાની સામે, ભગર ધાના દાલ એસ્ટેટની બાજુમાં, ખોખરા રોડ, અમદાવાદ - 380021, ગુજરાત, ભારત",
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