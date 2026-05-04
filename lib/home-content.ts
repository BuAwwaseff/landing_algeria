export const homeCopy = {
  en: {
    heroKicker: "Melbet Algeria",
    heroTitle: "Live football, casino games, and offers ready on your phone",
    heroText:
      "Start fast, follow the match, open your favorite games, and claim available offers without a complicated flow.",
    primary: "Start now",
    secondary: "Explore sports",
    sportsTitle: "Follow live matches and move into your next bet fast",
    sportsText:
      "Keep the score, the odds, and the markets you want close while the match is still live.",
    casinoTitle: "Open the games you want without wasting time",
    casinoText:
      "Go straight to slots, live tables, roulette, blackjack, and esports picks from the same mobile flow.",
    promosTitle: "Bonus offers and rewards worth using",
    promosText:
      "Check welcome offers, football boosts, cashback, and VIP rewards before your next session starts.",
    playEyebrow: "Ready to play",
    playTitle: "Choose your game and start in a few simple steps",
    playText:
      "Sport, casino, or rewards: open what interests you and keep moving with a mobile flow that stays easy to follow.",
  },
  fr: {
    heroKicker: "Melbet Algerie",
    heroTitle: "Football en direct, jeux casino et offres sur mobile",
    heroText:
      "Commencez vite, suivez les matchs, ouvrez vos jeux preferes et profitez des offres disponibles sans parcours complique.",
    primary: "Commencer",
    secondary: "Voir le sport",
    sportsTitle: "Suivez les matchs en direct et passez vite au prochain pari",
    sportsText:
      "Gardez le score, les cotes et les marches importants a portee de main pendant le match.",
    casinoTitle: "Ouvrez les jeux qui vous interessent sans perdre de temps",
    casinoText:
      "Passez directement aux slots, tables live, roulette, blackjack et selections esports depuis le meme parcours mobile.",
    promosTitle: "Bonus et recompenses qui valent le coup",
    promosText:
      "Consultez les offres de bienvenue, boosts football, cashback et avantages VIP avant votre prochaine session.",
    playEyebrow: "Pret a jouer",
    playTitle: "Choisissez votre jeu et commencez en quelques etapes",
    playText:
      "Sport, casino ou offre: ouvrez ce qui vous interesse puis avancez avec un parcours mobile simple.",
  },
  ar: {
    heroKicker: "ميلبيت الجزائر",
    heroTitle: "مباريات مباشرة، ألعاب كازينو، وعروض جاهزة على هاتفك",
    heroText:
      "سجل بسرعة، تابع المباريات، افتح ألعابك المفضلة، واستفد من العروض المتاحة لك بدون خطوات معقدة.",
    primary: "ابدأ الآن",
    secondary: "استكشف الرياضة",
    sportsTitle: "تابع المباريات المباشرة وانتقل إلى رهانك التالي بسرعة",
    sportsText:
      "شاهد النتيجة، قارن الأسعار، وابق قريباً من الأسواق التي تريدها أثناء المباراة.",
    casinoTitle: "افتح الألعاب التي تريدها بدون انتظار",
    casinoText:
      "ادخل مباشرة إلى السلوتس، الطاولات المباشرة، الروليت، البلاك جاك، واختيارات الرياضات الإلكترونية من نفس المسار.",
    promosTitle: "مكافآت وعروض تستحق الاستخدام",
    promosText:
      "اطلع على عروض الترحيب، وتعزيزات كرة القدم، والكاش باك، ومكافآت VIP قبل جلستك التالية.",
    playEyebrow: "جاهز للعب",
    playTitle: "اختر لعبتك وابدأ خلال خطوات بسيطة",
    playText:
      "رياضة، كازينو، أو عروض: اختر ما يناسبك ثم أكمل عبر تجربة موبايل واضحة وسهلة.",
  },
} as const;

export type HomeLanguage = keyof typeof homeCopy;

