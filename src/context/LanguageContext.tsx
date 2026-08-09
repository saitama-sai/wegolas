import React, { createContext, useContext, useState } from 'react';

export type LanguageCode = 'EN' | 'TR' | 'ES' | 'NL' | 'ZH' | 'DE' | 'FR' | 'JA';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'EN', label: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'TR', label: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'ES', label: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'NL', label: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'ZH', label: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'DE', label: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'FR', label: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'JA', label: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
];

export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  EN: {
    navServices: 'Services',
    navProjects: 'Projects',
    navAbout: 'About',
    navBlog: 'Blog',
    navContacts: 'Contacts',
    heroTag: 'Digital design & development agency',
    heroDesc: 'We design and build digital products, brands and websites for companies ready to move beyond the ordinary.',
    whatWeDo: 'WHAT WE DO',
    whatWeDoDesc: "Since 2010, we've partnered with startups, scale-ups and global companies to design brands, websites and digital products that combine beautiful visuals with measurable business results.",
    selectedWork: 'Selected work',
    viewAllProjects: 'View All Projects',
    trustedClients: 'Trusted by our clients',
    whyWegolas: 'WHY WEGOLAS',
    whyWegolasDesc: "For over 15 years, we've been helping startups, scale-ups and global companies transform ambitious ideas into successful digital products. Our work has earned international recognition, but what matters most to us is building long-term partnerships and delivering measurable business value.",
    yearsExp: 'YEARS OF EXPERIENCE',
    deliveredWorld: 'PROJECTS DELIVERED WORLDWIDE',
    insights: 'Insights',
    visitBlog: 'Visit blog',
    faq: 'FAQ',
    haveIdea: 'Have an idea?',
    tellUs: 'Tell us about it',
    estimateProject: 'Estimate project',
  },
  TR: {
    navServices: 'Hizmetler',
    navProjects: 'Projeler',
    navAbout: 'Hakkımızda',
    navBlog: 'Blog',
    navContacts: 'İletişim',
    heroTag: 'Dijital tasarım & geliştirme ajansı',
    heroDesc: 'Sıradanlığın ötesine geçmeye hazır şirketler için dijital ürünler, markalar ve web siteleri tasarlıyor ve geliştiriyoruz.',
    whatWeDo: 'NELER YAPIYORUZ',
    whatWeDoDesc: '2010 yıldan bu yana, etkileyici görselleri ölçülebilir iş sonuçlarıyla birleştiren markalar, web siteleri ve dijital ürünler tasarlamak için girişimler ve küresel şirketlerle ortaklık kuruyoruz.',
    selectedWork: 'Seçilen İşler',
    viewAllProjects: 'Tüm Projeleri İncele',
    trustedClients: 'Müşterilerimizin Güveni',
    whyWegolas: 'NEDEN WEGOLAS',
    whyWegolasDesc: '15 yılı aşkın süredir, iddialı fikirleri başarılı dijital ürünlere dönüştürmek için girişimlere ve küresel markalara rehberlik ediyoruz. İşlerimiz uluslararası ödüller kazandı ancak bizim için en önemlisi uzun vadeli ortaklıklar kurmaktır.',
    yearsExp: 'YILLIK DENEYİM',
    deliveredWorld: 'DÜNYA ÇAPINDA TAMAMLANAN PROJE',
    insights: 'İçgörüler & Blog',
    visitBlog: 'Blogu Ziyaret Et',
    faq: 'Sıkça Sorulan Sorular',
    haveIdea: 'Bir fikriniz mi var?',
    tellUs: 'Bize anlatın',
    estimateProject: 'Proje Bütçesi Hesapla',
  },
  ES: {
    navServices: 'Servicios',
    navProjects: 'Proyectos',
    navAbout: 'Nosotros',
    navBlog: 'Blog',
    navContacts: 'Contacto',
    heroTag: 'Agencia de diseño y desarrollo digital',
    heroDesc: 'Diseñamos y construimos productos digitales, marcas y sitios web para empresas listas para ir más allá de lo ordinario.',
    whatWeDo: 'LO QUE HACEMOS',
    whatWeDoDesc: 'Desde 2010, nos asociamos con startups y empresas globales para diseñar marcas y productos digitales que combinan gran estética con resultados medibles.',
    selectedWork: 'Trabajos seleccionados',
    viewAllProjects: 'Ver todos los proyectos',
    trustedClients: 'Confianza de nuestros clientes',
    whyWegolas: 'POR QUÉ WEGOLAS',
    whyWegolasDesc: 'Durante más de 15 años, hemos ayudado a empresas a transformar ideas ambiciosas en productos digitales exitosos.',
    yearsExp: 'AÑOS DE EXPERIENCIA',
    deliveredWorld: 'PROYECTOS ENTREGADOS EN TODO EL MUNDO',
    insights: 'Artículos e Insights',
    visitBlog: 'Visitar el blog',
    faq: 'Preguntas frecuentes',
    haveIdea: '¿Tienes una idea?',
    tellUs: 'Cuéntanos sobre ella',
    estimateProject: 'Calcular presupuesto',
  },
  NL: {
    navServices: 'Diensten',
    navProjects: 'Projecten',
    navAbout: 'Over ons',
    navBlog: 'Blog',
    navContacts: 'Contact',
    heroTag: 'Digital design & development agency',
    heroDesc: 'Wij ontwerpen en bouwen digitale producten, merken en websites voor bedrijven die verder willen gaan dan het gewone.',
    whatWeDo: 'WAT WE DOEN',
    whatWeDoDesc: 'Sinds 2010 werken we samen met startups en wereldwijde bedrijven om merken, websites en digitale producten te ontwerpen die schoonheid combineren met meetbare resultaten.',
    selectedWork: 'Geselecteerd werk',
    viewAllProjects: 'Bekijk alle projecten',
    trustedClients: 'Vertrouwd door onze klanten',
    whyWegolas: 'WAAROM WEGOLAS',
    whyWegolasDesc: 'Al meer dan 15 jaar helpen we bedrijven om ambitieuze ideeën om te zetten in succesvolle digitale producten.',
    yearsExp: 'JAAR ERVARING',
    deliveredWorld: 'PROJECTEN WERELDWIJD GELEVERD',
    insights: 'Inzichten',
    visitBlog: 'Bekijk blog',
    faq: 'Veelgestelde vragen',
    haveIdea: 'Heb je een idee?',
    tellUs: 'Vertel het ons',
    estimateProject: 'Schat projectkosten',
  },
  ZH: {
    navServices: '服务',
    navProjects: '项目',
    navAbout: '关于我们',
    navBlog: '博客',
    navContacts: '联系我们',
    heroTag: '数字设计与开发机构',
    heroDesc: '我们为准备超越平凡的公司设计和构建数字产品、品牌和网站。',
    whatWeDo: '我们的业务',
    whatWeDoDesc: '自2010年以来，我们与初创公司和全球企业合作，设计将优美视觉与可衡量业务成果相结合的品牌和数字产品。',
    selectedWork: '精选作品',
    viewAllProjects: '查看所有项目',
    trustedClients: '客户信赖',
    whyWegolas: '为什么选择 WEGOLAS',
    whyWegolasDesc: '15多年来，我们一直帮助公司将雄心勃勃的创意转化为成功的数字产品。',
    yearsExp: '年行业经验',
    deliveredWorld: '全球交付项目',
    insights: '洞察与文章',
    visitBlog: '访问博客',
    faq: '常见问题',
    haveIdea: '有一个想法？',
    tellUs: '告诉我们',
    estimateProject: '评估项目预算',
  },
  DE: {
    navServices: 'Leistungen',
    navProjects: 'Projekte',
    navAbout: 'Über uns',
    navBlog: 'Blog',
    navContacts: 'Kontakt',
    heroTag: 'Digitale Design- & Entwicklungsagentur',
    heroDesc: 'Wir gestalten und entwickeln digitale Produkte, Marken und Websites für Unternehmen, die über das Gewöhnliche hinausgehen wollen.',
    whatWeDo: 'WAS WIR TUN',
    whatWeDoDesc: 'Seit 2010 arbeiten wir mit Startups und globalen Unternehmen zusammen, um Marken und digitale Produkte mit messbarem Erfolg zu gestalten.',
    selectedWork: 'Ausgewählte Arbeiten',
    viewAllProjects: 'Alle Projekte ansehen',
    trustedClients: 'Vertrauen unserer Kunden',
    whyWegolas: 'WARUM WEGOLAS',
    whyWegolasDesc: 'Seit über 15 Jahren helfen wir Unternehmen dabei, ehrgeizige Ideen in erfolgreiche digitale Produkte zu verwandeln.',
    yearsExp: 'JAHRE ERFAHRUNG',
    deliveredWorld: 'WELTWEIT GELIEFERTE PROJEKTE',
    insights: 'Einblicke & Blog',
    visitBlog: 'Blog besuchen',
    faq: 'Häufig gestellte Fragen',
    haveIdea: 'Haben Sie eine Idee?',
    tellUs: 'Erzählen Sie uns davon',
    estimateProject: 'Projekt schätzen',
  },
  FR: {
    navServices: 'Services',
    navProjects: 'Projets',
    navAbout: 'À propos',
    navBlog: 'Blog',
    navContacts: 'Contact',
    heroTag: 'Agence de design & développement numérique',
    heroDesc: 'Nous concevons et créons des produits numériques, des marques et des sites web pour les entreprises prêtes à dépasser l’ordinaire.',
    whatWeDo: 'CE QUE NOUS FAISONS',
    whatWeDoDesc: 'Depuis 2010, nous collaborons avec des startups et des entreprises mondiales pour concevoir des marques et des produits numériques performants.',
    selectedWork: 'Projets sélectionnés',
    viewAllProjects: 'Voir tous les projets',
    trustedClients: 'Ils nous font confiance',
    whyWegolas: 'POURQUOI WEGOLAS',
    whyWegolasDesc: 'Depuis plus de 15 ans, nous aidons les entreprises à transformer des idées ambitieuses en produits numériques réussis.',
    yearsExp: "ANNÉES D'EXPÉRIENCE",
    deliveredWorld: 'PROJETS LIVRÉS DANS LE MONDE',
    insights: 'Perspectives & Blog',
    visitBlog: 'Visiter le blog',
    faq: 'Foire aux questions',
    haveIdea: 'Vous avez une idée ?',
    tellUs: 'Parlez-nous-en',
    estimateProject: 'Estimer le projet',
  },
  JA: {
    navServices: 'サービス',
    navProjects: '実績',
    navAbout: '会社概要',
    navBlog: 'ブログ',
    navContacts: 'お問い合わせ',
    heroTag: 'デジタルデザイン＆開発エージェンシー',
    heroDesc: '平凡を超えようとする企業のために、デジタルプロダクト、ブランド、ウェブサイトをデザイン・構築します。',
    whatWeDo: '事業内容',
    whatWeDoDesc: '2010年以来、スタートアップやグローバル企業と連携し、美しいビジュアルと測定可能なビジネス成果を融合したプロダクトを創出しています。',
    selectedWork: '厳選された実績',
    viewAllProjects: 'すべての実績を見る',
    trustedClients: 'クライアントの信頼',
    whyWegolas: 'WEGOLASを選ぶ理由',
    whyWegolasDesc: '15年以上にわたり、意欲的なアイデアを成功するデジタルプロダクトへと変革する支援を行っています。',
    yearsExp: '年の経験実績',
    deliveredWorld: '世界中で納品されたプロジェクト',
    insights: 'インサイト',
    visitBlog: 'ブログを見る',
    faq: 'よくある質問',
    haveIdea: 'アイデアはありますか？',
    tellUs: 'お気軽にご相談ください',
    estimateProject: 'プロジェクト費用を試算',
  },
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string) => string;
  currentLangObj: LanguageOption;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('wegolas_lang');
    return (saved as LanguageCode) || 'EN';
  });

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    localStorage.setItem('wegolas_lang', code);
  };

  const t = (key: string): string => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS['EN']?.[key] || key;
  };

  const currentLangObj = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currentLangObj }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
