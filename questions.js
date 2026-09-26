// questions.js
// PARMAR SSC - GK PYQ Series 6, Lecture 6 (Geography / भूगोल)
// Bilingual Quiz Data — 100 Questions (English + Hindi)
// ~30 statement/assertion-based questions included (type: "statement")
//
// Usage:
//   import questions from './questions.js';
//   // pick language at test-start: 'en' or 'hi'
//   const lang = 'hi'; // or 'en'
//   questions.forEach(q => {
//     console.log(q.question[lang]);
//     q.options[lang].forEach((opt, i) => console.log(i, opt));
//   });
//
// Each question object shape:
// {
//   id: Number,
//   category: String,
//   type: "mcq" | "statement",
//   question: { en: String, hi: String },
//   options:  { en: [String, String, String, String], hi: [String, String, String, String] },
//   answer: Number,        // index (0-based) of correct option
//   explanation: { en: String, hi: String }
// }

const questions = [

// ================= ATMOSPHERE COMPOSITION (1-8) =================
{
  id: 1, category: "Atmosphere", type: "mcq",
  question: { en: "What is the approximate concentration of oxygen in Earth's atmosphere?", hi: "पृथ्वी के वायुमंडल में ऑक्सीजन की सांद्रता लगभग कितनी है?" },
  options: { en: ["18%", "21%", "78%", "0.9%"], hi: ["18%", "21%", "78%", "0.9%"] },
  answer: 1,
  explanation: { en: "Oxygen makes up about 21% of the atmosphere, after Nitrogen (78%).", hi: "नाइट्रोजन (78%) के बाद ऑक्सीजन वायुमंडल का लगभग 21% भाग बनाती है।" }
},
{
  id: 2, category: "Atmosphere", type: "mcq",
  question: { en: "Which gas forms the largest share of Earth's atmosphere?", hi: "पृथ्वी के वायुमंडल में किस गैस का सबसे बड़ा हिस्सा है?" },
  options: { en: ["Oxygen", "Nitrogen", "Argon", "Carbon Dioxide"], hi: ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "कार्बन डाइऑक्साइड"] },
  answer: 1,
  explanation: { en: "Nitrogen constitutes about 78% of the atmosphere.", hi: "नाइट्रोजन वायुमंडल का लगभग 78% भाग बनाती है।" }
},
{
  id: 3, category: "Atmosphere", type: "mcq",
  question: { en: "Approximately what percentage of the atmosphere is Argon (Ar)?", hi: "आर्गन (Ar) वायुमंडल का लगभग कितना प्रतिशत है?" },
  options: { en: ["0.036%", "0.9%", "21%", "0.0018%"], hi: ["0.036%", "0.9%", "21%", "0.0018%"] },
  answer: 1,
  explanation: { en: "Argon is about 0.9% of the atmosphere.", hi: "आर्गन वायुमंडल का लगभग 0.9% है।" }
},
{
  id: 4, category: "Atmosphere", type: "mcq",
  question: { en: "Argon is commonly used in which of the following?", hi: "आर्गन का उपयोग सामान्यतः निम्नलिखित में से किसमें होता है?" },
  options: { en: ["Double-pane window glazing & bulbs", "Fire extinguishers", "Refrigeration", "Welding torches only"], hi: ["डबल पेन खिड़की के शीशों व बल्ब में", "अग्निशामक यंत्रों में", "प्रशीतन में", "केवल वेल्डिंग टॉर्च में"] },
  answer: 0,
  explanation: { en: "Argon is used in double-pane window glazing and light bulbs.", hi: "आर्गन का उपयोग डबल पेन खिड़की के शीशों और बल्ब में होता है।" }
},
{
  id: 5, category: "Atmosphere", type: "statement",
  question: { en: "Consider the following statements about noble gases (Group 18):\n1. Helium, Neon, Argon, Krypton, Xenon and Radon belong to this group.\n2. These gases are chemically highly reactive.\nWhich of the statements given above is/are correct?", hi: "उत्कृष्ट गैसों (18वां समूह) के बारे में निम्नलिखित कथनों पर विचार करें:\n1. हीलियम, नियॉन, आर्गन, क्रिप्टन, जीनॉन और रेडॉन इस समूह से संबंधित हैं।\n2. ये गैसें रासायनिक रूप से अत्यधिक क्रियाशील हैं।\nउपरोक्त में से कौन सा/से कथन सही है/हैं?" },
  options: { en: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], hi: ["केवल 1", "केवल 2", "1 और 2 दोनों", "न तो 1 और न ही 2"] },
  answer: 0,
  explanation: { en: "Noble gases are inert (chemically unreactive), so statement 2 is wrong.", hi: "उत्कृष्ट गैसें अक्रिय (रासायनिक रूप से अक्रियाशील) होती हैं, इसलिए कथन 2 गलत है।" }
},
{
  id: 6, category: "Atmosphere", type: "mcq",
  question: { en: "Carbon dioxide turns limewater milky and produces which effect?", hi: "कार्बन डाइऑक्साइड चूने के पानी को दूधिया कर देती है और कौन सा प्रभाव देती है?" },
  options: { en: ["A sweet smell", "Intense effervescence/foam", "No visible change", "A blue color"], hi: ["मीठी गंध", "तीव्र बुदबुदाहट/झाग", "कोई दृश्य परिवर्तन नहीं", "नीला रंग"] },
  answer: 1,
  explanation: { en: "CO2 causes intense effervescence or foam when reacting with limewater.", hi: "CO2 चूने के पानी के साथ अभिक्रिया करने पर तीव्र बुदबुदाहट या झाग पैदा करती है।" }
},
{
  id: 7, category: "Atmosphere", type: "mcq",
  question: { en: "Which of these is NOT one of the noble gases (memory trick 'Hema Neha aur Karina')?", hi: "निम्नलिखित में से कौन उत्कृष्ट गैसों ('हेमा नेहा और करीना' स्मृति चाल) में से नहीं है?" },
  options: { en: ["Helium", "Xenon", "Nitrogen", "Radon"], hi: ["हीलियम", "जीनॉन", "नाइट्रोजन", "रेडॉन"] },
  answer: 2,
  explanation: { en: "Nitrogen is not a noble gas; it belongs to Group 15.", hi: "नाइट्रोजन उत्कृष्ट गैस नहीं है; यह समूह 15 से संबंधित है।" }
},
{
  id: 8, category: "Atmosphere", type: "mcq",
  question: { en: "Approximately what percentage of the atmosphere is Carbon Dioxide (CO2)?", hi: "कार्बन डाइऑक्साइड (CO2) वायुमंडल का लगभग कितना प्रतिशत है?" },
  options: { en: ["0.036%", "3.6%", "21%", "0.9%"], hi: ["0.036%", "3.6%", "21%", "0.9%"] },
  answer: 0,
  explanation: { en: "CO2 is about 0.036% of the atmosphere.", hi: "CO2 वायुमंडल का लगभग 0.036% है।" }
},

// ================= SOLAR PHENOMENA / ATMOSPHERIC LAYERS (9-14) =================
{
  id: 9, category: "Solar & Atmosphere Layers", type: "mcq",
  question: { en: "During solar storms, what is the most likely cause of temperature rise in the thermosphere?", hi: "सौर तूफानों के दौरान तापमंडल में तापमान वृद्धि का सबसे संभावित कारण क्या है?" },
  options: { en: ["Volcanic ash", "UV and X-ray absorption", "Ocean currents", "Magnetic reversal"], hi: ["ज्वालामुखी राख", "UV और एक्स-रे अवशोषण", "महासागरीय धाराएं", "चुंबकीय उत्क्रमण"] },
  answer: 1,
  explanation: { en: "Absorption of UV and X-ray radiation causes temperature rise in the thermosphere.", hi: "UV और एक्स-रे विकिरण के अवशोषण से तापमंडल में तापमान वृद्धि होती है।" }
},
{
  id: 10, category: "Solar & Atmosphere Layers", type: "mcq",
  question: { en: "What is mainly responsible for the Aurora near Earth's poles?", hi: "पृथ्वी के ध्रुवों के निकट ऑरोरा के लिए मुख्य रूप से कौन सी घटना जिम्मेदार है?" },
  options: { en: ["Earthquake waves", "Electrical discharge", "Solar wind & magnetic field interaction", "Volcanic ash spread"], hi: ["भूकंप की लहरें", "बिजली का निर्वहन", "सौर वायु और चुंबकीय क्षेत्र की परस्पर क्रिया", "ज्वालामुखीय राख का फैलाव"] },
  answer: 2,
  explanation: { en: "Aurora forms from the interaction of solar wind with Earth's magnetic field.", hi: "ऑरोरा सौर वायु और पृथ्वी के चुंबकीय क्षेत्र की परस्पर क्रिया से बनता है।" }
},
{
  id: 11, category: "Solar & Atmosphere Layers", type: "statement",
  question: { en: "Evaluate the following statements about atmospheric layers:\n1. Most weather phenomena occur in the stratosphere.\n2. The ozone layer is mainly found in the troposphere.\nWhich of the above is/are correct?", hi: "वायुमंडलीय परतों के संबंध में इन कथनों का मूल्यांकन करें:\n1. अधिकांश मौसम संबंधी घटनाएं समताप मंडल में होती हैं।\n2. ओजोन परत मुख्य रूप से क्षोभमंडल में पाई जाती है।\nउपरोक्त में से कौन सा/से सही है/हैं?" },
  options: { en: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], hi: ["केवल कथन 1", "केवल कथन 2", "1 और 2 दोनों", "न तो 1 और न ही 2"] },
  answer: 3,
  explanation: { en: "Weather occurs in the troposphere and ozone lies in the stratosphere — both statements are wrong.", hi: "मौसम की घटनाएं क्षोभमंडल में होती हैं और ओजोन समतापमंडल में मिलती है — दोनों कथन गलत हैं।" }
},
{
  id: 12, category: "Solar & Atmosphere Layers", type: "mcq",
  question: { en: "Up to approximately what altitude does Earth's atmosphere extend (Kármán line)?", hi: "पृथ्वी का वायुमंडल लगभग कितनी ऊंचाई तक पहुंचता है (कारमन रेखा)?" },
  options: { en: ["100 km", "1000 km", "10,000 km", "100,000 km"], hi: ["100 km", "1000 km", "10,000 km", "100,000 km"] },
  answer: 0,
  explanation: { en: "The Kármán line, the boundary of space, is at about 100 km.", hi: "कारमन रेखा, अंतरिक्ष की सीमा, लगभग 100 km पर है।" }
},
{
  id: 13, category: "Solar & Atmosphere Layers", type: "mcq",
  question: { en: "Which atmospheric layer is coldest and where meteors typically burn up?", hi: "कौन सी वायुमंडलीय परत सबसे ठंडी है और जहां उल्कापिंड आमतौर पर जलकर नष्ट हो जाते हैं?" },
  options: { en: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], hi: ["क्षोभमंडल", "समतापमंडल", "मध्यमंडल", "तापमंडल"] },
  answer: 2,
  explanation: { en: "The mesosphere is the coldest layer where meteoroids burn up.", hi: "मध्यमंडल सबसे ठंडी परत है जहां उल्कापिंड जलकर नष्ट हो जाते हैं।" }
},
{
  id: 14, category: "Solar & Atmosphere Layers", type: "mcq",
  question: { en: "India's solar mission Aditya-L1 is positioned at approximately what distance from Earth?", hi: "भारत का सौर मिशन आदित्य-L1 पृथ्वी से लगभग कितनी दूरी पर स्थित है?" },
  options: { en: ["1.5 lakh km", "15 lakh km", "150 lakh km", "1500 lakh km"], hi: ["1.5 लाख किमी", "15 लाख किमी", "150 लाख किमी", "1500 लाख किमी"] },
  answer: 1,
  explanation: { en: "Aditya-L1 is at the L1 Lagrange point, about 15 lakh km from Earth.", hi: "आदित्य-L1 L1 लैग्रेंज बिंदु पर, पृथ्वी से लगभग 15 लाख किमी दूर स्थित है।" }
},

