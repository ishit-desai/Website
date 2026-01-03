// Search functionality
class SearchEngine {
    constructor() {
        this.searchData = [];
        this.initSearchData();
        this.setupSearchBox();
    }

    // Initialize search data with ACTUAL products from the website
    initSearchData() {
        this.searchData = [
            // Main Pages
            {
                title: "About Shrigurukrupa Surgical",
                description: "Learn about our surgical products manufacturing, history, and commitment to quality",
                page: "about",
                category: "page",
                keywords: ["about", "history", "manufacturing", "quality", "surgical", "products", "company", "ISO", "certification", "25", "years", "experience", "trusted"]
            },
            {
                title: "Contact Us",
                description: "Get in touch with our sales team for quotes and inquiries",
                page: "contact",
                category: "page",
                keywords: ["contact", "phone", "address", "location", "email", "enquiry", "inquiry", "quote", "ahmedabad", "gujarat", "india"]
            },
            {
                title: "Enquiry",
                description: "Submit enquiries for product quotes and information",
                page: "enquiry",
                category: "page",
                keywords: ["enquiry", "inquiry", "quote", "form", "request", "information", "pricing", "bulk", "order"]
            },
            {
                title: "Downloads",
                description: "Download product catalogs, brochures and technical documentation",
                page: "downloads",
                category: "page",
                keywords: ["download", "catalog", "brochure", "documentation", "PDF", "specifications", "datasheet", "manual"]
            },
            {
                title: "Infrastructure",
                description: "Our manufacturing facilities and quality control systems",
                page: "infrastructure",
                category: "page",
                keywords: ["infrastructure", "facility", "manufacturing", "quality", "control", "ISO", "certified", "factory", "production"]
            },
            {
                title: "Achievements",
                description: "Our certifications, awards and company milestones",
                page: "achievements",
                category: "page",
                keywords: ["achievements", "awards", "certification", "ISO", "quality", "excellence", "milestones", "recognition"]
            },

            // Product Categories
            {
                title: "Infusion & Transfusion Products",
                description: "Complete range of infusion and transfusion products for safe fluid delivery",
                page: "infusion-transfusion",
                category: "category",
                keywords: ["infusion", "transfusion", "IV", "sets", "blood", "administration", "carewell", "blessing", "sayft", "microdrip", "measured", "volume", "luer", "lock", "vented"]
            },
            {
                title: "Anesthesia & Respiratory Products",
                description: "Complete anesthesia equipment and respiratory products for surgical procedures",
                page: "anesthesia-respiratory",
                category: "category",
                keywords: ["anesthesia", "anaesthesia", "respiratory", "breathing", "ventilation", "oxygen", "masks", "nebulizer", "airway", "guedel", "venturi", "catheter", "mount", "filter", "HME", "BVF"]
            },
            {
                title: "Urology & Gastroenterology Products",
                description: "Specialized products for urinary and digestive system procedures",
                page: "urology-gastroenterology",
                category: "category",
                keywords: ["urology", "gastroenterology", "cord", "clamp", "yankauer", "suction", "urine", "collection", "mucus", "extractor", "bag", "delux", "premium"]
            },
            {
                title: "Dialysis Products",
                description: "Complete range of dialysis and renal care products",
                page: "dialysis",
                category: "category",
                keywords: ["dialysis", "renal", "kidney", "hemodialysis", "haemodialysis", "catheter", "blood", "line"]
            },
            {
                title: "Miscellaneous Medical Products",
                description: "Additional medical supplies including surgical instruments and general equipment",
                page: "miscellaneous",
                category: "category",
                keywords: ["miscellaneous", "latex", "gloves", "examination", "surgical", "masks", "N-95", "face", "3", "ply", "head", "rest", "ear", "loop"]
            },

            // ACTUAL INFUSION & TRANSFUSION PRODUCTS
            {
                title: "IV Set - CAREWELL™ (Economic)",
                description: "Cost-effective IV infusion set with sterile and pyrogen-free design",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["IV", "set", "carewell", "economic", "infusion", "sterile", "pyrogen", "free", "cost", "effective", "affordable", "basic", "standard"]
            },
            {
                title: "IV Set - BLESSING® (Economic)",
                description: "Reliable affordable IV set for routine infusion procedures",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["IV", "set", "blessing", "economic", "infusion", "affordable", "routine", "reliable", "budget", "standard"]
            },
            {
                title: "IV Set - BLESSING® (Delux - Paper Pouch)",
                description: "Premium IV set with enhanced packaging",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["IV", "set", "blessing", "delux", "deluxe", "paper", "pouch", "premium", "enhanced", "packaging", "quality"]
            },
            {
                title: "IV Set - Sayft-NV® (Super Delux)",
                description: "Top-tier IV set with advanced safety features",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["IV", "set", "sayft", "NV", "super", "delux", "deluxe", "top", "tier", "advanced", "safety", "features", "premium"]
            },
            {
                title: "Blood Transfusion Set",
                description: "Specialized set for safe blood transfusion procedures",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["blood", "transfusion", "set", "specialized", "safe", "procedures", "blood", "administration", "filter", "safety"]
            },
            {
                title: "Measured Volume Set (Doctor Super Delux)",
                description: "Precision volume control for pediatric care",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["measured", "volume", "set", "doctor", "super", "delux", "deluxe", "precision", "control", "pediatric", "care", "children", "burette"]
            },
            {
                title: "IV Set (Vented)",
                description: "Vented design for air elimination",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["IV", "set", "vented", "air", "elimination", "vent", "filter", "safety"]
            },
            {
                title: "IV Set (Vented with Luer Lock)",
                description: "Advanced vented set with secure Luer Lock connection",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["IV", "set", "vented", "luer", "lock", "secure", "connection", "advanced", "safety", "lock", "mechanism"]
            },
            {
                title: "IV Set (Vented with Luer Lock with 'Y' connection)",
                description: "Multi-port IV set for simultaneous medication",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["IV", "set", "vented", "luer", "lock", "Y", "connection", "multi", "port", "simultaneous", "medication", "multiple", "drugs"]
            },
            {
                title: "Microdrip Set",
                description: "Precision microdrip for accurate low-volume delivery",
                page: "infusion-transfusion",
                category: "product",
                keywords: ["microdrip", "set", "precision", "accurate", "low", "volume", "delivery", "pediatric", "micro", "drip", "small", "drops"]
            },

            // ACTUAL ANESTHESIA & RESPIRATORY PRODUCTS
            {
                title: "Nebulizer Kit",
                description: "Complete nebulizer system for respiratory therapy",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["nebulizer", "kit", "complete", "system", "respiratory", "therapy", "breathing", "medication", "inhalation", "asthma", "COPD"]
            },
            {
                title: "Hi-Concentration Mask",
                description: "High-concentration oxygen mask for critical care",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["hi", "high", "concentration", "mask", "oxygen", "critical", "care", "emergency", "ICU", "face", "breathing"]
            },
            {
                title: "Multiflow Venturi Mask",
                description: "Precision oxygen delivery with multiple flow settings",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["multiflow", "venturi", "mask", "precision", "oxygen", "delivery", "multiple", "flow", "settings", "adjustable", "controlled"]
            },
            {
                title: "Guedel Airway",
                description: "Oropharyngeal airways for airway management",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["guedel", "airway", "oropharyngeal", "management", "oral", "pharyngeal", "breathing", "emergency", "anesthesia"]
            },
            {
                title: "Catheter Mount",
                description: "Flexible connector for ventilation circuits",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["catheter", "mount", "flexible", "connector", "ventilation", "circuits", "breathing", "connection", "adapter"]
            },
            {
                title: "T-Oxygenator",
                description: "T-piece oxygen delivery system",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["T", "oxygenator", "piece", "oxygen", "delivery", "system", "breathing", "connector", "T-piece"]
            },
            {
                title: "BVF Filter",
                description: "Bacterial and viral filtration filter",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["BVF", "filter", "bacterial", "viral", "filtration", "protection", "infection", "control", "safety"]
            },
            {
                title: "HME Filter",
                description: "Heat and moisture exchanger filter",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["HME", "filter", "heat", "moisture", "exchanger", "humidification", "breathing", "ventilation"]
            },
            {
                title: "HME-BVF Filter",
                description: "Combined heat moisture exchanger and bacterial viral filter",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["HME", "BVF", "filter", "combined", "heat", "moisture", "exchanger", "bacterial", "viral", "filtration", "protection"]
            },
            {
                title: "Nasal Oxygen Cannula",
                description: "Comfortable nasal oxygen cannula for continuous therapy",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["nasal", "oxygen", "cannula", "comfortable", "continuous", "therapy", "prongs", "breathing", "nose", "tube"]
            },
            {
                title: "Oxygen Tubing",
                description: "Standard oxygen tubing for reliable delivery",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["oxygen", "tubing", "standard", "reliable", "delivery", "tube", "pipe", "connection", "cord", "line"]
            },
            {
                title: "Oxygen Tubing Coiled",
                description: "Space-saving coiled design oxygen tubing",
                page: "anesthesia-respiratory",
                category: "product",
                keywords: ["oxygen", "tubing", "coiled", "space", "saving", "design", "spiral", "flexible", "cord", "line"]
            },

            // ACTUAL UROLOGY & GASTROENTEROLOGY PRODUCTS
            {
                title: "Cord Clamp",
                description: "Medical cord clamp for umbilical cord procedures",
                page: "urology-gastroenterology",
                category: "product",
                keywords: ["cord", "clamp", "medical", "umbilical", "procedures", "newborn", "baby", "delivery", "obstetric", "birth"]
            },
            {
                title: "Yankauer Suction Set",
                description: "Professional suction set for oral and pharyngeal suctioning",
                page: "urology-gastroenterology",
                category: "product",
                keywords: ["yankauer", "suction", "set", "professional", "oral", "pharyngeal", "suctioning", "surgical", "sucker", "drainage"]
            },
            {
                title: "Urine Collection Container",
                description: "Sterile collection container for laboratory analysis",
                page: "urology-gastroenterology",
                category: "product",
                keywords: ["urine", "collection", "container", "sterile", "laboratory", "analysis", "specimen", "sample", "testing"]
            },
            {
                title: "Mucus Extractor",
                description: "Device for safe mucus extraction from airways",
                page: "urology-gastroenterology",
                category: "product",
                keywords: ["mucus", "extractor", "device", "safe", "extraction", "airways", "suction", "breathing", "clearance"]
            },
            {
                title: "Urine Bag DELUX",
                description: "Enhanced urine collection bag with comfort features",
                page: "urology-gastroenterology",
                category: "product",
                keywords: ["urine", "bag", "delux", "deluxe", "enhanced", "collection", "comfort", "features", "catheter", "drainage"]
            },
            {
                title: "Urine Bag PREMIUM",
                description: "Premium grade urine collection bag with advanced features",
                page: "urology-gastroenterology",
                category: "product",
                keywords: ["urine", "bag", "premium", "grade", "collection", "advanced", "features", "catheter", "drainage", "quality"]
            },

            // ACTUAL MISCELLANEOUS PRODUCTS
            {
                title: "Latex Examination Gloves",
                description: "High-quality latex gloves for medical procedures",
                page: "miscellaneous",
                category: "product",
                keywords: ["latex", "examination", "gloves", "high", "quality", "medical", "procedures", "disposable", "protection", "sterile"]
            },
            {
                title: "Latex Surgical Gloves",
                description: "Sterile latex surgical gloves for operations",
                page: "miscellaneous",
                category: "product",
                keywords: ["latex", "surgical", "gloves", "sterile", "operations", "surgery", "procedures", "protection", "disposable"]
            },
            {
                title: "Head Rest N-95 Face Mask",
                description: "N-95 respirator with head rest straps",
                page: "miscellaneous",
                category: "product",
                keywords: ["head", "rest", "N-95", "N95", "face", "mask", "respirator", "straps", "protection", "safety"]
            },
            {
                title: "Ear Loop N-95 Face Mask",
                description: "N-95 respirator with convenient ear loops",
                page: "miscellaneous",
                category: "product",
                keywords: ["ear", "loop", "N-95", "N95", "face", "mask", "respirator", "convenient", "loops", "protection"]
            },
            {
                title: "Head Rest N-95 Face Mask (Premium)",
                description: "Premium N-95 with adjustable head straps",
                page: "miscellaneous",
                category: "product",
                keywords: ["head", "rest", "N-95", "N95", "face", "mask", "premium", "adjustable", "straps", "quality", "protection"]
            },
            {
                title: "3 Ply Mask Face",
                description: "3-layer disposable face mask for everyday use",
                page: "miscellaneous",
                category: "product",
                keywords: ["3", "ply", "mask", "face", "layer", "disposable", "everyday", "use", "protection", "surgical", "three"]
            }
        ];
    }

