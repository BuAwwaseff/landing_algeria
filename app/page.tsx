"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useLanguage } from "./layout/LanguageProvider";
import { FadeUp, StaggerReveal } from "./motion/Reveal";

const copy = {
  en: {
    heroKicker: "Melbet Algeria",
    heroTitle: "Sports nights, live games, and rewards in one mobile flow",
    heroText: "A sharp Algeria-facing experience for football moments, casino sessions, and simple promo discovery on your phone.",
    primary: "Start playing",
    secondary: "Explore sports",
    sportsTitle: "Keep your match, prices, and next bet in one live view",
    sportsText: "Follow the match live, feel the momentum shift as it happens, and move into live betting the moment the play or price feels right.",
    casinoTitle: "Choose the games you want to open first",
    casinoText: "Browse slots, live tables, esports, and casino rooms in a cleaner layout that helps you decide what to play next quickly.",
    promosTitle: "Rewards worth opening",
    promosText: "From your first bonus to match-day boosts and cashback moments, every offer is easy to spot and easy to explore.",
    trustTitle: "Local proof without overclaiming",
    trustText: "Clear steps, support channels, and transparent account flow help players understand what happens next.",
    playEyebrow: "Ready when you are",
    playTitle: "Pick your moment and start playing",
    playText: "Explore live football, casino rooms, and rewards at your own pace, then jump in with a mobile flow that keeps everything easy to follow.",
  },
  fr: {
    heroKicker: "Melbet Algérie",
    heroTitle: "Sport, jeux live et cadeaux dans une expérience mobile",
    heroText: "Une page pensée pour l'Algérie: football, casino et promos avec une navigation rapide sur téléphone.",
    primary: "Commencer",
    secondary: "Voir le sport",
    sportsTitle: "Football d'abord, prêt pour le live",
    sportsText: "Suivez le match en direct, ressentez les changements de rythme au bon moment, puis passez au pari live quand l'action ou la cote devient intéressante.",
    casinoTitle: "Casino avec un rythme plus propre",
    casinoText: "Slots, jeux live, instant games et sélections fortes dans un système visuel premium.",
    promosTitle: "Promos et cadeaux faciles à lire",
    promosText: "Des cartes récompense courtes gardent l'action suivante évidente sur mobile.",
    trustTitle: "Une expérience locale et claire",
    trustText: "Étapes simples, canaux de support et parcours de compte transparent pour comprendre la suite.",
    playEyebrow: "Prêt quand vous l'êtes",
    playTitle: "Choisissez votre moment et commencez à jouer",
    playText: "Explorez le football en direct, les jeux de casino et les récompenses à votre rythme, puis lancez-vous avec une expérience mobile simple à suivre.",
  },
  ar: {
    heroKicker: "ميلبيت الجزائر",
    heroTitle: "رياضة مباشرة، ألعاب حية، وهدايا في تجربة موبايل واحدة",
    heroText: "تجربة موجهة للجزائر تجمع لحظات كرة القدم، ألعاب الكازينو، والعروض بطريقة سريعة وواضحة على الهاتف.",
    primary: "ابدأ اللعب",
    secondary: "استكشف الرياضة",
    sportsTitle: "كرة القدم أولا، بتجربة مناسبة للحظات المباشرة",
    sportsText: "تابع المباراة مباشرة، واشعر بتغير الإيقاع لحظة بلحظة، ثم ادخل إلى الرهان المباشر عندما تصبح اللقطة أو القيمة مناسبة.",
    casinoTitle: "كازينو بإيقاع أنظف",
    casinoText: "سلوتس، ألعاب مباشرة، ألعاب سريعة، واختيارات بارزة ضمن نظام بصري premium وواضح.",
    promosTitle: "عروض وهدايا سهلة القراءة",
    promosText: "بطاقات المكافآت تجعل الخطوة التالية واضحة ومناسبة لشاشة الهاتف.",
    trustTitle: "وضوح محلي بدون مبالغة",
    trustText: "خطوات بسيطة وقنوات دعم ومسار حساب واضح يساعد المستخدم على فهم ما بعد ذلك.",
    playEyebrow: "جاهز عندما تكون جاهزًا",
    playTitle: "اختر لحظتك وابدأ اللعب",
    playText: "استكشف كرة القدم المباشرة وألعاب الكازينو والمكافآت بالوتيرة التي تناسبك، ثم ابدأ عبر تجربة موبايل واضحة وسهلة المتابعة.",
  },
};

type HomeLanguage = keyof typeof copy;

const homeSurfaceCopy = {
  en: {
    sportsKicker: "Match center",
    casinoKicker: "Choose your game",
    promosKicker: "Rewards",
    casinoExplore: "explore",
    casinoOpenSection: "Open this section first",
    rewardExplore: "Explore this offer",
    phoneBadge: "Melbet live",
    phoneTitle: "Football",
    phoneStatus: "LIVE 24",
    phoneTabs: ["Live", "Lineups", "Markets"],
    phoneSeeLineup: "See lineup",
    phonePlaceBet: "Place a bet",
    phoneFullTime: "Full time result",
    phoneLiveSpecial: "Live special",
    phoneStake: "Stake",
    phonePossibleWin: "Possible win",
    phoneHotMarkets: "hot markets",
    phoneUpdating: "updating",
    phoneMarketChips: ["+124", "Live 1X2", "Next goal"],
    phoneHomeToWin: (team: string) => `${team} to win`,
    phoneAwayToScore: (team: string) => `${team} to score`,
  },
  fr: {
    sportsKicker: "Centre du match",
    casinoKicker: "Choisissez votre jeu",
    promosKicker: "Recompenses",
    casinoExplore: "explorer",
    casinoOpenSection: "Ouvrir cette section d'abord",
    rewardExplore: "Explorer cette offre",
    phoneBadge: "Melbet en direct",
    phoneTitle: "Football",
    phoneStatus: "LIVE 24",
    phoneTabs: ["Live", "Compos", "Marches"],
    phoneSeeLineup: "Voir la compo",
    phonePlaceBet: "Parier",
    phoneFullTime: "Resultat final",
    phoneLiveSpecial: "Special live",
    phoneStake: "Mise",
    phonePossibleWin: "Gain possible",
    phoneHotMarkets: "marches chauds",
    phoneUpdating: "mise a jour",
    phoneMarketChips: ["+124", "1X2 live", "Prochain but"],
    phoneHomeToWin: (team: string) => `${team} gagne`,
    phoneAwayToScore: (team: string) => `But de ${team}`,
  },
  ar: {
    sportsKicker: "مركز المباراة",
    casinoKicker: "اختر لعبتك",
    promosKicker: "المكافآت",
    casinoExplore: "استكشف",
    casinoOpenSection: "افتح هذا القسم أولاً",
    rewardExplore: "استكشف العرض",
    phoneBadge: "ميلبيت مباشر",
    phoneTitle: "كرة القدم",
    phoneStatus: "مباشر 24",
    phoneTabs: ["مباشر", "التشكيلات", "الاسواق"],
    phoneSeeLineup: "عرض التشكيلة",
    phonePlaceBet: "ضع الرهان",
    phoneFullTime: "النتيجة النهائية",
    phoneLiveSpecial: "سوق مباشر",
    phoneStake: "المبلغ",
    phonePossibleWin: "العائد المحتمل",
    phoneHotMarkets: "اسواق ساخنة",
    phoneUpdating: "يتم التحديث",
    phoneMarketChips: ["+124", "1X2 مباشر", "الهدف القادم"],
    phoneHomeToWin: (team: string) => `فوز ${team}`,
    phoneAwayToScore: (team: string) => `تسجيل ${team}`,
  },
} as const;