export const homeSurfaceCopy = {
  en: {
    sportsKicker: "Live sports",
    casinoKicker: "Casino",
    promosKicker: "Offers",
    casinoExplore: "open",
    casinoOpenSection: "Open now",
    rewardExplore: "Claim offer",
    phoneBadge: "Melbet live",
    phoneTitle: "Football",
    phoneStatus: "LIVE",
    phoneTabs: ["Live", "Lineups", "Markets"],
    phoneSeeLineup: "Lineups",
    phonePlaceBet: "Place bet",
    phoneFullTime: "Full time",
    phoneLiveSpecial: "Special market",
    phoneHotMarkets: "hot markets",
    phoneUpdating: "live update",
    phoneMarketChips: ["+124", "Live 1X2", "Next goal"],
    phoneHomeToWin: "{team} to win",
    phoneAwayToScore: "{team} to score",
  },
  fr: {
    sportsKicker: "Sport en direct",
    casinoKicker: "Casino",
    promosKicker: "Offres",
    casinoExplore: "ouvrir",
    casinoOpenSection: "Ouvrir maintenant",
    rewardExplore: "Profiter de l'offre",
    phoneBadge: "Melbet live",
    phoneTitle: "Football",
    phoneStatus: "LIVE",
    phoneTabs: ["Direct", "Compos", "Marches"],
    phoneSeeLineup: "Compos",
    phonePlaceBet: "Parier",
    phoneFullTime: "Resultat final",
    phoneLiveSpecial: "Marche special",
    phoneHotMarkets: "marches chauds",
    phoneUpdating: "mise a jour",
    phoneMarketChips: ["+124", "1X2 live", "Prochain but"],
    phoneHomeToWin: "{team} gagne",
    phoneAwayToScore: "{team} marque",
  },
  ar: {
    sportsKicker: "رياضة مباشرة",
    casinoKicker: "الكازينو",
    promosKicker: "العروض",
    casinoExplore: "افتح",
    casinoOpenSection: "افتح الآن",
    rewardExplore: "استفد من العرض",
    phoneBadge: "ميلبيت مباشر",
    phoneTitle: "كرة القدم",
    phoneStatus: "مباشر",
    phoneTabs: ["مباشر", "التشكيلات", "الاسواق"],
    phoneSeeLineup: "التشكيلة",
    phonePlaceBet: "ضع رهانك",
    phoneFullTime: "النتيجة النهائية",
    phoneLiveSpecial: "سوق خاص",
    phoneHotMarkets: "اسواق ساخنة",
    phoneUpdating: "تحديث مباشر",
    phoneMarketChips: ["+124", "1X2 مباشر", "الهدف القادم"],
    phoneHomeToWin: "فوز {team}",
    phoneAwayToScore: "تسجيل {team}",
  },
} as const;

export const liveMatches = [
  {
    league: "Champions League",
    time: "72 min",
    home: { name: "Real Madrid", logo: "/leagues/realmadrid.png", score: 2 },
    away: { name: "Barcelona", logo: "/leagues/barcelona.png", score: 1 },
    odds: ["1.74", "3.45", "4.80"],
  },
  {
    league: "Premier League",
    time: "59 min",
    home: { name: "Arsenal", logo: "/leagues/arsenal.png", score: 1 },
    away: { name: "Liverpool", logo: "/leagues/liverpool.png", score: 1 },
    odds: ["2.18", "2.95", "3.25"],
  },
  {
    league: "European Night",
    time: "41 min",
    home: { name: "Bayern", logo: "/leagues/bayern.png", score: 3 },
    away: { name: "PSG", logo: "/leagues/PSG.png", score: 2 },
    odds: ["1.62", "4.10", "5.40"],
  },
  {
    league: "Serie A Live",
    time: "64 min",
    home: { name: "Inter", logo: "/leagues/inter.png", score: 0 },
    away: { name: "Juventus", logo: "/leagues/juventus.png", score: 0 },
    odds: ["2.05", "2.72", "3.90"],
  },
  {
    league: "England Live",
    time: "78 min",
    home: { name: "Man City", logo: "/leagues/mancity.png", score: 2 },
    away: { name: "Man United", logo: "/leagues/manunited.png", score: 2 },
    odds: ["1.92", "3.20", "3.70"],
  },
] as const;