// ================= RAMSAR SITES / WETLANDS (15-20) =================
{
  id: 15, category: "Ramsar Sites", type: "mcq",
  question: { en: "Which Ramsar site in India is recognized for hosting the largest population of Sarus Crane?", hi: "भारत में सारस क्रेन की सबसे बड़ी आबादी की मेजबानी के लिए किस रामसर स्थल को मान्यता दी गई है?" },
  options: { en: ["Chilika Lake", "Sarsai Nawar Jheel", "Sambhar Lake", "Loktak Lake"], hi: ["चिल्का झील", "सरसई नावर झील", "सांभर झील", "लोकटक झील"] },
  answer: 1,
  explanation: { en: "Sarsai Nawar wetland, Uttar Pradesh is recognized for Sarus Crane population.", hi: "सरसई नावर आर्द्रभूमि, उत्तर प्रदेश सारस क्रेन की आबादी के लिए मान्यता प्राप्त है।" }
},
{
  id: 16, category: "Ramsar Sites", type: "statement",
  question: { en: "Consider the following statements:\n1. Chilika Lake and Keoladeo National Park were the first Ramsar sites named in India in 1981.\n2. The Ramsar Convention was signed in 1971 in Iran.\nWhich of the statements above is/are correct?", hi: "निम्नलिखित कथनों पर विचार करें:\n1. चिल्का झील और केवलादेव राष्ट्रीय उद्यान को 1981 में भारत के पहले रामसर स्थलों के रूप में नामित किया गया।\n2. रामसर कन्वेंशन पर 1971 में ईरान में हस्ताक्षर किए गए थे।\nउपरोक्त में से कौन सा/से कथन सही है/हैं?" },
  options: { en: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], hi: ["केवल 1", "केवल 2", "1 और 2 दोनों", "न तो 1 और न ही 2"] },
  answer: 2,
  explanation: { en: "Both statements are historically accurate.", hi: "दोनों कथन ऐतिहासिक रूप से सही हैं।" }
},
{
  id: 17, category: "Ramsar Sites", type: "mcq",
  question: { en: "Which lake is India's largest inland saline lake?", hi: "भारत की सबसे बड़ी अंतर्देशीय खारे पानी की झील कौन सी है?" },
  options: { en: ["Sambhar Lake", "Wular Lake", "Chilika Lake", "Loktak Lake"], hi: ["सांभर झील", "वुलर झील", "चिल्का झील", "लोकटक झील"] },
  answer: 0,
  explanation: { en: "Sambhar Lake is India's largest saline lake (largest inland wetland).", hi: "सांभर झील भारत की सबसे बड़ी खारे पानी की झील (सबसे बड़ी अंतर्देशीय आर्द्रभूमि) है।" }
},
{
  id: 18, category: "Ramsar Sites", type: "mcq",
  question: { en: "Which is India's largest saltwater (brackish) lake overall?", hi: "समग्र रूप से भारत की सबसे बड़ी खारे पानी की झील कौन सी है?" },
  options: { en: ["Wular Lake", "Chilika Lake", "Loktak Lake", "Pulicat Lake"], hi: ["वुलर झील", "चिल्का झील", "लोकटक झील", "पुलिकट झील"] },
  answer: 1,
  explanation: { en: "Chilika Lake, Odisha, is India's largest brackish water lake.", hi: "चिल्का झील, ओडिशा, भारत की सबसे बड़ी खारे पानी की झील है।" }
},
{
  id: 19, category: "Ramsar Sites", type: "mcq",
  question: { en: "Loktak Lake, known for its 'Phumdis' (floating vegetation), is located in which state?", hi: "अपने 'फुमदी' (तैरती वनस्पति) के लिए प्रसिद्ध लोकटक झील किस राज्य में स्थित है?" },
  options: { en: ["Manipur", "Assam", "Tripura", "Mizoram"], hi: ["मणिपुर", "असम", "त्रिपुरा", "मिजोरम"] },
  answer: 0,
  explanation: { en: "Loktak Lake is in Manipur, home to Keibul Lamjao National Park and the Sangai deer.", hi: "लोकटक झील मणिपुर में है, जो केबुल लामजाओ राष्ट्रीय उद्यान और संगाई हिरण का घर है।" }
},
{
  id: 20, category: "Ramsar Sites", type: "mcq",
  question: { en: "Which sites in India are listed under the Montreux Record (since 1990)?", hi: "भारत में कौन से स्थल मॉन्ट्रेक्स रिकॉर्ड (1990 से) के तहत सूचीबद्ध हैं?" },
  options: { en: ["Chilika & Sambhar", "Loktak Lake & Keoladeo National Park", "Wular & Pulicat", "Bhoj Wetland & Nalsarovar"], hi: ["चिल्का और सांभर", "लोकटक झील और केवलादेव राष्ट्रीय उद्यान", "वुलर और पुलिकट", "भोज आर्द्रभूमि और नलसरोवर"] },
  answer: 1,
  explanation: { en: "Loktak Lake and Keoladeo National Park are listed under the Montreux Record since 1990.", hi: "लोकटक झील और केवलादेव राष्ट्रीय उद्यान मॉन्ट्रेक्स रिकॉर्ड (1990 से) के तहत सूचीबद्ध हैं।" }
},

// ================= DAMS (21-26) =================
{
  id: 21, category: "Dams", type: "mcq",
  question: { en: "Rihand Dam (also known as Govind Ballabh Pant Sagar Dam) is located in which district?", hi: "रिहंद बांध (जिसे गोविंद बल्लभ पंत सागर बांध भी कहा जाता है) किस जिले में स्थित है?" },
  options: { en: ["Sonbhadra, UP", "Udaipur, Rajasthan", "Singrauli, MP", "Nashik, Maharashtra"], hi: ["सोनभद्र, उत्तर प्रदेश", "उदयपुर, राजस्थान", "सिंगरौली, मध्य प्रदेश", "नासिक, महाराष्ट्र"] },
  answer: 0,
  explanation: { en: "Rihand Dam is in Sonbhadra district, Uttar Pradesh, India's biggest artificial lake by volume.", hi: "रिहंद बांध उत्तर प्रदेश के सोनभद्र जिले में है, जो आयतन के हिसाब से भारत की सबसे बड़ी कृत्रिम झील है।" }
},
{
  id: 22, category: "Dams", type: "statement",
  question: { en: "Consider the following statements about dams:\n1. A dam always refers to a concrete or structural wall built to hold back water.\n2. Spillways in dams help control water flow intermittently or continuously.\n3. Dams can be classified based on structure, purpose, and height.\nWhich of the above statements is/are correct?", hi: "बांधों के बारे में निम्नलिखित में से कौन सा/से कथन सही है/हैं?\n1. बांध का तात्पर्य हमेशा पानी को रोकने के लिए बनाई गई कंक्रीट या संरचनात्मक दीवार से होता है।\n2. बांधों में स्पिलवे (जलमार्ग) पानी के प्रवाह को रुक-रुक कर या लगातार नियंत्रित करने में मदद करते हैं।\n3. संरचना, उद्देश्य और ऊंचाई के आधार पर बांधों को वर्गीकृत किया जा सकता है।" },
  options: { en: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], hi: ["1 और 2 दोनों", "2 और 3 दोनों", "1 और 3 दोनों", "1, 2 और 3 सभी सही हैं"] },
  answer: 1,
  explanation: { en: "A dam need not always be concrete (e.g. earthen dams); statement 1 is incorrect. Statements 2 and 3 are correct.", hi: "बांध हमेशा कंक्रीट का नहीं होता (जैसे मिट्टी के बांध); कथन 1 गलत है। कथन 2 और 3 सही हैं।" }
},
{
  id: 23, category: "Dams", type: "mcq",
  question: { en: "Which dam is India's biggest dam by volume of water storage capacity (10.6 billion cubic meters)?", hi: "जल भंडारण क्षमता (10.6 बिलियन क्यूबिक मीटर) के आयतन के हिसाब से भारत का सबसे बड़ा बांध कौन सा है?" },
  options: { en: ["Bhakra Nangal", "Tehri Dam", "Rihand Dam", "Hirakud Dam"], hi: ["भाखड़ा नांगल", "टिहरी बांध", "रिहंद बांध", "हीराकुंड बांध"] },
  answer: 2,
  explanation: { en: "Rihand Dam has capacity of 10.6 billion cubic meters, the largest artificial lake in India by volume.", hi: "रिहंद बांध की क्षमता 10.6 बिलियन क्यूबिक मीटर है, जो आयतन के हिसाब से भारत की सबसे बड़ी कृत्रिम झील है।" }
},
{
  id: 24, category: "Dams", type: "mcq",
  question: { en: "Dhebar Lake (Jaisamand Lake), India's second largest artificial lake by volume, is in which district?", hi: "ढेबर झील (जयसमंद झील), आयतन के मामले में भारत की दूसरी सबसे बड़ी कृत्रिम झील, किस जिले में है?" },
  options: { en: ["Udaipur, Rajasthan", "Sonbhadra, UP", "Jaipur, Rajasthan", "Bhopal, MP"], hi: ["उदयपुर, राजस्थान", "सोनभद्र, उत्तर प्रदेश", "जयपुर, राजस्थान", "भोपाल, मध्य प्रदेश"] },
  answer: 0,
  explanation: { en: "Dhebar/Jaisamand Lake is in Udaipur district, Rajasthan.", hi: "ढेबर/जयसमंद झील राजस्थान के उदयपुर जिले में स्थित है।" }
},
{
  id: 25, category: "Dams", type: "mcq",
  question: { en: "Which is India's tallest dam overall (combining all measures)?", hi: "कुल मिलाकर भारत का सबसे ऊंचा बांध कौन सा है?" },
  options: { en: ["Hirakud Dam", "Bhakra Nangal Dam", "Tehri Dam", "Rihand Dam"], hi: ["हीराकुंड बांध", "भाखड़ा नांगल बांध", "टिहरी बांध", "रिहंद बांध"] },
  answer: 2,
  explanation: { en: "Tehri Dam on the Bhagirathi River, Uttarakhand, is India's tallest dam overall.", hi: "उत्तराखंड में भागीरथी नदी पर स्थित टिहरी बांध कुल मिलाकर भारत का सबसे ऊंचा बांध है।" }
},
{
  id: 26, category: "Dams", type: "mcq",
  question: { en: "Which dam is India's longest dam, situated on the Mahanadi river?", hi: "महानदी पर स्थित भारत का सबसे लंबा बांध कौन सा है?" },
  options: { en: ["Hirakud Dam", "Tehri Dam", "Bhakra Nangal", "Sardar Sarovar"], hi: ["हीराकुंड बांध", "टिहरी बांध", "भाखड़ा नांगल", "सरदार सरोवर"] },
  answer: 0,
  explanation: { en: "Hirakud Dam, Odisha, on the Mahanadi, is India's longest dam.", hi: "महानदी पर स्थित हीराकुंड बांध, ओडिशा, भारत का सबसे लंबा बांध है।" }
},