const liveMatches = [
  {
    league: "Champions League",
    time: "72 min",
    home: { name: "Real Madrid", logo: "/teams/realmadrid.png", score: 2 },
    away: { name: "Barcelona", logo: "/teams/barcelona.png", score: 1 },
    odds: ["1.74", "3.45", "4.80"],
  },
  {
    league: "Premier League",
    time: "59 min",
    home: { name: "Arsenal", logo: "/teams/arsenal.png", score: 1 },
    away: { name: "Liverpool", logo: "/teams/liverpool.png", score: 1 },
    odds: ["2.18", "2.95", "3.25"],
  },
  {
    league: "European Night",
    time: "41 min",
    home: { name: "Bayern", logo: "/teams/bayern.png", score: 3 },
    away: { name: "PSG", logo: "/teams/PSG.png", score: 2 },
    odds: ["1.62", "4.10", "5.40"],
  },
  {
    league: "Serie A Live",
    time: "64 min",
    home: { name: "Inter", logo: "/teams/inter.png", score: 0 },
    away: { name: "Juventus", logo: "/teams/juventus.png", score: 0 },
    odds: ["2.05", "2.72", "3.90"],
  },
  {
    league: "England Live",
    time: "78 min",
    home: { name: "Man City", logo: "/teams/mancity.png", score: 2 },
    away: { name: "Man United", logo: "/teams/manunited.png", score: 2 },
    odds: ["1.92", "3.20", "3.70"],
  },
];

const oddsLabels = ["1", "X", "2"] as const;

const liveChatUsers = [
  "nora002",
  "rr32",
  "hichem",
  "yacine13",
  "ines07",
  "walid",
  "mimo9",
  "sara004",
  "lyes",
  "kimo23",
  "anis",
  "nina14",
  "roro7",
  "moh23",
  "lamis",
  "dz19",
  "karim8",
  "soso",
  "you06",
  "amine",
  "aymen17",
  "riro",
  "samia31",
  "mery",
  "noor02",
  "adel5",
  "imene",
  "houssem",
  "raouf09",
  "lina6",
] as const;

const liveChatShellCopy = {
  en: {
    eyebrow: "Barcelona vs Real Madrid",
    title: "Live chat",
    voicesLabel: "Active voices",
  },
  fr: {
    eyebrow: "Barcelona vs Real Madrid",
    title: "Chat live",
    voicesLabel: "Voix actives",
  },
  ar: {
    eyebrow: "برشلونة ضد ريال مدريد",
    title: "الدردشة المباشرة",
    voicesLabel: "أصوات نشطة",
  },
} as const;

const sportsBoardCopy = {
  en: {
    badge: "Live match board",
    liveCount: "3 matches live",
    likelyLabel: "Most likely event",
    likelyValue: "Both teams to score",
    likelyText: "Open play is still the strongest angle across the live board.",
    crowdLabel: "Players on this event",
    factLabel: "Interesting fact",
    lastLabel: "Last meeting",
    matchLabel: "Live match",
  },
  fr: {
    badge: "Tableau des matches live",
    liveCount: "3 matches en direct",
    likelyLabel: "Evenement probable",
    likelyValue: "Les deux equipes marquent",
    likelyText: "Le jeu ouvert reste l'angle le plus fort sur l'ensemble du live.",
    crowdLabel: "Joueurs sur cet event",
    factLabel: "Fait interessant",
    lastLabel: "Derniere rencontre",
    matchLabel: "Match live",
  },
  ar: {
    badge: "لوحة المباريات المباشرة",
    liveCount: "3 مباريات مباشرة",
    likelyLabel: "الحدث الأكثر ترجيحا",
    likelyValue: "تسجيل الفريقين",
    likelyText: "اللعب المفتوح ما زال هو الإشارة الأقوى عبر لوحة المباريات المباشرة.",
    crowdLabel: "اللاعبون على هذا الحدث",
    factLabel: "معلومة مثيرة",
    lastLabel: "آخر مواجهة",
    matchLabel: "مباراة مباشرة",
  },
} as const;