export const casinoCardsByLanguage = {
  en: [
    {
      badge: "Table games",
      title: "Casino",
      text: "Open roulette, blackjack, and classic tables when you want a quick casino session.",
      imageSrc: "/games/casino.png",
      alt: "Casino tables preview",
    },
    {
      badge: "Quick spins",
      title: "Slots",
      text: "Jump into colorful slots with short browsing and fast entry.",
      imageSrc: "/games/slots.png",
      alt: "Slots games preview",
    },
    {
      badge: "Live tables",
      title: "Live games",
      text: "Join dealer tables and keep the pace close to a real casino floor.",
      imageSrc: "/games/live.png",
      alt: "Live games preview",
    },
    {
      badge: "Esports picks",
      title: "Esports",
      text: "Follow digital matchups and esports action without leaving your main session.",
      imageSrc: "/games/esports.png",
      alt: "Esports games preview",
    },
  ],
  fr: [
    {
      badge: "Jeux de table",
      title: "Casino",
      text: "Ouvrez la roulette, le blackjack et les tables classiques quand vous voulez une session rapide.",
      imageSrc: "/games/casino.png",
      alt: "Apercu des tables de casino",
    },
    {
      badge: "Tours rapides",
      title: "Slots",
      text: "Entrez vite dans les slots avec un choix simple et un acces direct.",
      imageSrc: "/games/slots.png",
      alt: "Apercu des machines a sous",
    },
    {
      badge: "Tables live",
      title: "Jeux live",
      text: "Rejoignez les tables avec croupier et gardez le rythme d'une vraie session casino.",
      imageSrc: "/games/live.png",
      alt: "Apercu des jeux live",
    },
    {
      badge: "Choix esports",
      title: "Esports",
      text: "Suivez les confrontations digitales et l'action esports sans quitter votre session.",
      imageSrc: "/games/esports.png",
      alt: "Apercu esports",
    },
  ],
  ar: [
    {
      badge: "العاب الطاولة",
      title: "الكازينو",
      text: "افتح الروليت والبلاك جاك والطاولات الكلاسيكية عندما تريد جلسة كازينو سريعة.",
      imageSrc: "/games/casino.png",
      alt: "معاينة طاولات الكازينو",
    },
    {
      badge: "لفات سريعة",
      title: "السلوتس",
      text: "ادخل بسرعة إلى ألعاب السلوتس مع تصفح قصير ووصول مباشر.",
      imageSrc: "/games/slots.png",
      alt: "معاينة ألعاب السلوتس",
    },
    {
      badge: "طاولات مباشرة",
      title: "الألعاب المباشرة",
      text: "انضم إلى الطاولات مع الموزع وحافظ على أجواء كازينو حية من هاتفك.",
      imageSrc: "/games/live.png",
      alt: "معاينة الألعاب المباشرة",
    },
    {
      badge: "اختيارات esports",
      title: "الرياضات الإلكترونية",
      text: "تابع المواجهات الرقمية وحركة esports بدون أن تغادر جلستك الأساسية.",
      imageSrc: "/games/esports.png",
      alt: "معاينة الرياضات الإلكترونية",
    },
  ],
} as const;