// ================= ROCKS / GEOMORPHOLOGY (27-34) =================
{
  id: 27, category: "Geomorphology", type: "mcq",
  question: { en: "The Vindhyan rock system is well known for the production of which resource?", hi: "विंध्यन चट्टान प्रणाली निम्नलिखित में से किसके उत्पादन के लिए जानी जाती है?" },
  options: { en: ["Manganese", "Iron ore and coal", "Limestone", "Bauxite"], hi: ["मैंगनीज", "लौह अयस्क और कोयला", "चूना पत्थर", "बॉक्साइट"] },
  answer: 2,
  explanation: { en: "Limestone is a sedimentary rock associated with the Vindhyan rock system.", hi: "चूना पत्थर एक अवसादी चट्टान है जो विंध्यन चट्टान प्रणाली से जुड़ी है।" }
},
{
  id: 28, category: "Geomorphology", type: "mcq",
  question: { en: "In which kind of geological formation are gorges most developed?", hi: "किस प्रकार की भूवैज्ञानिक संरचना में गॉर्ज सबसे अधिक विकसित होते हैं?" },
  options: { en: ["Soft sediment", "Hard rocks", "Ice cracks", "Volcanic ash"], hi: ["नरम तलछट", "कठोर चट्टानें", "हिम दराज़", "ज्वालामुखी राख"] },
  answer: 1,
  explanation: { en: "Gorges develop best in hard, resistant rocks.", hi: "गॉर्ज कठोर, प्रतिरोधी चट्टानों में सबसे अधिक विकसित होते हैं।" }
},
{
  id: 29, category: "Geomorphology", type: "statement",
  question: { en: "Consider the following statements:\n1. The youthful stage of a river is dominated by erosional features like gorges and waterfalls.\n2. The mature stage is a transitional period marked by features like meanders.\n3. The old stage is dominated by erosional features like canyons.\nWhich statement(s) above is/are correct?", hi: "निम्नलिखित कथनों पर विचार करें:\n1. नदी की युवा अवस्था में गॉर्ज और जलप्रपात जैसी अपरदनात्मक विशेषताओं की प्रधानता होती है।\n2. प्रौढ़ अवस्था एक संक्रमण काल है जिसमें विसर्प जैसी आकृतियाँ बनती हैं।\n3. वृद्धावस्था अपरदनात्मक विशेषताओं जैसे कैन्यन की प्रधानता वाली होती है।\nउपरोक्त में से कौन सा/से कथन सही है/हैं?" },
  options: { en: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], hi: ["केवल 1 और 2", "केवल 2 और 3", "केवल 1 और 3", "1, 2 और 3 सभी"] },
  answer: 0,
  explanation: { en: "Old stage is dominated by depositional features like delta, floodplains and oxbow lakes — not erosional.", hi: "वृद्धावस्था में डेल्टा, बाढ़ के मैदान और गोखुर झील जैसी निक्षेपण विशेषताओं की प्रधानता होती है — अपरदनात्मक नहीं।" }
},
{
  id: 30, category: "Geomorphology", type: "mcq",
  question: { en: "Which type of waterfall is described as a short-height fall where water descends over a series of rocky steps?", hi: "किस प्रकार का जलप्रपात कम ऊंचाई वाला होता है जहां जल चट्टानी सीढ़ियों की एक श्रृंखला से होकर नीचे गिरता है?" },
  options: { en: ["Sopani (Cascade)", "Mahaprapaat (Cataract)", "Cataract only", "Rapids"], hi: ["सोपानी (कैस्केड)", "महाप्रपात (कैटरैक्ट)", "केवल कैटरैक्ट", "रैपिड्स"] },
  answer: 0,
  explanation: { en: "Sopani (Cascade) is a low-height fall descending over rocky steps.", hi: "सोपानी (कैस्केड) कम ऊंचाई वाला झरना है जो चट्टानी सीढ़ियों से होकर नीचे गिरता है।" }
},
{
  id: 31, category: "Geomorphology", type: "mcq",
  question: { en: "Which feature is typically bigger, wider, deeper with stepped walls, in contrast to narrower, steeper gorges?", hi: "कैन्यन आमतौर पर बड़ा, चौड़ा, गहरा और सीढ़ीदार दीवार वाला होता है, जबकि निम्नलिखित में से अधिक संकरा और ढलानी होता है?" },
  options: { en: ["Canyon", "Gorge", "Delta", "Floodplain"], hi: ["कैन्यन", "गॉर्ज", "डेल्टा", "बाढ़ का मैदान"] },
  answer: 1,
  explanation: { en: "Gorges are narrower, more steep-sided and enclosed compared to canyons.", hi: "गॉर्ज कैन्यन की तुलना में अधिक संकरा, ढलानी और घिरा हुआ होता है।" }
},
{
  id: 32, category: "Geomorphology", type: "mcq",
  question: { en: "What causes the development of meanders (visarp) in a river?", hi: "नदी में विसर्प का विकास किस कारण से होता है?" },
  options: { en: ["High altitude origin", "Sudden tectonic uplift", "Lateral erosion on flat terrain", "Ocean current effect"], hi: ["उच्च ऊंचाई पर उत्पत्ति", "अचानक विवर्तनिक उत्थान", "समतल भूभाग में पार्श्व अपरदन", "महासागरीय धारा का प्रभाव"] },
  answer: 2,
  explanation: { en: "Meanders develop due to lateral erosion in flat terrain.", hi: "विसर्प का विकास समतल भूभाग में पार्श्व अपरदन के कारण होता है।" }
},
{
  id: 33, category: "Geomorphology", type: "mcq",
  question: { en: "Cut bank (erosion on outer bend) and point bar (sand deposition on inner bend) are key features of which river form?", hi: "कटाव तट (बाहरी मोड़ पर अपरदन) और बिंदु बार (आंतरिक मोड़ पर रेत का निक्षेपण) किस नदी रूप की प्रमुख विशेषताएं हैं?" },
  options: { en: ["Meandering rivers", "Braided rivers", "Straight channels", "Deltas"], hi: ["विसर्पी नदियां", "गुंफित नदियां", "सीधी नहरें", "डेल्टा"] },
  answer: 0,
  explanation: { en: "Cut banks and point bars are the hallmark of meandering rivers.", hi: "कटाव तट और बिंदु बार विसर्पी नदियों की प्रमुख विशेषताएं हैं।" }
},
{
  id: 34, category: "Geomorphology", type: "mcq",
  question: { en: "A braided river system is characterized by what feature?", hi: "गुंफित नदी प्रणाली किस विशेषता से पहचानी जाती है?" },
  options: { en: ["A single deep channel", "Main flow divided into interwoven channels separated by temporary islands", "Absence of sediment", "Vertical waterfalls"], hi: ["एकल गहरी नहर", "मुख्य प्रवाह अस्थायी द्वीपों से अलग हुई गुंथी धाराओं में विभाजित", "तलछट की अनुपस्थिति", "ऊर्ध्वाधर जलप्रपात"] },
  answer: 1,
  explanation: { en: "In a braided river, the main flow divides into interwoven channels separated by temporary islands or sediment bars.", hi: "गुंफित नदी में मुख्य प्रवाह अस्थायी द्वीपों या तलछट के टीलों से अलग हुई आपस में गुंथी धाराओं में विभाजित हो जाता है।" }
},