const sportsMatchInsights = {
  en: [
    {
      likely: "Both teams to score",
      crowd: "40 players are backing over 2.5 goals",
      fact: "Barcelona have scored in 9 of the last 10 Clasicos.",
      last: "Real Madrid 3 - 2 Barcelona",
    },
    {
      likely: "Liverpool to score next",
      crowd: "27 players are backing both teams to score",
      fact: "Liverpool have scored in each of their last 7 away matches.",
      last: "Arsenal 1 - 1 Liverpool",
    },
    {
      likely: "Another Bayern goal",
      crowd: "33 players are backing over 4.5 goals",
      fact: "Bayern have hit 3 or more goals in 4 of their last 5 home games.",
      last: "PSG 1 - 2 Bayern",
    },
  ],
  fr: [
    {
      likely: "Les deux equipes marquent",
      crowd: "40 joueurs misent sur plus de 2.5 buts",
      fact: "Barcelone a marque dans 9 des 10 derniers Clasicos.",
      last: "Real Madrid 3 - 2 Barcelone",
    },
    {
      likely: "Liverpool marque le prochain but",
      crowd: "27 joueurs misent sur les deux equipes marquent",
      fact: "Liverpool a marque lors de chacun de ses 7 derniers matches a l'exterieur.",
      last: "Arsenal 1 - 1 Liverpool",
    },
    {
      likely: "Encore un but du Bayern",
      crowd: "33 joueurs misent sur plus de 4.5 buts",
      fact: "Le Bayern a marque 3 buts ou plus dans 4 de ses 5 derniers matches a domicile.",
      last: "PSG 1 - 2 Bayern",
    },
  ],
  ar: [
    {
      likely: "تسجيل الفريقين",
      crowd: "40 لاعبا يراهنون على أكثر من 2.5 هدف",
      fact: "برشلونة سجل في 9 من آخر 10 مباريات كلاسيكو.",
      last: "ريال مدريد 3 - 2 برشلونة",
    },
    {
      likely: "ليفربول يسجل الهدف القادم",
      crowd: "27 لاعبا يراهنون على تسجيل الفريقين",
      fact: "ليفربول سجل في آخر 7 مباريات خارج أرضه.",
      last: "أرسنال 1 - 1 ليفربول",
    },
    {
      likely: "هدف آخر لبايرن",
      crowd: "33 لاعبا يراهنون على أكثر من 4.5 أهداف",
      fact: "بايرن سجل 3 أهداف أو أكثر في 4 من آخر 5 مباريات على أرضه.",
      last: "باريس سان جيرمان 1 - 2 بايرن",
    },
  ],
} as const;

const casinoCardsByLanguage = {
  en: [
    {
      badge: "Table play",
      title: "Casino",
      text: "Open roulette, blackjack, and classic tables without digging through crowded menus.",
      imageSrc: "/games/casino.png",
      alt: "Casino tables preview",
    },
    {
      badge: "Quick spins",
      title: "Slots",
      text: "Browse colorful slot picks built for fast scanning when you want to jump straight into a spin.",
      imageSrc: "/games/slots.png",
      alt: "Slots games preview",
    },
    {
      badge: "Live tables",
      title: "Live games",
      text: "Join dealer-led tables with a clearer path to the formats players usually open first.",
      imageSrc: "/games/live.png",
      alt: "Live games preview",
    },
    {
      badge: "Digital matchups",
      title: "Esports",
      text: "Track esports action and digital matchups in the same flow as the rest of your session.",
      imageSrc: "/games/esports.png",
      alt: "Esports games preview",
    },
  ],
  fr: [
    {
      badge: "Jeux de table",
      title: "Casino",
      text: "Ouvrez la roulette, le blackjack et les tables classiques sans fouiller dans des menus charges.",
      imageSrc: "/games/casino.png",
      alt: "Apercu des tables de casino",
    },
    {
      badge: "Tours rapides",
      title: "Slots",
      text: "Parcourez des slots colores pensés pour un repérage rapide quand vous voulez lancer une partie tout de suite.",
      imageSrc: "/games/slots.png",
      alt: "Apercu des machines a sous",
    },
    {
      badge: "Tables live",
      title: "Jeux live",
      text: "Rejoignez des tables avec croupier via un parcours plus clair vers les formats que les joueurs ouvrent d'abord.",
      imageSrc: "/games/live.png",
      alt: "Apercu des jeux live",
    },
    {
      badge: "Matchups digitaux",
      title: "Esports",
      text: "Suivez l'action esports et les confrontations digitales dans le meme flux que le reste de votre session.",
      imageSrc: "/games/esports.png",
      alt: "Apercu esports",
    },
  ],
  ar: [
    {
      badge: "العاب الطاولة",
      title: "الكازينو",
      text: "افتح الروليت والبلاك جاك والطاولات الكلاسيكية من دون التنقل داخل قوائم مزدحمة.",
      imageSrc: "/games/casino.png",
      alt: "معاينة طاولات الكازينو",
    },
    {
      badge: "لفات سريعة",
      title: "السلوتس",
      text: "تصفح اختيارات السلوتس الملونة بسرعة عندما تريد الدخول مباشرة إلى جولة جديدة.",
      imageSrc: "/games/slots.png",
      alt: "معاينة العاب السلوتس",
    },
    {
      badge: "طاولات مباشرة",
      title: "الالعاب المباشرة",
      text: "ادخل إلى الطاولات مع الموزع عبر مسار اوضح نحو الصيغ التي يفتحها اللاعبون اولاً.",
      imageSrc: "/games/live.png",
      alt: "معاينة الالعاب المباشرة",
    },
    {
      badge: "مواجهات رقمية",
      title: "الرياضات الالكترونية",
      text: "تابع اكشن الرياضات الالكترونية والمواجهات الرقمية داخل نفس المسار مع بقية الجلسة.",
      imageSrc: "/games/esports.png",
      alt: "معاينة الرياضات الالكترونية",
    },
  ],
} as const;

const rewardGalleryCardsByLanguage = {
  en: [
    {
      kicker: "A good place to start",
      title: "Welcome bonus",
      text: "A clear first offer that makes it easy to jump in when you are ready to play.",
      imageSrc: "/rewards/welcome.png",
    },
    {
      kicker: "Built for match day",
      title: "Football boost",
      text: "A timely extra for the games you are already following, without making you search for it.",
      imageSrc: "/rewards/football.png",
    },
    {
      kicker: "Easy way back in",
      title: "Cashback drop",
      text: "A simple offer that gives you another reason to keep the session going.",
      imageSrc: "/rewards/cashback.png",
    },
    {
      kicker: "A more premium route",
      title: "VIP reward",
      text: "Extra value and premium-style perks for players who want something a little more elevated.",
      imageSrc: "/rewards/vip.png",
    },
  ],
  fr: [
    {
      kicker: "Un bon point de depart",
      title: "Bonus de bienvenue",
      text: "Une premiere offre claire qui permet d'entrer facilement quand vous etes pret a jouer.",
      imageSrc: "/rewards/welcome.png",
    },
    {
      kicker: "Pense pour le jour de match",
      title: "Boost football",
      text: "Un extra bien place pour les matches que vous suivez deja, sans vous obliger a le chercher.",
      imageSrc: "/rewards/football.png",
    },
    {
      kicker: "Facile a relancer",
      title: "Drop cashback",
      text: "Une offre simple qui donne une bonne raison de continuer la session.",
      imageSrc: "/rewards/cashback.png",
    },
    {
      kicker: "Une voie plus premium",
      title: "Recompense VIP",
      text: "Plus de valeur et des avantages premium pour les joueurs qui veulent quelque chose de plus eleve.",
      imageSrc: "/rewards/vip.png",
    },
  ],
  ar: [
    {
      kicker: "بداية مناسبة",
      title: "مكافاة الترحيب",
      text: "عرض اول واضح يجعل الدخول اسهل عندما تكون جاهزاً للعب.",
      imageSrc: "/rewards/welcome.png",
    },
    {
      kicker: "مصمم ليوم المباراة",
      title: "تعزيز كرة القدم",
      text: "اضافة في وقتها للمباريات التي تتابعها بالفعل من دون الحاجة للبحث عنها.",
      imageSrc: "/rewards/football.png",
    },
    {
      kicker: "طريقة سهلة للعودة",
      title: "استرداد نقدي",
      text: "عرض بسيط يمنحك سبباً اضافياً لمواصلة الجلسة.",
      imageSrc: "/rewards/cashback.png",
    },
    {
      kicker: "مسار اكثر تميزاً",
      title: "مكافاة VIP",
      text: "قيمة اضافية ومزايا بطابع مميز للاعبين الذين يريدون تجربة اكثر ارتفاعاً.",
      imageSrc: "/rewards/vip.png",
    },
  ],
} as const;

