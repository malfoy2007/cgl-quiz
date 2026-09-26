const QUESTIONS = [
  {
    "q": "Which layer of the Earth is responsible for plate movement through convection currents?",
    "hi": "पृथ्वी की कौन-सी परत संवहन धाराओं के माध्यम से प्लेटों की गति के लिए जिम्मेदार है?",
    "o": [
      "Mantle",
      "Crust",
      "Outer core",
      "Inner core"
    ],
    "oh": [
      "मेंटल",
      "भूपर्पटी",
      "बाहरी कोर",
      "आंतरिक कोर"
    ],
    "a": 0,
    "e": "Convection currents in the mantle drive tectonic plate movement."
  },
  {
    "q": "The continental crust is approximately how thick according to the study material?",
    "hi": "अध्ययन सामग्री के अनुसार महाद्वीपीय भूपर्पटी की मोटाई लगभग कितनी है?",
    "o": [
      "5 km",
      "30 km",
      "70 km",
      "200 km"
    ],
    "oh": [
      "5 किमी",
      "30 किमी",
      "70 किमी",
      "200 किमी"
    ],
    "a": 1,
    "e": "The notes give about 30 km for continental crust."
  },
  {
    "q": "Which type of crust is thinner and denser?",
    "hi": "कौन-सी भूपर्पटी पतली और अधिक सघन होती है?",
    "o": [
      "Continental crust",
      "Oceanic crust",
      "Both are equally dense",
      "Neither"
    ],
    "oh": [
      "महाद्वीपीय भूपर्पटी",
      "महासागरीय भूपर्पटी",
      "दोनों समान रूप से सघन हैं",
      "इनमें से कोई नहीं"
    ],
    "a": 1,
    "e": "The notes contrast oceanic crust as thinner (about 5 km) and denser."
  },
  {
    "q": "The mantle is mainly described as being composed of which combination?",
    "hi": "मेंटल मुख्यतः किस संयोजन से बना बताया गया है?",
    "o": [
      "Silica and magnesium",
      "Nickel and iron",
      "Silica and aluminium",
      "Copper and zinc"
    ],
    "oh": [
      "सिलिका और मैग्नीशियम",
      "निकेल और लोहा",
      "सिलिका और एल्युमिनियम",
      "तांबा और जस्ता"
    ],
    "a": 0,
    "e": "The notes describe the mantle as SiMa: silica and magnesium."
  },
  {
    "q": "The Earth's core is mainly composed of which combination?",
    "hi": "पृथ्वी का कोर मुख्यतः किससे बना है?",
    "o": [
      "Silica and aluminium",
      "Nickel and iron",
      "Magnesium and calcium",
      "Carbon and silicon"
    ],
    "oh": [
      "सिलिका और एल्युमिनियम",
      "निकेल और लोहा",
      "मैग्नीशियम और कैल्शियम",
      "कार्बन और सिलिकॉन"
    ],
    "a": 1,
    "e": "The notes describe the core as NiFe: nickel and iron."
  },
  {
    "q": "Which part of the core is liquid and associated with Earth's magnetic properties?",
    "hi": "कोर का कौन-सा भाग द्रव है और पृथ्वी के चुंबकीय गुणों से संबंधित है?",
    "o": [
      "Inner core",
      "Outer core",
      "Mantle",
      "Crust"
    ],
    "oh": [
      "आंतरिक कोर",
      "बाहरी कोर",
      "मेंटल",
      "भूपर्पटी"
    ],
    "a": 1,
    "e": "The notes describe the outer core as liquid and magnetic."
  },
  {
    "q": "Which is an indirect source for studying Earth's interior?",
    "hi": "पृथ्वी के आंतरिक भाग का अध्ययन करने का अप्रत्यक्ष स्रोत कौन-सा है?",
    "o": [
      "Rock samples from mines",
      "Seismic waves",
      "Volcanic lava samples",
      "Drilling"
    ],
    "oh": [
      "खदानों से चट्टान के नमूने",
      "भूकंपीय तरंगें",
      "ज्वालामुखीय लावा के नमूने",
      "ड्रिलिंग"
    ],
    "a": 1,
    "e": "P, S and surface seismic waves are used as indirect evidence."
  },
  {
    "q": "The Himalayas were formed mainly due to the collision of which plates?",
    "hi": "हिमालय का निर्माण मुख्यतः किन प्लेटों के टकराव से हुआ?",
    "o": [
      "Indian and Eurasian",
      "Indian and African",
      "Eurasian and Pacific",
      "Pacific and Eurasian"
    ],
    "oh": [
      "भारतीय और यूरेशियन",
      "भारतीय और अफ्रीकी",
      "यूरेशियन और प्रशांत",
      "प्रशांत और यूरेशियन"
    ],
    "a": 0,
    "e": "The notes state that the Indian Plate collided with the Eurasian Plate."
  },
  {
    "q": "The Mid-Oceanic Ridge is associated with which type of plate boundary?",
    "hi": "मध्य-महासागरीय कटक किस प्रकार की प्लेट सीमा से संबंधित है?",
    "o": [
      "Convergent",
      "Divergent",
      "Transform",
      "Collision-free"
    ],
    "oh": [
      "अभिसारी",
      "अपसारी",
      "रूपांतरण",
      "इनमें से कोई नहीं"
    ],
    "a": 1,
    "e": "Mid-oceanic ridges form at divergent boundaries."
  },
  {
    "q": "The Mariana Trench represents which type of plate boundary in the study material's matching question?",
    "hi": "अध्ययन सामग्री के मिलान प्रश्न में मारियाना ट्रेंच किस प्रकार की प्लेट सीमा से संबंधित है?",
    "o": [
      "Divergent",
      "Convergent",
      "Transform",
      "Passive"
    ],
    "oh": [
      "अपसारी",
      "अभिसारी",
      "रूपांतरण",
      "निष्क्रिय"
    ],
    "a": 1,
    "e": "The Mariana Trench is associated with convergence and subduction."
  },
  {
    "q": "The San Andreas Fault is an example of which type of plate boundary?",
    "hi": "सैन एंड्रियास फॉल्ट किस प्रकार की प्लेट सीमा का उदाहरण है?",
    "o": [
      "Divergent",
      "Convergent",
      "Transform",
      "Subduction"
    ],
    "oh": [
      "अपसारी",
      "अभिसारी",
      "रूपांतरण",
      "अधोगमन"
    ],
    "a": 2,
    "e": "The notes classify San Andreas Fault as transform."
  },
  {
    "q": "Who proposed the Continental Drift Theory in 1912?",
    "hi": "1912 में महाद्वीपीय विस्थापन सिद्धांत किसने दिया था?",
    "o": [
      "Arthur Holmes",
      "Alfred Wegener",
      "Mackenzie",
      "Parker"
    ],
    "oh": [
      "आर्थर होम्स",
      "अल्फ्रेड वेगनर",
      "मैकेन्जी",
      "पार्कर"
    ],
    "a": 1,
    "e": "The notes attribute the 1912 Continental Drift Theory to Alfred Wegener."
  },
  {
    "q": "What was the name of the supercontinent that included today's continents before their separation?",
    "hi": "आज के महाद्वीपों के अलग होने से पहले बने सुपरमहाद्वीप का नाम क्या था?",
    "o": [
      "Laurasia",
      "Gondwana",
      "Pangaea",
      "Panthalassa"
    ],
    "oh": [
      "लॉरेशिया",
      "गोंडवाना",
      "पैंजिया",
      "पैंथलासा"
    ],
    "a": 2,
    "e": "Pangaea was the supercontinent described in the notes."
  },
  {
    "q": "What was the ancient ocean surrounding Pangaea called?",
    "hi": "पैंजिया को चारों ओर से घेरने वाले प्राचीन महासागर का नाम क्या था?",
    "o": [
      "Tethys",
      "Panthalassa",
      "Atlantic",
      "Pacific"
    ],
    "oh": [
      "टेथिस",
      "पैंथलासा",
      "अटलांटिक",
      "प्रशांत"
    ],
    "a": 1,
    "e": "The notes identify Panthalassa as the ocean surrounding Pangaea."
  },
  {
    "q": "What is the deepest part of the Mariana Trench called?",
    "hi": "मारियाना ट्रेंच के सबसे गहरे भाग को क्या कहा जाता है?",
    "o": [
      "Challenger Deep",
      "Java Deep",
      "Puerto Rico Deep",
      "Tonga Deep"
    ],
    "oh": [
      "चैलेंजर डीप",
      "जावा डीप",
      "प्यूर्टो रिको डीप",
      "टोंगा डीप"
    ],
    "a": 0,
    "e": "The deepest part is called Challenger Deep."
  },
  {
    "q": "Approximately how deep is the Mariana Trench according to the notes?",
    "hi": "अध्ययन सामग्री के अनुसार मारियाना ट्रेंच की अधिकतम गहराई लगभग कितनी है?",
    "o": [
      "1.1 km",
      "5.5 km",
      "11 km",
      "20 km"
    ],
    "oh": [
      "1.1 किमी",
      "5.5 किमी",
      "11 किमी",
      "20 किमी"
    ],
    "a": 2,
    "e": "The notes give approximately 10,984 m, or about 11 km."
  },
  {
    "q": "Which glacial landform is a bowl-shaped depression at the head of a glacier valley?",
    "hi": "हिमनद घाटी के सिर पर बनने वाली कटोरे जैसी आकृति को क्या कहते हैं?",
    "o": [
      "Cirque",
      "Moraine",
      "Esker",
      "Drumlin"
    ],
    "oh": [
      "सर्क",
      "मोरेन",
      "एस्कर",
      "ड्रमलिन"
    ],
    "a": 0,
    "e": "A cirque is described as a deep, bowl-shaped glacial hollow."
  },
  {
    "q": "Which glacial landform is an egg-shaped small hill formed from material deposited beneath ice?",
    "hi": "बर्फ के नीचे जमा सामग्री से बनी अंडाकार छोटी पहाड़ी को क्या कहते हैं?",
    "o": [
      "Esker",
      "Drumlin",
      "Cirque",
      "Horn"
    ],
    "oh": [
      "एस्कर",
      "ड्रमलिन",
      "सर्क",
      "हॉर्न"
    ],
    "a": 1,
    "e": "The notes describe drumlins as egg-shaped hills."
  },
  {
    "q": "A fjord is formed when what enters a glacial valley?",
    "hi": "फ्योर्ड का निर्माण तब होता है जब हिमनद द्वारा बनी घाटी में क्या प्रवेश करता है?",
    "o": [
      "Desert sand",
      "Sea water",
      "Lava",
      "Wind"
    ],
    "oh": [
      "रेगिस्तानी रेत",
      "समुद्र का पानी",
      "लावा",
      "हवा"
    ],
    "a": 1,
    "e": "A fjord forms when seawater enters a glacially carved valley."
  },
  {
    "q": "Which process forms mushroom rocks in deserts?",
    "hi": "मरुस्थल में मशरूम रॉक्स किस प्रक्रिया से बनती हैं?",
    "o": [
      "River deposition",
      "Wind erosion",
      "Glacial deposition",
      "Volcanism"
    ],
    "oh": [
      "नदी निक्षेपण",
      "पवन अपरदन",
      "हिमानी निक्षेपण",
      "ज्वालामुखीय क्रिया"
    ],
    "a": 1,
    "e": "Wind erodes the lower part more strongly, producing a mushroom-like form."
  },
  {
    "q": "Which desert landform consists of long, narrow rocks carved by wind?",
    "hi": "पवन द्वारा काटी गई लंबी और संकरी चट्टानी आकृति को क्या कहा जाता है?",
    "o": [
      "Yardang",
      "Bajada",
      "Barchan",
      "Playa"
    ],
    "oh": [
      "यार्डांग",
      "बजाडा",
      "बार्खान",
      "प्लाया"
    ],
    "a": 0,
    "e": "Yardangs are long, narrow wind-eroded rock forms."
  },
  {
    "q": "What is a barchan?",
    "hi": "बार्खान क्या है?",
    "o": [
      "A crescent-shaped sand dune",
      "A glacial lake",
      "A volcanic crater",
      "A river island"
    ],
    "oh": [
      "अर्धचंद्राकार बालू स्तूप",
      "हिमानी झील",
      "ज्वालामुखीय क्रेटर",
      "नदी द्वीप"
    ],
    "a": 0,
    "e": "The notes describe barchans as crescent-shaped dunes."
  },
  {
    "q": "Which grassland is associated with North America and is known as a grain-producing region?",
    "hi": "कौन-सा घास का मैदान उत्तरी अमेरिका से संबंधित है और अनाज के भंडार के रूप में जाना जाता है?",
    "o": [
      "Prairie",
      "Steppe",
      "Pampas",
      "Downs"
    ],
    "oh": [
      "प्रेयरी",
      "स्टेपी",
      "पम्पास",
      "डाउन्स"
    ],
    "a": 0,
    "e": "The notes associate Prairie with North America and the world's grain basket."
  },
  {
    "q": "Which type of forest is characterized by more than 200 cm of rainfall and evergreen vegetation?",
    "hi": "200 सेमी से अधिक वर्षा और सदाबहार वनस्पति वाला वन कौन-सा है?",
    "o": [
      "Tropical evergreen",
      "Tropical thorn",
      "Tropical deciduous",
      "Mountain forest"
    ],
    "oh": [
      "उष्णकटिबंधीय सदाबहार",
      "उष्णकटिबंधीय कांटेदार",
      "उष्णकटिबंधीय पर्णपाती",
      "पर्वतीय वन"
    ],
    "a": 0,
    "e": "Tropical evergreen forests occur in areas receiving more than 200 cm rainfall."
  },
  {
    "q": "Tropical deciduous forests in the notes generally occur in areas receiving what annual rainfall?",
    "hi": "अध्ययन सामग्री के अनुसार उष्णकटिबंधीय पर्णपाती वन सामान्यतः कितनी वार्षिक वर्षा वाले क्षेत्रों में पाए जाते हैं?",
    "o": [
      "Below 70 cm",
      "100–200 cm",
      "Above 300 cm",
      "10–20 cm"
    ],
    "oh": [
      "70 सेमी से कम",
      "100–200 सेमी",
      "300 सेमी से अधिक",
      "10–20 सेमी"
    ],
    "a": 1,
    "e": "The notes give 100–200 cm as the typical rainfall range."
  },
  {
    "q": "Which tree is particularly associated with the Sundarbans mangrove ecosystem in the notes?",
    "hi": "अध्ययन सामग्री में सुंदरबन के मैंग्रोव पारिस्थितिकी तंत्र से कौन-सा वृक्ष विशेष रूप से जुड़ा है?",
    "o": [
      "Sundari",
      "Deodar",
      "Teak",
      "Pine"
    ],
    "oh": [
      "सुंदरी",
      "देवदार",
      "सागौन",
      "चीड़"
    ],
    "a": 0,
    "e": "Sundari is listed among the characteristic vegetation of the Sundarbans."
  },
  {
    "q": "Shola forests are described as tropical mountain forests generally found at elevations above:",
    "hi": "शोला वनों को सामान्यतः किस ऊँचाई से अधिक पाए जाने वाले उष्णकटिबंधीय पर्वतीय वन के रूप में वर्णित किया गया है?",
    "o": [
      "500 m",
      "1000 m",
      "2000 m",
      "4000 m"
    ],
    "oh": [
      "500 मीटर",
      "1000 मीटर",
      "2000 मीटर",
      "4000 मीटर"
    ],
    "a": 2,
    "e": "The notes state that Shola forests occur in valleys above 2000 m."
  },
  {
    "q": "Shola forests in the notes are mainly found in which part of India?",
    "hi": "अध्ययन सामग्री के अनुसार शोला वन मुख्यतः भारत के किस भाग में पाए जाते हैं?",
    "o": [
      "Northern India",
      "Southern India",
      "Eastern India",
      "Western desert"
    ],
    "oh": [
      "उत्तरी भारत",
      "दक्षिणी भारत",
      "पूर्वी भारत",
      "पश्चिमी मरुस्थल"
    ],
    "a": 1,
    "e": "The notes place Shola forests mainly in southern India, including parts of Karnataka, Kerala and Tamil Nadu."
  },
  {
    "q": "Which cloud type is mainly associated with thunderstorms, lightning and heavy rainfall?",
    "hi": "गरज, बिजली और भारी वर्षा से मुख्यतः कौन-सा बादल जुड़ा है?",
    "o": [
      "Cirrus",
      "Stratus",
      "Cumulonimbus",
      "Altostratus"
    ],
    "oh": [
      "सिरस",
      "स्ट्रेटस",
      "क्यूम्युलोनिम्बस",
      "एल्टोस्ट्रेटस"
    ],
    "a": 2,
    "e": "Cumulonimbus is described as producing severe weather."
  },
  {
    "q": "The Coriolis force is zero at which location?",
    "hi": "कोरिओलिस बल किस स्थान पर शून्य होता है?",
    "o": [
      "Equator",
      "30° latitude",
      "60° latitude",
      "Poles"
    ],
    "oh": [
      "भूमध्य रेखा",
      "30° अक्षांश",
      "60° अक्षांश",
      "ध्रुव"
    ],
    "a": 0,
    "e": "The notes state that Coriolis force is zero at the equator and maximum at the poles."
  },
  {
    "q": "In the Northern Hemisphere, moving winds are deflected toward which direction due to the Coriolis effect?",
    "hi": "कोरिओलिस प्रभाव के कारण उत्तरी गोलार्ध में चलती हुई पवनें किस दिशा की ओर विक्षेपित होती हैं?",
    "o": [
      "Left",
      "Right",
      "Upward",
      "No deflection"
    ],
    "oh": [
      "बाईं ओर",
      "दाईं ओर",
      "ऊपर की ओर",
      "कोई विक्षेपण नहीं"
    ],
    "a": 1,
    "e": "The notes state that winds are deflected to the right in the Northern Hemisphere."
  },
  {
    "q": "Westerlies generally blow between which latitudes?",
    "hi": "पछुआ पवनें सामान्यतः किन अक्षांशों के बीच बहती हैं?",
    "o": [
      "0°–30°",
      "30°–60°",
      "60°–90°",
      "10°–20°"
    ],
    "oh": [
      "0°–30°",
      "30°–60°",
      "60°–90°",
      "10°–20°"
    ],
    "a": 1,
    "e": "The notes place westerlies between 30° and 60° in both hemispheres."
  },
  {
    "q": "Which wind belt is located between the subtropical high-pressure belt and subpolar low-pressure belt?",
    "hi": "उपोष्णकटिबंधीय उच्च-दाब पेटी और उपध्रुवीय निम्न-दाब पेटी के बीच कौन-सी पवनें पाई जाती हैं?",
    "o": [
      "Trade winds",
      "Westerlies",
      "Polar easterlies",
      "Local winds"
    ],
    "oh": [
      "व्यापारिक पवनें",
      "पछुआ पवनें",
      "ध्रुवीय पूर्वी पवनें",
      "स्थानीय पवनें"
    ],
    "a": 1,
    "e": "The notes describe westerlies in this belt."
  },
  {
    "q": "What causes the seasons according to the study material?",
    "hi": "अध्ययन सामग्री के अनुसार ऋतुओं का मुख्य कारण क्या है?",
    "o": [
      "Earth's rotation alone",
      "Earth's axial tilt and revolution",
      "Tides",
      "Cloud cover"
    ],
    "oh": [
      "केवल पृथ्वी का घूर्णन",
      "पृथ्वी का अक्षीय झुकाव और परिक्रमण",
      "ज्वार-भाटा",
      "बादलों का आवरण"
    ],
    "a": 1,
    "e": "The notes emphasize Earth's 23.5° axial tilt along with revolution as the basis of seasons."
  },
  {
    "q": "On which date is the summer solstice stated to occur in the notes?",
    "hi": "अध्ययन सामग्री में ग्रीष्म अयनांत किस तारीख को बताया गया है?",
    "o": [
      "21 June",
      "22 December",
      "21 March",
      "23 September"
    ],
    "oh": [
      "21 जून",
      "22 दिसंबर",
      "21 मार्च",
      "23 सितंबर"
    ],
    "a": 0,
    "e": "The notes state 21 June for the summer solstice."
  },
  {
    "q": "Which country is connected to Tripura by the Maitri Setu over the Feni River?",
    "hi": "फेनी नदी पर बना मैत्री सेतु त्रिपुरा को किस देश से जोड़ता है?",
    "o": [
      "Myanmar",
      "Nepal",
      "Bhutan",
      "Bangladesh"
    ],
    "oh": [
      "म्यांमार",
      "नेपाल",
      "भूटान",
      "बांग्लादेश"
    ],
    "a": 3,
    "e": "Maitri Setu connects Tripura with Bangladesh."
  },
  {
    "q": "Which of the following is NOT listed as a primary factor affecting solar insolation?",
    "hi": "निम्नलिखित में से कौन-सा सौर्यातप की भिन्नता को प्रभावित करने वाला प्राथमिक कारक नहीं है?",
    "o": [
      "Presence of water bodies",
      "Earth's rotation",
      "Atmospheric transparency",
      "Angle of solar rays"
    ],
    "oh": [
      "जल निकायों की उपस्थिति",
      "पृथ्वी का घूर्णन",
      "वायुमंडल की पारदर्शिता",
      "सूर्य किरणों का झुकाव कोण"
    ],
    "a": 0,
    "e": "The question in the notes identifies presence of water bodies as the non-primary factor."
  },
  {
    "q": "What is albedo?",
    "hi": "एल्बिडो क्या है?",
    "o": [
      "Surface reflection of radiation",
      "Wind speed",
      "Atmospheric pressure",
      "Rainfall intensity"
    ],
    "oh": [
      "सतह द्वारा विकिरण का परावर्तन",
      "पवन की गति",
      "वायुमंडलीय दाब",
      "वर्षा की तीव्रता"
    ],
    "a": 0,
    "e": "Albedo refers to the reflection of radiation from a surface."
  },
  {
    "q": "Which surface has a relatively high albedo?",
    "hi": "निम्न में से किस सतह का एल्बिडो अपेक्षाकृत अधिक होता है?",
    "o": [
      "Fresh snow/ice",
      "Dark soil",
      "Dense forest",
      "Deep ocean"
    ],
    "oh": [
      "ताजा बर्फ/हिम",
      "गहरी मिट्टी",
      "घना वन",
      "गहरा महासागर"
    ],
    "a": 0,
    "e": "The notes state that ice has high albedo, while dark surfaces have low albedo."
  },
  {
    "q": "What is weathering?",
    "hi": "अपक्षय क्या है?",
    "o": [
      "Breakdown of rocks in place",
      "Transport of sediments by rivers",
      "Deposition by wind",
      "Mountain building"
    ],
    "oh": [
      "चट्टानों का अपने स्थान पर टूटना",
      "नदियों द्वारा अवसाद का परिवहन",
      "हवा द्वारा निक्षेपण",
      "पर्वत निर्माण"
    ],
    "a": 0,
    "e": "The notes describe weathering as acting in place and as a prerequisite for erosion."
  },
  {
    "q": "Which of the following is a chemical weathering process?",
    "hi": "निम्नलिखित में से कौन-सी रासायनिक अपक्षय की प्रक्रिया है?",
    "o": [
      "Frost wedging",
      "Thermal expansion",
      "Oxidation",
      "Rock fall"
    ],
    "oh": [
      "तुषार वेजिंग",
      "तापीय विस्तार",
      "ऑक्सीकरण",
      "शैल पतन"
    ],
    "a": 2,
    "e": "Oxidation is listed under chemical weathering."
  },
  {
    "q": "What is the primary cause of ocean tides according to the notes?",
    "hi": "अध्ययन सामग्री के अनुसार समुद्री ज्वार-भाटा का प्राथमिक कारण क्या है?",
    "o": [
      "Moon's and Sun's gravitational pull",
      "Coriolis force",
      "Wind patterns",
      "Ocean-floor relief"
    ],
    "oh": [
      "चंद्रमा और सूर्य का गुरुत्वाकर्षण खिंचाव",
      "कोरिओलिस बल",
      "पवन के पैटर्न",
      "समुद्र तल की स्थलाकृति"
    ],
    "a": 0,
    "e": "The notes identify the gravitational pull of the Moon and Sun as the primary cause."
  },
  {
    "q": "During a new moon, the Sun, Moon and Earth are approximately aligned, producing what type of tide?",
    "hi": "अमावस्या के दौरान सूर्य, चंद्रमा और पृथ्वी लगभग एक सीध में होते हैं, जिससे किस प्रकार का ज्वार आता है?",
    "o": [
      "Neap tide",
      "Spring tide",
      "No tide",
      "Only low tide"
    ],
    "oh": [
      "लघु ज्वार",
      "वृहत ज्वार",
      "कोई ज्वार नहीं",
      "केवल निम्न ज्वार"
    ],
    "a": 1,
    "e": "The notes associate new moon alignment with spring tide."
  },
  {
    "q": "During the first and third quarter phases, the Sun and Moon are approximately at what angle relative to Earth?",
    "hi": "प्रथम और तृतीय चतुर्थांश में सूर्य और चंद्रमा पृथ्वी के सापेक्ष लगभग किस कोण पर होते हैं?",
    "o": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "oh": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "a": 2,
    "e": "The notes state that the Sun and Moon are at 90° during these phases, producing neap tides."
  },
  {
    "q": "How many high tides and low tides occur approximately each day in a semi-diurnal tide system?",
    "hi": "अर्ध-दैनिक ज्वार प्रणाली में प्रतिदिन लगभग कितने उच्च और निम्न ज्वार आते हैं?",
    "o": [
      "1 high and 1 low",
      "2 high and 2 low",
      "3 high and 3 low",
      "4 high and 4 low"
    ],
    "oh": [
      "1 उच्च और 1 निम्न",
      "2 उच्च और 2 निम्न",
      "3 उच्च और 3 निम्न",
      "4 उच्च और 4 निम्न"
    ],
    "a": 1,
    "e": "The notes state that semi-diurnal tides have two high tides and two low tides per day."
  },
  {
    "q": "Which phenomenon is most directly associated with the movement of two tectonic plates horizontally past each other?",
    "hi": "दो टेक्टोनिक प्लेटों के एक-दूसरे के समानांतर क्षैतिज रूप से खिसकने से कौन-सी घटना जुड़ी है?",
    "o": [
      "Transform boundary",
      "Divergent boundary",
      "Convergent boundary",
      "Volcanic hotspot"
    ],
    "oh": [
      "रूपांतरण सीमा",
      "अपसारी सीमा",
      "अभिसारी सीमा",
      "हॉटस्पॉट"
    ],
    "a": 0,
    "e": "Transform boundaries involve horizontal movement past each other."
  },
  {
    "q": "Which atmospheric pressure condition is generally associated with calm, clear and dry weather?",
    "hi": "कौन-सी वायुमंडलीय दाब स्थिति सामान्यतः शांत, साफ और शुष्क मौसम से जुड़ी है?",
    "o": [
      "High pressure",
      "Low pressure",
      "Zero pressure",
      "Variable pressure only"
    ],
    "oh": [
      "उच्च दाब",
      "निम्न दाब",
      "शून्य दाब",
      "केवल परिवर्ती दाब"
    ],
    "a": 0,
    "e": "The notes associate high pressure with calm, clear and dry conditions."
  },
  {
    "q": "The ITCZ is approximately located between which latitudes according to the notes?",
    "hi": "अध्ययन सामग्री के अनुसार ITCZ लगभग किन अक्षांशों के बीच स्थित है?",
    "o": [
      "5°N and 5°S",
      "30°N and 30°S",
      "60°N and 60°S",
      "10°N and 20°S"
    ],
    "oh": [
      "5° उत्तर और 5° दक्षिण",
      "30° उत्तर और 30° दक्षिण",
      "60° उत्तर और 60° दक्षिण",
      "10° उत्तर और 20° दक्षिण"
    ],
    "a": 0,
    "e": "The notes place the ITCZ roughly between 5° north and 5° south."
  },
  {
    "q": "Which statement correctly describes a rain-shadow region?",
    "hi": "वर्षा-छाया क्षेत्र के बारे में कौन-सा कथन सही है?",
    "o": [
      "It lies on the windward side and receives heavy rainfall",
      "It lies on the leeward side and receives less rainfall",
      "It always lies near the equator",
      "It is caused only by tides"
    ],
    "oh": [
      "यह पवनाभिमुख ढाल पर होता है और भारी वर्षा पाता है",
      "यह प्रतिपवन ढाल पर होता है और कम वर्षा पाता है",
      "यह हमेशा भूमध्य रेखा के पास होता है",
      "यह केवल ज्वार के कारण बनता है"
    ],
    "a": 1,
    "e": "The notes describe the leeward side as drier because air loses moisture on the windward side."
  },
  {
    "q": "Which radioactive decay reduces atomic number by 2 and mass number by 4?",
    "hi": "कौन-सा रेडियोधर्मी क्षय परमाणु क्रमांक को 2 और द्रव्यमान संख्या को 4 घटाता है?",
    "o": [
      "Alpha decay",
      "Beta decay",
      "Gamma decay",
      "Neutron emission"
    ],
    "oh": [
      "अल्फा क्षय",
      "बीटा क्षय",
      "गामा क्षय",
      "न्यूट्रॉन उत्सर्जन"
    ],
    "a": 0,
    "e": "Alpha decay emits a helium nucleus, reducing atomic number by 2 and mass number by 4."
  },
  {
    "q": "In beta-minus decay, what happens to a neutron?",
    "hi": "बीटा-माइनस क्षय में न्यूट्रॉन के साथ क्या होता है?",
    "o": [
      "It becomes a proton",
      "It becomes an alpha particle",
      "It disappears without change",
      "It becomes a gamma photon"
    ],
    "oh": [
      "यह प्रोटॉन में बदल जाता है",
      "यह अल्फा कण बन जाता है",
      "यह बिना परिवर्तन के गायब हो जाता है",
      "यह गामा फोटॉन बन जाता है"
    ],
    "a": 0,
    "e": "The notes state that a neutron converts into a proton and emits a beta-minus electron."
  },
  {
    "q": "Which radiation changes neither the proton/neutron numbers nor the mass number of the nucleus?",
    "hi": "कौन-सा विकिरण न तो प्रोटॉन/न्यूट्रॉन की संख्या बदलता है और न ही द्रव्यमान संख्या?",
    "o": [
      "Alpha",
      "Beta",
      "Gamma",
      "Neutron"
    ],
    "oh": [
      "अल्फा",
      "बीटा",
      "गामा",
      "न्यूट्रॉन"
    ],
    "a": 2,
    "e": "Gamma emission changes the nucleus's energy state without changing these numbers."
  },
  {
    "q": "Which organization is abbreviated as BIMSTEC?",
    "hi": "BIMSTEC का पूर्ण रूप क्या है?",
    "o": [
      "Bay of Bengal Multi-Sectoral Technical and Economic Cooperation",
      "Bay International Maritime Security Trade Economic Council",
      "Bilateral Indian Maritime and Security Trade Economic Cooperation",
      "Bay of Bengal International Scientific and Technical Economic Committee"
    ],
    "oh": [
      "बंगाल की खाड़ी बहु-क्षेत्रीय तकनीकी और आर्थिक सहयोग",
      "बे इंटरनेशनल मैरीटाइम सिक्योरिटी ट्रेड इकोनॉमिक काउंसिल",
      "द्विपक्षीय भारतीय समुद्री और सुरक्षा व्यापार आर्थिक सहयोग",
      "बंगाल की खाड़ी अंतरराष्ट्रीय वैज्ञानिक एवं तकनीकी आर्थिक समिति"
    ],
    "a": 0,
    "e": "BIMSTEC stands for Bay of Bengal Multi-Sectoral Technical and Economic Cooperation."
  },
  {
    "q": "Where is the BIMSTEC headquarters located?",
    "hi": "BIMSTEC का मुख्यालय कहाँ स्थित है?",
    "o": [
      "New Delhi",
      "Dhaka",
      "Kathmandu",
      "Bangkok"
    ],
    "oh": [
      "नई दिल्ली",
      "ढाका",
      "काठमांडू",
      "बैंकॉक"
    ],
    "a": 1,
    "e": "The notes list Dhaka, Bangladesh as the headquarters."
  },
  {
    "q": "Which star constellation is also known as Saptarishi in India?",
    "hi": "भारत में सप्तऋषि के नाम से कौन-सा तारामंडल जाना जाता है?",
    "o": [
      "Ursa Major",
      "Orion",
      "Cygnus",
      "Cassiopeia"
    ],
    "oh": [
      "अर्सा मेजर",
      "ओरियन",
      "सिग्नस",
      "कैसिओपिया"
    ],
    "a": 0,
    "e": "Ursa Major is identified with Saptarishi in the notes."
  },
  {
    "q": "Which constellation is described as having a distinctive W shape?",
    "hi": "किस तारामंडल का आकार विशिष्ट W जैसा बताया गया है?",
    "o": [
      "Cassiopeia",
      "Ursa Major",
      "Orion",
      "Cygnus"
    ],
    "oh": [
      "कैसिओपिया",
      "अर्सा मेजर",
      "ओरियन",
      "सिग्नस"
    ],
    "a": 0,
    "e": "Cassiopeia is described as W-shaped."
  },
  {
    "q": "Which type of star can end as a neutron star or black hole after a supernova, according to the notes?",
    "hi": "अध्ययन सामग्री के अनुसार सुपरनोवा के बाद किस प्रकार का तारा न्यूट्रॉन स्टार या ब्लैक होल बन सकता है?",
    "o": [
      "Very massive star",
      "Small average star",
      "White dwarf",
      "Planet"
    ],
    "oh": [
      "अत्यधिक विशाल तारा",
      "छोटा औसत तारा",
      "श्वेत वामन",
      "ग्रह"
    ],
    "a": 0,
    "e": "The notes describe massive stars evolving through red supergiant and supernova stages to a neutron star or black hole."
  },
  {
    "q": "Which is an example of a hotspot volcano mentioned in the notes?",
    "hi": "अध्ययन सामग्री में हॉटस्पॉट ज्वालामुखी का कौन-सा उदाहरण दिया गया है?",
    "o": [
      "Hawaii",
      "Mariana Trench",
      "San Andreas Fault",
      "Himalayas"
    ],
    "oh": [
      "हवाई",
      "मारियाना ट्रेंच",
      "सैन एंड्रियास फॉल्ट",
      "हिमालय"
    ],
    "a": 0,
    "e": "Hawaii is given as a hotspot example; Yellowstone is another example in the notes."
  },
  {
    "q": "What is a caldera?",
    "hi": "कैल्डेरा क्या है?",
    "o": [
      "A large volcanic depression formed after collapse of a magma chamber",
      "A narrow ocean trench",
      "A crescent dune",
      "A glacial lake"
    ],
    "oh": [
      "मैग्मा कक्ष के धंसने के बाद बनी बड़ी ज्वालामुखीय गर्त",
      "एक संकरी महासागरीय गर्त",
      "एक अर्धचंद्राकार टीला",
      "एक हिमानी झील"
    ],
    "a": 0,
    "e": "The notes define a caldera as a large volcanic depression formed after a magma chamber empties and collapses."
  },
  {
    "q": "Consider the following statements about the Earth's crust:\n1. Oceanic crust is generally thinner than continental crust.\n2. Oceanic crust is generally denser than continental crust.\n3. Continental crust is mainly composed of basalt.",
    "hi": "पृथ्वी की भूपर्पटी के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. महासागरीय भूपर्पटी सामान्यतः महाद्वीपीय भूपर्पटी से पतली होती है।\n2. महासागरीय भूपर्पटी सामान्यतः महाद्वीपीय भूपर्पटी से अधिक घनी होती है।\n3. महाद्वीपीय भूपर्पटी मुख्यतः बेसाल्ट से बनी होती है।",
    "o": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "oh": [
      "केवल 1 और 2",
      "केवल 2 और 3",
      "केवल 1 और 3",
      "1, 2 और 3"
    ],
    "a": 0,
    "e": "Statements 1 and 2 are consistent with the source material. Statement 3 is incorrect."
  },
  {
    "q": "Consider the following statements about tides:\n1. The Moon's gravitational attraction is an important cause of tides.\n2. The Sun also contributes to tidal forces.\n3. Spring tides occur when the Sun, Earth and Moon are positioned at approximately 90° to one another.",
    "hi": "ज्वार-भाटा के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. चंद्रमा का गुरुत्वाकर्षण ज्वार-भाटा का एक महत्वपूर्ण कारण है।\n2. सूर्य भी ज्वारीय बल में योगदान देता है।\n3. जब सूर्य, पृथ्वी और चंद्रमा लगभग 90° पर स्थित होते हैं, तब वसंत ज्वार आता है।",
    "o": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "oh": [
      "केवल 1 और 2",
      "केवल 2 और 3",
      "केवल 1 और 3",
      "1, 2 और 3"
    ],
    "a": 0,
    "e": "The Moon and Sun both contribute to tides. Approximately 90° alignment is associated with neap tides, not spring tides."
  },
  {
    "q": "Consider the following statements about winds:\n1. In the Northern Hemisphere, the Coriolis effect deflects moving air to the right.\n2. The Coriolis effect is zero at the Equator.\n3. Westerlies are associated with the belt between about 30° and 60° latitudes.",
    "hi": "पवनों के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. उत्तरी गोलार्ध में कोरिओलिस प्रभाव गतिशील वायु को दाईं ओर मोड़ता है।\n2. भूमध्य रेखा पर कोरिओलिस प्रभाव शून्य होता है।\n3. पछुआ पवनें लगभग 30° से 60° अक्षांशों के बीच पाई जाती हैं।",
    "o": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "oh": [
      "केवल 1 और 2",
      "केवल 2 और 3",
      "केवल 1 और 3",
      "1, 2 और 3"
    ],
    "a": 3,
    "e": "All three statements are consistent with the source material."
  },
  {
    "q": "Consider the following statements about radioactive emissions:\n1. Alpha decay changes the mass number and atomic number.\n2. In beta-minus decay, a neutron changes into a proton.\n3. Gamma emission changes the mass number of the nucleus.",
    "hi": "रेडियोधर्मी उत्सर्जन के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. अल्फा क्षय में द्रव्यमान संख्या और परमाणु संख्या बदलती है।\n2. बीटा-माइनस क्षय में न्यूट्रॉन प्रोटॉन में बदल जाता है।\n3. गामा उत्सर्जन नाभिक की द्रव्यमान संख्या बदलता है।",
    "o": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "oh": [
      "केवल 1 और 2",
      "केवल 2 और 3",
      "केवल 1 और 3",
      "1, 2 और 3"
    ],
    "a": 0,
    "e": "Alpha decay changes both atomic number and mass number. Beta-minus converts a neutron into a proton. Gamma emission does not change mass number."
  }
];