// ================= KARST TOPOGRAPHY (35-40) =================
{
  id: 35, category: "Karst Topography", type: "mcq",
  question: { en: "Select the correctly matched cave feature and its formation:", hi: "सही सुमेलित गुफा विशेषता और उसके गठन का चयन करें:" },
  options: { en: ["Stalactite - grows from the floor upward", "Stalagmite - formed by dripping water from the ceiling", "Column - hanging from the ceiling", "Stalactite - formed by mineral flow from above"], hi: ["स्टैलेक्टाइट - गुफा के तल से ऊपर की ओर बढ़ता है", "स्टैलेग्माइट - गुफा की छत से टपकते पानी से निर्मित", "स्तंभ - गुफा की छत से लटका हुआ", "स्टैलेक्टाइट - ऊपर की ओर खनिज प्रवाह द्वारा निर्मित"] },
  answer: 3,
  explanation: { en: "Stalactites are formed by mineral-rich water flow from the ceiling downward.", hi: "स्टैलेक्टाइट ऊपर से नीचे खनिज युक्त पानी के प्रवाह द्वारा निर्मित होते हैं।" }
},
{
  id: 36, category: "Karst Topography", type: "mcq",
  question: { en: "What is an 'aquifer'?", hi: "'जलभृत' (Aquifer) क्या है?" },
  options: { en: ["A store of water between rocks", "A type of stalactite", "A surface river", "A type of sinkhole"], hi: ["चट्टानों के बीच स्थित जल का भंडार", "एक प्रकार का स्टैलेक्टाइट", "एक सतही नदी", "एक प्रकार का सिंकहोल"] },
  answer: 0,
  explanation: { en: "An aquifer is a store of water found between rocks.", hi: "जलभृत चट्टानों के बीच स्थित जल का भंडार है।" }
},
{
  id: 37, category: "Karst Topography", type: "mcq",
  question: { en: "Karst topography is mainly related to groundwater action on which type of rock?", hi: "कार्स्ट स्थलाकृति मुख्य रूप से किस प्रकार की चट्टान पर भूजल की क्रिया से संबंधित है?" },
  options: { en: ["Granite and basalt", "Limestone and chalk", "Sandstone only", "Igneous rocks"], hi: ["ग्रेनाइट और बेसाल्ट", "चूना पत्थर और चाक", "केवल बलुआ पत्थर", "आग्नेय चट्टानें"] },
  answer: 1,
  explanation: { en: "Karst topography is related to groundwater action on limestone and chalk formations.", hi: "कार्स्ट स्थलाकृति चूना पत्थर और चाक संरचनाओं पर भूजल की क्रिया से संबंधित है।" }
},
{
  id: 38, category: "Karst Topography", type: "mcq",
  question: { en: "Which of the following is an erosional (not depositional) karst feature?", hi: "निम्नलिखित में से कौन सा एक अपरदनात्मक (निक्षेपणात्मक नहीं) कार्स्ट विशेषता है?" },
  options: { en: ["Stalactite", "Column", "Sinkhole", "Stalagmite"], hi: ["स्टैलेक्टाइट", "स्तंभ", "सिंकहोल (घोल रंध्र)", "स्टैलेग्माइट"] },
  answer: 2,
  explanation: { en: "Sinkholes, dolines, lapiez, uvala, and swallow holes are erosional karst features.", hi: "सिंकहोल, डोलाइन, लैपीज़, उवाला, निगल छिद्र अपरदनात्मक कार्स्ट विशेषताएं हैं।" }
},
{
  id: 39, category: "Karst Topography", type: "mcq",
  question: { en: "Lichens are considered a natural indicator because of their sensitivity to which factor?", hi: "लाइकेन को प्राकृतिक सूचक माना जाता है क्योंकि वे किस कारक के प्रति संवेदनशील होते हैं?" },
  options: { en: ["Soil pH only", "Atmospheric conditions/air pollution", "Water salinity", "Temperature only"], hi: ["केवल मिट्टी का pH", "वायुमंडलीय परिस्थितियां/वायु प्रदूषण", "जल की लवणता", "केवल तापमान"] },
  answer: 1,
  explanation: { en: "Lichens are highly sensitive to atmospheric conditions and are used as an indicator of air pollution.", hi: "लाइकेन वायुमंडलीय परिस्थितियों के प्रति अत्यंत संवेदनशील होते हैं और वायु प्रदूषण के सूचक के रूप में उपयोग होते हैं।" }
},
{
  id: 40, category: "Karst Topography", type: "mcq",
  question: { en: "Litmus paper is made from which organism, and what is its natural dye color?", hi: "लिटमस पेपर किस जीव से बनता है, और इसका प्राकृतिक डाई रंग क्या है?" },
  options: { en: ["Fungus; blue dye", "Lichen; purple dye", "Algae; green dye", "Moss; red dye"], hi: ["कवक; नीला डाई", "लाइकेन; पर्पल डाई", "शैवाल; हरा डाई", "काई; लाल डाई"] },
  answer: 1,
  explanation: { en: "Litmus paper is made from lichen (a thallophyte), giving a purple dye.", hi: "लिटमस पेपर लाइकेन (एक थैलोफाइटा) से बनता है, जो पर्पल डाई देता है।" }
},

// ================= SEISMIC WAVES (41-46) =================
{
  id: 41, category: "Seismic Waves", type: "mcq",
  question: { en: "Which seismic waves are the fastest and travel through solid, liquid, and gas?", hi: "कौन सी भूकंपीय तरंगें सबसे तेज़ हैं और ठोस, द्रव और गैस से गुजरती हैं?" },
  options: { en: ["P waves", "S waves", "Surface waves", "Love waves only"], hi: ["P तरंगें", "S तरंगें", "सतही तरंगें", "केवल लव तरंगें"] },
  answer: 0,
  explanation: { en: "P (Primary) waves are the fastest, travel through solid/liquid/gas, and are recorded first.", hi: "P (प्राथमिक) तरंगें सबसे तेज होती हैं, ठोस/द्रव/गैस से गुजरती हैं और सबसे पहले दर्ज होती हैं।" }
},
{
  id: 42, category: "Seismic Waves", type: "mcq",
  question: { en: "S waves (secondary waves) cannot travel through which medium?", hi: "S तरंगें (द्वितीयक तरंगें) किस माध्यम से नहीं गुजर सकतीं?" },
  options: { en: ["Solid", "Liquid", "Both solid and liquid", "Gas only"], hi: ["ठोस", "द्रव", "ठोस और द्रव दोनों", "केवल गैस"] },
  answer: 1,
  explanation: { en: "S waves only travel through solids, not through liquids.", hi: "S तरंगें केवल ठोस से गुजरती हैं, द्रव से नहीं।" }
},
{
  id: 43, category: "Seismic Waves", type: "mcq",
  question: { en: "Which type of seismic wave is the slowest but causes the most destruction?", hi: "किस प्रकार की भूकंपीय तरंग सबसे धीमी होती है लेकिन सबसे अधिक विनाश करती है?" },
  options: { en: ["P waves", "S waves", "Surface waves", "None of the above"], hi: ["P तरंगें", "S तरंगें", "सतही तरंगें", "इनमें से कोई नहीं"] },
  answer: 2,
  explanation: { en: "Surface waves (Love and Rayleigh) are slowest but most destructive.", hi: "सतही तरंगें (लव और रेले) सबसे धीमी लेकिन सबसे विनाशकारी होती हैं।" }
},
{
  id: 44, category: "Seismic Waves", type: "statement",
  question: { en: "Consider the following statements about seismic waves:\n1. P waves are longitudinal and oscillate in the direction of wave travel.\n2. S waves are transverse and oscillate perpendicular to the direction of wave travel.\nWhich of the above is/are correct?", hi: "भूकंपीय तरंगों के बारे में निम्नलिखित कथनों पर विचार करें:\n1. P तरंगें अनुदैर्ध्य होती हैं और तरंग की दिशा में दोलन करती हैं।\n2. S तरंगें अनुप्रस्थ होती हैं और तरंग की दिशा के लंबवत दोलन करती हैं।\nउपरोक्त में से कौन सा/से सही है/हैं?" },
  options: { en: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], hi: ["केवल 1", "केवल 2", "1 और 2 दोनों", "न तो 1 और न ही 2"] },
  answer: 2,
  explanation: { en: "Both statements correctly describe P and S wave motion.", hi: "दोनों कथन P और S तरंगों की गति का सही वर्णन करते हैं।" }
},
{
  id: 45, category: "Seismic Waves", type: "mcq",
  question: { en: "Body waves (Bhukampiya tarangein) are broadly classified into which two types?", hi: "भूकंपीय तरंगें (भूकंप की तरंगें) मुख्यतः किन दो प्रकारों में वर्गीकृत हैं?" },
  options: { en: ["P waves and Surface waves", "Body waves and Surface waves", "Love waves and Rayleigh waves", "Solid waves and Liquid waves"], hi: ["P तरंगें और सतही तरंगें", "भूगर्भीय तरंगें और धरातलीय तरंगें", "लव तरंगें और रेले तरंगें", "ठोस तरंगें और द्रव तरंगें"] },
  answer: 1,
  explanation: { en: "Earthquake waves are classified as body (bhugarbhiya) waves and surface (dharataliya) waves.", hi: "भूकंप की तरंगें भूगर्भीय तरंगें और धरातलीय तरंगें में वर्गीकृत हैं।" }
},
{
  id: 46, category: "Seismic Waves", type: "mcq",
  question: { en: "Which surface wave type is horizontal in motion?", hi: "किस प्रकार की सतही तरंग क्षैतिज गति करती है?" },
  options: { en: ["Love wave", "Rayleigh wave", "P wave", "S wave"], hi: ["लव तरंग", "रेले तरंग", "P तरंग", "S तरंग"] },
  answer: 0,
  explanation: { en: "Love waves move horizontally; Rayleigh waves move in a rolling/undulating manner.", hi: "लव तरंगें क्षैतिज गति करती हैं; रेले तरंगें लहरदार गति करती हैं।" }
},

// ================= LANDSLIDES (47-52) =================
{
  id: 47, category: "Landslides", type: "mcq",
  question: { en: "In which type of landslide does the sliding material rotate backward?", hi: "निम्नलिखित में से किस प्रकार के भूस्खलन में फिसलने वाली सामग्री का पीछे की ओर घूमना शामिल होता है?" },
  options: { en: ["Rock slide", "Rock fall", "Slump", "Debris fall"], hi: ["चट्टान खिसकना", "चट्टान गिरना", "स्लम्प", "मलबा गिरना"] },
  answer: 2,
  explanation: { en: "A slump involves the sliding material rotating backward along a curved surface.", hi: "स्लम्प में फिसलने वाली सामग्री एक घुमावदार सतह पर पीछे की ओर घूमती है।" }
},
{
  id: 48, category: "Landslides", type: "statement",
  question: { en: "Consider the following statements about mass movement:\n1. Rapid movement includes earth flow, mudflow, and landslides/avalanches, usually occurring in water-saturated soil lacking vegetation.\n2. Slow movement includes creep and solifluction, common in temperate, moisture-saturated regions.\nWhich of the above is/are correct?", hi: "वृहत संचलन के बारे में निम्नलिखित कथनों पर विचार करें:\n1. तीव्र संचलन में अर्थ फ्लो (मिट्टी का प्रवाह), कीचड़ प्रवाह, और भूस्खलन/हिमस्खलन शामिल हैं, जो आमतौर पर पानी से संतृप्त मिट्टी में और वनस्पति के अभाव में होते हैं।\n2. मंद संचलन में क्रीप और सॉलिफ्लक्शन शामिल हैं, जो समशीतोष्ण, नमी से संतृप्त क्षेत्रों में आम हैं।\nउपरोक्त में से कौन सा/से सही है/हैं?" },
  options: { en: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], hi: ["केवल 1", "केवल 2", "1 और 2 दोनों", "न तो 1 और न ही 2"] },
  answer: 2,
  explanation: { en: "Both statements correctly describe rapid and slow mass movement categories.", hi: "दोनों कथन तीव्र और मंद संचलन श्रेणियों का सही वर्णन करते हैं।" }
},
{
  id: 49, category: "Landslides", type: "mcq",
  question: { en: "'Creep' is a type of which kind of mass movement?", hi: "'क्रीप' किस प्रकार के वृहत संचलन का एक प्रकार है?" },
  options: { en: ["Rapid movement", "Slow movement", "Instant movement", "Volcanic movement"], hi: ["तीव्र संचलन", "मंद संचलन", "तात्कालिक संचलन", "ज्वालामुखीय संचलन"] },
  answer: 1,
  explanation: { en: "Creep, an extremely slow downslope movement, falls under slow mass movement.", hi: "क्रीप, अत्यंत धीमी ढलान वाली गति, मंद संचलन के अंतर्गत आती है।" }
},
{
  id: 50, category: "Landslides", type: "mcq",
  question: { en: "'Solifluction' commonly occurs in which type of region?", hi: "'सॉलिफ्लक्शन' सामान्यतः किस प्रकार के क्षेत्र में होता है?" },
  options: { en: ["Desert regions", "Temperate, moisture-saturated regions", "Polar ice caps only", "Tropical rainforests"], hi: ["रेगिस्तानी क्षेत्र", "समशीतोष्ण, नमी से संतृप्त क्षेत्र", "केवल ध्रुवीय बर्फ की टोपियां", "उष्णकटिबंधीय वर्षावन"] },
  answer: 1,
  explanation: { en: "Solifluction is common in temperate, moisture-saturated regions.", hi: "सॉलिफ्लक्शन समशीतोष्ण, नमी से संतृप्त क्षेत्रों में आम है।" }
},
{
  id: 51, category: "Landslides", type: "mcq",
  question: { en: "Debris flow, mudflow and landslides/avalanches fall under which category of mass movement?", hi: "मलबा प्रवाह, कीचड़ प्रवाह और भूस्खलन/हिमस्खलन वृहत संचलन की किस श्रेणी में आते हैं?" },
  options: { en: ["Rapid movement", "Slow movement", "Static movement", "Tectonic movement"], hi: ["तीव्र संचलन", "मंद संचलन", "स्थिर संचलन", "विवर्तनिक संचलन"] },
  answer: 0,
  explanation: { en: "These are all rapid mass movement types.", hi: "ये सभी तीव्र वृहत संचलन के प्रकार हैं।" }
},
{
  id: 52, category: "Landslides", type: "mcq",
  question: { en: "Rapid mass movement typically occurs in soil that is:", hi: "तीव्र वृहत संचलन आमतौर पर किस प्रकार की मिट्टी में होता है?" },
  options: { en: ["Dry and vegetated", "Water-saturated and lacking vegetation", "Frozen and rocky", "Sandy desert soil"], hi: ["शुष्क और वनस्पति युक्त", "पानी से संतृप्त और वनस्पति रहित", "जमी हुई और चट्टानी", "रेतीली रेगिस्तानी मिट्टी"] },
  answer: 1,
  explanation: { en: "Rapid movements usually occur in water-saturated soil lacking vegetation.", hi: "तीव्र संचलन आमतौर पर पानी से संतृप्त और वनस्पति रहित मिट्टी में होते हैं।" }
},

