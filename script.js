// Traductions pour les langues
const translations = {
    en: {
      headerTitle: "Unlimited movies, TV shows and more.",
      headerSubtitle: "Watch anywhere. Cancel anytime.",
      headerParagraph: "Ready to watch? Enter your email to create or restart your membership.",
      faqTitle: "Frequently Asked Questions",
      footerText: "Questions? Call 693-32-63-99",
       
        feature1Title: "Enjoy on your TV.",
        feature1Description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        feature2Title: "Download your shows to watch offline.",
        feature2Description: "Save your favourites easily and always have something to watch.",
        feature3Title: "Watch everywhere.",
        feature3Description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
        feature4Title: "Create profiles for children.",
        feature4Description: "Send children on adventures with their favourite characters in a space made just for them, free with your membership.",
      
        question1: "What is Netflix?",
        question2: "How much does Netflix cost?",
        question3: "Where can I watch?",
        question4: "How do I cancel?",
        question5: "What can I watch on Netflix?",
        question6: "Is Netflix good for kids?",

        footerLinks: {
            col1: ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
            col2: ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
            col3: ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
            col4: ["Media Center", "Terms of Use", "Contact Us"],
          },
        
    },
    fr: {
      headerTitle: "Films, séries TV et bien plus, en illimité.",
      headerSubtitle: "Regardez où vous voulez. Annulez à tout moment.",
      headerParagraph: "Prêt à regarder ? Entrez votre email pour créer ou réactiver votre abonnement.",
      faqTitle: "Questions Fréquemment Posées",
      footerText: "Des questions ? Appelez le 693-32-63-99",
        feature1Title: "Profitez sur votre TV.",
        feature1Description: "Regardez sur les Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus encore.",
        feature2Title: "Téléchargez vos séries pour les regarder hors ligne.",
        feature2Description: "Sauvegardez facilement vos favoris et ayez toujours quelque chose à regarder.",
        feature3Title: "Regardez partout.",
        feature3Description: "Diffusez des films et séries TV en illimité sur votre téléphone, tablette, ordinateur portable et TV.",
        feature4Title: "Créez des profils pour les enfants.",
        feature4Description: "Offrez aux enfants des aventures avec leurs personnages préférés dans un espace qui leur est dédié, gratuit avec votre abonnement.",
      
        question1: "Qu'est-ce que Netflix ?",
        question2: "Combien coûte Netflix ?",
        question3: "Où puis-je regarder ?",
        question4: "Comment puis-je annuler ?",
        question5: "Que puis-je regarder sur Netflix ?",
        question6: "Netflix est-il adapté aux enfants ?",

        footerLinks: {
            col1: ["FAQ", "Relations Investisseurs", "Confidentialité", "Test de vitesse"],
            col2: ["Centre d'aide", "Emplois", "Préférences de cookies", "Mentions légales"],
            col3: ["Compte", "Les façons de regarder", "Informations sur l'entreprise", "Uniquement sur Netflix"],
            col4: ["Centre des médias", "Conditions d'utilisation", "Nous contacter"],
          },
      
    },
  };
  
  // Éléments à traduire
  const elementsToTranslate = {
    headerTitle: document.querySelector(".header-content h1"),
    headerSubtitle: document.querySelector(".header-content h3"),
    headerParagraph: document.querySelector(".header-content p"),
    faqTitle: document.querySelector(".faq h2"),
    footerText: document.querySelector(".footer h2"),
     
        feature1Title: document.querySelector(".features h2"),
        feature1Description: document.querySelector(".features .row:nth-child(1) .text-col p"),
        feature2Title: document.querySelector(".features .row:nth-child(2) .text-col h2"),
        feature2Description: document.querySelector(".features .row:nth-child(2) .text-col p"),
        feature3Title: document.querySelector(".features .row:nth-child(3) .text-col h2"),
        feature3Description: document.querySelector(".features .row:nth-child(3) .text-col p"),
        feature4Title: document.querySelector(".features .row:nth-child(4) .text-col h2"),
        feature4Description: document.querySelector(".features .row:nth-child(4) .text-col p"),
        question1: document.querySelector(".faq ul li:nth-child(1) label"),
        question2: document.querySelector(".faq ul li:nth-child(2) label"),
        question3: document.querySelector(".faq ul li:nth-child(3) label"),
        question4: document.querySelector(".faq ul li:nth-child(4) label"),
        question5: document.querySelector(".faq ul li:nth-child(5) label"),
        question6: document.querySelector(".faq ul li:nth-child(6) label"),

        footerLinks: {
            col1: document.querySelectorAll(".footer .row .col:nth-child(1) a"),
            col2: document.querySelectorAll(".footer .row .col:nth-child(2) a"),
            col3: document.querySelectorAll(".footer .row .col:nth-child(3) a"),
            col4: document.querySelectorAll(".footer .row .col:nth-child(4) a"),
          },
  };
  
  // Fonction pour changer de langue
  function changeLanguage(selectedLang) {
    if (!translations[selectedLang]) {
      console.error(`La langue "${selectedLang}" n'est pas disponible.`);
      return;
    }
  
    // Appliquer les traductions aux éléments correspondants
    for (let key in elementsToTranslate) {
      if (elementsToTranslate[key] && translations[selectedLang][key]) {
        elementsToTranslate[key].textContent = translations[selectedLang][key];
      }
    }

    // Appliquer les traductions aux éléments simples
  for (let key in elementsToTranslate) {
    if (key === "footerLinks") continue; // Sauter le footer pour l'instant
    if (elementsToTranslate[key] && translations[selectedLang][key]) {
      elementsToTranslate[key].textContent = translations[selectedLang][key];
    }
  }
  // Traduire les liens du footer
  for (let col in elementsToTranslate.footerLinks) {
    const links = elementsToTranslate.footerLinks[col];
    const translationsForCol = translations[selectedLang].footerLinks[col];

    links.forEach((link, index) => {
      if (translationsForCol[index]) {
        link.textContent = translationsForCol[index];
      }
    });
  }
  }
  
  // Ajouter des gestionnaires d'événements pour le menu de langues
  document.querySelectorAll(".language-menu li").forEach((item) => {
    item.addEventListener("click", (e) => {
      const selectedLang = e.target.dataset.lang;
  
      // Vérifier que l'attribut data-lang est défini
      if (!selectedLang) {
        console.error("Aucune langue sélectionnée.");
        return;
      }
  
      // Appliquer la traduction
      changeLanguage(selectedLang);
  
      // Fermer le menu
      document.querySelector(".language-selector").classList.remove("active");
    });
  });
  
  // Gérer l'affichage/masquage du menu de langues
  const languageBtn = document.querySelector(".language-btn");
  if (languageBtn) {
    languageBtn.addEventListener("click", () => {
      document.querySelector(".language-selector").classList.toggle("active");
    });
  } else {
    console.error("Le bouton de sélection de langue est introuvable.");
  }
  