export const rewardGalleryCardsByLanguage = {
  en: [
    {
      kicker: "Start strong",
      title: "Welcome bonus",
      text: "Begin with a welcome offer when you are ready to make your first move.",
      imageSrc: "/rewards/welcome.png",
    },
    {
      kicker: "For match day",
      title: "Football boost",
      text: "Use football boosts on the games you are already following.",
      imageSrc: "/rewards/football.png",
    },
    {
      kicker: "Keep going",
      title: "Cashback",
      text: "Take advantage of cashback offers when you want another reason to stay in the game.",
      imageSrc: "/rewards/cashback.png",
    },
    {
      kicker: "Exclusive route",
      title: "VIP reward",
      text: "Unlock a more exclusive experience with VIP-style rewards and perks.",
      imageSrc: "/rewards/vip.png",
    },
  ],
  fr: [
    {
      kicker: "Bien commencer",
      title: "Bonus de bienvenue",
      text: "Commencez avec une offre de bienvenue quand vous etes pret a faire votre premiere action.",
      imageSrc: "/rewards/welcome.png",
    },
    {
      kicker: "Pour le jour de match",
      title: "Boost football",
      text: "Profitez des boosts football sur les matchs que vous suivez deja.",
      imageSrc: "/rewards/football.png",
    },
    {
      kicker: "Rester dans le jeu",
      title: "Cashback",
      text: "Profitez du cashback quand vous voulez une bonne raison de continuer.",
      imageSrc: "/rewards/cashback.png",
    },
    {
      kicker: "Voie exclusive",
      title: "Recompense VIP",
      text: "Accedez a une experience plus exclusive avec des avantages au style VIP.",
      imageSrc: "/rewards/vip.png",
    },
  ],
  ar: [
    {
      kicker: "بداية قوية",
      title: "مكافأة الترحيب",
      text: "ابدأ بعرض ترحيبي عندما تكون جاهزاً لأول خطوة.",
      imageSrc: "/rewards/welcome.png",
    },
    {
      kicker: "ليوم المباراة",
      title: "تعزيز كرة القدم",
      text: "استفد من تعزيزات كرة القدم على المباريات التي تتابعها بالفعل.",
      imageSrc: "/rewards/football.png",
    },
    {
      kicker: "واصل اللعب",
      title: "كاش باك",
      text: "استفد من عروض الكاش باك عندما تريد سبباً إضافياً لمواصلة الجلسة.",
      imageSrc: "/rewards/cashback.png",
    },
    {
      kicker: "مسار حصري",
      title: "مكافأة VIP",
      text: "ادخل إلى تجربة أكثر تميزاً مع مكافآت ومزايا بطابع VIP.",
      imageSrc: "/rewards/vip.png",
    },
  ],
} as const;

export type RewardCardData = {
  kicker: string;
  title: string;
  text: string;
  imageSrc: string;
};

export const sportsShowcaseCopy = {
  en: {
    badge: "Upcoming matches",
    spotlightTitle: "Watch what's next, lock in the odds, and move into the market fast",
    spotlightText:
      "Follow the action as it unfolds, stay locked on the odds you want, and jump into any market without friction.",
    ticketTag: "Quick bet",
    ticketTitle: "One tap, straight to action",
    ticketText:
      "Lineups ready, markets set, everything live. Place your bet in moments when momentum shifts.",
    listTitle: "What stays on your radar",
    listItems: [
      "Top leagues, biggest matches, always visible",
      "Odds that move with the game in real-time",
      "Instant access from any angle",
    ],
  },
  fr: {
    badge: "Matchs a venir",
    spotlightTitle: "Regardez ce qui vient, verrouillez les cotes et entrez sur le marche rapidement",
    spotlightText:
      "Suivez l'action en direct, restez fixe sur les cotes que vous voulez et entrez dans n'importe quel marche sans friction.",
    ticketTag: "Pari rapide",
    ticketTitle: "Un tap, droit a l'action",
    ticketText:
      "Les compos sont prets, les marches sont actifs, tout est en direct. Placez votre pari en quelques secondes.",
    listTitle: "Ce qui reste sur votre radar",
    listItems: [
      "Les meilleurs ligues, les plus grands matchs, toujours visibles",
      "Les cotes qui changent avec le jeu en temps reel",
      "Acces instantane de n'importe quel angle",
    ],
  },
  ar: {
    badge: "المباريات القادمة",
    spotlightTitle: "شاهد ما يأتي، احبس الأسعار، وادخل السوق بسرعة",
    spotlightText:
      "تابع الحدث لحظة بلحظة، ابق على الأسعار التي تريدها، وادخل إلى أي سوق بدون عوائق.",
    ticketTag: "رهان سريع",
    ticketTitle: "نقرة واحدة، مباشرة إلى الحدث",
    ticketText:
      "التشكيلات جاهزة، الأسواق نشطة، كل شيء مباشر. ضع رهانك في لحظات معدودة.",
    listTitle: "ما يبقى في نطاق اهتمامك",
    listItems: [
      "أفضل الدوريات، أكبر المباريات، دائماً مرئية",
      "أسعار تتحرك مع اللعبة في الوقت الفعلي",
      "وصول فوري من أي زاوية",
    ],
  },
} as const;