// ================= RIVERS / DOABS (53-58) =================
{
  id: 53, category: "Rivers", type: "mcq",
  question: { en: "Lohit river is a tributary of which major Himalayan river?", hi: "लोहित नदी निम्नलिखित में से किस प्रमुख हिमालयी नदी की सहायक नदी है?" },
  options: { en: ["Ganga", "Brahmaputra", "Indus", "Yamuna"], hi: ["गंगा", "ब्रह्मपुत्र", "सिंधु", "यमुना"] },
  answer: 1,
  explanation: { en: "Lohit is a left-bank tributary of the Brahmaputra.", hi: "लोहित ब्रह्मपुत्र की बाएं तट की सहायक नदी है।" }
},
{
  id: 54, category: "Rivers", type: "mcq",
  question: { en: "Majuli, the world's largest river island, lies on which river?", hi: "माजुली, विश्व का सबसे बड़ा नदी द्वीप, किस नदी पर स्थित है?" },
  options: { en: ["Ganga", "Brahmaputra", "Godavari", "Indus"], hi: ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "सिंधु"] },
  answer: 1,
  explanation: { en: "Majuli is located on the Brahmaputra river, Assam.", hi: "माजुली असम में ब्रह्मपुत्र नदी पर स्थित है।" }
},
{
  id: 55, category: "Rivers", type: "mcq",
  question: { en: "Bhupen Hazarika, honored with Bharat Ratna in 2019, was popularly known as the 'child of Brahmaputra' and by which other title?", hi: "भूपेन हजारिका, जिन्हें 2019 में भारत रत्न से सम्मानित किया गया, 'ब्रह्मपुत्र के चारण' और किस अन्य नाम से जाने जाते हैं?" },
  options: { en: ["Sudhakanth", "Swar Kokila", "Sur Samrat", "Kavi Guru"], hi: ["सुधाकंठ", "स्वर कोकिला", "सुर सम्राट", "कवि गुरु"] },
  answer: 0,
  explanation: { en: "Bhupen Hazarika is known as 'Brahmaputra ke Charan' and 'Sudhakanth'.", hi: "भूपेन हजारिका को 'ब्रह्मपुत्र के चारण' और 'सुधाकंठ' के रूप में जाना जाता है।" }
},
{
  id: 56, category: "Rivers", type: "statement",
  question: { en: "Consider the following statements about the pairing of Doabs:\n1. Bari Doab lies between Beas and Ravi rivers.\n2. Bisht Doab lies between Beas and Chenab rivers.\n3. Rachna Doab lies between Ravi and Chenab rivers.\n4. Chaj Doab lies between Chenab and Jhelum rivers.\nWhich statement is INCORRECT?", hi: "दिए गए युग्मों में से कौन-सा युग्म सही सुमेलित नहीं है?\n1. बारी दोआब - ब्यास और रावी के बीच\n2. बिष्ट दोआब - ब्यास और चिनाब के बीच\n3. रचना दोआब - रावी और चिनाब के बीच\n4. चज दोआब - चिनाब और झेलम के बीच" },
  options: { en: ["Statement 1", "Statement 2", "Statement 3", "Statement 4"], hi: ["कथन 1", "कथन 2", "कथन 3", "कथन 4"] },
  answer: 1,
  explanation: { en: "Bist Doab actually lies between Sutlej and Beas rivers, not Beas and Chenab — statement 2 is incorrect.", hi: "बिस्त दोआब वास्तव में सतलज और ब्यास नदियों के बीच है, ब्यास और चिनाब के बीच नहीं — कथन 2 गलत है।" }
},
{
  id: 57, category: "Rivers", type: "mcq",
  question: { en: "Which five rivers together are called 'Panchnad'?", hi: "किन पांच नदियों को सम्मिलित रूप से 'पंचनद' कहा जाता है?" },
  options: { en: ["Ganga, Yamuna, Indus, Chenab, Ravi", "Jhelum, Chenab, Ravi, Beas, Sutlej", "Indus, Jhelum, Ganga, Yamuna, Sutlej", "Beas, Ravi, Chenab, Yamuna, Ganga"], hi: ["गंगा, यमुना, सिंधु, चिनाब, रावी", "झेलम, चिनाब, रावी, ब्यास, सतलज", "सिंधु, झेलम, गंगा, यमुना, सतलज", "ब्यास, रावी, चिनाब, यमुना, गंगा"] },
  answer: 1,
  explanation: { en: "Jhelum, Chenab, Ravi, Beas, Sutlej together are called Panchnad.", hi: "झेलम, चिनाब, रावी, ब्यास, सतलज को सम्मिलित रूप से पंचनद कहा जाता है।" }
},
{
  id: 58, category: "Rivers", type: "mcq",
  question: { en: "India's longest canal, Indira Gandhi Canal (earlier called Rajasthan Canal), stretches from Harike barrage to which region?", hi: "भारत की सबसे लंबी नहर, इंदिरा गांधी नहर (जिसे पहले राजस्थान नहर कहा जाता था), हरिके बैराज से किस क्षेत्र तक फैली हुई है?" },
  options: { en: ["Thar desert, Rajasthan", "Rann of Kutch, Gujarat", "Aravalli hills", "Sunderbans, WB"], hi: ["थार मरुस्थल, राजस्थान", "कच्छ का रण, गुजरात", "अरावली पहाड़ियां", "सुंदरबन, प. बंगाल"] },
  answer: 0,
  explanation: { en: "The Indira Gandhi Canal stretches about 837 km to the Thar desert in Rajasthan.", hi: "इंदिरा गांधी नहर राजस्थान के थार मरुस्थल तक लगभग 837 किमी फैली हुई है।" }
},

// ================= CORAL REEFS / CLIMATE ZONES (59-64) =================
{
  id: 59, category: "Coral Reefs & Climate", type: "mcq",
  question: { en: "Coral bleaching in the Indian Ocean is most directly linked to which of the following?", hi: "हिंद महासागर के भीतर 'प्रवाल विरंजन' की प्रक्रिया सबसे सीधे तौर पर निम्नलिखित से जुड़ी हुई है?" },
  options: { en: ["Human-induced sea surface temperature rise", "Deep sea mining increase", "River outflow raising ocean acidification", "Increased Arctic ice melting effects"], hi: ["मानवजनित प्रेरित समुद्री सतह का तापमान बढ़ता है", "गहरे समुद्र में खनन में वृद्धि", "नदी अपवाह से महासागरीय अम्लीकरण का स्तर बढ़ गया", "आर्कटिक बर्फ पिघलने के बढ़ते प्रभाव"] },
  answer: 0,
  explanation: { en: "Coral bleaching is most directly linked to human-induced rising sea surface temperatures.", hi: "प्रवाल विरंजन सबसे सीधे तौर पर मानवजनित समुद्री सतह के बढ़ते तापमान से जुड़ा है।" }
},
{
  id: 60, category: "Coral Reefs & Climate", type: "mcq",
  question: { en: "Corals share a symbiotic relationship with which organism, giving reefs the name 'rainforest of the sea'?", hi: "मूंगे किस जीव के साथ सहजीवी संबंध साझा करते हैं, जिसके कारण रीफ को 'समुद्र के वर्षावन' कहा जाता है?" },
  options: { en: ["Plankton", "Zooxanthellae algae", "Bacteria", "Jellyfish"], hi: ["प्लवक", "जूजैंथेले शैवाल", "बैक्टीरिया", "जेलीफ़िश"] },
  answer: 1,
  explanation: { en: "Corals share a symbiotic relationship with zooxanthellae algae.", hi: "मूंगे जूजैंथेले शैवाल के साथ सहजीवी संबंध साझा करते हैं।" }
},
{
  id: 61, category: "Coral Reefs & Climate", type: "mcq",
  question: { en: "What is a 'guyot'?", hi: "'गयोट' क्या है?" },
  options: { en: ["A flat-topped seamount", "A type of coral reef", "A tidal wave", "A deep ocean trench"], hi: ["सपाट शिखर वाला समुद्री पर्वत", "एक प्रकार की प्रवाल भित्ति", "एक ज्वारीय तरंग", "एक गहरी समुद्री खाई"] },
  answer: 0,
  explanation: { en: "A guyot is a flat-topped seamount.", hi: "गयोट सपाट शिखर वाला समुद्री पर्वत होता है।" }
},
{
  id: 62, category: "Coral Reefs & Climate", type: "statement",
  question: { en: "Consider the following about Earth's major climate zones:\n1. Tropical regions have minimum seasonal temperature variation.\n2. Temperate regions have four distinct seasons.\nWhich of the above is/are correct?", hi: "पृथ्वी के प्रमुख जलवायु क्षेत्रों के संबंध में:\n1. उष्णकटिबंधीय क्षेत्रों में न्यूनतम मौसमी तापमान परिवर्तन होता है।\n2. समशीतोष्ण क्षेत्रों की विशेषता चार अलग-अलग ऋतुएँ हैं।\nउपरोक्त में से कौन सा/से सही है/हैं?" },
  options: { en: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], hi: ["केवल कथन 1", "केवल कथन 2", "1 और 2 दोनों", "न तो 1 और न ही 2"] },
  answer: 2,
  explanation: { en: "Both statements are correct regarding tropical and temperate climate zones.", hi: "उष्णकटिबंधीय और समशीतोष्ण जलवायु क्षेत्रों के बारे में दोनों कथन सही हैं।" }
},
{
  id: 63, category: "Coral Reefs & Climate", type: "mcq",
  question: { en: "The 'Frigid zone' (cold belt) lies near which latitude circles?", hi: "'शीत कटिबंध' किन अक्षांश वृत्तों के निकट स्थित है?" },
  options: { en: ["Tropic of Cancer and Capricorn", "Arctic and Antarctic circles", "Equator", "Prime Meridian"], hi: ["कर्क और मकर रेखा", "आर्कटिक और अंटार्कटिक वृत्त", "भूमध्य रेखा", "प्रधान मध्याह्न रेखा"] },
  answer: 1,
  explanation: { en: "The frigid/cold zones lie near the Arctic and Antarctic circles.", hi: "शीत कटिबंध आर्कटिक और अंटार्कटिक वृत्त के निकट स्थित हैं।" }
},
{
  id: 64, category: "Coral Reefs & Climate", type: "mcq",
  question: { en: "Due to Earth's axial tilt (~23.5 degrees), polar regions experience continuous daylight and continuous night for approximately how long?", hi: "पृथ्वी के झुकाव (लगभग 23.5 डिग्री) के कारण, ध्रुवीय क्षेत्रों में लगातार दिन और लगातार रात लगभग कितने समय तक रहते हैं?" },
  options: { en: ["3 months each", "6 months each", "1 month each", "12 months each"], hi: ["प्रत्येक 3 महीने", "प्रत्येक 6 महीने", "प्रत्येक 1 महीना", "प्रत्येक 12 महीने"] },
  answer: 1,
  explanation: { en: "Polar regions experience about 6 months of continuous day and 6 months of continuous night.", hi: "ध्रुवीय क्षेत्रों में लगभग 6 महीने तक लगातार दिन और 6 महीने तक लगातार रात रहती है।" }
},