    // Setup search box functionality
    setupSearchBox() {
        const searchInput = document.getElementById('searchInput');
        const searchBox = document.querySelector('.search-box');

        if (searchInput && searchBox) {
            // Create search results container
            const searchResults = document.createElement('div');
            searchResults.className = 'search-results';
            searchResults.id = 'searchResults';
            searchBox.appendChild(searchResults);

            // Add event listeners
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });

            searchInput.addEventListener('focus', (e) => {
                if (e.target.value.trim()) {
                    this.handleSearch(e.target.value);
                }
            });

            // Hide search results when clicking outside
            document.addEventListener('click', (e) => {
                if (!searchBox.contains(e.target)) {
                    this.hideSearchResults();
                }
            });

            // Handle Enter key
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleEnterKey();
                }
            });
        }
    }

    // Handle search input
    handleSearch(query) {
        const trimmedQuery = query.trim().toLowerCase();
        const searchResults = document.getElementById('searchResults');

        if (!searchResults) return;

        if (trimmedQuery.length < 2) {
            this.hideSearchResults();
            return;
        }

        const results = this.searchData.filter(item => {
            // Search in title
            if (item.title.toLowerCase().includes(trimmedQuery)) {
                return true;
            }

            // Search in description
            if (item.description.toLowerCase().includes(trimmedQuery)) {
                return true;
            }

            // Search in keywords
            if (item.keywords.some(keyword =>
                keyword.toLowerCase().includes(trimmedQuery)
            )) {
                return true;
            }

            // Search in multilingual terms
            return this.searchInTranslations(trimmedQuery, item);
        });

        this.displaySearchResults(results, trimmedQuery);
    }

    // Display search results
    displaySearchResults(results, query) {
        const searchResults = document.getElementById('searchResults');

        if (!searchResults) return;

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item">
                    <div class="search-result-title">No results found</div>
                    <div class="search-result-description">Try searching for services, doctors, or health topics</div>
                </div>
            `;
        } else {
            // Limit results to top 5
            const limitedResults = results.slice(0, 5);

            searchResults.innerHTML = limitedResults.map(result => `
                <div class="search-result-item" onclick="this.selectResult('${result.page}')">
                    <div class="search-result-title">${this.highlightText(result.title, query)}</div>
                    <div class="search-result-description">${this.highlightText(result.description, query)}</div>
                </div>
            `).join('');

            // Add click handlers
            const resultItems = searchResults.querySelectorAll('.search-result-item');
            resultItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    this.selectResult(limitedResults[index].page);
                });
            });
        }

        this.showSearchResults();
    }

    // Highlight search terms in text
    highlightText(text, query) {
        if (!query) return text;

        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    // Select a search result
    selectResult(page) {
        this.hideSearchResults();
        document.getElementById('searchInput').value = '';

        // Navigate to the selected page
        if (window.showPage) {
            window.showPage(page);
        }
    }

    // Show search results
    showSearchResults() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.style.display = 'block';
        }
    }

    // Hide search results
    hideSearchResults() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.style.display = 'none';
        }
    }

    // Handle Enter key press
    handleEnterKey() {
        const searchResults = document.getElementById('searchResults');
        const firstResult = searchResults?.querySelector('.search-result-item');

        if (firstResult) {
            firstResult.click();
        }
    }

    // Search in multilingual translations
    searchInTranslations(query, item) {
        if (!window.translations) return false;

        const commonTranslations = {
            // Basic medical terms
            'medical': ['चिकित्सा', 'મેડિકલ', 'médico', 'médical', 'medizinisch'],
            'surgical': ['सर्जिकल', 'સર્જિકલ', 'quirúrgico', 'chirurgical', 'chirurgisch'],
            'hospital': ['अस्पताल', 'હોસ્પિટલ', 'hospital', 'hôpital', 'Krankenhaus'],

            // Respiratory & Anesthesia
            'nebulizer': ['नेब्युलाइजर', 'નેબ્યુલાઈઝર', 'nebulizador', 'nébuliseur', 'Vernebler'],
            'mask': ['मास्क', 'માસ્ક', 'máscara', 'masque', 'Maske'],
            'oxygen': ['ऑक्सीजन', 'ઓક્સિજન', 'oxígeno', 'oxygène', 'Sauerstoff'],
            'respiratory': ['श्वसन', 'શ્વસન', 'respiratorio', 'respiratoire', 'Atemwegs'],
            'breathing': ['सांस', 'શ્વાસ', 'respiración', 'respiration', 'Atmung'],
            'anesthesia': ['संज्ञाहरण', 'એનેસ્થેસિયા', 'anestesia', 'anesthésie', 'Anästhesie'],
            'airway': ['वायु मार्ग', 'વાયુમાર્ગ', 'vía aérea', 'voie aérienne', 'Atemweg'],
            'ventilation': ['वायु संचार', 'વેન્ટિલેશન', 'ventilación', 'ventilation', 'Beatmung'],
            'filter': ['फिल्टर', 'ફિલ્ટર', 'filtro', 'filtre', 'Filter'],
            'tubing': ['ट्यूबिंग', 'ટ્યુબિંગ', 'tubería', 'tubulure', 'Schlauchsystem'],
            'cannula': ['कैनुला', 'કેન્યુલા', 'cánula', 'canule', 'Kanüle'],
            'nasal': ['नाक', 'નાક', 'nasal', 'nasal', 'nasal'],
            'guedel': ['गुएडेल', 'ગ્વેડેલ', 'guedel', 'guedel', 'Guedel'],
            'venturi': ['वेंटुरी', 'વેન્ચુરી', 'venturi', 'venturi', 'Venturi'],

            // Infusion & Transfusion
            'infusion': ['इन्फ्यूजन', 'ઈન્ફ્યુઝન', 'infusión', 'perfusion', 'Infusion'],
            'transfusion': ['ट्रांसफ्यूजन', 'ટ્રાન્સફ્યુઝન', 'transfusión', 'transfusion', 'Transfusion'],
            'IV': ['आईवी', 'આઈવી', 'IV', 'IV', 'IV'],
            'blood': ['रक्त', 'લોહી', 'sangre', 'sang', 'Blut'],
            'set': ['सेट', 'સેટ', 'set', 'set', 'Set'],
            'kit': ['किट', 'કિટ', 'kit', 'kit', 'Kit'],
            'carewell': ['केयरवेल', 'કેયરવેલ', 'carewell', 'carewell', 'Carewell'],
            'blessing': ['ब्लेसिंग', 'બ્લેસિંગ', 'blessing', 'bénédiction', 'Segen'],
            'sayft': ['सेफ्ट', 'સેફ્ટ', 'sayft', 'sayft', 'Sayft'],
            'microdrip': ['माइक्रोड्रिप', 'માઇક્રોડ્રિપ', 'microgoteo', 'microgoutte', 'Mikrotropf'],
            'luer': ['लुअर', 'લુઅર', 'luer', 'luer', 'Luer'],
            'lock': ['लॉक', 'લોક', 'bloqueo', 'verrouillage', 'Verschluss'],
            'vented': ['वेंटेड', 'વેન્ટેડ', 'ventilado', 'ventilé', 'belüftet'],

            // Urology & Gastroenterology
            'cord': ['कॉर्ड', 'કોર્ડ', 'cordón', 'cordon', 'Nabelschnur'],
            'clamp': ['क्लैम्प', 'ક્લેમ્પ', 'pinza', 'pince', 'Klemme'],
            'umbilical': ['नाभि', 'નાભિ', 'umbilical', 'ombilical', 'Nabel'],
            'yankauer': ['यंकॉअर', 'યાન્કૉઅર', 'yankauer', 'yankauer', 'Yankauer'],
            'suction': ['सक्शन', 'સક્શન', 'succión', 'aspiration', 'Absaugung'],
            'urine': ['मूत्र', 'મૂત્ર', 'orina', 'urine', 'Urin'],
            'collection': ['संग्रह', 'સંગ્રહ', 'recolección', 'collecte', 'Sammlung'],
            'container': ['कंटेनर', 'કન્ટેનર', 'contenedor', 'conteneur', 'Behälter'],
            'mucus': ['बलगम', 'કફ', 'mucosidad', 'mucus', 'Schleim'],
            'extractor': ['एक्सट्रैक्टर', 'એક્સટ્રેક્ટર', 'extractor', 'extracteur', 'Absauger'],
            'bag': ['बैग', 'બેગ', 'bolsa', 'sac', 'Beutel'],
            'delux': ['डीलक्स', 'ડીલક્સ', 'deluxe', 'deluxe', 'Deluxe'],
            'premium': ['प्रीमियम', 'પ્રીમિયમ', 'premium', 'premium', 'Premium'],
            'catheter': ['कैथेटर', 'કેથેટર', 'catéter', 'cathéter', 'Katheter'],
            'drainage': ['निकासी', 'ડ્રેનેજ', 'drenaje', 'drainage', 'Drainage'],

            // Miscellaneous
            'latex': ['लेटेक्स', 'લેટેક્સ', 'látex', 'latex', 'Latex'],
            'gloves': ['दस्ताने', 'ગ્લવ્સ', 'guantes', 'gants', 'Handschuhe'],
            'examination': ['परीक्षा', 'તપાસ', 'examen', 'examen', 'Untersuchung'],
            'N-95': ['एन-95', 'એન-95', 'N-95', 'N-95', 'N-95'],
            'N95': ['एन95', 'એન95', 'N95', 'N95', 'N95'],
            'face': ['चेहरा', 'ચહેરો', 'cara', 'visage', 'Gesicht'],
            'head': ['सिर', 'મસ્તક', 'cabeza', 'tête', 'Kopf'],
            'ear': ['कान', 'કાન', 'oreja', 'oreille', 'Ohr'],
            'loop': ['लूप', 'લૂપ', 'lazo', 'boucle', 'Schlaufe'],
            'ply': ['प्लाई', 'પ્લાઈ', 'capa', 'couche', 'Schicht'],
            'layer': ['परत', 'સ્તર', 'capa', 'couche', 'Schicht'],
            'disposable': ['डिस्पोजेबल', 'ડિસ્પોઝેબલ', 'desechable', 'jetable', 'Einweg'],
            'sterile': ['स्टेराइल', 'સ્ટેરાઇલ', 'estéril', 'stérile', 'steril'],
            'protection': ['सुरक्षा', 'સુરક્ષા', 'protección', 'protection', 'Schutz'],
            'safety': ['सुरक्षा', 'સલામતી', 'seguridad', 'sécurité', 'Sicherheit'],

            // General terms
            'tube': ['ट्यूब', 'ટ્યુબ', 'tubo', 'tube', 'Schlauch'],
            'pipe': ['पाइप', 'પાઇપ', 'tubo', 'tuyau', 'Rohr'],
            'connection': ['कनेक्शन', 'કનેક્શન', 'conexión', 'connexion', 'Verbindung'],
            'adapter': ['एडेप्टर', 'એડેપ્ટર', 'adaptador', 'adaptateur', 'Adapter'],
            'mount': ['माउंट', 'માઉન્ટ', 'montaje', 'montage', 'Halterung'],
            'flexible': ['लचीला', 'લચીલું', 'flexible', 'flexible', 'flexibel'],
            'coiled': ['कुंडलित', 'કુંડળાકાર', 'enrollado', 'enroulé', 'gewickelt'],
            'standard': ['मानक', 'સ્ટાન્ડર્ડ', 'estándar', 'standard', 'Standard'],
            'economic': ['इकोनॉमिक', 'ઇકોનોમિક', 'económico', 'économique', 'wirtschaftlich'],
            'quality': ['गुणवत्ता', 'ગુણવત્તા', 'calidad', 'qualité', 'Qualität']
        };

        // Check if query matches any translation
        for (const [english, translations] of Object.entries(commonTranslations)) {
            if (translations.some(trans => trans.toLowerCase().includes(query))) {
                // Check if this item contains the English equivalent
                if (item.keywords.includes(english) ||
                    item.title.toLowerCase().includes(english) ||
                    item.description.toLowerCase().includes(english)) {
                    return true;
                }
            }
        }

        return false;
    }

    // Add new search data (for dynamic content)
    addSearchData(item) {
        this.searchData.push(item);
    }

    // Update search data based on current language
    updateSearchData() {
        if (window.translations && window.currentLanguage) {
            const lang = window.currentLanguage;
            const trans = window.translations[lang];

            // Update service translations
            this.searchData.forEach(item => {
                if (item.category === 'service') {
                    switch (item.page) {
                        case 'emergency':
                            if (trans.services?.emergency) {
                                item.title = trans.services.emergency.title;
                                item.description = trans.services.emergency.description;
                            }
                            break;
                        case 'surgery':
                            if (trans.services?.surgery) {
                                item.title = trans.services.surgery.title;
                                item.description = trans.services.surgery.description;
                            }
                            break;
                        case 'pediatrics':
                            if (trans.services?.pediatrics) {
                                item.title = trans.services.pediatrics.title;
                                item.description = trans.services.pediatrics.description;
                            }
                            break;
                        case 'cardiology':
                            if (trans.services?.cardiology) {
                                item.title = trans.services.cardiology.title;
                                item.description = trans.services.cardiology.description;
                            }
                            break;
                    }
                }
            });
        }
    }
}

// Global search function (called from search button)
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        searchEngine.handleSearch(searchInput.value);
    }
}

// Initialize search engine when DOM is loaded
let searchEngine;
document.addEventListener('DOMContentLoaded', function() {
    searchEngine = new SearchEngine();
});

// Update search data when language changes
document.addEventListener('languageChanged', function() {
    if (searchEngine) {
        searchEngine.updateSearchData();
    }
});

// Make search functions available globally
window.performSearch = performSearch;
window.searchEngine = searchEngine;