type RewardCardData = {
  kicker: string;
  title: string;
  text: string;
  imageSrc: string;
};

const phonePalette = {
  accent: "#2BB673",
  accentBorderSoft: "rgba(43, 182, 115, 0.18)",
  accentBorder: "rgba(43, 182, 115, 0.24)",
  accentFill: "rgba(43, 182, 115, 0.12)",
  accentText: "#5be39b",
  accentSoftText: "#8EE8B6",
  highlight: "#5BE39B",
  highlightBorder: "rgba(91, 227, 155, 0.32)",
  highlightFill: "rgba(91, 227, 155, 0.14)",
  darkText: "#07100a",
} as const;

function LiveDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`al-live-dot inline-block h-2.5 w-2.5 rounded-full bg-[#2BB673] shadow-[0_0_16px_rgba(43,182,115,0.62)] ${className}`}
      aria-hidden="true"
    />
  );
}

function Team({
  name,
  logo,
  score,
}: {
  name: string;
  logo: string;
  score: number;
}) {
  return (
    <div className="min-w-0">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <Image
          src={logo}
          alt=""
          width={36}
          height={36}
          sizes="36px"
          className="h-8 w-8 object-contain"
        />
      </div>
      <div className="mt-2 truncate text-center text-[11px] font-semibold text-white/76">
        {name}
      </div>
      <div className="mt-1 text-center text-[26px] font-semibold leading-none text-white">
        {score}
      </div>
    </div>
  );
}