// ================= THERMAL POWER / COAL (65-70) =================
{
  id: 65, category: "Thermal Power & Coal", type: "mcq",
  question: { en: "In which state is the Talcher Thermal Power Station located?", hi: "भारत में स्थित ताप विद्युत स्टेशन तालचेर किस राज्य में स्थित है?" },
  options: { en: ["Jharkhand", "Tamil Nadu", "Andhra Pradesh", "Odisha"], hi: ["झारखंड", "तमिलनाडु", "आंध्र प्रदेश", "ओडिशा"] },
  answer: 3,
  explanation: { en: "Talcher Thermal Power Station is located in Odisha.", hi: "तालचेर ताप विद्युत स्टेशन ओडिशा में स्थित है।" }
},
{
  id: 66, category: "Thermal Power & Coal", type: "mcq",
  question: { en: "India's biggest thermal power plant, Vindhyachal, is located in which state?", hi: "भारत का सबसे बड़ा ताप विद्युत संयंत्र विंध्याचल किस राज्य में स्थित है?" },
  options: { en: ["Madhya Pradesh (Singrauli)", "Gujarat", "Maharashtra", "Odisha"], hi: ["मध्य प्रदेश (सिंगरौली)", "गुजरात", "महाराष्ट्र", "ओडिशा"] },
  answer: 0,
  explanation: { en: "Vindhyachal Thermal Power Station is in Singrauli, Madhya Pradesh, and is India's biggest.", hi: "विंध्याचल ताप विद्युत संयंत्र सिंगरौली, मध्य प्रदेश में है और भारत का सबसे बड़ा है।" }
},
{
  id: 67, category: "Thermal Power & Coal", type: "mcq",
  question: { en: "Which of the following is India's second biggest thermal power plant?", hi: "निम्नलिखित में से भारत का दूसरा सबसे बड़ा ताप विद्युत संयंत्र कौन सा है?" },
  options: { en: ["Sasan", "Tiroda", "Mundra", "Kota Super"], hi: ["सासन", "तिरोडा", "मुंद्रा", "कोटा सुपर"] },
  answer: 2,
  explanation: { en: "Mundra Thermal Power Station, Gujarat, is India's second biggest.", hi: "मुंद्रा ताप विद्युत संयंत्र, गुजरात, भारत का दूसरा सबसे बड़ा है।" }
},
{
  id: 68, category: "Thermal Power & Coal", type: "mcq",
  question: { en: "Indian coal is mainly of which origin?", hi: "भारतीय कोयला मुख्य रूप से किस मूल का है?" },
  options: { en: ["Gondwana and Tertiary origin", "Jurassic origin only", "Cretaceous origin only", "Permian origin only"], hi: ["गोंडवाना और तृतीयक मूल", "केवल जुरासिक मूल", "केवल क्रीटेशियस मूल", "केवल पर्मियन मूल"] },
  answer: 0,
  explanation: { en: "Indian coal is mainly of Gondwana and Tertiary origin.", hi: "भारतीय कोयला मुख्य रूप से गोंडवाना और तृतीयक मूल का है।" }
},
{
  id: 69, category: "Thermal Power & Coal", type: "mcq",
  question: { en: "Which category of coal is the highest quality (Uchhatam shreni)?", hi: "कोयले की कौन सी श्रेणी सबसे उच्च गुणवत्ता (उच्चतम श्रेणी) की होती है?" },
  options: { en: ["Anthracite", "Bituminous", "Lignite", "Peat"], hi: ["एंथ्रेसाइट", "बिटुमिनस", "लिग्नाइट", "पीट"] },
  answer: 0,
  explanation: { en: "Anthracite is the highest quality of coal.", hi: "एंथ्रेसाइट कोयले की उच्चतम श्रेणी है।" }
},
{
  id: 70, category: "Thermal Power & Coal", type: "mcq",
  question: { en: "Which of the following is India's lowest quality coal category (with lowest carbon content)?", hi: "निम्नलिखित में से कौन सी भारत की सबसे निम्न गुणवत्ता की कोयला श्रेणी है (सबसे कम कार्बन सामग्री के साथ)?" },
  options: { en: ["Anthracite", "Bituminous", "Peat", "Lignite"], hi: ["एंथ्रेसाइट", "बिटुमिनस", "पीट", "लिग्नाइट"] },
  answer: 2,
  explanation: { en: "Peat is the lowest quality/rank coal, having the lowest carbon content.", hi: "पीट सबसे निम्न गुणवत्ता/श्रेणी का कोयला है, जिसमें सबसे कम कार्बन सामग्री होती है।" }
},

// ================= MARITIME ROUTES / OCEANS / STRAITS (71-76) =================
{
  id: 71, category: "Maritime Routes & Oceans", type: "mcq",
  question: { en: "Which important trade route passes through the Indian Ocean?", hi: "इनमें से कौन सा महत्वपूर्ण व्यापार मार्ग हिंद महासागर से होकर गुजरता है?" },
  options: { en: ["Panama Canal", "Suez Canal", "Bering Strait", "Drake Passage"], hi: ["पनामा नहर", "स्वेज नहर", "बेरिंग स्ट्रेट", "ड्रेक पैसेज"] },
  answer: 1,
  explanation: { en: "The Suez Canal route connects to the Indian Ocean via the Red Sea.", hi: "स्वेज नहर मार्ग लाल सागर के माध्यम से हिंद महासागर से जुड़ता है।" }
},
{
  id: 72, category: "Maritime Routes & Oceans", type: "mcq",
  question: { en: "The Panama Canal connects which two oceans?", hi: "पनामा नहर किन दो महासागरों को जोड़ती है?" },
  options: { en: ["Indian and Pacific", "Atlantic and Pacific", "Arctic and Atlantic", "Southern and Indian"], hi: ["हिंद और प्रशांत", "अटलांटिक और प्रशांत", "आर्कटिक और अटलांटिक", "दक्षिणी और हिंद"] },
  answer: 1,
  explanation: { en: "The Panama Canal connects the Atlantic and Pacific Oceans, separating North and South America.", hi: "पनामा नहर अटलांटिक और प्रशांत महासागर को जोड़ती है और उत्तरी अमेरिका को दक्षिणी अमेरिका से अलग करती है।" }
},
{
  id: 73, category: "Maritime Routes & Oceans", type: "mcq",
  question: { en: "Which is the largest and deepest ocean?", hi: "सबसे बड़ा और सबसे गहरा महासागर कौन सा है?" },
  options: { en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], hi: ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"] },
  answer: 2,
  explanation: { en: "The Pacific Ocean is the largest and deepest.", hi: "प्रशांत महासागर सबसे बड़ा और सबसे गहरा है।" }
},
{
  id: 74, category: "Maritime Routes & Oceans", type: "mcq",
  question: { en: "Which strait lies between the Fars/Persian Gulf and the Gulf of Oman, between Iran and Oman/UAE?", hi: "फारस की खाड़ी और ओमान की खाड़ी के बीच, ईरान और ओमान/यूएई के बीच कौन सी जलसंधि स्थित है?" },
  options: { en: ["Strait of Malacca", "Strait of Hormuz", "Bab-el-Mandeb Strait", "Bering Strait"], hi: ["मलक्का जलसंधि", "हॉर्मुज़ जलसंधि", "बाब अल-मन्देब जलसंधि", "बेरिंग जलसंधि"] },
  answer: 1,
  explanation: { en: "The Strait of Hormuz lies between the Persian Gulf and Gulf of Oman, between Iran and Oman/UAE.", hi: "हॉर्मुज़ जलसंधि फारस की खाड़ी और ओमान की खाड़ी के बीच, ईरान और ओमान/यूएई के बीच स्थित है।" }
},
{
  id: 75, category: "Maritime Routes & Oceans", type: "mcq",
  question: { en: "Which strait, called 'Gateway of Tears', connects the Red Sea to the Gulf of Aden and then the Arabian Sea?", hi: "'आँसुओं का द्वार' कहलाने वाली कौन सी जलसंधि लाल सागर को अदन की खाड़ी और फिर अरब सागर से जोड़ती है?" },
  options: { en: ["Strait of Gibraltar", "Bab-el-Mandeb Strait", "Strait of Malacca", "Kerch Strait"], hi: ["जिब्राल्टर जलसंधि", "बाब अल-मन्देब जलसंधि", "मलक्का जलसंधि", "कर्च जलडमरूमध्य"] },
  answer: 1,
  explanation: { en: "Bab-el-Mandeb Strait, between Yemen and Djibouti/Eritrea, is called the Gateway of Tears.", hi: "बाब अल-मन्देब जलसंधि, यमन और जिबूती/इरीट्रिया के बीच, आँसुओं का द्वार कहलाती है।" }
},
{
  id: 76, category: "Maritime Routes & Oceans", type: "mcq",
  question: { en: "Which passage, located between South America and Antarctica, is considered the world's toughest sea route?", hi: "दक्षिण अमेरिका और अंटार्कटिका के बीच स्थित कौन सा मार्ग दुनिया का सबसे कठिन समुद्री मार्ग माना जाता है?" },
  options: { en: ["Bering Strait", "Drake Passage", "Strait of Malacca", "Strait of Gibraltar"], hi: ["बेरिंग जलसंधि", "ड्रेक जलडमरूमध्य", "मलक्का जलसंधि", "जिब्राल्टर जलसंधि"] },
  answer: 1,
  explanation: { en: "The Drake Passage is considered the world's toughest maritime route.", hi: "ड्रेक जलडमरूमध्य को दुनिया का सबसे कठिन समुद्री मार्ग माना जाता है।" }
},

