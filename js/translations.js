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
            subtitle: "A Legacy of Quality Since 1992"
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
            subtitle: "A Legacy of Quality Since 1992",
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
            feature1: "ISO 9001:2015 Certified Facility",
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
            countriesReach: "25+",
            countriesLabel: "Countries Served",
            iso: "ISO 9001:2015 Certification",
            isoDesc: "Internationally recognized quality management system certification ensuring consistent quality in all our processes.",
            isoYear: "Certified since 2018",
            exportExcellence: "Export Excellence Award",
            exportDesc: "Recognition for outstanding export performance and quality products in international markets.",
            exportYear: "Received 2023",
            ce: "CE Marking Compliance",
            ceDesc: "European Conformity marking for medical devices ensuring compliance with EU safety and health requirements.",
            ceYear: "Approved 2020",
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
            milestone4: "ISO Certification Achieved",
            milestone4Desc: "Obtained ISO 9001:2015 certification for quality management.",
            milestone5: "Digital Transformation",
            milestone5Desc: "Launched digital platform and modernized operations for enhanced customer experience.",
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
            quickHelp: "Help"
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
            subtitle: "Un Legado de Calidad Desde 1992"
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
                description: "Gama completa de productos de infusión y transfusión para la entrega segura de fluidos y procedimientos de transfusión de sangre.",
                ivCannula: {
                    name: "Cánula IV",
                    description: "Cánulas intravenosas estériles para acceso vascular seguro y administración de fluidos"
                },
                ivSets: {
                    name: "Equipos de Administración IV",
                    description: "Sistemas completos de administración de fluidos IV con mecanismos de control de flujo precisos"
                },
                pumps: {
                    name: "Bombas de Infusión",
                    description: "Bombas de infusión electrónicas para entrega precisa y controlada de medicamentos"
                },
                catheters: {
                    name: "Catéteres IV",
                    description: "Catéteres IV centrales y periféricos para diversas aplicaciones clínicas"
                },
                stopcocks: {
                    name: "Llaves de Tres Vías",
                    description: "Conectores multipuerto para manejo y control eficiente de líneas IV"
                },
                extensions: {
                    name: "Líneas de Extensión",
                    description: "Sistemas de tubería de extensión IV para atención al paciente flexible y cómoda"
                },
                pressureBags: {
                    name: "Bolsas de Presión",
                    description: "Bolsas de infusión a presión IV para entrega rápida y controlada de fluidos"
                },
                poles: {
                    name: "Postes y Soportes IV",
                    description: "Sistemas de soporte de equipos IV móviles y estacionarios"
                }
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
            subtitle: "Un Legado de Calidad Desde 1992",
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
            subtitle: "Un Héritage de Qualité Depuis 1992"
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
                description: "Gamme complète de produits de perfusion et de transfusion pour l'administration sécurisée de fluides et les procédures de transfusion sanguine.",
                ivCannula: {
                    name: "Canule IV",
                    description: "Canules intraveineuses stériles pour un accès vasculaire sécurisé et l'administration de fluides"
                },
                ivSets: {
                    name: "Ensembles d'Administration IV",
                    description: "Systèmes complets d'administration de fluides IV avec mécanismes de contrôle de débit précis"
                },
                pumps: {
                    name: "Pompes à Perfusion",
                    description: "Pompes à perfusion électroniques pour une administration précise et contrôlée de médicaments"
                },
                catheters: {
                    name: "Cathéters IV",
                    description: "Cathéters IV centraux et périphériques pour diverses applications cliniques"
                },
                stopcocks: {
                    name: "Robinets à Trois Voies",
                    description: "Connecteurs multi-ports pour une gestion et un contrôle efficaces des lignes IV"
                },
                extensions: {
                    name: "Lignes d'Extension",
                    description: "Systèmes de tubulure d'extension IV pour des soins aux patients flexibles et confortables"
                },
                pressureBags: {
                    name: "Sacs de Pression",
                    description: "Sacs de perfusion sous pression IV pour une administration rapide et contrôlée de fluides"
                },
                poles: {
                    name: "Poteaux et Supports IV",
                    description: "Systèmes de support d'équipement IV mobiles et stationnaires"
                }
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
            subtitle: "Un Héritage de Qualité Depuis 1992",
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
        search: {
            placeholder: "Suchen..."
        },
        home: {
            title: "Willkommen bei Shri Gurukrupa Surgical",
            subtitle: "Ein Vermächtnis der Qualität Seit 1992"
        },
        hero: {
            title: "Ihre Gesundheit ist Unsere Priorität",
            subtitle: "Umfassende Gesundheitsdienste mit modernsten Einrichtungen und erfahrenen medizinischen Fachkräften.",
            bookAppointment: "Termin buchen",
            learnMore: "Mehr erfahren"
        },
        products: {
            title: "Unsere Produkte",
            subtitle: "Wir liefern hochwertige chirurgische Produkte und medizinische Geräte an Gesundheitsfachkräfte weltweit",
            infusionTransfusion: {
                title: "Infusion und Transfusion",
                description: "Vollständiges Sortiment von Infusions- und Transfusionsprodukten für sichere Flüssigkeitsverabreichung und Bluttransfusionsverfahren.",
                ivCannula: {
                    name: "IV-Kanüle",
                    description: "Sterile intravenöse Kanülen für sicheren Gefäßzugang und Flüssigkeitsverabreichung"
                },
                ivSets: {
                    name: "IV-Verabreichungssets",
                    description: "Vollständige IV-Flüssigkeitsverabreichungssysteme mit präzisen Flusskontrollmechanismen"
                },
                pumps: {
                    name: "Infusionspumpen",
                    description: "Elektronische Infusionspumpen für präzise und kontrollierte Medikamentenverabreichung"
                },
                catheters: {
                    name: "IV-Katheter",
                    description: "Zentrale und periphere IV-Katheter für verschiedene klinische Anwendungen"
                },
                stopcocks: {
                    name: "Dreiweg-Hähne",
                    description: "Mehrfach-Port-Verbinder für effiziente IV-Leitungsmanagement und -kontrolle"
                },
                extensions: {
                    name: "Verlängerungsleitungen",
                    description: "IV-Verlängerungsschlauchsysteme für flexible und komfortable Patientenversorgung"
                },
                pressureBags: {
                    name: "Druckbeutel",
                    description: "IV-Druckinfusionsbeutel für schnelle und kontrollierte Flüssigkeitsverabreichung"
                },
                poles: {
                    name: "IV-Stangen und Ständer",
                    description: "Mobile und stationäre IV-Geräte-Unterstützungssysteme"
                }
            },
            surgicalInstruments: {
                title: "Chirurgische Instrumente",
                description: "Hochwertige chirurgische Instrumente, die für Präzision und Zuverlässigkeit in medizinischen Verfahren entwickelt wurden.",
                forceps: {
                    name: "Chirurgische Pinzetten",
                    description: "Präzisions-Chirurgpinzetten zum Greifen, Halten und Manipulieren von Geweben"
                },
                scissors: {
                    name: "Chirurgische Scheren",
                    description: "Hochwertige chirurgische Scheren zum präzisen Schneiden von Geweben und Nähten"
                },
                scalpels: {
                    name: "Skalpelle und Klingen",
                    description: "Scharfe und sterile Skalpelle mit Einwegklingen für chirurgische Einschnitte"
                },
                retractors: {
                    name: "Chirurgische Retraktoren",
                    description: "Selbsthaltende und handbetätigte Retraktoren für optimale chirurgische Feldexposition"
                },
                clamps: {
                    name: "Chirurgische Klemmen",
                    description: "Hämostatische und Gewebeklemmen für Blutungskontrolle und Gewebemanagement"
                },
                needleHolders: {
                    name: "Nadelhalter",
                    description: "Präzisions-Nadelhalter für sicheren Griff und Kontrolle von Nahtnadeln"
                }
            },
            disposables: {
                title: "Einwegartikel",
                description: "Einweg-Medizinprodukte für den einmaligen Gebrauch, die Hygiene und Sicherheit in Gesundheitsumgebungen gewährleisten.",
                syringes: {
                    name: "Einwegspritzen",
                    description: "Sterile Einwegspritzen in verschiedenen Größen für sichere Medikamentenverabreichung"
                },
                gloves: {
                    name: "Medizinische Handschuhe",
                    description: "Latex- und Nitril-Untersuchungshandschuhe für Infektionskontrolle und Sicherheit"
                },
                masks: {
                    name: "Chirurgische Masken",
                    description: "Dreischichtige chirurgische Masken mit bakterieller und partikulärer Filtration"
                },
                gowns: {
                    name: "Chirurgische Kittel",
                    description: "Einweg-Chirurgiekittel bieten Schutz und sterile Barriere"
                },
                caps: {
                    name: "Chirurgische Hauben",
                    description: "Einweg-Chirurgiehauben für Haarbedeckung und Kontaminationsprävention"
                },
                gauze: {
                    name: "Gaze und Verbände",
                    description: "Sterile Gazekompressen und Verbände für Wundversorgung und Verbände"
                }
            },
            orthopedic: {
                title: "Orthopädie",
                description: "Spezialisierte orthopädische Implantate und Instrumente für Knochen- und Gelenkchirurgie.",
                implants: {
                    name: "Orthopädische Implantate",
                    description: "Titan- und Edelstahlimplantate für Knochenrekonstruktion und Gelenkersatz"
                },
                plates: {
                    name: "Knochenplatten",
                    description: "Orthopädische Platten für Frakturfixierung und Knochenstabilisierungsverfahren"
                },
                screws: {
                    name: "Orthopädische Schrauben",
                    description: "Chirurgische Schrauben in verschiedenen Größen für sichere Knochenfixierung und Heilung"
                },
                nails: {
                    name: "Marknägel",
                    description: "IM-Nägel für Langknochen-Frakturen und interne Fixierungsverfahren"
                },
                pins: {
                    name: "Orthopädische Stifte",
                    description: "Chirurgische Stifte und Drähte für Knochenausrichtung und temporäre Fixierung"
                },
                wires: {
                    name: "Chirurgische Drähte",
                    description: "Edelstahldrähte für Knochenfixierung und orthopädische Anwendungen"
                }
            }
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
            title: "Über Shri Gurukrupa Surgical",
            subtitle: "Ein Vermächtnis der Qualität Seit 1992",
            description1: "Shri Gurukrupa Surgical ist seit über 25 Jahren ein vertrauenswürdiger Lieferant von Premium-Chirurgieprodukten, der sich dafür einsetzt, Gesundheitsfachkräfte mit hochwertigen Geräten und Instrumenten zu unterstützen.",
            description2: "Unsere hochmoderne Produktionsanlage ist mit der neuesten Technologie ausgestattet, und unser Team erfahrener Fachkräfte widmet sich der Aufrechterhaltung höchster Qualitätsstandards für alle unsere Produkte.",
            learnMore: "Mehr Erfahren"
        },
        contact: {
            title: "Kontakt Aufnehmen",
            subtitle: "Kontaktieren Sie uns für Anfragen oder Geschäftsanfragen",
            getInTouch: "In Kontakt Treten",
            description: "Wir würden gerne von Ihnen hören. Kontaktieren Sie uns auf eine der folgenden Arten:",
            office: "Unser Büro",
            callUs: "Rufen Sie uns an",
            emailUs: "Senden Sie uns eine E-Mail",
            businessHours: "Geschäftszeiten",
            hours: "Montag - Freitag: 9:00 - 18:00 Uhr",
            saturday: "Samstag: 9:00 - 14:00 Uhr",
            sunday: "Sonntag: Geschlossen",
            followUs: "Folgen Sie uns",
            needQuote: "Benötigen Sie ein Angebot?",
            quoteText: "Senden Sie eine detaillierte Anfrage für spezifische Produktanforderungen und Preise.",
            submitEnquiry: "Anfrage Senden",
            findUsHere: "Finden Sie uns Hier",
            getDirections: "Wegbeschreibung",
            fastDelivery: "Schnelle Lieferung",
            deliveryText: "Schneller Versand in ganz Indien und international.",
            support247: "24/7 Support",
            supportText: "Rund-um-die-Uhr-Kundensupport für alle Ihre Fragen.",
            qualityAssured: "Qualität Gesichert",
            qualityText: "ISO-zertifizierte Produkte mit internationalen Qualitätsstandards."
        },
        common: {
            getQuote: "Angebot Erhalten",
            viewProducts: "Produkte Anzeigen",
            goHome: "Zur Startseite",
            pageNotFound: "Seite Nicht Gefunden",
            pageNotFoundText: "Die gesuchte Seite existiert nicht.",
            close: "Schließen",
            needQuote: "Benötigen Sie ein Angebot?",
            contactForPricing: "Kontaktieren Sie uns für detaillierte Preisinformationen und Großbestellungen."
        },
        footer: {
            about: "Über Shri Gurukrupa Surgical",
            description: "Wir liefern hochwertige chirurgische Produkte und medizinische Geräte an Gesundheitsfachkräfte weltweit.",
            products: "Unsere Produkte",
            quickLinks: "Schnelle Links",
            contact: "Kontaktinformationen",
            address: "4, Amardeep Estate, Gegenüber Anupam Cinema, Neben Bhagar Dhana Dal Estate, Khokhara Road, Ahmedabad - 380021, Gujarat, India",
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
        home: {
            title: "श्री गुरुकृपा सर्जिकल में आपका स्वागत है",
            subtitle: "1992 से गुणवत्ता की विरासत"
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
            title: "श्री गुरुकृपा सर्जिकल के बारे में",
            subtitle: "1992 से गुणवत्ता की विरासत",
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
            subtitle: "1992 થી ગુણવત્તાનો વારસો"
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
            title: "શ્રી ગુરુકૃપા સર્જિકલ વિશે",
            subtitle: "1992 થી ગુણવત્તાનો વારસો",
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