function MatchCard({
  match,
  ui,
  isArabic = false,
}: {
  match: (typeof liveMatches)[number];
  ui: (typeof homeSurfaceCopy)[HomeLanguage];
  isArabic?: boolean;
}) {
  const labels = ["1", "X", "2"];

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="pointer-events-none absolute inset-3 z-10 flex flex-col rounded-[22px] border border-white/12 bg-[linear-gradient(180deg,rgba(20,20,20,0.98),rgba(6,6,6,0.98))] p-3 shadow-[0_18px_42px_rgba(0,0,0,0.56),inset_0_1px_0_rgba(255,255,255,0.08)]"
    >
      <div
        className="pointer-events-none absolute inset-x-5 top-0 h-px"
        style={{
          backgroundImage: "linear-gradient(90deg, transparent, rgba(43, 182, 115, 0.55), transparent)",
        }}
      />
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="inline-flex min-w-0 items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: phonePalette.accent }}
          />
          <span className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-white/48">
            {match.league}
          </span>
        </div>
        <span
          className="shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
          style={{
            borderColor: phonePalette.accentBorder,
            backgroundColor: phonePalette.accentFill,
            color: phonePalette.accentText,
          }}
        >
          {match.time}
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <Team {...match.home} />
        <div className="rounded-full border border-white/10 bg-black/24 px-2.5 py-1 text-[11px] font-semibold text-white/54">
          VS
        </div>
        <Team {...match.away} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {match.odds.map((odd, oddIndex) => (
          <button
            key={`${match.league}-${odd}`}
            type="button"
            className="rounded-[12px] border border-white/10 bg-[#111111] px-2 py-2 text-start shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:bg-[#171717]"
          >
            <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-white/34">
              {labels[oddIndex]}
            </span>
            <span
              className="mt-0.5 block text-[16px] font-semibold"
              style={{ color: phonePalette.highlight }}
            >
              {odd}
            </span>
          </button>
        ))}
      </div>

      <div className="relative mt-4 overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(0,0,0,0.38))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative -translate-y-0.5 grid grid-cols-[0.95fr_1.05fr] gap-2">
          <button
            type="button"
            className="min-h-[30px] rounded-full border border-white/10 bg-white/[0.045] px-3 text-[9px] font-semibold text-white/76"
          >
            {ui.phoneSeeLineup}
          </button>
          <button
            type="button"
            className="min-h-[30px] rounded-full px-3 text-[9px] font-bold"
            style={{
              backgroundColor: phonePalette.accent,
              color: "#04110b",
            }}
          >
            {ui.phonePlaceBet}
          </button>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const ui = homeSurfaceCopy[language as HomeLanguage];
  const loopedMatches = [...liveMatches, liveMatches[0]];
  const [activeMatchIndex, setActiveMatchIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveMatchIndex((current) => current + 1);
    }, 3800);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (transitionEnabled) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [transitionEnabled]);

  const visibleMatchIndex =
    activeMatchIndex === liveMatches.length ? 0 : activeMatchIndex;

  const handleTrackTransitionEnd = () => {
    if (activeMatchIndex !== liveMatches.length) {
      return;
    }

    setTransitionEnabled(false);
    setActiveMatchIndex(0);
  };

  return (
    <div dir="ltr" className="relative mx-auto w-full max-w-[336px] sm:max-w-[390px] lg:mx-0">
      <div className="relative overflow-hidden rounded-[36px] border border-white/14 bg-[linear-gradient(180deg,#0e0e0e,#030303)] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.52)]">
        <div className="pointer-events-none absolute inset-[10px] rounded-[31px] border border-white/8" />
        <div
          className="pointer-events-none absolute inset-[15px] rounded-[28px] border"
          style={{ borderColor: phonePalette.accentBorderSoft }}
        />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/52 to-transparent" />
        <div
          className="pointer-events-none absolute inset-y-12 start-0 w-px"
          style={{
            backgroundImage: "linear-gradient(180deg, transparent, rgba(43, 182, 115, 0.34), transparent)",
          }}
        />
        <div className="pointer-events-none absolute inset-y-12 end-0 w-px bg-gradient-to-b from-transparent via-white/24 to-transparent" />
        <div dir={isArabic ? "rtl" : "ltr"} className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,#111111,#050505)] p-3">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38">
                {ui.phoneBadge}
              </div>
              <div className="mt-1 text-[20px] font-semibold tracking-[-0.04em] text-white">
                {ui.phoneTitle}
              </div>
            </div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold"
              style={{
                backgroundColor: phonePalette.highlight,
                color: phonePalette.darkText,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: phonePalette.darkText }}
              />
              {ui.phoneStatus}
            </div>
          </div>

          <div className="mb-3 grid grid-cols-3 gap-2 text-center">
            {ui.phoneTabs.map((item, index) => (
              <div
                key={item}
                className={`rounded-[13px] border px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                  index === 0
                    ? ""
                    : "border-white/8 bg-white/[0.035] text-white/44"
                }`}
                style={
                  index === 0
                    ? {
                        borderColor: phonePalette.highlightBorder,
                        backgroundColor: phonePalette.highlightFill,
                        color: phonePalette.highlight,
                      }
                    : undefined
                }
              >
                {item}
              </div>
            ))}
          </div>

          <div className="relative h-[322px] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#050505,#0c0c0c)]">
            <div className="pointer-events-none absolute inset-[1px] z-0 rounded-[23px] border border-white/6" />
            <div
              className="pointer-events-none absolute inset-x-7 top-0 z-[1] h-px"
              style={{
                backgroundImage: "linear-gradient(90deg, transparent, rgba(43, 182, 115, 0.6), transparent)",
              }}
            />
            <div className="pointer-events-none absolute inset-y-5 left-0 z-[1] w-px bg-gradient-to-b from-transparent via-white/16 to-transparent" />
            <div
              className="pointer-events-none absolute inset-y-7 right-0 z-[1] w-px"
              style={{
                backgroundImage: "linear-gradient(180deg, transparent, rgba(43, 182, 115, 0.26), transparent)",
              }}
            />

            <div
              dir="ltr"
              className="relative z-10 flex h-full"
              style={{
                transform: `translate3d(-${activeMatchIndex * 100}%, 0, 0)`,
                transition: transitionEnabled
                  ? "transform 760ms cubic-bezier(0.22, 1, 0.36, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {loopedMatches.map((match, matchIndex) => (
                <div
                  key={`${match.league}-${matchIndex}`}
                  className="relative h-full min-w-full overflow-hidden"
                >
                  <MatchCard match={match} ui={ui} isArabic={isArabic} />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 rounded-[24px] shadow-[inset_0_10px_14px_rgba(255,255,255,0.06)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10 rounded-t-[24px] bg-gradient-to-b from-white/10 to-transparent" />
          </div>

          <div className="mt-3 flex items-center justify-center gap-2">
            {liveMatches.map((match, matchIndex) => (
              <span
                key={`${match.league}-indicator`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  matchIndex === visibleMatchIndex
                    ? "w-6 bg-[#2BB673]"
                    : "w-2 bg-white/18"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>

          <div className="mt-3 rounded-[18px] border border-white/8 bg-black/18 p-3">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/40">
              <span>{ui.phoneHotMarkets}</span>
              <span style={{ color: phonePalette.highlight }}>{ui.phoneUpdating}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {ui.phoneMarketChips.map((item) => (
                <div key={item} className="rounded-[12px] border border-white/8 bg-white/[0.035] px-2 py-2 text-center text-[10px] font-semibold text-white/56">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RewardVisualCard({
  card,
  ctaLabel,
  className,
}: {
  card: RewardCardData;
  ctaLabel: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-[24px] border border-white/8 bg-[#09110c] shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#2BB673]/22 ${className ?? ""}`}>
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(7,12,9,0.04), rgba(7,12,9,0.14) 32%, rgba(6,10,8,0.92) 100%), radial-gradient(circle at 22% 18%, rgba(43,182,115,0.22), transparent 30%), url('${card.imageSrc}')`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%,rgba(0,0,0,0.14)_55%,rgba(5,8,6,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/34 to-transparent" />

      <div className="relative flex min-h-[250px] flex-col justify-end p-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8EE8B6]">
          {card.kicker}
        </div>
        <h3 className="mt-3 max-w-[12ch] text-[28px] font-semibold leading-tight text-white">
          {card.title}
        </h3>
        <p className="mt-3 max-w-[24ch] text-[15px] leading-7 text-white/72">
          {card.text}
        </p>
        <div className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#D7F76B]">
          {ctaLabel}
        </div>
      </div>
    </div>
  );
}

function RewardShowcase() {
  const { language } = useLanguage();
  const cards = rewardGalleryCardsByLanguage[language as HomeLanguage];
  const ui = homeSurfaceCopy[language as HomeLanguage];

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title}>
          <RewardVisualCard
            card={card}
            ctaLabel={ui.rewardExplore}
            className="h-full"
          />
        </div>
      ))}
    </div>
  );
}

type MatchData = (typeof liveMatches)[number];

type LanguageKey = keyof typeof liveChatShellCopy;

type SportsBoardLabels = {
  badge: string;
  liveCount: string;
  likelyLabel: string;
  likelyValue: string;
  likelyText: string;
  crowdLabel: string;
  factLabel: string;
  lastLabel: string;
  matchLabel: string;
};

type SportsMatchInsight = {
  likely: string;
  crowd: string;
  fact: string;
  last: string;
};

type InsightSlide = {
  label: string;
  accentLabel: string;
  title: string;
  text?: string;
};

function createSeededRng(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function buildLiveChatEntries(language: LanguageKey, match: MatchData) {
  const commentaryByLanguage = {
    en: [
      `${match.home.name} are pressing high again, this feels like another corner coming.`,
      `${match.away.name} finally slowed the tempo, but the back line still looks nervous.`,
      "Midfield is deciding everything now, every second ball matters.",
      `If ${match.home.name} keep attacking the far post, something opens.`,
      `That space behind ${match.away.name} is still there, one clean pass can punish it.`,
      "The tempo just jumped, this is the moment people start watching the next goal market.",
      `${match.home.name} look sharper in transition right now.`,
      `${match.away.name} had a better spell there, they finally held the ball for a few phases.`,
      "This match is living on tiny mistakes now, every loose touch feels dangerous.",
      "One better cross and this scoreboard changes again.",
      `${match.away.name} are pressing for real now, ${match.home.name} cannot keep giving it away.`,
      "It feels like another big chance is one move away.",
    ],
    fr: [
      `${match.home.name} presse tres haut encore, on sent presque un autre corner.`,
      `${match.away.name} a calme le rythme, mais la ligne defensive reste nerveuse.`,
      "Le milieu decide tout maintenant, chaque deuxieme ballon compte.",
      `Si ${match.home.name} continue d'attaquer le second poteau, quelque chose va s'ouvrir.`,
      `Il y a toujours de l'espace derriere ${match.away.name}, une bonne passe suffit.`,
      "Le rythme vient de monter, c'est le moment ou tout le monde regarde le prochain but.",
      `${match.home.name} semble plus tranchant en transition pour l'instant.`,
      `${match.away.name} a enfin une meilleure sequence avec plus de possession.`,
      "Ce match vit sur de petits details maintenant, chaque controle rate fait peur.",
      "Un centre mieux dose et le score peut changer tout de suite.",
      `${match.away.name} presse vraiment maintenant, ${match.home.name} donne trop de ballons.`,
      "On sent qu'une grosse occasion est toute proche.",
    ],
    ar: [
      `‏${match.home.name} يضغط بقوة من جديد، ويبدو أن ركنية أخرى قادمة.`,
      `‏${match.away.name} هدأ الإيقاع قليلا، لكن الخط الخلفي ما زال متوترا.`,
      "‏وسط الملعب هو من يحسم كل شيء الآن، وكل كرة ثانية مهمة.",
      `‏إذا واصل ${match.home.name} اللعب على القائم البعيد فستظهر فرصة واضحة.`,
      `‏المساحة خلف ${match.away.name} ما زالت موجودة، وتمريره واحدة جيدة قد تكفي.`,
      "‏الإيقاع ارتفع فجأة، وهذه هي اللحظة التي يبدأ فيها الجميع بمراقبة سوق الهدف القادم.",
      `‏${match.home.name} يبدو أخطر في التحول السريع حاليا.`,
      `‏${match.away.name} عاش فترة أفضل هنا وأخيرا احتفظ بالكرة لعدة لقطات.`,
      "‏المباراة الآن تعيش على الأخطاء الصغيرة، وكل لمسة غير دقيقة تبدو خطيرة.",
      "‏عرضية واحدة أفضل قد تغير النتيجة من جديد.",
      `‏ضغط ${match.away.name} أصبح حقيقيا الآن، و${match.home.name} لا يستطيع الاستمرار في فقدان الكرة.`,
      "‏واضح أن فرصة كبيرة أخرى قريبة جدا.",
    ],
  } as const;

  const comments = commentaryByLanguage[language];
  const rng = createSeededRng(
    language === "en" ? 101 : language === "fr" ? 202 : 303,
  );
  let runningSeconds = 67 * 60 + 24;

  return liveChatUsers.map((user, index) => ({
    id: `${language}-${user}-${index}`,
    user,
    message: comments[index % comments.length],
    timestamp: (() => {
      runningSeconds += 8 + Math.floor(rng() * 31);
      const minute = Math.floor(runningSeconds / 60);
      const second = runningSeconds % 60;
      return `${minute}:${second.toString().padStart(2, "0")}`;
    })(),
  }));
}

function LiveChatPanel({
  language,
  match,
}: {
  language: LanguageKey;
  match: MatchData;
}) {
  const panelCopy = liveChatShellCopy[language];
  const entries = useMemo(() => buildLiveChatEntries(language, match), [language, match]);
  const loopBufferRows = 8;
  const rowHeight = 58;
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [activeVoices, setActiveVoices] = useState(30);
  const loopedEntries = [...entries, ...entries.slice(0, loopBufferRows + 1)];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, 2300);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveVoices((current) => {
        const shiftPool = [-2, -1, -1, 1, 1, 2];
        const shift = shiftPool[Math.floor(Math.random() * shiftPool.length)];
        return Math.max(24, Math.min(39, current + shift));
      });
    }, 1700);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (transitionEnabled) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [transitionEnabled]);

  const handleTransitionEnd = () => {
    if (activeIndex !== entries.length) {
      return;
    }

    setTransitionEnabled(false);
    setActiveIndex(0);
  };

  const isArabic = language === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="relative flex h-full min-h-[520px] min-w-0 flex-col overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(0,0,0,0.28))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-5 lg:min-h-0"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/45 to-transparent" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-32 w-32 rounded-full bg-[#2BB673]/10 blur-3xl" />
        <div className="absolute right-[10%] top-[6%] h-28 w-28 rounded-full bg-white/7 blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#2BB673]/22 bg-[#2BB673]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2BB673] sm:text-[11px]">
          <LiveDot />
          {panelCopy.eyebrow}
        </div>

        <div className="mt-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.03em] text-[#F5F7F4] sm:text-[28px]">
              {panelCopy.title}
            </h3>
          </div>

          <div className="shrink-0 rounded-[16px] border border-white/10 bg-black/18 px-3 py-2">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/34">
              {panelCopy.voicesLabel}
            </div>
            <div className="mt-1.5 flex items-end gap-2.5">
              <div className="text-[22px] font-semibold leading-none text-[#8EE8B6] sm:text-[26px]">
                {activeVoices}
              </div>
              <div className="mb-1 flex items-end gap-1" aria-hidden="true">
                {[12, 19, 14, 22].map((height, index) => (
                  <span
                    key={`chat-eq-${height}`}
                    className="al-eq-bar inline-block w-1.5 rounded-full bg-[#2BB673]/80"
                    style={{
                      height,
                      animationDelay: `${index * 0.12}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-3 min-h-0 flex-1 overflow-hidden rounded-[22px] border border-white/8 bg-black/18 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:mt-4 sm:p-3">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-14 bg-gradient-to-b from-[#07110b] via-[#07110b]/88 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-[#07110b] via-[#07110b]/88 to-transparent" />

          <div className="relative h-full overflow-hidden">
            <div
              className="flex flex-col gap-1.5"
              style={{
                transform: `translate3d(0, -${activeIndex * rowHeight}px, 0)`,
                transition: transitionEnabled
                  ? "transform 640ms cubic-bezier(0.22, 1, 0.36, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedEntries.map((entry, index) => (
                <article
                  key={`${entry.id}-${index}`}
                  className="flex h-[52px] items-start gap-2.5 rounded-[16px] border border-white/8 bg-white/[0.035] px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#2BB673]/18 bg-[#2BB673]/10 text-[10px] font-semibold uppercase text-[#8EE8B6]">
                    {entry.user.slice(0, 2)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className="truncate text-[11px] font-semibold text-white/82 sm:text-[12px]">
                        {entry.user}
                      </div>
                      <div className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8EE8B6]">
                        {entry.timestamp}
                      </div>
                    </div>

                    <p className="mt-1 text-[11px] leading-[1.15rem] text-white/66 sm:text-[12px]">
                      {entry.message}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MatchBoardCard({ match }: { match: MatchData }) {
  return (
    <article className="flex h-full min-h-0 flex-col rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,10,8,0.84),rgba(0,0,0,0.52))] p-3.5 shadow-[0_18px_42px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.04)] lg:p-4">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2.5">
        <div className="flex justify-start">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <Image
              src={match.home.logo}
              alt=""
              width={30}
              height={30}
              sizes="30px"
              className="h-[30px] w-[30px] object-contain"
            />
          </div>
        </div>

        <div className="flex min-w-[78px] flex-col items-center justify-center text-center">
          <div className="text-[25px] font-semibold leading-none text-white sm:text-[27px]">
            {match.home.score} : {match.away.score}
          </div>
          <div className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8EE8B6] sm:text-[10px]">
            {match.time}
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <Image
              src={match.away.logo}
              alt=""
              width={30}
              height={30}
              sizes="30px"
              className="h-[30px] w-[30px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-3">
        <div className="truncate text-left text-[12px] font-semibold text-white/82 sm:text-[13px]">
          {match.home.name}
        </div>
        <div className="truncate text-right text-[12px] font-semibold text-white/82 sm:text-[13px]">
          {match.away.name}
        </div>
      </div>

      <div className="mt-3 grid flex-1 grid-cols-3 gap-1.5">
        {match.odds.map((odd, index) => (
          <div
            key={`${match.league}-${oddsLabels[index]}`}
            className="rounded-[14px] border border-white/8 bg-white/[0.045] p-2 sm:p-2.5"
          >
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/34 sm:text-[10px]">
              {oddsLabels[index]}
            </div>
            <div className="mt-0.5 text-[17px] font-semibold text-[#F5F7F4] sm:text-[18px]">
              {odd}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function RotatingInsightCard({
  slides,
  initialIndex = 0,
  isArabic = false,
}: {
  slides: InsightSlide[];
  initialIndex?: number;
  isArabic?: boolean;
}) {
  const loopedSlides = [...slides, slides[0]];
  const [activeSlideIndex, setActiveSlideIndex] = useState(initialIndex);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((current) => current + 1);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (transitionEnabled) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [transitionEnabled]);

  const handleTransitionEnd = () => {
    if (activeSlideIndex !== slides.length) {
      return;
    }

    setTransitionEnabled(false);
    setActiveSlideIndex(0);
  };

  return (
    <article className="relative flex h-full min-h-0 overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(0,0,0,0.3))] shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
      <div
        dir="ltr"
        className="flex h-full w-full"
        style={{
          transform: `translate3d(-${activeSlideIndex * 100}%, 0, 0)`,
          transition: transitionEnabled
            ? "transform 720ms cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {loopedSlides.map((slide, index) => (
          <div
            key={`${slide.label}-${slide.accentLabel}-${index}`}
            dir={isArabic ? "rtl" : "ltr"}
            className="flex min-w-full flex-col p-3.5 lg:p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/34 sm:text-[10px]">
                {slide.label}
              </div>
              <div className="text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8EE8B6] sm:text-[10px]">
                {slide.accentLabel}
              </div>
            </div>
            <div className="mt-2.5 text-[15px] font-semibold leading-5 text-[#F5F7F4] sm:text-[16px] sm:leading-6">
              {slide.title}
            </div>
            {slide.text ? (
              <p className="mt-2 text-[12px] leading-[1.2rem] text-white/64 sm:text-[13px] sm:leading-5">
                {slide.text}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
        {slides.map((slide, index) => (
          <span
            key={`${slide.label}-${index}-dot`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              (activeSlideIndex === slides.length ? 0 : activeSlideIndex) === index
                ? "w-5 bg-[#2BB673]"
                : "w-1.5 bg-white/18"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </article>
  );
}

function buildInsightDecks({
  matches,
  insights,
  copy,
}: {
  matches: MatchData[];
  insights: readonly SportsMatchInsight[];
  copy: SportsBoardLabels;
}) {
  return matches.map((match, index) => {
    const matchLabel = `${match.home.name} vs ${match.away.name}`;
    const insight = insights[index];

    return [
      {
        label: copy.likelyLabel,
        accentLabel: copy.badge,
        title: copy.likelyValue,
        text: copy.likelyText,
      },
      {
        label: copy.crowdLabel,
        accentLabel: matchLabel,
        title: insight.crowd,
      },
      {
        label: copy.factLabel,
        accentLabel: matchLabel,
        title: insight.fact,
      },
      {
        label: copy.lastLabel,
        accentLabel: matchLabel,
        title: insight.last,
      },
    ] satisfies InsightSlide[];
  });
}

function LiveSportsBoard() {
  const featuredMatch = liveMatches[0];
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const boardCopy: SportsBoardLabels =
    sportsBoardCopy[language as keyof typeof sportsBoardCopy];
  const boardMatches = liveMatches.slice(0, 3);
  const boardInsights =
    sportsMatchInsights[
      language as keyof typeof sportsMatchInsights
    ] as readonly SportsMatchInsight[];
  const insightDecks = useMemo(
    () =>
      buildInsightDecks({
        matches: boardMatches,
        insights: boardInsights,
        copy: boardCopy,
      }),
    [boardCopy, boardInsights, boardMatches],
  );

  return (
    <div className="mt-8 grid items-stretch gap-4 lg:h-[620px] lg:grid-cols-[1.12fr_0.88fr] xl:h-[640px]">
      <FadeUp className="h-full min-h-0">
        <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(135deg,rgba(43,182,115,0.18),rgba(255,255,255,0.035)_50%,rgba(244,67,54,0.12))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-5">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/45 to-transparent" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[8%] top-[14%] h-32 w-32 rounded-full bg-[#2BB673]/12 blur-3xl" />
            <div className="absolute right-[10%] top-[12%] h-28 w-28 rounded-full bg-white/8 blur-3xl" />
            <div className="al-scan-line absolute inset-x-[18%] top-0 h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
          </div>

          <div className="relative z-10 mb-4 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2BB673]/22 bg-[#2BB673]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2BB673] sm:text-[11px]">
              <LiveDot />
              {boardCopy.badge}
            </div>
            <div className="rounded-full border border-white/10 bg-black/18 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/48">
              {boardCopy.liveCount}
            </div>
          </div>

          <div className="relative z-10 grid min-h-0 flex-1 gap-2.5 lg:grid-cols-2 lg:grid-rows-3">
            {boardMatches.map((match, index) => (
              <Fragment key={`${match.home.name}-${match.away.name}-${language}-row`}>
                <MatchBoardCard match={match} />
                <RotatingInsightCard
                  slides={insightDecks[index]}
                  initialIndex={index % insightDecks[index].length}
                  isArabic={isArabic}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </FadeUp>
      <FadeUp className="h-full min-h-0">
        <LiveChatPanel
          key={`${language}-${featuredMatch.home.name}-${featuredMatch.away.name}`}
          language={language as LanguageKey}
          match={featuredMatch}
        />
      </FadeUp>
    </div>
  );
}

function Section({ id, kicker, title, text, children }: { id: string; kicker: string; title: string; text: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <StaggerReveal amount={0.16}>
          <div className="max-w-3xl">
            <FadeUp><div className="lp-eyebrow text-[#2BB673]">{kicker}</div></FadeUp>
            <FadeUp><h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.03em] text-[#F5F7F4] sm:text-[42px]">{title}</h2></FadeUp>
            <FadeUp><p className="mt-4 max-w-2xl text-[16px] leading-8 text-white/64">{text}</p></FadeUp>
          </div>
          {children}
        </StaggerReveal>
      </div>
    </section>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const t = copy[language];
  const ui = homeSurfaceCopy[language as HomeLanguage];
  const casinoCards = casinoCardsByLanguage[language as HomeLanguage];

  return (
    <div className="flex flex-col">
      <section id="top" className="relative px-4 pb-12 pt-10 sm:px-8 sm:pb-16 lg:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-2 h-40 bg-[radial-gradient(circle_at_18%_20%,rgba(43,182,115,0.13),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(244,67,54,0.1),transparent_28%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.94fr)_410px] lg:gap-5 xl:gap-7">
          <StaggerReveal immediate className="relative z-10">
            <FadeUp>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#2BB673]/22 bg-[#2BB673]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2BB673]">
                <LiveDot />
                {t.heroKicker}
              </div>
            </FadeUp>
            <FadeUp><h1 className="mt-4 max-w-[12ch] text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#F5F7F4] sm:text-[58px] lg:text-[68px]">{t.heroTitle}</h1></FadeUp>
            <FadeUp><p className="mt-5 max-w-[58ch] text-[16px] leading-8 text-white/68 sm:text-[18px]">{t.heroText}</p></FadeUp>
            <FadeUp>
              <div className="mt-8 grid gap-3 sm:flex">
                <Link href="#play" className="inline-flex min-h-[56px] items-center justify-center rounded-[18px] bg-[#2BB673] px-6 text-[18px] font-semibold text-[#04110b] shadow-[0_16px_36px_rgba(43,182,115,0.18)] transition hover:-translate-y-0.5 hover:bg-[#39C884]">{t.primary}</Link>
                <Link href="#sports" className="inline-flex min-h-[56px] items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.05] px-6 text-[18px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]">{t.secondary}</Link>
              </div>
            </FadeUp>
          </StaggerReveal>
          <StaggerReveal immediate className="lg:justify-self-start lg:pt-4"><FadeUp><PhoneMockup /></FadeUp></StaggerReveal>
          </div>

        </div>
      </section>

      <Section
        id="sports"
        kicker={ui.sportsKicker}
        title={t.sportsTitle}
        text={t.sportsText}
      >
        <LiveSportsBoard />
      </Section>

      <Section id="casino" kicker={ui.casinoKicker} title={t.casinoTitle} text={t.casinoText}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {casinoCards.map((card) => (
            <FadeUp key={card.title}>
              <div className="group h-full overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.035] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#2BB673]/24">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.imageSrc}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.16)_42%,rgba(5,8,6,0.88)_100%)]" />
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/38 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/72 backdrop-blur-sm">
                      <LiveDot className="h-2 w-2" />
                      {card.badge}
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/28 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D7F76B]">
                      {ui.casinoExplore}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-[24px] font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/62">{card.text}</p>
                  <div className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2BB673]">
                    {ui.casinoOpenSection}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section id="promos" kicker={ui.promosKicker} title={t.promosTitle} text={t.promosText}>
        <RewardShowcase />
      </Section>

      <section id="play" className="relative px-4 pb-20 pt-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <StaggerReveal className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(135deg,rgba(43,182,115,0.16),rgba(255,255,255,0.035),rgba(244,67,54,0.12))] p-6 text-center shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-10">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#2BB673]/45 to-transparent" />
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2BB673]/22 bg-[#2BB673]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2BB673]">
              <LiveDot />
              {t.playEyebrow}
            </div>
            <FadeUp><h2 className="text-[32px] font-semibold leading-tight tracking-[-0.03em] sm:text-[46px]">{t.playTitle}</h2></FadeUp>
            <FadeUp><p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-white/68">{t.playText}</p></FadeUp>
            <FadeUp><div className="mt-8 flex justify-center"><Link href="#top" className="inline-flex min-h-[56px] w-full items-center justify-center rounded-[18px] bg-[#2BB673] px-7 text-[18px] font-semibold text-[#04110b] transition hover:bg-[#39C884] sm:w-auto">{t.primary}</Link></div></FadeUp>
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}