// ================= KOPPEN CLIMATE / TUNDRA / TAIGA (77-82) =================
{
  id: 77, category: "Koppen Climate & Biomes", type: "mcq",
  question: { en: "In which region of India is 'BWhw' type climate found?", hi: "भारत के किस क्षेत्र में 'BWhw' प्रकार की जलवायु पाई जाती है?" },
  options: { en: ["Punjab", "Madhya Pradesh", "Gujarat", "Rajasthan"], hi: ["पंजाब", "मध्य प्रदेश", "गुजरात", "राजस्थान"] },
  answer: 3,
  explanation: { en: "BWhw (hot desert climate) is found in Rajasthan.", hi: "BWhw (गर्म रेगिस्तानी जलवायु) राजस्थान में पाई जाती है।" }
},
{
  id: 78, category: "Koppen Climate & Biomes", type: "mcq",
  question: { en: "Who is the founder of the Koppen climate classification system?", hi: "कोपेन जलवायु वर्गीकरण प्रणाली के प्रस्तुतकर्ता कौन हैं?" },
  options: { en: ["Wladimir Koppen (1884), German climatologist", "Alfred Wegener", "Arthur Strahler", "Charles Darwin"], hi: ["व्लादिमीर कोपेन (1884), जर्मन जलवायुविज्ञानी", "अल्फ्रेड वेगनर", "आर्थर स्ट्रालर", "चार्ल्स डार्विन"] },
  answer: 0,
  explanation: { en: "Wladimir Koppen, a German climatologist, proposed this system in 1884.", hi: "व्लादिमीर कोपेन, एक जर्मन जलवायुविज्ञानी, ने 1884 में इस प्रणाली को प्रस्तुत किया।" }
},
{
  id: 79, category: "Koppen Climate & Biomes", type: "statement",
  question: { en: "Consider the following statements about Koppen climate groups:\n1. Group A (Tropical) has coldest month average temperature of 18°C or above.\n2. Group E (Polar) has all months' average temperature below 10°C.\nWhich of the above is/are correct?", hi: "कोपेन जलवायु समूहों के बारे में निम्नलिखित कथनों पर विचार करें:\n1. समूह A (उष्णकटिबंधीय) का सबसे ठंडे महीने का औसत तापमान 18°C या उससे अधिक होता है।\n2. समूह E (ध्रुवीय प्रकार) के सभी महीनों का औसत तापमान 10°C से नीचे रहता है।\nउपरोक्त में से कौन सा/से सही है/हैं?" },
  options: { en: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], hi: ["केवल 1", "केवल 2", "1 और 2 दोनों", "न तो 1 और न ही 2"] },
  answer: 2,
  explanation: { en: "Both statements correctly describe Koppen's Group A and Group E climate criteria.", hi: "दोनों कथन कोपेन के समूह A और समूह E जलवायु मानदंडों का सही वर्णन करते हैं।" }
},
{
  id: 80, category: "Koppen Climate & Biomes", type: "mcq",
  question: { en: "In Koppen's symbols, what does the letter 'S' denote?", hi: "कोपेन के प्रतीकों में अक्षर 'S' क्या दर्शाता है?" },
  options: { en: ["Steppe (grasslands of Europe and Asia)", "Savanna", "Snow", "Subtropical"], hi: ["स्टेपी (यूरोप और एशिया में घास के मैदान)", "सवाना", "बर्फ", "उपोष्णकटिबंधीय"] },
  answer: 0,
  explanation: { en: "'S' denotes Steppe climate, the grasslands of Europe and Asia.", hi: "'S' स्टेपी जलवायु दर्शाता है, यूरोप और एशिया में घास के मैदान।" }
},
{
  id: 81, category: "Koppen Climate & Biomes", type: "mcq",
  question: { en: "Which biome is characterized by conifer trees like spruce, fir, and pine, located just below the tundra?", hi: "टुंड्रा के ठीक नीचे स्थित, स्प्रूस, फ़र, पाइन जैसे शंकुधारी वृक्षों की विशेषता वाला बायोम कौन सा है?" },
  options: { en: ["Taiga", "Tundra", "Savanna", "Steppe"], hi: ["टैगा", "टुंड्रा", "सवाना", "स्टेपी"] },
  answer: 0,
  explanation: { en: "The Taiga, located below the tundra, has coniferous trees like spruce, fir, and pine.", hi: "टैगा, जो टुंड्रा के नीचे स्थित है, में स्प्रूस, फ़र, पाइन जैसे शंकुधारी वृक्ष होते हैं।" }
},
{
  id: 82, category: "Koppen Climate & Biomes", type: "mcq",
  question: { en: "Tundra climate is found in which regions and vegetation is limited to what?", hi: "टुंड्रा जलवायु किन क्षेत्रों में पाई जाती है और वनस्पति किन तक सीमित होती है?" },
  options: { en: ["Polar regions; moss, lichen, grass, small shrubs", "Tropical regions; tall trees", "Desert regions; cacti", "Temperate regions; deciduous forest"], hi: ["ध्रुवीय क्षेत्र; काई, लाइकेन, घास, छोटी झाड़ियां", "उष्णकटिबंधीय क्षेत्र; ऊंचे वृक्ष", "रेगिस्तानी क्षेत्र; कैक्टस", "समशीतोष्ण क्षेत्र; पर्णपाती वन"] },
  answer: 0,
  explanation: { en: "Tundra is found in polar regions with vegetation limited to moss, lichen, grass and small shrubs; trees do not grow.", hi: "टुंड्रा ध्रुवीय क्षेत्रों में पाया जाता है जहां वनस्पति काई, लाइकेन, घास और छोटी झाड़ियों तक सीमित है; पेड़ नहीं उगते।" }
},

// ================= IRON ORE / MINERALS (83-88) =================
{
  id: 83, category: "Minerals", type: "mcq",
  question: { en: "Which state is a major contributor to India's iron ore reserves?", hi: "निम्नलिखित में से कौन सा राज्य भारत के लौह अयस्क भंडार में प्रमुख योगदानकर्ता है?" },
  options: { en: ["Maharashtra", "Andhra Pradesh", "Karnataka", "Tamil Nadu"], hi: ["महाराष्ट्र", "आंध्र प्रदेश", "कर्नाटक", "तमिलनाडु"] },
  answer: 2,
  explanation: { en: "Karnataka holds over 72% of India's magnetite reserves and is a major iron ore contributor.", hi: "कर्नाटक में भारत के मैग्नेटाइट भंडार का 72% से अधिक है और यह लौह अयस्क का प्रमुख योगदानकर्ता है।" }
},
{
  id: 84, category: "Minerals", type: "mcq",
  question: { en: "Which iron ore variety has the highest quality, with iron content up to ~70%?", hi: "किस लौह अयस्क किस्म की गुणवत्ता सबसे उत्तम है, जिसमें लौह की मात्रा लगभग 70% तक होती है?" },
  options: { en: ["Hematite", "Magnetite", "Limonite", "Siderite"], hi: ["हेमेटाइट", "मैग्नेटाइट", "लिमोनाइट", "साइडेराइट"] },
  answer: 1,
  explanation: { en: "Magnetite is the highest quality iron ore with iron content up to about 70%.", hi: "मैग्नेटाइट उत्तम गुणवत्ता का लौह अयस्क है जिसमें लौह की मात्रा लगभग 70% तक होती है।" }
},
{
  id: 85, category: "Minerals", type: "mcq",
  question: { en: "Which state has the highest reserves of iron ore in India?", hi: "भारत में लौह अयस्क का सर्वाधिक भंडार किस राज्य में है?" },
  options: { en: ["Chhattisgarh", "Karnataka", "Odisha", "Jharkhand"], hi: ["छत्तीसगढ़", "कर्नाटक", "ओडिशा", "झारखंड"] },
  answer: 2,
  explanation: { en: "Odisha has India's highest reserves of iron ore (Odisha > Chhattisgarh > Karnataka in production).", hi: "ओडिशा में भारत का सर्वाधिक लौह अयस्क भंडार है (उत्पादन में ओडिशा > छत्तीसगढ़ > कर्नाटक)।" }
},
{
  id: 86, category: "Minerals", type: "mcq",
  question: { en: "Which district-state pair regarding India's iron ore reserves is correctly matched?", hi: "भारत में लौह अयस्क भंडार के संबंध में निम्नलिखित में से कौन सा जिला-राज्य संयोजन सही ढंग से सुमेलित है?" },
  options: { en: ["Singhbhum - Jharkhand", "Mayurbhanj - Uttar Pradesh", "Sundargarh - Meghalaya", "Keonjhar - Rajasthan"], hi: ["सिंहभूम - झारखंड", "मयूरभंज - उत्तर प्रदेश", "सुंदरगढ़ - मेघालय", "क्योंझर - राजस्थान"] },
  answer: 0,
  explanation: { en: "Singhbhum (Noamundi and Gua) is correctly in Jharkhand.", hi: "सिंहभूम (नोआमुंडी और गुआ) सही रूप से झारखंड में स्थित है।" }
},
{
  id: 87, category: "Minerals", type: "mcq",
  question: { en: "Which is India's iron-ore-rich belt covering Odisha and Jharkhand, including Sundargarh and Mayurbhanj?", hi: "सुंदरगढ़ और मयूरभंज सहित ओडिशा और झारखंड को कवर करने वाला भारत का लौह अयस्क समृद्ध बेल्ट कौन सा है?" },
  options: { en: ["Odisha-Jharkhand Belt", "Durg-Bastar-Chandrapur Belt", "Maharashtra-Goa Belt", "Bellary-Chitradurga Belt"], hi: ["ओडिशा-झारखंड पट्टी", "दुर्ग-बस्तर-चंद्रपुर पट्टी", "महाराष्ट्र-गोवा पट्टी", "बेल्लारी-चित्रदुर्ग पट्टी"] },
  answer: 0,
  explanation: { en: "The Odisha-Jharkhand belt includes Singhbhum, Sundargarh, Mayurbhanj, and Badampahar mines.", hi: "ओडिशा-झारखंड पट्टी में सिंहभूम, सुंदरगढ़, मयूरभंज और बदामपहाड़ खानें शामिल हैं।" }
},
{
  id: 88, category: "Minerals", type: "statement",
  question: { en: "Assertion (A): Aluminium smelting is the most important metallurgical industry in India.\nReason (R): Aluminium is used in making aircraft, wires, and utensils.\nChoose the correct option:", hi: "अभिकथन (A): एल्युमिनियम प्रगलन भारत में सबसे महत्वपूर्ण धातुकर्म उद्योग है।\nकारण (R): एल्युमिनियम का उपयोग विमान, तार और बर्तन बनाने में किया जाता है।\nसही विकल्प चुनें:" },
  options: { en: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"], hi: ["A और R दोनों सत्य हैं, और R, A की सही व्याख्या है", "A और R दोनों सत्य हैं, लेकिन R, A की सही व्याख्या नहीं है", "A सत्य है, लेकिन R असत्य है", "A असत्य है, लेकिन R सत्य है"] },
  answer: 3,
  explanation: { en: "Iron & Steel, not Aluminium, is India's most important metallurgical industry — so A is false, but the use of aluminium described in R is true.", hi: "एल्युमिनियम नहीं, लौह-इस्पात भारत का सबसे महत्वपूर्ण धातुकर्म उद्योग है — इसलिए A असत्य है, लेकिन R में वर्णित एल्युमिनियम का उपयोग सत्य है।" }
},

// ================= BRICS (89-92) =================
{
  id: 89, category: "BRICS", type: "mcq",
  question: { en: "Which BRICS country has the longest coastline?", hi: "किस ब्रिक्स देश की तटरेखा सबसे लंबी है?" },
  options: { en: ["Russia", "Brazil", "China", "South Africa"], hi: ["रूस", "ब्राज़िल", "चीन", "दक्षिण अफ्रीका"] },
  answer: 0,
  explanation: { en: "Russia has the longest coastline among BRICS nations.", hi: "ब्रिक्स देशों में रूस की तटरेखा सबसे लंबी है।" }
},
{
  id: 90, category: "BRICS", type: "mcq",
  question: { en: "When was BRICS initially formed, and when did South Africa join?", hi: "ब्रिक्स की स्थापना शुरुआत में कब हुई थी, और दक्षिण अफ्रीका कब शामिल हुआ?" },
  options: { en: ["Formed 2006, South Africa joined 2010", "Formed 2001, South Africa joined 2005", "Formed 2010, South Africa joined 2014", "Formed 1999, South Africa joined 2006"], hi: ["2006 में गठित, दक्षिण अफ्रीका 2010 में शामिल हुआ", "2001 में गठित, दक्षिण अफ्रीका 2005 में शामिल हुआ", "2010 में गठित, दक्षिण अफ्रीका 2014 में शामिल हुआ", "1999 में गठित, दक्षिण अफ्रीका 2006 में शामिल हुआ"] },
  answer: 0,
  explanation: { en: "BRICS was formed in 2006, and South Africa joined in 2010.", hi: "ब्रिक्स का गठन 2006 में हुआ था, और दक्षिण अफ्रीका 2010 में शामिल हुआ।" }
},
{
  id: 91, category: "BRICS", type: "mcq",
  question: { en: "Where is the headquarters of BRICS' New Development Bank (NDB)?", hi: "ब्रिक्स के न्यू डेवलपमेंट बैंक (NDB) का मुख्यालय कहां है?" },
  options: { en: ["Shanghai, China", "New Delhi, India", "Moscow, Russia", "Johannesburg, South Africa"], hi: ["शंघाई, चीन", "नई दिल्ली, भारत", "मॉस्को, रूस", "जोहान्सबर्ग, दक्षिण अफ्रीका"] },
  answer: 0,
  explanation: { en: "NDB's headquarters is in Shanghai, China.", hi: "NDB का मुख्यालय शंघाई, चीन में है।" }
},
{
  id: 92, category: "BRICS", type: "mcq",
  question: { en: "The Fortaleza Agreement (2014) established the NDB with what initial capital?", hi: "फोर्टालेज़ा समझौते (2014) ने NDB की स्थापना कितनी प्रारंभिक पूंजी के साथ की?" },
  options: { en: ["$50 billion", "$100 billion", "$25 billion", "$10 billion"], hi: ["$50 बिलियन", "$100 बिलियन", "$25 बिलियन", "$10 बिलियन"] },
  answer: 0,
  explanation: { en: "The Fortaleza Agreement established NDB with $50 billion initial capital.", hi: "फोर्टालेज़ा समझौते ने NDB की स्थापना $50 बिलियन की प्रारंभिक पूंजी के साथ की।" }
},

// ================= SOLAR SYSTEM (93-96) =================
{
  id: 93, category: "Solar System", type: "mcq",
  question: { en: "Which is the hottest planet in the solar system?", hi: "सौरमंडल का सबसे गर्म ग्रह कौन सा है?" },
  options: { en: ["Mercury", "Venus", "Mars", "Jupiter"], hi: ["बुध", "शुक्र", "मंगल", "बृहस्पति"] },
  answer: 1,
  explanation: { en: "Venus, due to its thick CO2 atmosphere causing a strong greenhouse effect, is the hottest planet.", hi: "शुक्र, अपने घने CO2 वायुमंडल के कारण तीव्र ग्रीनहाउस प्रभाव से, सबसे गर्म ग्रह है।" }
},
{
  id: 94, category: "Solar System", type: "mcq",
  question: { en: "Which planet is the largest and fastest-rotating in the solar system, with 97 moons?", hi: "सौरमंडल का सबसे बड़ा और सबसे तेज़ घूर्णन वाला ग्रह कौन सा है, जिसके 97 चंद्रमा हैं?" },
  options: { en: ["Saturn", "Jupiter", "Neptune", "Uranus"], hi: ["शनि", "बृहस्पति", "वरुण", "अरुण"] },
  answer: 1,
  explanation: { en: "Jupiter is the largest and fastest-rotating planet with 97 known moons.", hi: "बृहस्पति सबसे बड़ा और सबसे तेज़ घूर्णन वाला ग्रह है जिसके 97 ज्ञात चंद्रमा हैं।" }
},
{
  id: 95, category: "Solar System", type: "mcq",
  question: { en: "Which planet has the shortest orbit around the sun (88 Earth days)?", hi: "किस ग्रह की सूर्य के चारों ओर सबसे छोटी परिक्रमा अवधि (88 पृथ्वी दिन) है?" },
  options: { en: ["Mercury", "Venus", "Mars", "Earth"], hi: ["बुध", "शुक्र", "मंगल", "पृथ्वी"] },
  answer: 0,
  explanation: { en: "Mercury has the shortest orbital period of 88 Earth days.", hi: "बुध की सबसे छोटी परिक्रमा अवधि 88 पृथ्वी दिन है।" }
},
{
  id: 96, category: "Solar System", type: "mcq",
  question: { en: "Which planet is coldest and, in 2006, saw Pluto demoted to a dwarf planet status by the same defining body?", hi: "कौन सा ग्रह सबसे ठंडा है और 2006 में प्लूटो को बौने ग्रह का दर्जा दिए जाने से जुड़ा है?" },
  options: { en: ["Uranus", "Neptune", "Saturn", "Mars"], hi: ["अरुण", "वरुण", "शनि", "मंगल"] },
  answer: 1,
  explanation: { en: "Neptune (Varun) is the coldest planet; in 2006 Pluto was demoted to dwarf planet status.", hi: "वरुण सबसे ठंडा ग्रह है; 2006 में प्लूटो को बौने ग्रह का दर्जा दिया गया था।" }
},

// ================= NATIONAL PARKS (97-100) =================
{
  id: 97, category: "National Parks", type: "mcq",
  question: { en: "Which National Park-State pair is correctly matched?", hi: "निम्नलिखित में से कौन सा राष्ट्रीय उद्यान-राज्य युग्म सही सुमेलित है?" },
  options: { en: ["Namdapha National Park - Nagaland", "Simlipal National Park - Odisha", "Bandipur National Park - Andhra Pradesh", "Vansda National Park - Rajasthan"], hi: ["नमदाफा राष्ट्रीय उद्यान - नागालैंड", "सिमिलिपाल राष्ट्रीय उद्यान - ओडिशा", "बांदीपुर राष्ट्रीय उद्यान - आंध्र प्रदेश", "वांसदा राष्ट्रीय उद्यान - राजस्थान"] },
  answer: 1,
  explanation: { en: "Simlipal National Park is correctly located in Odisha.", hi: "सिमिलिपाल राष्ट्रीय उद्यान सही रूप से ओडिशा में स्थित है।" }
},
{
  id: 98, category: "National Parks", type: "mcq",
  question: { en: "Bannerghatta, Bandipur, and Nagarhole National Parks are located in which state?", hi: "बन्नेरघट्टा, बांदीपुर और नागरहोल राष्ट्रीय उद्यान किस राज्य में स्थित हैं?" },
  options: { en: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"], hi: ["कर्नाटक", "तमिलनाडु", "केरल", "आंध्र प्रदेश"] },
  answer: 0,
  explanation: { en: "All three national parks are located in Karnataka.", hi: "तीनों राष्ट्रीय उद्यान कर्नाटक में स्थित हैं।" }
},
{
  id: 99, category: "National Parks", type: "mcq",
  question: { en: "Namdapha National Park is located in which state?", hi: "नामदफा राष्ट्रीय उद्यान किस राज्य में स्थित है?" },
  options: { en: ["Arunachal Pradesh", "Nagaland", "Assam", "Manipur"], hi: ["अरुणाचल प्रदेश", "नागालैंड", "असम", "मणिपुर"] },
  answer: 0,
  explanation: { en: "Namdapha National Park is located in Arunachal Pradesh.", hi: "नामदफा राष्ट्रीय उद्यान अरुणाचल प्रदेश में स्थित है।" }
},
{
  id: 100, category: "National Parks", type: "mcq",
  question: { en: "Vansda National Park is located in which state?", hi: "वांसदा राष्ट्रीय उद्यान किस राज्य में स्थित है?" },
  options: { en: ["Gujarat", "Rajasthan", "Maharashtra", "Madhya Pradesh"], hi: ["गुजरात", "राजस्थान", "महाराष्ट्र", "मध्य प्रदेश"] },
  answer: 0,
  explanation: { en: "Vansda National Park is located in Gujarat.", hi: "वांसदा राष्ट्रीय उद्यान गुजरात में स्थित है।" }
}

];

// Helper utilities for building a bilingual test experience
const QuizUtils = {
  // Returns questions formatted for a given language ('en' or 'hi')
  getQuestionsInLanguage(lang = 'en') {
    return questions.map(q => ({
      id: q.id,
      category: q.category,
      type: q.type,
      question: q.question[lang],
      options: q.options[lang],
      answer: q.answer,
      explanation: q.explanation[lang]
    }));
  },
  // Count of statement-based questions
  countStatementQuestions() {
    return questions.filter(q => q.type === "statement").length;
  },
  totalQuestions() {
    return questions.length;
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { questions, QuizUtils };
} else {
  window.questions = questions;
  window.QuizUtils = QuizUtils;
}
