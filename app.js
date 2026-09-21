/* ============ CONFIGURATION & CONSTANTS ============ */
const CONFIG = {
  MAP_CENTER: [31.5, -7.5],
  MAP_ZOOM: 6,
  MAX_RESULTS: 50,
  DEBOUNCE_DELAY: 300,
  TOAST_DURATION: 3000,
  CARTO_API_KEY: (typeof window !== 'undefined' && window.CARTO_API_KEY)
    ? window.CARTO_API_KEY
    : 'cb1_3q49_1_6bdaa3af80a6d8a9df251f2b'
};

const COLORS = {
  'Réseau des Etablissements de Soins de Santé Primaire': '#ff7f0e',
  'RESSP': '#ff7f0e',
  'Réseau Hospitalier': '#1f77b4',
  'RH': '#1f77b4',
  "Réseau Intégré des Soins d'Urgence Médicale": '#d62728',
  'RISUM': '#d62728',
  'Réseau des Etablissements Médico-Sociaux': '#2ca02c',
  'REMS': '#2ca02c'
};

const PALETTE = ['#9467bd','#8c564b','#e377c2','#7f7f7f','#bcbd22','#17becf','#aec7e8','#ffbb78'];
const SYMBOLOGY_DEFAULT_PALETTE = ['#0ea5e9', '#22c55e', '#f59e0b', '#a855f7', '#ef4444', '#14b8a6'];
const PROVINCE_LABEL_MIN_ZOOM = 6;
const COMMUNE_LABEL_MIN_ZOOM = 9;
const PROVINCE_LABEL_OBSTACLE_PADDING = 0;
const PROVINCE_LABEL_LABEL_PADDING = 1;
const PROVINCE_LABEL_RELAXED_OBSTACLE_ZOOM = 8;
const PROVINCE_LABEL_REPOSITION_OFFSETS = [
  [0, 0],
  [26, 0], [-26, 0],
  [0, 18], [0, -18],
  [34, 16], [-34, 16], [34, -16], [-34, -16],
  [46, 0], [-46, 0],
  [0, 30], [0, -30]
];
const GRADUATED_PERCENTAGE_MIN = 0;
const GRADUATED_PERCENTAGE_MAX = 100;
const PIVOT_VIEW = {
  HEALTH: 'health',
  PROVINCE: 'province',
  COMMUNE: 'commune',
  POPULATION_2024: 'population_2024'
};
const APP_LANGUAGE_STORAGE_KEY = 'app_language';
const APP_THEME_STORAGE_KEY = 'app_theme';
const APP_THEME = {
  LIGHT: 'light',
  DARK: 'dark'
};
const URL_STATE_PARAMS = {
  LANG: 'lang',
  THEME: 'theme',
  REGION: 'region',
  PROVINCE: 'province',
  COMMUNE: 'commune',
  PIVOT_VIEW: 'pivot',
  PIVOT_OPEN: 'panel',
  ZERO_ROWS: 'zeros'
};
const RGPH2024_OFFICIAL_NATIONAL_POPULATION = 36828330;
const RGPH2024_OFFICIAL_NATIONAL_BREAKDOWN = Object.freeze({
  moroccans: 36680178,
  foreigners: 148152,
  households: 9275038
});
const RGPH2024_OFFICIAL_REGION_POPULATION_BY_CANONICAL = Object.freeze({
  tangertetouanalhoceima: 4030222,
  loriental: 2294665,
  oriental: 2294665,
  fesmeknes: 4467911,
  rabatsalekenitra: 5132639,
  benimellalkhenifra: 2525801,
  casablancasettat: 7688967,
  marrakechsafi: 4892393,
  draatafilalet: 1655623,
  dratafilalet: 1655623,
  drtafilalet: 1655623,
  dratafilalt: 1655623,
  drtafilalt: 1655623,
  soussmassa: 3020431,
  guelmimouednoun: 448685,
  laayounesakiaelhamra: 451028,
  eddakhlaouededdahab: 219965,
  dakhlaouededdahab: 219965,
  dakhlaouededahab: 219965
});
const RGPH2024_OFFICIAL_REGION_BREAKDOWN_BY_CANONICAL = Object.freeze({});
const PIVOT_VIEW_TITLE = {
  ar: {
    [PIVOT_VIEW.HEALTH]: 'احصائيات العرض الصحي',
    [PIVOT_VIEW.PROVINCE]: 'احصائيات الاقاليم',
    [PIVOT_VIEW.COMMUNE]: 'احصائيات الجماعات',
    [PIVOT_VIEW.POPULATION_2024]: 'إحصائيات السكان - RGPH 2024'
  },
  fr: {
    [PIVOT_VIEW.HEALTH]: 'Statistiques de l’offre de soins',
    [PIVOT_VIEW.PROVINCE]: 'Statistiques des provinces/préfectures',
    [PIVOT_VIEW.COMMUNE]: 'Statistiques des communes',
    [PIVOT_VIEW.POPULATION_2024]: 'Statistiques de la population RGPH 2024'
  }
};
const UI_TRANSLATIONS = {
  ar: {
    appTitle: 'منصة الخريطة التفاعلية للصحة العمومية',
    headerSubtitle: 'تحليل وعرض المؤسسات الصحية والخدمية',
    totalInstitutionsLabel: 'المؤسسات:',
    totalNetworksLabel: 'الشبكات:',
    totalRegionsLabel: 'الجهات:',
    totalProvincesLabel: 'الأقاليم:',
    totalPopulationLabel: 'عدد السكان:',
    togglePivotBtnText: 'احصائيات العرض الصحي',
    togglePivotProvinceBtnText: 'احصائيات الاقاليم',
    togglePivotCommuneBtnText: 'احصائيات الجماعات',
    togglePivotPopulationBtnText: 'إحصائيات سكان RGPH 2024',
    searchPlaceholder: 'ابحث عن مؤسسة، جماعة، إقليم...',
    languageToggleLabel: 'FR',
    themeToDarkLabel: 'داكن',
    themeToLightLabel: 'فاتح',
    themeToDarkTitle: 'تفعيل الوضع الداكن',
    themeToLightTitle: 'تفعيل الوضع الفاتح',
    themeToggleAria: 'تبديل المظهر',
    helpTitle: 'المساعدة والاختصارات',
    routeTitle: 'حساب المسافة والوقت بين مؤسستين',
    captureTitle: 'حفظ صورة الخريطة PNG',
    shareTitle: 'مشاركة الخريطة',
    appLoaded: 'تم تحميل البيانات بنجاح',
    appLoadError: 'حدث خطأ في التحميل',
    copyLinkSuccess: 'تم نسخ الرابط',
    unknown: 'غير محدد',
    unknownNetwork: 'غير معروف',
    popupProvince: 'العمالة/الإقليم',
    popupRegion: 'الجهة',
    popupCode: 'الرمز',
    popupCommune: 'الجماعة',
    pageTitle: 'منصة الخريطة التفاعلية للصحة العمومية — تحليل المؤسسات',
    loadingText: 'جارٍ تحميل البيانات...',
    clearSearchTitle: 'مسح البحث',
    downloadCsvTitle: 'تنزيل CSV',
    toggleZerosBtnText: '0️⃣ عرض أصفار',
    toggleZerosBtnTextHide: '0️⃣ إخفاء أصفار',
    toggleZerosBtnTitle: 'عرض/إخفاء الصفوف الفارغة',
    exportExcelTitle: 'تصدير Excel',
    printTitle: 'طباعة الجدول',
    closePivotLabel: 'إغلاق',
    pivotHealthTitle: 'إحصائيات العرض الصحي',
    pivotProvinceTitle: 'إحصائيات الأقاليم',
    pivotCommuneTitle: 'إحصائيات الجماعات',
    pivotPopulationTitle: 'إحصائيات السكان - RGPH 2024'
  },
  fr: {
    appTitle: 'Plateforme cartographique interactive de la santé publique',
    headerSubtitle: 'Analyse et visualisation des établissements de santé',
    totalInstitutionsLabel: 'Établissements :',
    totalNetworksLabel: 'Réseaux :',
    totalRegionsLabel: 'Régions :',
    totalProvincesLabel: 'Provinces :',
    totalPopulationLabel: 'Population :',
    togglePivotBtnText: 'Statistiques de l’offre de soins',
    togglePivotProvinceBtnText: 'Statistiques des provinces/préfectures',
    togglePivotCommuneBtnText: 'Statistiques des communes',
    togglePivotPopulationBtnText: 'Statistiques population RGPH 2024',
    searchPlaceholder: 'Rechercher un établissement, une commune, une province…',
    languageToggleLabel: 'AR',
    themeToDarkLabel: 'Sombre',
    themeToLightLabel: 'Clair',
    themeToDarkTitle: 'Activer le mode sombre',
    themeToLightTitle: 'Activer le mode clair',
    themeToggleAria: 'Basculer le thème',
    helpTitle: 'Aide et raccourcis',
    routeTitle: 'Calculer distance et durée entre deux établissements',
    captureTitle: 'Exporter la carte en PNG',
    shareTitle: 'Partager la carte',
    appLoaded: 'Données chargées avec succès',
    appLoadError: 'Erreur lors du chargement des données',
    copyLinkSuccess: 'Lien copié',
    unknown: 'Non défini',
    unknownNetwork: 'Inconnu',
    popupProvince: 'Préfecture / Province',
    popupRegion: 'Région',
    popupCode: 'Code',
    popupCommune: 'Commune',
    pageTitle: 'Plateforme cartographique interactive de la santé publique — Analyse des établissements',
    loadingText: 'Chargement des données...',
    clearSearchTitle: 'Effacer la recherche',
    downloadCsvTitle: 'Télécharger CSV',
    toggleZerosBtnText: '0️⃣ Afficher zéros',
    toggleZerosBtnTextHide: '0️⃣ Masquer zéros',
    toggleZerosBtnTitle: 'Afficher/masquer les lignes vides',
    exportExcelTitle: 'Exporter Excel',
    printTitle: 'Imprimer le tableau',
    closePivotLabel: 'Fermer',
    pivotHealthTitle: 'Statistiques de l\'offre de soins',
    pivotProvinceTitle: 'Statistiques des provinces/préfectures',
    pivotCommuneTitle: 'Statistiques des communes',
    pivotPopulationTitle: 'Statistiques de la population RGPH 2024'
  }
};
const REGION_ARABIC_MAP = {
  'Tanger-Tétouan-Al Hoceïma': 'طنجة-تطوان-الحسيمة',
  'Tanger-Tetouan-Al Hoceima': 'طنجة-تطوان-الحسيمة',
  'Tanger-Tetouan-Al Hoceïma': 'طنجة-تطوان-الحسيمة',
  'L’Oriental': 'الشرق',
  "L'Oriental": 'الشرق',
  'Oriental': 'الشرق',
  'Fès-Meknès': 'فاس-مكناس',
  'Fes-Meknes': 'فاس-مكناس',
  'Rabat-Salé-Kénitra': 'الرباط-سلا-القنيطرة',
  'Rabat-Sale-Kenitra': 'الرباط-سلا-القنيطرة',
  'Rabat-Salé-Kenitra': 'الرباط-سلا-القنيطرة',
  'Béni Mellal-Khénifra': 'بني ملال-خنيفرة',
  'Beni Mellal-Khenifra': 'بني ملال-خنيفرة',
  'Casablanca-Settat': 'الدار البيضاء-سطات',
  'Marrakech-Safi': 'مراكش-آسفي',
  'Drâa-Tafilalet': 'درعة-تافيلالت',
  'Drâa-tafilalet': 'درعة-تافيلالت',
  'Draa-Tafilalet': 'درعة-تافيلالت',
  'Draa-tafilalet': 'درعة-تافيلالت',
  'Dra?-Tafilalet': 'درعة-تافيلالت',
  'Dra?-tafilalet': 'درعة-تافيلالت',
  'Dr?a-Tafilalet': 'درعة-تافيلالت',
  'Dr?a-tafilalet': 'درعة-تافيلالت',
  'Souss-Massa': 'سوس-ماسة',
  'Guelmim-Oued Noun': 'كلميم-واد نون',
  'Laâyoune-Sakia El Hamra': 'العيون-الساقية الحمراء',
  'Laayoune-Sakia El Hamra': 'العيون-الساقية الحمراء',
  'Eddakhla-Oued Eddahab': 'الداخلة-وادي الذهب',
  'Dakhla-Oued Ed-Dahab': 'الداخلة-وادي الذهب'
};

const PROVINCE_ARABIC_MAP = {
  'Agadir Ida Ou Tanane': 'أكادير إداوتنان',
  'Al Haouz': 'الحوز',
  'Al Hoceima': 'الحسيمة',
  'Aïn Chock': 'عين الشق',
  'Ain Chock': 'عين الشق',
  'Aïn Chok': 'عين الشق',
  'Ain Chok': 'عين الشق',
  'AÃ¯n Chock': 'عين الشق',
  'Aïn Sebaâ-Hay Mohammadi': 'عين السبع-الحي المحمدي',
  'Ain Sebaâ-Hay Mohammadi': 'عين السبع-الحي المحمدي',
  'Ain Sebaa-Hay Mohammadi': 'عين السبع-الحي المحمدي',
  'Ain Seba-Hay Mohammadi': 'عين السبع-الحي المحمدي',
  'A n Seba -Hay Mohammadi': 'عين السبع-الحي المحمدي',
  'AÃ¯n SebaÃ¢-Hay Mohammadi': 'عين السبع-الحي المحمدي',
  'Aousserd': 'أوسرد',
  'Assa-zag': 'آسا-الزاك',
  'Azilal': 'أزيلال',
  'Beni Mellal': 'بني ملال',
  'Benslimane': 'بنسليمان',
  'Berkane': 'بركان',
  'Berrechid': 'برشيد',
  'Ben Msick': 'ابن مسيك',
  'Boujdour': 'بوجدور',
  'Boulemane': 'بولمان',
  'Casablanca': 'الدار البيضاء',
  'Casablanca Anfa': 'الدار البيضاء-أنفا',
  'Chefchaouen': 'شفشاون',
  'Chichaoua': 'شيشاوة',
  'Chtouka Ait Baha': 'اشتوكة آيت باها',
  'Driouch': 'الدريوش',
  'El Hajeb': 'الحاجب',
  'El Jadida': 'الجديدة',
  'El Kelaa Des Sraghna': 'قلعة السراغنة',
  'Errachidia': 'الرشيدية',
  'Es Semara': 'السمارة',
  'Essaouira': 'الصويرة',
  'Fahs-Anjra': 'فحص-أنجرة',
  'Fes': 'فاس',
  'Figuig': 'فجيج',
  'Fkih Ben Saleh': 'الفقيه بن صالح',
  'Guelmim': 'كلميم',
  'Guercif': 'جرسيف',
  'Ifrane': 'إفران',
  'Inezgane Ait Melloul': 'إنزكان آيت ملول',
  'Jerada': 'جرادة',
  'Hay Hassani': 'الحي الحسني',
  'Kenitra': 'القنيطرة',
  'Khémisset': 'الخميسات',
  'KhÃ©misset': 'الخميسات',
  'Khemisset': 'الخميسات',
  'Khenifra': 'خنيفرة',
  'Khénifra': 'خنيفرة',
  'Khouribga': 'خريبكة',
  'Laayoune': 'العيون',
  'Larache': 'العرائش',
  'Marrakech': 'مراكش',
  'Mdiq-Fnideq': 'المضيق-الفنيدق',
  'Mediouna': 'مديونة',
  'Meknès': 'مكناس',
  'Meknes': 'مكناس',
  'Midelt': 'ميدلت',
  'Mohammedia': 'المحمدية',
  'Moulay Rachid': 'مولاي رشيد',
  'Moulay Yacoub': 'مولاي يعقوب',
  'Nador': 'الناظور',
  'Nouaceur': 'النواصر',
  'Ouarzazate': 'ورزازات',
  'Oued Ed-Dahab': 'وادي الذهب',
  'Ouezzane': 'وزان',
  'Oujda Angad': 'وجدة أنكاد',
  'Rabat': 'الرباط',
  'Rehamena': 'الرحامنة',
  'Safi': 'آسفي',
  'Salé': 'سلا',
  'SalÃ©': 'سلا',
  'Sale': 'سلا',
  'Sefrou': 'صفرو',
  'Settat': 'سطات',
  'Sidi Bennour': 'سيدي بنور',
  'Sidi Bernoussi': 'سيدي البرنوصي',
  'Sidi Ifni': 'سيدي إفني',
  'Sidi Kacem': 'سيدي قاسم',
  'Sidi Slimane': 'سيدي سليمان',
  'Skhirate-Temara': 'الصخيرات-تمارة',
  'Al Fida-Mers Sultan': 'الفداء-مرس السلطان',
  'Tan Tan': 'طانطان',
  'Tanger Assilah': 'طنجة-أصيلة',
  'Taounate': 'تاونات',
  'Taourirt': 'تاوريرت',
  'Tarfaya': 'طرفاية',
  'Taroudant': 'تارودانت',
  'Tata': 'طاطا',
  'Taza': 'تازة',
  'Tetouan': 'تطوان',
  'Tinghir': 'تنغير',
  'Tiznit': 'تزنيت',
  'Youssoufia': 'اليوسفية',
  'Zagora': 'زاكورة'
};

const COMMUNE_ARABIC_MAP = {
  'Sale': 'سلا',
  'Salé': 'سلا',
  'Aïn-Chock': 'عين الشق',
  'Ain-Chock': 'عين الشق',
  'Aîn-Chock (Arrond.)': 'عين الشق',
  'AÃ¯n-Chock': 'عين الشق',
  'AÃ®n-Chock (Arrond.)': 'عين الشق',
  'Ain Chock': 'عين الشق',
  'Rabat': 'الرباط',
  'Casablanca': 'الدار البيضاء',
  'Marrakech': 'مراكش',
  'Fes': 'فاس',
  'Fès': 'فاس',
  'Meknes': 'مكناس',
  'Meknès': 'مكناس',
  'Tangier': 'طنجة',
  'Tanger': 'طنجة',
  'Agadir': 'أكادير',
  'Oujda': 'وجدة',
  'Ait Buyahya El Hajjama': 'آيت بويحيى الحجامة',
  'Ait buyahya el hajjama': 'آيت بويحيى الحجامة',
  'My Driss Aghbal': 'مولاي إدريس أغبال',
  'Mly Driss Aghbal': 'مولاي إدريس أغبال',
  'Moulay Driss Aghbal': 'مولاي إدريس أغبال',
  'Sidi El Ghandour': 'سيدي الغندور'
};

const NETWORK_ARABIC_MAP = {
  'RESSP': 'شبكة مؤسسات الرعاية الصحية الأولية',
  'Réseau des Etablissements de Soins de Santé Primaire': 'شبكة مؤسسات الرعاية الصحية الأولية',
  'Reseau des Etablissements de Soins de Sante Primaire': 'شبكة مؤسسات الرعاية الصحية الأولية',
  'RH': 'الشبكة الاستشفائية',
  'Réseau Hospitalier': 'الشبكة الاستشفائية',
  'Reseau Hospitalier': 'الشبكة الاستشفائية',
  'RISUM': 'الشبكة المندمجة لمستعجلات الطب',
  "Réseau Intégré des Soins d'Urgence Médicale": 'الشبكة المندمجة لمستعجلات الطب',
  "Reseau Integre des Soins d'Urgence Medicale": 'الشبكة المندمجة لمستعجلات الطب',
  'REMS': 'شبكة المؤسسات الطبية الاجتماعية',
  'Réseau des Etablissements Médico-Sociaux': 'شبكة المؤسسات الطبية الاجتماعية',
  'Reseau des Etablissements Medico-Sociaux': 'شبكة المؤسسات الطبية الاجتماعية'
};

const REGION_NORMALIZATION_BY_CANONICAL = {
  dratafilalet: 'Drâa-Tafilalet',
  draatafilalet: 'Drâa-Tafilalet',
  dratafilalt: 'Drâa-Tafilalet',
  drtafilalet: 'Drâa-Tafilalet',
  drtafilalt: 'Drâa-Tafilalet'
};

const PROVINCE_NORMALIZATION_BY_CANONICAL = {
  anchock: 'Aïn Chock',
  ainsebahaymohammadi: 'Ain Sebaa-Hay Mohammadi',
  ainsebaahaymohammadi: 'Ain Sebaa-Hay Mohammadi',
  ansebaahaymohammadi: 'Ain Sebaa-Hay Mohammadi',
  ansebahaymohammadi: 'Ain Sebaa-Hay Mohammadi',
  benmsick: 'Ben Msick',
  hayhassani: 'Hay Hassani',
  casablancaanfa: 'Casablanca Anfa',
  alfidamerssultan: 'Al Fida-Mers Sultan',
  moulayrachid: 'Moulay Rachid',
  sidibernoussi: 'Sidi Bernoussi'
};

let REGION_ARABIC_CANONICAL_MAP = null;
let PROVINCE_ARABIC_CANONICAL_MAP = null;
let COMMUNE_ARABIC_CANONICAL_MAP = null;
let REGION_FRENCH_BY_ARABIC_CANONICAL = null;
let PROVINCE_FRENCH_BY_ARABIC_CANONICAL = null;
let COMMUNE_FRENCH_BY_ARABIC_CANONICAL = null;
let currentLanguage = localStorage.getItem(APP_LANGUAGE_STORAGE_KEY) === 'fr' ? 'fr' : 'ar';
let currentTheme = localStorage.getItem(APP_THEME_STORAGE_KEY) === APP_THEME.DARK ? APP_THEME.DARK : APP_THEME.LIGHT;

/* ============ GLOBAL STATE ============ */
let map = null;
let allMarkers = [];
let allRawMarkers = [];
let allInstitutions = [];
let provinceToRegionMap = {};
let provinceToRegionIndex = {};
let provinceCodeToRegionMap = {};
let provinceCodeToNameMap = {};
let provinceNameToCodesIndex = {};
let reseauColors = Object.assign({}, COLORS);
let showZeroRows = false;
let lastPivotData = null;
let currentPivotView = PIVOT_VIEW.HEALTH;
let pivotSortStateByView = {
  [PIVOT_VIEW.HEALTH]: { key: 'region', direction: 'asc' },
  [PIVOT_VIEW.PROVINCE]: { key: 'region', direction: 'asc' },
  [PIVOT_VIEW.COMMUNE]: { key: 'region', direction: 'asc' },
  [PIVOT_VIEW.POPULATION_2024]: { key: 'region', direction: 'asc' }
};
let searchDebounceTimer = null;
let statsData = null;
let provincesLayer = null;
let communesLayer = null;
let markersClusterGroup = null;
let markersRawGroup = null;
let baseMapTileLayer = null;
let mapPrinter = null;
let reseauVisibility = null;
let currentRegionFilter = '';
let currentProvinceFilter = '';
let currentCommuneFilter = '';
let suppressUrlStateSync = false;
let routeModeActive = false;
let routeSelectedMarkers = [];
let routeLineLayer = null;
let routeHaloLayer = null;
let routeArrowDecorator = null;
let routeArrowAnimationTimer = null;
let routeArrowOffsetPercent = 0;
let routeMovingArrowMarker = null;
let routeMovingArrowTimer = null;
let routePathProgress = 0;
let excelSymbologyThemes = [];
let activeExcelThemeId = '';
let excelValueFieldOptionsByLevel = {
  province: [{ key: 'value', label: 'value' }],
  commune: [{ key: 'value', label: 'value' }]
};
let excelSelectedValueFieldByLevel = {
  province: 'value',
  commune: 'value'
};
let excelColoringTargetLevel = 'province';
let communeArabicByIso = new Map();
let communeArabicByNameKey = new Map();
let excelUiSymbologyByLevel = {
  province: {
    mode: 'graduated',
    uniqueColor: '#0ea5e9',
    minColor: '#dbeafe',
    midColor: '#60a5fa',
    maxColor: '#1d4ed8',
    minValue: null,
    midValue: null,
    maxValue: null,
    categoryColors: new Map()
  },
  commune: {
    mode: 'graduated',
    uniqueColor: '#22c55e',
    minColor: '#dcfce7',
    midColor: '#4ade80',
    maxColor: '#15803d',
    minValue: null,
    midValue: null,
    maxValue: null,
    categoryColors: new Map()
  }
};

function ensureLayerVisibilityState() {
  if (!window.layerVisibility) {
    window.layerVisibility = {
      Provinces: true,
      Communes: true,
      Clustered: true,
      RawInstitutions: false,
      ProvinceLabels: true,
      CommuneLabels: true,
      IndicatorValues: true,
      Networks: true
    };
  }

  if (window.layerVisibility.Clustered && window.layerVisibility.RawInstitutions) {
    window.layerVisibility.RawInstitutions = false;
  }

  return window.layerVisibility;
}

function isFrenchLanguage() {
  return currentLanguage === 'fr';
}

function t(key) {
  const pack = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.ar;
  return fixCommonMojibake(pack[key] || UI_TRANSLATIONS.ar[key] || key);
}

function langText(arText, frText) {
  return fixCommonMojibake(isFrenchLanguage() ? frText : arText);
}

function getPolygonStrokeStyle(level, matches) {
  const targetLevel = level === 'province' ? 'province' : 'commune';
  const isMatch = !!matches;

  if (isDarkTheme()) {
    if (targetLevel === 'province') {
      return {
        color: isMatch ? '#93c5fd' : '#475569',
        weight: isMatch ? 2.6 : 1.1
      };
    }
    return {
      color: isMatch ? '#60a5fa' : '#334155',
      weight: isMatch ? 1.15 : 0.7
    };
  }

  if (targetLevel === 'province') {
    return {
      color: isMatch ? '#333' : '#bbb',
      weight: isMatch ? 2.5 : 1
    };
  }

  return {
    color: isMatch ? '#666' : '#cfcfcf',
    weight: isMatch ? 1 : 0.6
  };
}

function refreshPolygonThemeStyles() {
  if (!map) return;
  if (provincesLayer) updateProvinceLayerByFilters(false);
  if (communesLayer) updateCommuneLayerByFilters();
}

function parseBooleanUrlParam(value) {
  if (!value) return false;
  const normalized = String(value).trim().toLowerCase();
  return normalized === '1' || normalized === 'true' || normalized === 'yes';
}

function readAppStateFromUrl() {
  const params = new URLSearchParams(window.location.search || '');
  const languageParam = params.get(URL_STATE_PARAMS.LANG);
  const themeParam = params.get(URL_STATE_PARAMS.THEME);
  const regionParam = params.get(URL_STATE_PARAMS.REGION);
  const provinceParam = params.get(URL_STATE_PARAMS.PROVINCE);
  const communeParam = params.get(URL_STATE_PARAMS.COMMUNE);
  const pivotParam = params.get(URL_STATE_PARAMS.PIVOT_VIEW);

  return {
    language: languageParam === 'fr' || languageParam === 'ar' ? languageParam : '',
    theme: themeParam === APP_THEME.DARK || themeParam === APP_THEME.LIGHT ? themeParam : '',
    region: normalizeRegionName(regionParam),
    province: normalizeProvinceName(provinceParam),
    commune: normalizeTextValue(communeParam),
    pivotView: normalizePivotView(pivotParam),
    pivotOpen: parseBooleanUrlParam(params.get(URL_STATE_PARAMS.PIVOT_OPEN)),
    showZeroRows: parseBooleanUrlParam(params.get(URL_STATE_PARAMS.ZERO_ROWS))
  };
}

function applyInitialPreferencesFromUrl(state) {
  if (!state || typeof state !== 'object') return;

  if (state.language === 'fr' || state.language === 'ar') {
    currentLanguage = state.language;
    localStorage.setItem(APP_LANGUAGE_STORAGE_KEY, currentLanguage);
  }

  if (state.theme === APP_THEME.DARK || state.theme === APP_THEME.LIGHT) {
    currentTheme = state.theme;
    localStorage.setItem(APP_THEME_STORAGE_KEY, currentTheme);
  }
}

function syncAppStateToUrl() {
  if (suppressUrlStateSync) return;

  const params = new URLSearchParams(window.location.search || '');
  const container = document.getElementById('app-container');
  const isPivotOpen = !!container?.classList.contains('with-pivot');

  const setOrDelete = (key, value) => {
    if (value === null || value === undefined || value === '' || value === false) {
      params.delete(key);
      return;
    }
    params.set(key, String(value));
  };

  setOrDelete(URL_STATE_PARAMS.LANG, currentLanguage === 'fr' ? 'fr' : '');
  setOrDelete(URL_STATE_PARAMS.THEME, currentTheme === APP_THEME.DARK ? APP_THEME.DARK : '');
  setOrDelete(URL_STATE_PARAMS.REGION, currentRegionFilter || '');
  setOrDelete(URL_STATE_PARAMS.PROVINCE, currentProvinceFilter || '');
  setOrDelete(URL_STATE_PARAMS.COMMUNE, currentCommuneFilter || '');
  setOrDelete(URL_STATE_PARAMS.PIVOT_VIEW, currentPivotView !== PIVOT_VIEW.HEALTH ? currentPivotView : '');
  setOrDelete(URL_STATE_PARAMS.PIVOT_OPEN, isPivotOpen ? '1' : '');
  setOrDelete(URL_STATE_PARAMS.ZERO_ROWS, showZeroRows ? '1' : '');

  const nextQuery = params.toString();
  const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ''}${window.location.hash || ''}`;
  window.history.replaceState(null, '', nextUrl);
}

function applyRuntimeStateFromUrl(state) {
  if (!state || typeof state !== 'object') return;

  showZeroRows = !!state.showZeroRows;

  const hasGeoFilters = !!(state.region || state.province || state.commune);
  if (hasGeoFilters) {
    applyGeographicFilters({
      region: state.region || '',
      province: state.province || '',
      commune: state.commune || '',
      fitBounds: false
    });
  } else {
    applyGeographicFilters({ fitBounds: false });
  }

  currentPivotView = normalizePivotView(state.pivotView);
  updatePivotPanelTitle();
  setPivotViewButtonsState();

  if (state.pivotOpen) {
    togglePivotPanelByView(currentPivotView);
  } else {
    closePivotPanel();
  }

  if (lastPivotData) {
    renderCurrentPivotView(getSelectedPivotCategoriesFromUi(lastPivotData.categories || []));
  }
}

function isDarkTheme() {
  return currentTheme === APP_THEME.DARK;
}

function getThemeToggleLabel() {
  return isDarkTheme() ? t('themeToLightLabel') : t('themeToDarkLabel');
}

function getThemeToggleTitle() {
  return isDarkTheme() ? t('themeToLightTitle') : t('themeToDarkTitle');
}

function updateThemeColorMeta() {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (!themeColorMeta) return;
  themeColorMeta.setAttribute('content', isDarkTheme() ? '#0f172a' : '#1f77b4');
}

function updateThemeToggleUi() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeToggleLabel = document.getElementById('themeToggleLabel');
  const themeToggleIcon = document.getElementById('themeToggleIcon');
  const title = getThemeToggleTitle();

  if (themeToggleLabel) {
    themeToggleLabel.textContent = getThemeToggleLabel();
  }

  if (themeToggleBtn) {
    themeToggleBtn.title = title;
    themeToggleBtn.setAttribute('aria-label', t('themeToggleAria'));
    themeToggleBtn.classList.toggle('active', isDarkTheme());
  }

  if (themeToggleIcon) {
    themeToggleIcon.classList.toggle('fa-moon', !isDarkTheme());
    themeToggleIcon.classList.toggle('fa-sun', isDarkTheme());
  }

  updateThemeColorMeta();
}

function applyAppTheme(theme, persist = true) {
  currentTheme = theme === APP_THEME.DARK ? APP_THEME.DARK : APP_THEME.LIGHT;

  if (document.body) {
    document.body.setAttribute('data-theme', currentTheme);
  }

  if (persist) {
    localStorage.setItem(APP_THEME_STORAGE_KEY, currentTheme);
  }

  updateThemeToggleUi();
  applyBaseMapTheme();
  refreshPolygonThemeStyles();
  syncAppStateToUrl();
}

function toggleAppTheme() {
  applyAppTheme(isDarkTheme() ? APP_THEME.LIGHT : APP_THEME.DARK);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem(APP_THEME_STORAGE_KEY);
  const initialTheme = savedTheme === APP_THEME.DARK ? APP_THEME.DARK : APP_THEME.LIGHT;
  applyAppTheme(initialTheme, false);
}

function getPivotViewTitle(view) {
  const byLang = PIVOT_VIEW_TITLE[currentLanguage] || PIVOT_VIEW_TITLE.ar;
  return byLang[view] || byLang[PIVOT_VIEW.HEALTH];
}

function setElementText(id, text) {
  const element = document.getElementById(id);
  if (element) element.textContent = fixCommonMojibake(text);
}

function applyLanguageToStaticUi() {
  document.documentElement.lang = isFrenchLanguage() ? 'fr' : 'ar';
  document.documentElement.dir = isFrenchLanguage() ? 'ltr' : 'rtl';
  document.body.classList.toggle('lang-fr', isFrenchLanguage());
  document.body.classList.toggle('lang-ar', !isFrenchLanguage());

  setElementText('appTitleText', t('appTitle'));
  setElementText('headerSubtitle', t('headerSubtitle'));
  setElementText('totalInstitutionsLabel', t('totalInstitutionsLabel'));
  setElementText('totalNetworksLabel', t('totalNetworksLabel'));
  setElementText('totalRegionsLabel', t('totalRegionsLabel'));
  setElementText('totalProvincesLabel', t('totalProvincesLabel'));
  setElementText('totalPopulationLabel', t('totalPopulationLabel'));
  setElementText('togglePivotBtnText', t('togglePivotBtnText'));
  setElementText('togglePivotProvinceBtnText', t('togglePivotProvinceBtnText'));
  setElementText('togglePivotCommuneBtnText', t('togglePivotCommuneBtnText'));
  setElementText('togglePivotPopulationBtnText', t('togglePivotPopulationBtnText'));
  setElementText('languageToggleLabel', t('languageToggleLabel'));
  updateThemeToggleUi();

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');

  const helpBtn = document.getElementById('helpBtn');
  if (helpBtn) helpBtn.title = t('helpTitle');

  const routeBtn = document.getElementById('routeModeBtn');
  if (routeBtn) routeBtn.title = t('routeTitle');

  const captureBtn = document.getElementById('captureMapBtn');
  if (captureBtn) captureBtn.title = t('captureTitle');

  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) shareBtn.title = t('shareTitle');

  const landingBadge = document.querySelector('#mainLanding .landing-badge');
  if (landingBadge) landingBadge.textContent = langText('منصة تفاعلية وطنية', 'Plateforme nationale interactive');

  const landingTitle = document.querySelector('#mainLanding .landing-title');
  if (landingTitle) landingTitle.textContent = langText('بوابة استكشاف خريطة المؤسسات الصحية', 'Portail d’exploration de la carte des établissements de santé');

  const landingDescription = document.querySelector('#mainLanding .landing-description');
  if (landingDescription) landingDescription.textContent = langText('تتبع توزع المؤسسات الصحية حسب الجهة والإقليم والجماعة، مع أدوات بحث وتحليل وتصدير في واجهة واحدة.', 'Suivez la répartition des établissements de santé par région, province et commune avec des outils de recherche, d’analyse et d’export.');

  const landingStatLabels = document.querySelectorAll('#mainLanding .landing-stat-label');
  if (landingStatLabels[0]) landingStatLabels[0].textContent = langText('إجمالي المؤسسات', 'Total établissements');
  if (landingStatLabels[1]) landingStatLabels[1].textContent = langText('الشبكات المتاحة', 'Réseaux disponibles');
  if (landingStatLabels[2]) landingStatLabels[2].textContent = langText('الجهات المغطاة', 'Régions couvertes');
  if (landingStatLabels[3]) landingStatLabels[3].textContent = langText('الأقاليم المغطاة', 'Provinces couvertes');
  if (landingStatLabels[4]) landingStatLabels[4].textContent = langText('الساكنة', 'Population');
  setElementText('landingPopulationMoroccansLabel', langText('المغاربة', 'Marocains'));
  setElementText('landingPopulationForeignersLabel', langText('الأجانب', 'Étrangers'));
  setElementText('landingPopulationHouseholdsLabel', langText('الأسر', 'Ménages'));

  const landingCards = document.querySelectorAll('#mainLanding .landing-card');
  if (landingCards[0]) {
    const title = landingCards[0].querySelector('h3');
    const desc = landingCards[0].querySelector('p');
    if (title) title.textContent = langText('عرض جغرافي دقيق', 'Visualisation géographique précise');
    if (desc) desc.textContent = langText('خريطة تفاعلية بطبقات المحافظات والجماعات.', 'Carte interactive avec couches provinces et communes.');
  }
  if (landingCards[1]) {
    const title = landingCards[1].querySelector('h3');
    const desc = landingCards[1].querySelector('p');
    if (title) title.textContent = langText('بحث فوري', 'Recherche instantanée');
    if (desc) desc.textContent = langText('الوصول السريع إلى المؤسسات والمواقع المطلوبة.', 'Accès rapide aux établissements et localisations recherchés.');
  }
  if (landingCards[2]) {
    const title = landingCards[2].querySelector('h3');
    const desc = landingCards[2].querySelector('p');
    if (title) title.textContent = langText('تحليل وتصدير', 'Analyse et export');
    if (desc) desc.textContent = langText('جدول تحليلي مع تصدير CSV و Excel بسهولة.', 'Tableau analytique avec export CSV et Excel.');
  }

  const startMapBtn = document.getElementById('startMapBtn');
  if (startMapBtn) startMapBtn.innerHTML = `<i class="fas fa-map"></i> ${langText('ابدأ استكشاف الخريطة', 'Commencer l’exploration')}`;

  const startWithTableBtn = document.getElementById('startWithTableBtn');
  if (startWithTableBtn) startWithTableBtn.innerHTML = `<i class="fas fa-table"></i> ${langText('دخول مع الجدول', 'Entrer avec le tableau')}`;

  const startWithSearchBtn = document.getElementById('startWithSearchBtn');
  if (startWithSearchBtn) startWithSearchBtn.innerHTML = `<i class="fas fa-magnifying-glass"></i> ${langText('دخول مع البحث', 'Entrer avec la recherche')}`;

  // Page title
  document.title = t('pageTitle');

  // Loading overlay text
  const loadingText = document.getElementById('loadingStageText');
  if (loadingText) loadingText.textContent = t('loadingText');

  // Clear search button
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) clearSearchBtn.title = t('clearSearchTitle');

  // Pivot panel buttons
  const downloadCsvBtn = document.getElementById('downloadCsvBtn');
  if (downloadCsvBtn) downloadCsvBtn.title = t('downloadCsvTitle');

  const toggleZerosBtn = document.getElementById('toggleZerosBtn');
  if (toggleZerosBtn) {
    toggleZerosBtn.title = t('toggleZerosBtnTitle');
    toggleZerosBtn.textContent = showZeroRows ? t('toggleZerosBtnTextHide') : t('toggleZerosBtnText');
  }

  const exportExcelBtn = document.getElementById('exportExcelBtn');
  if (exportExcelBtn) exportExcelBtn.title = t('exportExcelTitle');

  const printTableBtn = document.getElementById('printTableBtn');
  if (printTableBtn) printTableBtn.title = t('printTitle');

  const closePivotBtn = document.getElementById('closePivot');
  if (closePivotBtn) closePivotBtn.setAttribute('aria-label', t('closePivotLabel'));

  // Pivot quick action button titles
  const togglePivotBtn = document.getElementById('togglePivotBtn');
  if (togglePivotBtn) togglePivotBtn.title = t('pivotHealthTitle');

  const togglePivotProvinceBtn = document.getElementById('togglePivotProvinceBtn');
  if (togglePivotProvinceBtn) togglePivotProvinceBtn.title = t('pivotProvinceTitle');

  const togglePivotCommuneBtn = document.getElementById('togglePivotCommuneBtn');
  if (togglePivotCommuneBtn) togglePivotCommuneBtn.title = t('pivotCommuneTitle');

  const togglePivotPopulationBtn = document.getElementById('togglePivotPopulationBtn');
  if (togglePivotPopulationBtn) togglePivotPopulationBtn.title = t('pivotPopulationTitle');

  const helpTitle = document.querySelector('#helpModal .modal-header h2');
  if (helpTitle) helpTitle.textContent = langText('المساعدة والاختصارات', 'Aide et raccourcis');

  const helpBody = document.querySelector('#helpModal .modal-body');
  if (helpBody) {
    helpBody.innerHTML = isFrenchLanguage()
      ? `
      <h3>Raccourcis clavier :</h3>
      <table class="shortcuts-table">
        <tr><td><kbd>Ctrl + F</kbd></td><td>Rechercher un établissement</td></tr>
        <tr><td><kbd>Ctrl + T</kbd></td><td>Afficher/Masquer le tableau</td></tr>
        <tr><td><kbd>Ctrl + S</kbd></td><td>Afficher/Masquer les statistiques</td></tr>
        <tr><td><kbd>Ctrl + E</kbd></td><td>Exporter en Excel</td></tr>
        <tr><td><kbd>Ctrl + P</kbd></td><td>Imprimer le tableau</td></tr>
        <tr><td><kbd>Escape</kbd></td><td>Fermer la recherche</td></tr>
      </table>
      <hr />
      <h3>Conseils d’utilisation :</h3>
      <ul>
        <li>Utilisez la recherche en haut pour trouver rapidement un établissement</li>
        <li>Cliquez sur les points de la carte pour afficher les détails</li>
        <li>Utilisez le tableau analytique pour comparer et exporter</li>
        <li>Les statistiques donnent une vue d’ensemble des données</li>
        <li>Source démographique affichée : Recensement RGPH 2024</li>
      </ul>
    `
      : `
      <h3>لوحات المفاتيح المتاحة:</h3>
      <table class="shortcuts-table">
        <tr><td><kbd>Ctrl + F</kbd></td><td>البحث عن مؤسسة</td></tr>
        <tr><td><kbd>Ctrl + T</kbd></td><td>إظهار/إخفاء الجدول</td></tr>
        <tr><td><kbd>Ctrl + S</kbd></td><td>إظهار/إخفاء الإحصائيات</td></tr>
        <tr><td><kbd>Ctrl + E</kbd></td><td>تصدير Excel</td></tr>
        <tr><td><kbd>Ctrl + P</kbd></td><td>طباعة الجدول</td></tr>
        <tr><td><kbd>Escape</kbd></td><td>إغلاق البحث</td></tr>
      </table>
      <hr />
      <h3>نصائح الاستخدام:</h3>
      <ul>
        <li>استخدم البحث في الأعلى للعثور على مؤسسات محددة</li>
        <li>اضغط على النقاط على الخريطة لعرض التفاصيل</li>
        <li>استخدم الجدول التحليلي للمقارنات والتصدير</li>
        <li>الإحصائيات توفر نظرة عامة على البيانات</li>
        <li>المصدر الديموغرافي المعروض: التعداد العام للسكان والسكنى RGPH 2024</li>
      </ul>
    `;
  }
}

function toggleAppLanguage() {
  currentLanguage = isFrenchLanguage() ? 'ar' : 'fr';
  localStorage.setItem(APP_LANGUAGE_STORAGE_KEY, currentLanguage);
  syncAppStateToUrl();
  window.location.reload();
}

function buildMarkerPopupHtml(item, reseau) {
  const reseauArabic = toArabicNetworkName(reseau);
  const communeRaw = getResValue(item, ['commune', 'cs']) || '—';
  const communeDisplay = getLocalizedCommuneDisplayName(communeRaw);
  return `
    <div class="popup-card">
      <div class="popup-title">${escapeHtml(getResValue(item, ['nom_etab', 'nom', 'key']) || langText('اسم مجهول', 'Établissement inconnu'))}</div>
      <div class="popup-row"><span>${langText('التصنيف', 'Catégorie')}</span><strong>${escapeHtml(getResValue(item, ['categorie', 'abr_categorie']) || '—')}</strong></div>
      <div class="popup-row"><span>${langText('الشبكة', 'Réseau')}</span><strong>${escapeHtml(langText(reseauArabic, reseau))}</strong></div>
      <div class="popup-row"><span>${langText('الجماعة', t('popupCommune'))}</span><strong>${escapeHtml(communeDisplay)}</strong></div>
    </div>
  `;
}

function rebuildAllPopups() {
  // Rebuild institution marker popups
  [...(allMarkers || []), ...(allRawMarkers || [])].forEach(marker => {
    if (marker.data && marker.reseau !== undefined) {
      marker.setPopupContent(buildMarkerPopupHtml(marker.data, marker.reseau));
    }
  });

  // Rebuild province layer popups
  if (provincesLayer) {
    provincesLayer.eachLayer(l => {
      if (l.feature?.properties) {
        l.setPopupContent(buildProvincePopup(l.feature.properties));
      }
    });
  }

  // Rebuild commune layer popups
  if (communesLayer) {
    communesLayer.eachLayer(l => {
      if (l.feature?.properties) {
        l.setPopupContent(buildCommunePopup(l.feature.properties));
      }
    });
  }
}

/* ============ UTILITY FUNCTIONS ============ */
function showLoadingOverlay(show = true) {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.style.display = show ? 'flex' : 'none';
  if (show) {
    setLoadingStatus(t('loadingText'), 0);
  }
}

function hideLoadingOverlay() {
  showLoadingOverlay(false);
}

function setLoadingStatus(stageText = '', progress = null) {
  const stageEl = document.getElementById('loadingStageText');
  const percentEl = document.getElementById('loadingPercentText');
  const progressBar = document.querySelector('#loadingOverlay .loading-progress-indeterminate');

  if (stageEl && stageText) {
    stageEl.textContent = stageText;
  }

  if (Number.isFinite(progress)) {
    const safeProgress = Math.max(0, Math.min(100, Math.round(progress)));
    if (percentEl) percentEl.textContent = `${safeProgress}%`;
    if (progressBar) progressBar.style.setProperty('--loading-progress', `${safeProgress}%`);
  }
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = fixCommonMojibake(s);
  return div.innerHTML;
}

function isValidCoordinate(lat, lon) {
  return isFinite(lat) && isFinite(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
}

function getResValue(item, keys) {
  for (let key of keys) {
    if (item[key]) return item[key];
  }
  return undefined;
}

function colorForReseau(name) {
  if (!name) return '#999';
  if (COLORS[name]) {
    reseauColors[name] = COLORS[name];
    return COLORS[name];
  }
  if (!reseauColors[name]) {
    reseauColors[name] = PALETTE[Object.keys(reseauColors).length % PALETTE.length];
  }
  return reseauColors[name];
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: ${type === 'error' ? '#d62728' : type === 'success' ? '#2ca02c' : '#1f77b4'};
    color: white;
    padding: 12px 16px;
    border-radius: 6px;
    z-index: 2100;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    font-size: 13px;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), CONFIG.TOAST_DURATION);
}

function formatIntegerForUi(value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return '0';
  const locale = isFrenchLanguage() ? 'fr-MA' : 'ar-MA';
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Math.round(numericValue));
}

function normalizeRegionName(name) {
  const normalized = normalizeTextValue(name);
  if (!normalized) return '';
  const sanitized = normalized.replace(/\uFFFD/g, '').trim();
  if (!sanitized) return '';

  const compactArabic = sanitized.replace(/[\s\-_]+/g, '');
  if (compactArabic.includes('درعة') && compactArabic.includes('تافيلالت')) {
    return 'Drâa-Tafilalet';
  }

  const compact = sanitized
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[\s\-_]+/g, '');
  if (/^dr[?�]?a{0,2}tafilalet$/.test(compact) || /^dr[?�]?atafilalet$/.test(compact)) {
    return 'Drâa-Tafilalet';
  }

  const canonical = toCanonicalKey(sanitized);
  if (REGION_NORMALIZATION_BY_CANONICAL[canonical]) {
    return REGION_NORMALIZATION_BY_CANONICAL[canonical];
  }
  if (canonical.includes('tafilal') && canonical.startsWith('dr')) {
    return 'Drâa-Tafilalet';
  }
  return sanitized;
}

function normalizeProvinceName(name) {
  const normalized = normalizeTextValue(name);
  if (!normalized) return '';

  const compactArabic = normalized.replace(/[\s\-_]+/g, '');
  if (compactArabic.includes('عين') && compactArabic.includes('السبع') && compactArabic.includes('المحمد')) {
    return 'Ain Sebaa-Hay Mohammadi';
  }

  const compactLatin = normalized
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[\s\-_]+/g, '');
  if (compactLatin.includes('seba') && compactLatin.includes('hay') && compactLatin.includes('mohammadi')) {
    return 'Ain Sebaa-Hay Mohammadi';
  }

  const canonical = toCanonicalKey(normalized);
  return PROVINCE_NORMALIZATION_BY_CANONICAL[canonical] || normalized;
}

function fixCommonMojibake(value) {
  const text = (value === null || value === undefined) ? '' : String(value);
  if (!text) return '';

  const quickMap = {
    'Ã©': 'é',
    'Ã¨': 'è',
    'Ãª': 'ê',
    'Ã«': 'ë',
    'Ã¡': 'á',
    'Ã ': 'à',
    'Ã¢': 'â',
    'Ã§': 'ç',
    'Ã´': 'ô',
    'Ã¶': 'ö',
    'Ã»': 'û',
    'Ã¼': 'ü',
    'Ã®': 'î',
    'Ã¯': 'ï',
    'ï¿½': '�',
    'â€™': '’',
    'â€“': '–',
    'â€”': '—'
  };

  let fixed = text;
  Object.entries(quickMap).forEach(([broken, valid]) => {
    fixed = fixed.replaceAll(broken, valid);
  });

  if (!/[ÃÂâ]/.test(fixed)) return fixed;

  const chars = Array.from(fixed);
  const canDecodeAsLatin1Bytes = chars.every(ch => ch.charCodeAt(0) <= 255);
  if (!canDecodeAsLatin1Bytes) return fixed;

  try {
    const bytes = new Uint8Array(chars.map(ch => ch.charCodeAt(0)));
    return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
  } catch {
    return fixed;
  }
}

function normalizeCaretAccents(value) {
  const text = (value === null || value === undefined) ? '' : String(value);
  if (!text || !text.includes('^')) return text;

  const accentMap = {
    a: 'â', A: 'Â',
    e: 'ê', E: 'Ê',
    i: 'î', I: 'Î',
    o: 'ô', O: 'Ô',
    u: 'û', U: 'Û'
  };

  return text
    .replace(/\^([aeiouAEIOU])/g, (_, letter) => accentMap[letter] || letter)
    .replace(/([aeiouAEIOU])\^/g, (_, letter) => accentMap[letter] || letter);
}

function fixReplacementCharWords(value) {
  const text = (value === null || value === undefined) ? '' : String(value);
  if (!text) return text;

  return text
    .replace(/A(?:�|\?|ï¿½|\^)?n\s*[-–—]?\s*Seba(?:�|\?|ï¿½|\^|a|â)?\s*\(Arrond\.\)/gi, 'Aïn-Sebaâ (Arrond.)')
    .replace(/Dr(?:�|\?|ï¿½|\^)?a\s*[-–—]?\s*Tafilalet/gi, 'Drâa-Tafilalet');
}

function normalizeTextValue(value) {
  return normalizeCaretAccents(fixReplacementCharWords(fixCommonMojibake(value))).trim();
}

function toCanonicalKey(value) {
  return normalizeTextValue(value)
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '')
    .toLowerCase();
}

function buildArabicCanonicalMap(sourceMap = {}) {
  const out = new Map();
  Object.entries(sourceMap).forEach(([source, translated]) => {
    const canonical = toCanonicalKey(source);
    if (canonical && !out.has(canonical)) {
      out.set(canonical, translated);
    }
  });
  return out;
}

function buildFrenchByArabicCanonicalMap(sourceMap = {}) {
  const out = new Map();
  Object.entries(sourceMap).forEach(([frenchName, arabicName]) => {
    const canonicalArabic = toCanonicalKey(arabicName);
    if (canonicalArabic && !out.has(canonicalArabic)) {
      out.set(canonicalArabic, normalizeTextValue(frenchName));
    }
  });
  return out;
}

function getArabicNameFromMap(rawName, sourceMap = {}, canonicalMap = null, fallback = 'غير محدد') {
  const normalized = normalizeTextValue(rawName);
  if (!normalized) return fallback;

  if (sourceMap[normalized]) return sourceMap[normalized];

  const canonical = toCanonicalKey(normalized);
  if (!canonical || !(canonicalMap instanceof Map)) return normalized;
  return canonicalMap.get(canonical) || normalized;
}

function ensureArabicCanonicalMaps() {
  if (!REGION_ARABIC_CANONICAL_MAP) {
    REGION_ARABIC_CANONICAL_MAP = buildArabicCanonicalMap(REGION_ARABIC_MAP);
  }
  if (!PROVINCE_ARABIC_CANONICAL_MAP) {
    PROVINCE_ARABIC_CANONICAL_MAP = buildArabicCanonicalMap(PROVINCE_ARABIC_MAP);
  }
  if (!COMMUNE_ARABIC_CANONICAL_MAP) {
    COMMUNE_ARABIC_CANONICAL_MAP = buildArabicCanonicalMap(COMMUNE_ARABIC_MAP);
  }
}

function ensureFrenchCanonicalMaps() {
  if (!REGION_FRENCH_BY_ARABIC_CANONICAL) {
    REGION_FRENCH_BY_ARABIC_CANONICAL = buildFrenchByArabicCanonicalMap(REGION_ARABIC_MAP);
  }
  if (!PROVINCE_FRENCH_BY_ARABIC_CANONICAL) {
    PROVINCE_FRENCH_BY_ARABIC_CANONICAL = buildFrenchByArabicCanonicalMap(PROVINCE_ARABIC_MAP);
  }
  if (!COMMUNE_FRENCH_BY_ARABIC_CANONICAL) {
    COMMUNE_FRENCH_BY_ARABIC_CANONICAL = buildFrenchByArabicCanonicalMap(COMMUNE_ARABIC_MAP);
  }
}

function normalizeUnknownDisplayValue(value) {
  const normalized = normalizeTextValue(value);
  if (!normalized) return t('unknown');
  const canonical = toCanonicalKey(normalized);
  if (canonical === 'nondefini' || canonical === 'nondefinie' || canonical === toCanonicalKey('غير محدد')) {
    return t('unknown');
  }
  return normalized;
}

function toFrenchNameFromArabic(value, frenchByArabicCanonicalMap) {
  const normalized = normalizeUnknownDisplayValue(value);
  if (!normalized) return t('unknown');

  const canonical = toCanonicalKey(normalized);
  if (frenchByArabicCanonicalMap instanceof Map && canonical && frenchByArabicCanonicalMap.has(canonical)) {
    return frenchByArabicCanonicalMap.get(canonical) || normalized;
  }
  return normalized;
}

function getLocalizedRegionDisplayName(regionName) {
  if (isFrenchLanguage()) {
    ensureFrenchCanonicalMaps();
    return toFrenchNameFromArabic(normalizeRegionName(regionName), REGION_FRENCH_BY_ARABIC_CANONICAL);
  }
  return toArabicRegionName(regionName);
}

function getLocalizedProvinceDisplayName(provinceName) {
  if (isFrenchLanguage()) {
    ensureFrenchCanonicalMaps();
    return toFrenchNameFromArabic(normalizeProvinceName(provinceName), PROVINCE_FRENCH_BY_ARABIC_CANONICAL);
  }
  return toArabicProvinceName(provinceName);
}

function getLocalizedCommuneDisplayName(communeName, props = null) {
  if (isFrenchLanguage()) {
    ensureFrenchCanonicalMaps();
    return toFrenchNameFromArabic(normalizeTextValue(communeName), COMMUNE_FRENCH_BY_ARABIC_CANONICAL);
  }
  return toArabicCommuneName(communeName, props);
}

function compareAlphabeticalLabels(a, b) {
  const left = normalizeTextValue(a);
  const right = normalizeTextValue(b);
  return left.localeCompare(right, 'fr', { sensitivity: 'base', numeric: true });
}

function compareLocalizedRegionValues(a, b) {
  return compareAlphabeticalLabels(getLocalizedRegionDisplayName(a), getLocalizedRegionDisplayName(b));
}

function compareLocalizedProvinceValues(a, b) {
  return compareAlphabeticalLabels(getLocalizedProvinceDisplayName(a), getLocalizedProvinceDisplayName(b));
}

function compareLocalizedCommuneValues(a, b) {
  return compareAlphabeticalLabels(getLocalizedCommuneDisplayName(a), getLocalizedCommuneDisplayName(b));
}

function getInstitutionRegion(item) {
  return normalizeRegionName(getResValue(item, ['region', 'Region', 'REGION']));
}

function getInstitutionProvince(item) {
  return normalizeProvinceName(getResValue(item, ['province', 'province_name', 'delegation']));
}

function getInstitutionCommune(item) {
  return normalizeTextValue(getResValue(item, ['commune', 'cs', 'commune_name']));
}

function setProvinceRegionMapping(provinceName, regionName) {
  const province = normalizeProvinceName(provinceName);
  const region = normalizeRegionName(regionName);
  if (!province || !region) return;

  if (!provinceToRegionMap[province]) {
    provinceToRegionMap[province] = region;
  }

  const key = toCanonicalKey(province);
  if (key && !provinceToRegionIndex[key]) {
    provinceToRegionIndex[key] = region;
  }

  Object.entries(PROVINCE_ARABIC_MAP).forEach(([sourceName, arabicName]) => {
    if (toCanonicalKey(sourceName) !== key) return;
    const normalizedArabic = normalizeProvinceName(arabicName);
    if (!normalizedArabic) return;

    if (!provinceToRegionMap[normalizedArabic]) {
      provinceToRegionMap[normalizedArabic] = region;
    }

    const arabicKey = toCanonicalKey(normalizedArabic);
    if (arabicKey && !provinceToRegionIndex[arabicKey]) {
      provinceToRegionIndex[arabicKey] = region;
    }
  });
}

function getRegionFromProvinceName(provinceName) {
  const province = normalizeProvinceName(provinceName);
  if (!province) return '';

  const direct = provinceToRegionMap[province] || provinceToRegionIndex[toCanonicalKey(province)] || '';
  if (direct) return direct;

  ensureFrenchCanonicalMaps();
  const frenchFromArabic = PROVINCE_FRENCH_BY_ARABIC_CANONICAL?.get(toCanonicalKey(province)) || '';
  if (!frenchFromArabic) return '';

  const normalizedFrench = normalizeProvinceName(frenchFromArabic);
  return provinceToRegionMap[normalizedFrench] || provinceToRegionIndex[toCanonicalKey(normalizedFrench)] || '';
}

function normalizeProvinceCode(value) {
  const raw = (value || '').toString().trim();
  if (!raw) return '';
  if (/^\d+$/.test(raw)) {
    return String(Number(raw));
  }
  return raw;
}

function normalizeJoinKey(value) {
  return normalizeTextValue(value).toLowerCase();
}

function getProvinceCodeFromProps(props = {}) {
  return normalizeProvinceCode(
    getResValue(props, ['CODE_1', 'code_1', 'code', 'CODE', 'province_code', 'PROV_CODE', 'ADM1_CODE'])
  );
}

function getCommuneProvinceCode(props = {}) {
  const iso = getResValue(props, ['ISO', 'iso']) || '';
  const parts = iso.toString().split('-');
  if (parts.length >= 3) {
    return normalizeProvinceCode(parts[2]);
  }
  return '';
}

function getCommuneJoinKey(props = {}) {
  const iso = normalizeTextValue(getResValue(props, ['ISO', 'iso']) || '');
  if (iso) return normalizeJoinKey(iso);
  const fallback = getResValue(props, ['code', 'CODE', 'ID', 'id']) || '';
  return normalizeJoinKey(fallback);
}

function getFeatureJoinKey(level, props = {}) {
  if (level === 'province') {
    return normalizeJoinKey(getProvinceCodeFromProps(props));
  }
  return getCommuneJoinKey(props);
}

function normalizeRendererMode(mode) {
  const normalized = normalizeTextValue(mode).toLowerCase();
  if (normalized === 'unique' || normalized === 'unique symbol') return 'unique';
  if (normalized === 'categorized' || normalized === 'category') return 'categorized';
  if (normalized === 'graduated' || normalized === 'gradue' || normalized === 'graduee') return 'graduated';
  return '';
}

function parsePalette(rawPalette) {
  const raw = normalizeTextValue(rawPalette);
  if (!raw) return [...SYMBOLOGY_DEFAULT_PALETTE];
  const parsed = raw
    .split(',')
    .map((entry) => normalizeTextValue(entry))
    .filter((entry) => /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(entry));
  return parsed.length ? parsed : [...SYMBOLOGY_DEFAULT_PALETTE];
}

function parseNumericValue(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  const text = normalizeTextValue(value);
  if (!text) return NaN;

  const normalized = text
    .replace(/\s+/g, '')
    .replace(/%/g, '')
    .replace(',', '.');

  if (!/^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(normalized)) {
    return NaN;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function isExplicitPercentageValue(value) {
  return typeof value === 'string' && /%/.test(normalizeTextValue(value));
}

function isValidHexColor(color) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test((color || '').toString().trim());
}

function normalizeHexColor(color, fallback = '#0ea5e9') {
  const raw = normalizeTextValue(color);
  if (!isValidHexColor(raw)) return fallback;
  if (raw.length === 4) {
    return `#${raw[1]}${raw[1]}${raw[2]}${raw[2]}${raw[3]}${raw[3]}`.toLowerCase();
  }
  return raw.toLowerCase();
}

function hexToRgb(color) {
  const hex = normalizeHexColor(color).replace('#', '');
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  };
}

function rgbToHex(r, g, b) {
  const toHex = (value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function interpolateColor(minColor, maxColor, t = 0) {
  const from = hexToRgb(minColor);
  const to = hexToRgb(maxColor);
  const ratio = Math.max(0, Math.min(1, Number(t) || 0));
  return rgbToHex(
    from.r + (to.r - from.r) * ratio,
    from.g + (to.g - from.g) * ratio,
    from.b + (to.b - from.b) * ratio
  );
}

function interpolateThreeStopColor(minColor, midColor, maxColor, t = 0) {
  const ratio = Math.max(0, Math.min(1, Number(t) || 0));
  if (ratio <= 0.5) {
    return interpolateColor(minColor, midColor, ratio * 2);
  }
  return interpolateColor(midColor, maxColor, (ratio - 0.5) * 2);
}

function getUiSymbologyForLevel(level) {
  return excelUiSymbologyByLevel[level === 'province' ? 'province' : 'commune'];
}

function addThemeDistinctFieldValue(theme, level, fieldKey, value) {
  if (!theme || !fieldKey) return;
  const targetLevel = level === 'province' ? 'province' : 'commune';
  if (typeof value === 'undefined' || value === null || normalizeTextValue(value) === '') return;

  const distinctByLevel = theme.distinctValuesByField?.[targetLevel];
  if (!(distinctByLevel instanceof Map)) return;

  if (!distinctByLevel.has(fieldKey)) {
    distinctByLevel.set(fieldKey, new Set());
  }

  distinctByLevel.get(fieldKey).add(value);
}

function getThemeDistinctCategories(theme, level) {
  if (!theme) return [];

  const targetLevel = level === 'province' ? 'province' : 'commune';
  const selectedField = getExcelSelectedValueField(targetLevel);
  const distinctByLevel = theme.distinctValuesByField?.[targetLevel];
  const selectedDistinctSet = distinctByLevel instanceof Map ? distinctByLevel.get(selectedField) : null;
  const valuesByField = theme.valuesByField?.[targetLevel];
  const selectedFieldMap = valuesByField instanceof Map ? valuesByField.get(selectedField) : null;

  const rawValues = (selectedDistinctSet instanceof Set && selectedDistinctSet.size
    ? Array.from(selectedDistinctSet.values())
    : (selectedFieldMap instanceof Map && selectedFieldMap.size
      ? Array.from(selectedFieldMap.values())
      : Array.from(theme.values[targetLevel].values())))
    .filter((value) => !(typeof value === 'undefined' || value === null || normalizeTextValue(value) === ''));

  const allNumeric = rawValues.length > 0 && rawValues.every((value) => Number.isFinite(parseNumericValue(value)));

  if (allNumeric) {
    const uniqueNumeric = Array.from(new Set(rawValues.map((value) => parseNumericValue(value))));
    uniqueNumeric.sort((a, b) => a - b);
    return uniqueNumeric.map((value) => trimTrailingZeros(String(value)));
  }

  const values = rawValues
    .map((value) => normalizeTextValue(value))
    .filter(Boolean);

  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, 'ar'));
}

function getDistinctCategoriesAcrossThemes(level) {
  const targetLevel = level === 'province' ? 'province' : 'commune';
  const merged = new Set();
  excelSymbologyThemes.forEach((theme) => {
    getThemeDistinctCategories(theme, targetLevel).forEach((category) => {
      merged.add(category);
    });
  });
  return Array.from(merged).sort((a, b) => a.localeCompare(b, 'ar'));
}

function ensureCategoryColorsForLevel(theme, level) {
  const config = getUiSymbologyForLevel(level);
  const categories = getThemeDistinctCategories(theme, level);
  if (!categories.length) {
    config.categoryColors = new Map();
    return;
  }

  const nextMap = new Map();
  const maxIndex = Math.max(1, categories.length - 1);

  categories.forEach((category, index) => {
    const existing = config.categoryColors.get(category);
    const fallback = interpolateColor(config.minColor, config.maxColor, index / maxIndex);
    nextMap.set(category, normalizeHexColor(existing || fallback, fallback));
  });

  config.categoryColors = nextMap;
}

function getWorkbookRowsByName(workbook, targetName) {
  const matched = workbook.SheetNames.find(
    (sheetName) => normalizeTextValue(sheetName).toLowerCase() === targetName.toLowerCase()
  );
  if (!matched) return [];
  return XLSX.utils.sheet_to_json(workbook.Sheets[matched], { defval: '' });
}

function getWorkbookRowsByAliases(workbook, aliases = []) {
  for (const alias of aliases) {
    const rows = getWorkbookRowsByName(workbook, alias);
    if (rows.length) return rows;
  }
  return [];
}

function normalizeHeaderKey(value) {
  return normalizeTextValue(value)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '');
}

function getRowValue(row, candidates = []) {
  const entries = Object.entries(row || {});
  for (const candidate of candidates) {
    const desired = normalizeHeaderKey(candidate);
    const found = entries.find(([key]) => {
      const normalizedKey = normalizeHeaderKey(key);
      return normalizedKey === desired;
    });
    if (found) return found[1];

    const fuzzyFound = entries.find(([key]) => {
      const normalizedKey = normalizeHeaderKey(key);
      return normalizedKey.includes(desired) || desired.includes(normalizedKey);
    });
    if (fuzzyFound) return fuzzyFound[1];
  }
  return '';
}

function getRowValueByHeader(row, headerName) {
  const desired = normalizeHeaderKey(headerName);
  const entries = Object.entries(row || {});
  const found = entries.find(([key]) => normalizeHeaderKey(key) === desired);
  return found ? found[1] : '';
}

function getValueFieldOptionsFromRows(rows = [], level = 'province') {
  const identifierKeys = new Set([
    'themeid',
    'theme',
    'themelabel',
    'label',
    'id',
    'mode',
    'renderer',
    'style',
    'classes',
    'classcount',
    'classescount',
    'palette',
    'colors',
    'colorramp',
    'nodatacolor',
    'joinkey',
    'joinkey',
    'key',
    'code',
    'name',
    'nom'
  ]);

  if (level === 'province') {
    identifierKeys.add('provincecode');
    identifierKeys.add('province');
    identifierKeys.add('provcode');
    identifierKeys.add('provcode');
    identifierKeys.add('provcode');
    identifierKeys.add('provcode');
    identifierKeys.add('province_name');
    identifierKeys.add('provincename');
  } else {
    identifierKeys.add('communeiso');
    identifierKeys.add('iso');
    identifierKeys.add('commune');
    identifierKeys.add('communename');
    identifierKeys.add('communefr');
    identifierKeys.add('communear');
  }

  const found = new Map();
  rows.forEach((row) => {
    Object.keys(row || {}).forEach((header, headerIndex) => {
      const normalized = normalizeHeaderKey(header);
      if (!normalized || identifierKeys.has(normalized)) return;
      const rawValue = getRowValueByHeader(row, header);
      if (normalizeTextValue(rawValue) === '') return;
      if (!found.has(normalized)) {
        found.set(normalized, normalizeTextValue(header) || header);
      }
    });
  });

  if (!found.size) {
    return [{ key: 'value', label: 'value' }];
  }

  return Array.from(found.entries())
    .map(([key, label]) => ({ key, label }))
    .sort((a, b) => a.label.localeCompare(b.label, 'ar'));
}

function getExcelSelectedValueField(level) {
  return excelSelectedValueFieldByLevel[level === 'province' ? 'province' : 'commune'] || 'value';
}

function setExcelValueFieldOptions(level, options = []) {
  const targetLevel = level === 'province' ? 'province' : 'commune';
  const safeOptions = options.length ? options : [{ key: 'value', label: 'value' }];
  excelValueFieldOptionsByLevel[targetLevel] = safeOptions;

  const current = excelSelectedValueFieldByLevel[targetLevel];
  const hasCurrent = safeOptions.some((option) => option.key === current);
  if (!hasCurrent) {
    excelSelectedValueFieldByLevel[targetLevel] = safeOptions[0].key;
  }
}

function syncThemeValuesFromSelectedField(theme, level) {
  if (!theme) return;
  const targetLevel = level === 'province' ? 'province' : 'commune';
  const selectedField = getExcelSelectedValueField(targetLevel);
  const valuesByField = theme.valuesByField?.[targetLevel];

  if (!(valuesByField instanceof Map) || !valuesByField.size) return;

  const source = valuesByField.get(selectedField) || valuesByField.values().next().value;
  if (source instanceof Map) {
    theme.values[targetLevel] = new Map(source);
  }
}

function syncAllThemesWithSelectedValueField(level) {
  const targetLevel = level === 'province' ? 'province' : 'commune';
  excelSymbologyThemes.forEach((theme) => {
    syncThemeValuesFromSelectedField(theme, targetLevel);
    if (theme.mode === 'ui-controlled') {
      theme.runtime = buildThemeRuntime(theme);
    }
  });
}

async function loadCommuneArabicMapping() {
  if (typeof XLSX === 'undefined') return;

  try {
    const response = await fetch('communes.xlsx');
    if (!response.ok) return;

    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array' });
    const sheetName = workbook.SheetNames?.[0];
    if (!sheetName) return;

    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' });
    if (!rows.length) return;

    communeArabicByIso = new Map();
    communeArabicByNameKey = new Map();

    rows.forEach((row) => {
      const iso = normalizeTextValue(getRowValue(row, ['ISO', 'iso'])).toLowerCase();
      const arabic = normalizeTextValue(getRowValue(row, ['NAME_1 (Arabic)', 'NAME_1', 'name_1_ar', 'arabic']));
      const french = normalizeTextValue(getRowValue(row, ['NAME_2 (French)', 'NAME_2', 'name_2_fr', 'french']));

      if (!arabic) return;

      if (iso) {
        communeArabicByIso.set(iso, arabic);
      }

      if (french) {
        const canonicalFrench = toCanonicalKey(french);
        const lookupFrench = toCommuneLookupKey(french);
        if (canonicalFrench) {
          communeArabicByNameKey.set(canonicalFrench, arabic);
        }
        if (lookupFrench) {
          communeArabicByNameKey.set(lookupFrench, arabic);
        }
      }
    });
  } catch (error) {
    console.warn('Failed to load communes Arabic mapping:', error);
  }
}

function createBaseTheme(themeId, themeLabel = '', rendererConfig = {}) {
  return {
    id: themeId,
    label: themeLabel || themeId,
    mode: rendererConfig.mode || '',
    classesCount: rendererConfig.classesCount || 5,
    palette: rendererConfig.palette || [...SYMBOLOGY_DEFAULT_PALETTE],
    noDataColor: rendererConfig.noDataColor || '#e5e7eb',
    values: {
      province: new Map(),
      commune: new Map()
    },
    valuesByField: {
      province: new Map(),
      commune: new Map()
    },
    distinctValuesByField: {
      province: new Map(),
      commune: new Map()
    },
    categories: {
      province: new Map(),
      commune: new Map()
    },
    runtime: {
      breaks: { province: [], commune: [] },
      categoryColorByLevel: { province: new Map(), commune: new Map() }
    }
  };
}

function ensureThemeInMap(themesMap, rendererByThemeId, themeId, themeLabel = '') {
  if (!themesMap.has(themeId)) {
    const rendererConfig = rendererByThemeId.get(themeId) || {};
    themesMap.set(themeId, createBaseTheme(themeId, themeLabel, rendererConfig));
  }
  const theme = themesMap.get(themeId);
  if (themeLabel && !theme.label) {
    theme.label = themeLabel;
  }
  return theme;
}

function assignThemeConfigFromRow(theme, row = {}) {
  const modeFromRow = normalizeRendererMode(getRowValue(row, ['mode', 'renderer', 'style']));
  const classesFromRow = Number(getRowValue(row, ['classes_count', 'classes', 'class_count']));
  const paletteRaw = getRowValue(row, ['palette', 'colors', 'color_ramp']);
  const noDataRaw = normalizeTextValue(getRowValue(row, ['no_data_color', 'nodata_color']));

  if (modeFromRow) theme.mode = modeFromRow;
  if (Number.isFinite(classesFromRow) && classesFromRow > 0) theme.classesCount = classesFromRow;
  if (normalizeTextValue(paletteRaw)) theme.palette = parsePalette(paletteRaw);
  if (noDataRaw) theme.noDataColor = noDataRaw;
}

function parseDatabaseSheetRows(rows, level, themesMap, rendererByThemeId, valueFieldOptions = []) {
  let lastThemeId = '';
  let lastThemeLabel = '';

  rows.forEach((row) => {
    const rowThemeId = normalizeTextValue(getRowValue(row, ['theme_id', 'themeid', 'id']));
    const rowThemeLabel = normalizeTextValue(getRowValue(row, ['theme_label', 'label', 'theme']));

    if (rowThemeId) lastThemeId = rowThemeId;
    if (rowThemeLabel) lastThemeLabel = rowThemeLabel;

    const firstExistingThemeId = themesMap.size ? themesMap.keys().next().value : '';
    let themeId = rowThemeId || lastThemeId || firstExistingThemeId || 'default_theme';
    if (level === 'commune' && firstExistingThemeId && themesMap.size === 1) {
      themeId = firstExistingThemeId;
    }
    const existingThemeLabel = firstExistingThemeId && themesMap.get(firstExistingThemeId)
      ? themesMap.get(firstExistingThemeId).label
      : '';
    const themeLabel = rowThemeLabel || lastThemeLabel || existingThemeLabel || 'موضوع مخصص';
    const theme = ensureThemeInMap(themesMap, rendererByThemeId, themeId, themeLabel);

    const joinKeyRaw = level === 'province'
      ? getRowValue(row, ['province_code', 'code', 'join_key', 'joinkey', 'key'])
      : getRowValue(row, ['commune_iso', 'iso', 'join_key', 'joinkey', 'key', 'commune_code', 'code_commune', 'cs']);
    const joinKey = normalizeJoinKey(joinKeyRaw);
    const featureNameRaw = level === 'province'
      ? getRowValue(row, ['province_name', 'name', 'nom'])
      : getRowValue(row, ['commune_name', 'commune', 'name', 'nom', 'NAME_2 (French)', 'NAME_1 (Arabic)', 'commune_fr', 'commune_ar']);
    const featureNameKey = level === 'province'
      ? toCanonicalKey(featureNameRaw)
      : toCommuneLookupKey(featureNameRaw);
    const featureNameCanonical = toCanonicalKey(featureNameRaw);
    const canMapToFeature = !!(joinKey || featureNameKey);

    valueFieldOptions.forEach((fieldOption) => {
      if (!theme.valuesByField[level].has(fieldOption.key)) {
        theme.valuesByField[level].set(fieldOption.key, new Map());
      }

      const fieldMap = theme.valuesByField[level].get(fieldOption.key);
      let rawValue = getRowValueByHeader(row, fieldOption.label);
      if (normalizeTextValue(rawValue) === '') {
        rawValue = getRowValue(row, [fieldOption.label, fieldOption.key]);
      }
      const normalizedValue = normalizeTextValue(rawValue);
      if (normalizedValue === '') return;

      const numericValue = parseNumericValue(rawValue);
      const finalValue = isExplicitPercentageValue(rawValue)
        ? normalizedValue
        : (Number.isFinite(numericValue) ? numericValue : normalizedValue);

      addThemeDistinctFieldValue(theme, level, fieldOption.key, finalValue);

      if (!canMapToFeature) return;

      if (joinKey) {
        fieldMap.set(joinKey, finalValue);
      }
      if (featureNameKey) {
        fieldMap.set(`name:${featureNameKey}`, finalValue);
      }
      if (featureNameCanonical) {
        fieldMap.set(`name:${featureNameCanonical}`, finalValue);
      }
    });

  });
}

function getThemeFeatureKeyCandidates(level, props = {}) {
  const keyCandidates = [];

  if (level === 'province') {
    const provinceCode = normalizeJoinKey(getProvinceCodeFromProps(props));
    const provinceNameKey = toCanonicalKey(getLayerProvinceName(props));
    if (provinceCode) keyCandidates.push(provinceCode);
    if (provinceNameKey) keyCandidates.push(`name:${provinceNameKey}`);
  } else {
    const communeCode = getCommuneJoinKey(props);
    const communeFrenchName = getLayerCommuneName(props);
    const communeNameKey = toCommuneLookupKey(communeFrenchName);
    const communeNameCanonical = toCanonicalKey(communeFrenchName);
    const communeArabicName = toArabicCommuneName(communeFrenchName, props);
    const communeArabicKey = toCommuneLookupKey(communeArabicName);
    const communeArabicCanonical = toCanonicalKey(communeArabicName);
    if (communeCode) keyCandidates.push(communeCode);
    if (communeNameKey) keyCandidates.push(`name:${communeNameKey}`);
    if (communeNameCanonical) keyCandidates.push(`name:${communeNameCanonical}`);
    if (communeArabicKey) keyCandidates.push(`name:${communeArabicKey}`);
    if (communeArabicCanonical) keyCandidates.push(`name:${communeArabicCanonical}`);
  }

  return keyCandidates;
}

function getThemeValueFromMapByFeature(themeMap, level, props = {}) {
  const keyCandidates = getThemeFeatureKeyCandidates(level, props);

  for (const key of keyCandidates) {
    if (themeMap instanceof Map && themeMap.has(key)) {
      return { value: themeMap.get(key), hasFeatureKey: true };
    }
  }

  return { value: undefined, hasFeatureKey: keyCandidates.length > 0 };
}

function getThemeValueForFeatureField(theme, level, fieldKey, props = {}) {
  const valuesByField = theme?.valuesByField?.[level];
  if (!(valuesByField instanceof Map)) {
    return { value: undefined, hasFeatureKey: false };
  }

  const fieldMap = valuesByField.get(fieldKey);
  return getThemeValueFromMapByFeature(fieldMap, level, props);
}

function getThemeValueForFeature(theme, level, props = {}) {
  return getThemeValueFromMapByFeature(theme.values[level], level, props);
}

function buildGraduatedBreaks(values, classCount = 5) {
  const nums = values
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => a - b);

  if (!nums.length) return [];
  if (nums.length === 1) return [nums[0]];

  const count = Math.min(Math.max(2, classCount), 9);
  const breaks = [];
  for (let i = 1; i <= count; i++) {
    const q = i / count;
    const index = Math.min(nums.length - 1, Math.floor(q * (nums.length - 1)));
    breaks.push(nums[index]);
  }
  return Array.from(new Set(breaks));
}

function pickCategoryColor(category, theme, level) {
  const key = normalizeJoinKey(category);
  if (!key) return (theme.noDataColor || '#e5e7eb');

  if (!theme.categoryColorByLevel[level].has(key)) {
    const nextIndex = theme.categoryColorByLevel[level].size % theme.palette.length;
    theme.categoryColorByLevel[level].set(key, theme.palette[nextIndex]);
  }
  return theme.categoryColorByLevel[level].get(key);
}

function buildThemeRuntime(theme) {
  const runtime = {
    breaks: { province: [], commune: [] },
    categoryColorByLevel: {
      province: new Map(theme.categories.province),
      commune: new Map(theme.categories.commune)
    }
  };

  if (theme.mode === 'graduated') {
    runtime.breaks.province = buildGraduatedBreaks(Array.from(theme.values.province.values()), theme.classesCount);
    runtime.breaks.commune = buildGraduatedBreaks(Array.from(theme.values.commune.values()), theme.classesCount);
  }

  return runtime;
}

function getActiveExcelTheme() {
  if (!activeExcelThemeId) return null;
  return excelSymbologyThemes.find((theme) => theme.id === activeExcelThemeId) || null;
}

function clearExcelSymbologyTheme(showMessage = true) {
  excelSymbologyThemes = [];
  activeExcelThemeId = '';
  excelColoringTargetLevel = 'province';
  excelValueFieldOptionsByLevel = {
    province: [{ key: 'value', label: 'value' }],
    commune: [{ key: 'value', label: 'value' }]
  };
  excelSelectedValueFieldByLevel = {
    province: 'value',
    commune: 'value'
  };
  excelUiSymbologyByLevel.province.categoryColors = new Map();
  excelUiSymbologyByLevel.commune.categoryColors = new Map();
  applyGeographicFilters({ fitBounds: false });
  if (showMessage) showToast(langText('تم تعطيل تلوين Excel', 'Coloration Excel désactivée'), 'info');
}

function getExcelFillColor(level, props = {}) {
  const theme = getActiveExcelTheme();
  if (!theme) return null;

  const config = getUiSymbologyForLevel(level);

  const { value, hasFeatureKey } = getThemeValueForFeature(theme, level, props);
  if (!hasFeatureKey) return theme.noDataColor || '#e5e7eb';

  if (typeof value === 'undefined' || value === null || value === '') {
    return theme.noDataColor || '#e5e7eb';
  }

  if (config.mode === 'unique') {
    return normalizeHexColor(config.uniqueColor, '#0ea5e9');
  }

  if (config.mode === 'categorized') {
    ensureCategoryColorsForLevel(theme, level);
    const categoryKey = normalizeTextValue(value);
    if (!categoryKey) return theme.noDataColor || '#e5e7eb';
    return config.categoryColors.get(categoryKey) || theme.noDataColor || '#e5e7eb';
  }

  const numeric = parseNumericValue(value);
  if (!Number.isFinite(numeric)) {
    ensureCategoryColorsForLevel(theme, level);
    const fallbackCategory = normalizeTextValue(value);
    return config.categoryColors.get(fallbackCategory) || theme.noDataColor || '#e5e7eb';
  }

  const minColor = normalizeHexColor(config.minColor, '#dbeafe');
  const maxColor = normalizeHexColor(config.maxColor, '#1d4ed8');
  const midColor = normalizeHexColor(config.midColor, interpolateColor(minColor, maxColor, 0.5));

  const minAnchor = parseNumericValue(config.minValue);
  const midAnchor = parseNumericValue(config.midValue);
  const maxAnchor = parseNumericValue(config.maxValue);
  const hasManualAnchors = Number.isFinite(minAnchor)
    && Number.isFinite(midAnchor)
    && Number.isFinite(maxAnchor)
    && minAnchor < midAnchor
    && midAnchor < maxAnchor;

  if (hasManualAnchors) {
    let ratio;
    if (numeric <= midAnchor) {
      ratio = ((numeric - minAnchor) / Math.max(1e-9, midAnchor - minAnchor)) * 0.5;
    } else {
      ratio = 0.5 + ((numeric - midAnchor) / Math.max(1e-9, maxAnchor - midAnchor)) * 0.5;
    }
    const clampedRatio = Math.max(0, Math.min(1, ratio));
    return interpolateThreeStopColor(minColor, midColor, maxColor, clampedRatio);
  }

  if (!isExplicitPercentageValue(value)) {
    const numericValues = Array.from(theme.values[level].values())
      .filter((entry) => !isExplicitPercentageValue(entry))
      .map((entry) => parseNumericValue(entry))
      .filter((entry) => Number.isFinite(entry));

    const breaks = buildGraduatedBreaks(numericValues, theme.classesCount || 5);
    if (!breaks.length) return normalizeHexColor(config.maxColor, '#0ea5e9');

    let classIndex = breaks.findIndex((point) => numeric <= point);
    if (classIndex < 0) classIndex = breaks.length - 1;
    const maxIndex = Math.max(1, breaks.length - 1);
    return interpolateThreeStopColor(minColor, midColor, maxColor, classIndex / maxIndex);
  }

  const clamped = Math.min(
    GRADUATED_PERCENTAGE_MAX,
    Math.max(GRADUATED_PERCENTAGE_MIN, numeric)
  );
  const ratio = (clamped - GRADUATED_PERCENTAGE_MIN)
    / (GRADUATED_PERCENTAGE_MAX - GRADUATED_PERCENTAGE_MIN);
  return interpolateThreeStopColor(minColor, midColor, maxColor, ratio);
}

function applyExcelTheme(themeId) {
  const found = excelSymbologyThemes.find((theme) => theme.id === themeId);
  if (!found) {
    activeExcelThemeId = '';
    applyGeographicFilters({ fitBounds: false });
    return;
  }

  ensureCategoryColorsForLevel(found, 'province');
  ensureCategoryColorsForLevel(found, 'commune');
  found.runtime = buildThemeRuntime(found);
  activeExcelThemeId = found.id;

  if (!window.layerVisibility) window.layerVisibility = {};
  window.layerVisibility.Provinces = true;
  window.layerVisibility.Communes = true;
  if (provincesLayer && map && !map.hasLayer(provincesLayer)) {
    map.addLayer(provincesLayer);
  }
  if (communesLayer && map && !map.hasLayer(communesLayer)) {
    map.addLayer(communesLayer);
  }

  applyGeographicFilters({ fitBounds: false });
}

function countMatchedLayerFeatures(theme, level) {
  const layer = level === 'province' ? provincesLayer : communesLayer;
  if (!theme || !layer || !layer.eachLayer) return 0;

  let matched = 0;
  layer.eachLayer((featureLayer) => {
    const props = featureLayer?.feature?.properties || {};
    const { value } = getThemeValueForFeature(theme, level, props);
    if (typeof value !== 'undefined' && value !== null && value !== '') {
      matched += 1;
    }
  });
  return matched;
}

function getThemeDistinctCountForLevel(theme, level) {
  const targetLevel = level === 'province' ? 'province' : 'commune';
  const selectedField = getExcelSelectedValueField(targetLevel);
  const distinctByLevel = theme?.distinctValuesByField?.[targetLevel];
  if (!(distinctByLevel instanceof Map)) return 0;

  const selectedSet = distinctByLevel.get(selectedField);
  if (selectedSet instanceof Set && selectedSet.size) return selectedSet.size;

  const fallbackSet = distinctByLevel.get('value');
  if (fallbackSet instanceof Set) return fallbackSet.size;
  return 0;
}

async function loadExcelSymbology(file) {
  if (typeof XLSX === 'undefined') {
    showToast(langText('مكتبة XLSX غير متوفرة', 'La bibliothèque XLSX est indisponible'), 'error');
    return;
  }
  if (!file) return;

  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });
  const indicatorsRows = getWorkbookRowsByAliases(workbook, ['indicators', 'indicator', 'data_indicators']);
  const provinceDbRows = getWorkbookRowsByAliases(workbook, ['provinces_db', 'province_db', 'provinces', 'province']);
  const communeDbRows = getWorkbookRowsByAliases(workbook, ['communes_db', 'commune_db', 'communes', 'commune']);

  if (!indicatorsRows.length && !provinceDbRows.length && !communeDbRows.length) {
    showToast(langText('الملف لا يحتوي Sheets صالحة (indicators أو provinces_db/communes_db)', 'Le fichier ne contient pas de feuilles valides (indicators ou provinces_db/communes_db)'), 'error');
    return;
  }

  const rendererByThemeId = new Map();

  const themesMap = new Map();
  const provinceValueFields = getValueFieldOptionsFromRows(provinceDbRows, 'province');
  const communeValueFields = getValueFieldOptionsFromRows(communeDbRows, 'commune');

  setExcelValueFieldOptions('province', provinceValueFields);
  setExcelValueFieldOptions('commune', communeValueFields);

  let lastIndicatorThemeId = '';
  let lastIndicatorThemeLabel = '';
  indicatorsRows.forEach((row) => {
    const rowThemeId = normalizeTextValue(getRowValue(row, ['theme_id', 'themeid', 'id']));
    const rowThemeLabel = normalizeTextValue(getRowValue(row, ['theme_label', 'label', 'theme']));
    if (rowThemeId) lastIndicatorThemeId = rowThemeId;
    if (rowThemeLabel) lastIndicatorThemeLabel = rowThemeLabel;

    const themeId = rowThemeId || lastIndicatorThemeId;
    const themeLabel = rowThemeLabel || lastIndicatorThemeLabel;
    const levelRaw = normalizeTextValue(getRowValue(row, ['level', 'layer'])).toLowerCase();
    const level = levelRaw === 'province' || levelRaw === 'provinces' ? 'province' : 'commune';
    const joinKeyRaw = getRowValue(row, ['join_key', 'joinkey', 'key', 'code', 'iso']);
    const joinKey = normalizeJoinKey(joinKeyRaw);
    if (!themeId || !joinKey) return;

    const theme = ensureThemeInMap(themesMap, rendererByThemeId, themeId, themeLabel);
    const rawValue = getRowValue(row, ['value', 'valeur', 'indicator_value']);
    const normalizedRawValue = normalizeTextValue(rawValue);
    const numericValue = parseNumericValue(rawValue);
    const finalValue = isExplicitPercentageValue(rawValue)
      ? normalizedRawValue
      : (Number.isFinite(numericValue) && normalizedRawValue !== '' ? numericValue : normalizedRawValue);

    addThemeDistinctFieldValue(theme, level, 'value', finalValue);

    theme.values[level].set(joinKey, finalValue);
    if (!theme.valuesByField[level].has('value')) {
      theme.valuesByField[level].set('value', new Map());
    }
    theme.valuesByField[level].get('value').set(joinKey, finalValue);
  });

  parseDatabaseSheetRows(provinceDbRows, 'province', themesMap, rendererByThemeId, provinceValueFields);
  parseDatabaseSheetRows(communeDbRows, 'commune', themesMap, rendererByThemeId, communeValueFields);

  const builtThemes = Array.from(themesMap.values());
  builtThemes.forEach((theme) => {
    syncThemeValuesFromSelectedField(theme, 'province');
    syncThemeValuesFromSelectedField(theme, 'commune');
    theme.mode = 'ui-controlled';
    theme.runtime = buildThemeRuntime(theme);
    ensureCategoryColorsForLevel(theme, 'province');
    ensureCategoryColorsForLevel(theme, 'commune');
  });

  if (!builtThemes.length) {
    showToast(langText('لم يتم العثور على Themes صالحة في ملف Excel', 'Aucun thème valide trouvé dans le fichier Excel'), 'error');
    return;
  }

  excelSymbologyThemes = builtThemes;

  const preferredTheme = builtThemes
    .slice()
    .sort((a, b) => {
      const communeDiff = getThemeDistinctCountForLevel(b, 'commune') - getThemeDistinctCountForLevel(a, 'commune');
      if (communeDiff !== 0) return communeDiff;
      return getThemeDistinctCountForLevel(b, 'province') - getThemeDistinctCountForLevel(a, 'province');
    })[0] || builtThemes[0];

  applyExcelTheme(preferredTheme.id);

  const totalProvinceValues = builtThemes.reduce((sum, theme) => sum + theme.values.province.size, 0);
  const totalCommuneValues = builtThemes.reduce((sum, theme) => sum + theme.values.commune.size, 0);
  const activeTheme = preferredTheme;
  const matchedProvinceFeatures = countMatchedLayerFeatures(activeTheme, 'province');
  const matchedCommuneFeatures = countMatchedLayerFeatures(activeTheme, 'commune');
  excelColoringTargetLevel = matchedCommuneFeatures > matchedProvinceFeatures ? 'commune' : 'province';
  const provinceMissing = Math.max(0, totalProvinceValues - matchedProvinceFeatures);
  const communeMissing = Math.max(0, totalCommuneValues - matchedCommuneFeatures);
  showToast(
    `تم تحميل ${builtThemes.length} موضوع(ات) • الأقاليم: ${matchedProvinceFeatures}/${totalProvinceValues} • الجماعات: ${matchedCommuneFeatures}/${totalCommuneValues} • غير مطابق: أقاليم ${provinceMissing}، جماعات ${communeMissing}`,
    'success'
  );
}

function rebuildProvinceCodeIndexes() {
  provinceCodeToRegionMap = {};
  provinceCodeToNameMap = {};
  provinceNameToCodesIndex = {};

  if (!provincesLayer) return;

  provincesLayer.eachLayer(layer => {
    const props = layer.feature?.properties || {};
    const provinceName = getLayerProvinceName(props);
    const provinceCode = getProvinceCodeFromProps(props);
    const regionName = getLayerRegionName(props, provinceName);

    if (provinceCode && regionName && !provinceCodeToRegionMap[provinceCode]) {
      provinceCodeToRegionMap[provinceCode] = regionName;
    }

    if (provinceCode && provinceName && !provinceCodeToNameMap[provinceCode]) {
      provinceCodeToNameMap[provinceCode] = provinceName;
    }

    if (provinceName && provinceCode) {
      const key = toCanonicalKey(provinceName);
      if (key) {
        if (!provinceNameToCodesIndex[key]) {
          provinceNameToCodesIndex[key] = [];
        }
        if (!provinceNameToCodesIndex[key].includes(provinceCode)) {
          provinceNameToCodesIndex[key].push(provinceCode);
        }
      }
    }
  });
}

function getProvinceNameFromCode(provinceCode = '') {
  const normalizedCode = normalizeProvinceCode(provinceCode);
  if (!normalizedCode) return '';
  return normalizeProvinceName(provinceCodeToNameMap[normalizedCode] || '');
}

function getCommuneProvinceName(props = {}) {
  const communeProvinceCode = getCommuneProvinceCode(props);
  const provinceFromCode = getProvinceNameFromCode(communeProvinceCode);
  if (provinceFromCode) return provinceFromCode;
  return getLayerProvinceName(props);
}

function getProvinceCodesForFilter(provinceName) {
  const key = toCanonicalKey(provinceName);
  return new Set(provinceNameToCodesIndex[key] || []);
}

function getLayerProvinceName(props = {}) {
  const label = getResValue(props, ['label', 'LABEL', 'libelle', 'LIBELLE']) || '';
  const parsed = parseProvinceLabel(label);
  const rawProvince = getResValue(props, ['NAME_1', 'name', 'NAME', 'nom', 'NOM', 'province', 'PROVINCE', 'delegation', 'DELEGATION'])
    || parsed.name
    || '';
  const normalizedProvince = normalizeProvinceName(rawProvince);
  if (!normalizedProvince) return '';

  ensureFrenchCanonicalMaps();
  const frenchFromArabic = PROVINCE_FRENCH_BY_ARABIC_CANONICAL?.get(toCanonicalKey(normalizedProvince)) || '';
  return normalizeProvinceName(frenchFromArabic || normalizedProvince);
}

function getLayerRegionName(props = {}, provinceName = '') {
  const regionRaw = normalizeRegionName(getResValue(props, ['REGION', 'region', 'NAME_0', 'REGION_NAME']) || '');
  if (regionRaw) {
    ensureFrenchCanonicalMaps();
    const frenchFromArabic = REGION_FRENCH_BY_ARABIC_CANONICAL?.get(toCanonicalKey(regionRaw)) || '';
    return normalizeRegionName(frenchFromArabic || regionRaw);
  }
  return getRegionFromProvinceName(provinceName);
}

function getLayerCommuneName(props = {}) {
  const rawCommune = normalizeTextValue(getResValue(props, ['NAME_2', 'name', 'NAME', 'nom', 'NOM', 'commune', 'COMMUNE']) || '');
  if (!rawCommune) return '';

  ensureFrenchCanonicalMaps();
  const frenchFromArabic = COMMUNE_FRENCH_BY_ARABIC_CANONICAL?.get(toCanonicalKey(rawCommune)) || '';
  return normalizeTextValue(frenchFromArabic || rawCommune);
}

function getLayerCommuneIso(props = {}) {
  return normalizeTextValue(getResValue(props, ['ISO', 'iso']) || '').toLowerCase();
}

function toCommuneLookupKey(value) {
  let cleaned = normalizeTextValue(value);
  if (!cleaned) return '';

  cleaned = cleaned
    .replace(/\((?:\s*(?:mun\.?|arrond\.?|municipalite|municipality|commune|arrondissement)\s*)\)/gi, '')
    .replace(/^\s*(?:commune|municipalite|municipality|arrondissement)\s+de\s+/i, '')
    .replace(/\barrond\.?\b/gi, '')
    .replace(/\bmun\.?\b/gi, '')
    .replace(/[’']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return toCanonicalKey(cleaned);
}

function toArabicRegionName(regionName) {
  if (isFrenchLanguage()) {
    const normalized = normalizeRegionName(regionName);
    return normalized || t('unknown');
  }
  ensureArabicCanonicalMaps();
  const normalized = normalizeRegionName(regionName);
  return getArabicNameFromMap(normalized, REGION_ARABIC_MAP, REGION_ARABIC_CANONICAL_MAP);
}

function toArabicProvinceName(provinceName) {
  if (isFrenchLanguage()) {
    const normalized = normalizeProvinceName(provinceName);
    return normalized || t('unknown');
  }
  ensureArabicCanonicalMaps();
  const normalized = normalizeProvinceName(provinceName);
  return getArabicNameFromMap(normalized, PROVINCE_ARABIC_MAP, PROVINCE_ARABIC_CANONICAL_MAP);
}

function toArabicCommuneName(communeName, props = null) {
  if (isFrenchLanguage()) {
    return normalizeTextValue(communeName) || t('unknown');
  }
  const normalized = normalizeTextValue(communeName);
  const isoKey = props ? getLayerCommuneIso(props) : '';
  if (isoKey && communeArabicByIso.has(isoKey)) {
    return communeArabicByIso.get(isoKey);
  }

  if (normalized) {
    const canonical = toCommuneLookupKey(normalized) || toCanonicalKey(normalized);
    if (canonical && communeArabicByNameKey.has(canonical)) {
      return communeArabicByNameKey.get(canonical);
    }

    const manualEntry = Object.entries(COMMUNE_ARABIC_MAP).find(([sourceName]) => {
      const sourceKey = toCommuneLookupKey(sourceName) || toCanonicalKey(sourceName);
      return sourceKey && sourceKey === canonical;
    });
    if (manualEntry) {
      return manualEntry[1];
    }
  }

  ensureArabicCanonicalMaps();
  return getArabicNameFromMap(normalized, COMMUNE_ARABIC_MAP, COMMUNE_ARABIC_CANONICAL_MAP);
}

function toArabicNetworkName(networkName) {
  if (!networkName) return t('unknownNetwork');
  const normalized = normalizeTextValue(networkName);
  if (isFrenchLanguage()) return normalized || t('unknownNetwork');
  return NETWORK_ARABIC_MAP[normalized] || normalized;
}

function animateCounter(element, target) {
  if (!element) return;
  const safeTarget = Number.isFinite(target) ? Math.max(0, Math.floor(target)) : 0;
  const duration = 700;
  const start = Number(element.textContent) || 0;
  const diff = safeTarget - start;
  if (diff === 0) {
    element.textContent = String(safeTarget);
    return;
  }

  const startTime = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(start + diff * progress);
    element.textContent = String(value);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function updateLandingStats(stats = null) {
  const institutions = stats?.institutions ?? allInstitutions.length;
  const networks = stats?.networks ?? new Set(allInstitutions.map(i => getResValue(i, ['reseau', 'abr_reseau']))).size;
  const regions = stats?.regions ?? new Set(allInstitutions.map(i => i.region)).size;
  const provinces = stats?.provinces ?? new Set(allInstitutions.map(getInstitutionProvince).filter(Boolean)).size;
  const populationDetails = stats?.populationDetails || getFilteredPopulationBreakdown();
  const population = Number.isFinite(stats?.population)
    ? stats.population
    : populationDetails.totalPopulation;
  const showPopulationBreakdown = stats?.showPopulationBreakdown !== false;
  const notAvailableValue = '—';
  const hasOfficialBreakdown = !!stats?.hasOfficialBreakdown;
  const moroccans = Number(populationDetails?.moroccans);
  const foreigners = Number(populationDetails?.foreigners);
  const households = Number(populationDetails?.households);
  const roundedPopulation = Math.round(Number(population) || 0);
  const officialRegionPopulationValues = new Set(Object.values(RGPH2024_OFFICIAL_REGION_POPULATION_BY_CANONICAL).map((value) => Math.round(Number(value) || 0)));
  const matchesOfficialNationalPopulation = roundedPopulation === RGPH2024_OFFICIAL_NATIONAL_POPULATION;
  const matchesOfficialRegionPopulation = officialRegionPopulationValues.has(roundedPopulation);
  const mustHideBreakdownForOfficialPopulation = !hasOfficialBreakdown
    && (matchesOfficialNationalPopulation || matchesOfficialRegionPopulation);
  const breakdownSum = moroccans + foreigners;
  const hasCoherentBreakdown = Number.isFinite(moroccans)
    && Number.isFinite(foreigners)
    && Number.isFinite(households)
    && Math.abs((Number(population) || 0) - breakdownSum) <= 1;
  const shouldDisplayBreakdown = showPopulationBreakdown
    && hasCoherentBreakdown
    && !mustHideBreakdownForOfficialPopulation;

  animateCounter(document.getElementById('landingInstitutions'), institutions);
  animateCounter(document.getElementById('landingNetworks'), networks);
  animateCounter(document.getElementById('landingRegions'), regions);
  animateCounter(document.getElementById('landingProvinces'), provinces);
  const landingPopulationEl = document.getElementById('landingPopulation');
  if (landingPopulationEl) landingPopulationEl.textContent = formatIntegerForUi(population);
  const landingMoroccansEl = document.getElementById('landingPopulationMoroccans');
  if (landingMoroccansEl) {
    landingMoroccansEl.textContent = shouldDisplayBreakdown
      ? formatIntegerForUi(moroccans)
      : notAvailableValue;
  }
  const landingForeignersEl = document.getElementById('landingPopulationForeigners');
  if (landingForeignersEl) {
    landingForeignersEl.textContent = shouldDisplayBreakdown
      ? formatIntegerForUi(foreigners)
      : notAvailableValue;
  }
  const landingHouseholdsEl = document.getElementById('landingPopulationHouseholds');
  if (landingHouseholdsEl) {
    landingHouseholdsEl.textContent = shouldDisplayBreakdown
      ? formatIntegerForUi(households)
      : notAvailableValue;
  }
}

function getFilteredInstitutions() {
  return allInstitutions.filter(item => {
    const regionOk = !currentRegionFilter || getInstitutionRegion(item) === currentRegionFilter;
    const provinceOk = !currentProvinceFilter || getInstitutionProvince(item) === currentProvinceFilter;
    const communeOk = !currentCommuneFilter
      || toCommuneLookupKey(getInstitutionCommune(item)) === toCommuneLookupKey(currentCommuneFilter);
    return regionOk && provinceOk && communeOk;
  });
}

function getVisibleInstitutionsForStats() {
  return getFilteredInstitutions().filter(item => {
    const reseau = getResValue(item, ['reseau', 'abr_reseau']) || '';
    return reseauVisibility?.[reseau] !== false;
  });
}

function getFilteredPopulationTotal() {
  return getFilteredPopulationBreakdown().totalPopulation;
}

function getFilteredPopulationBreakdown() {
  if (!communesLayer) {
    return {
      totalPopulation: 0,
      moroccans: 0,
      foreigners: 0,
      households: 0
    };
  }

  const selectedProvinceCodes = currentProvinceFilter ? getProvinceCodesForFilter(currentProvinceFilter) : new Set();
  let totalPopulation = 0;
  let totalMoroccans = 0;
  let totalForeigners = 0;
  let totalHouseholds = 0;

  communesLayer.eachLayer(layer => {
    const props = layer.feature?.properties || {};
    const province = getCommuneProvinceName(props);
    const communeName = getLayerCommuneName(props);
    const communeProvinceCode = getCommuneProvinceCode(props);
    const codeRegion = communeProvinceCode ? provinceCodeToRegionMap[communeProvinceCode] || '' : '';
    const region = getLayerRegionName(props, province) || codeRegion;

    const matchesRegion = !currentRegionFilter || region === currentRegionFilter;
    const matchesProvince = !currentProvinceFilter
      || (selectedProvinceCodes.size > 0 && selectedProvinceCodes.has(communeProvinceCode));
    const matchesCommune = !currentCommuneFilter
      || toCommuneLookupKey(communeName) === toCommuneLookupKey(currentCommuneFilter);

    if (!matchesRegion || !matchesProvince || !matchesCommune) return;

    const rawPopulation = Number(getResValue(props, ['Populati_1', 'population', 'Population', 'POPULATION']) || 0);
    if (Number.isFinite(rawPopulation)) {
      totalPopulation += rawPopulation;
    }

    const rawMoroccans = Number(getResValue(props, ['Marocains_', 'Marocains', 'moroccans']) || 0);
    if (Number.isFinite(rawMoroccans)) {
      totalMoroccans += rawMoroccans;
    }

    const rawForeigners = Number(getResValue(props, ['Etrangers_', 'Etrangers', 'foreigners']) || 0);
    if (Number.isFinite(rawForeigners)) {
      totalForeigners += rawForeigners;
    }

    const rawHouseholds = Number(getResValue(props, ['Menages_', 'Menages', 'households']) || 0);
    if (Number.isFinite(rawHouseholds)) {
      totalHouseholds += rawHouseholds;
    }
  });

  return {
    totalPopulation: Math.round(totalPopulation),
    moroccans: Math.round(totalMoroccans),
    foreigners: Math.round(totalForeigners),
    households: Math.round(totalHouseholds)
  };
}

function getOfficialRegionPopulation2024(regionName) {
  const key = getOfficialRegionCanonicalKey(regionName);
  if (!key) return null;
  return RGPH2024_OFFICIAL_REGION_POPULATION_BY_CANONICAL[key] ?? null;
}

function getOfficialRegionCanonicalKey(regionName) {
  const normalizedRegion = normalizeRegionName(regionName);
  if (!normalizedRegion) return null;

  const directKey = toCanonicalKey(normalizedRegion);
  if (directKey && RGPH2024_OFFICIAL_REGION_POPULATION_BY_CANONICAL[directKey] !== undefined) {
    return directKey;
  }

  ensureFrenchCanonicalMaps();
  const frenchFromArabic = REGION_FRENCH_BY_ARABIC_CANONICAL?.get(directKey) || '';
  if (frenchFromArabic) {
    const frenchKey = toCanonicalKey(normalizeRegionName(frenchFromArabic));
    if (frenchKey && RGPH2024_OFFICIAL_REGION_POPULATION_BY_CANONICAL[frenchKey] !== undefined) {
      return frenchKey;
    }
  }

  return null;
}

function getOfficialPopulationBreakdown2024(regionName = '') {
  const toBreakdown = (source) => {
    const moroccans = Number(source?.moroccans);
    const foreigners = Number(source?.foreigners);
    const households = Number(source?.households);
    if (!Number.isFinite(moroccans) || !Number.isFinite(foreigners) || !Number.isFinite(households)) {
      return null;
    }
    return {
      totalPopulation: Math.round(moroccans + foreigners),
      moroccans: Math.round(moroccans),
      foreigners: Math.round(foreigners),
      households: Math.round(households)
    };
  };

  if (!regionName) {
    return toBreakdown(RGPH2024_OFFICIAL_NATIONAL_BREAKDOWN);
  }

  const regionKey = getOfficialRegionCanonicalKey(regionName);
  if (!regionKey) return null;
  return toBreakdown(RGPH2024_OFFICIAL_REGION_BREAKDOWN_BY_CANONICAL[regionKey]);
}

function getAvailableRegionNames() {
  return Array.from(new Set(allInstitutions.map(getInstitutionRegion).filter(Boolean)))
    .sort((a, b) => toArabicRegionName(a).localeCompare(toArabicRegionName(b), 'ar'));
}

function getAvailableProvinceNames(regionName = currentRegionFilter) {
  return Array.from(
    new Set(
      allInstitutions
        .filter(item => !regionName || getInstitutionRegion(item) === regionName)
        .map(getInstitutionProvince)
        .filter(Boolean)
    )
  ).sort((a, b) => toArabicProvinceName(a).localeCompare(toArabicProvinceName(b), 'ar'));
}

function getAvailableCommuneNames(regionName = currentRegionFilter, provinceName = currentProvinceFilter) {
  return Array.from(
    new Set(
      allInstitutions
        .filter(item => {
          const regionOk = !regionName || getInstitutionRegion(item) === regionName;
          const provinceOk = !provinceName || getInstitutionProvince(item) === provinceName;
          return regionOk && provinceOk;
        })
        .map(getInstitutionCommune)
        .filter(Boolean)
    )
  ).sort((a, b) => toArabicCommuneName(a).localeCompare(toArabicCommuneName(b), 'ar'));
}

function updateProvinceLayerByFilters(shouldFitBounds = true) {
  if (!provincesLayer) return;

  const selectedBounds = L.latLngBounds([]);
  const activeTheme = getActiveExcelTheme();
  const applyProvinceTheme = !!(activeTheme && getExcelColoringTargetLevel() === 'province');
  const hasProvinceThemeValues = !!(applyProvinceTheme && activeTheme.values?.province?.size > 0);

  provincesLayer.eachLayer(layer => {
    const props = layer.feature?.properties || {};
    const provinceName = getLayerProvinceName(props);
    const layerRegion = getLayerRegionName(props, provinceName);
    const layerProvince = normalizeProvinceName(provinceName);

    const matchesRegion = !currentRegionFilter || layerRegion === currentRegionFilter;
    const matchesProvince = !currentProvinceFilter || layerProvince === currentProvinceFilter;
    const matches = matchesRegion && matchesProvince;

    let fillColor = '#7dd3fc';
    let fillOpacity = matches ? 0.08 : 0.01;

    if (applyProvinceTheme) {
      if (!hasProvinceThemeValues) {
        fillColor = activeTheme.noDataColor || '#e5e7eb';
        fillOpacity = matches ? 0.18 : 0.08;
      } else {
        const provinceThemeValue = getThemeValueForFeature(activeTheme, 'province', props).value;
        const hasProvinceValue = typeof provinceThemeValue !== 'undefined' && provinceThemeValue !== null && provinceThemeValue !== '';

        if (hasProvinceValue) {
          fillColor = getExcelFillColor('province', props) || '#7dd3fc';
          fillOpacity = matches ? 0.55 : 0.12;
        } else {
          fillColor = activeTheme.noDataColor || '#e5e7eb';
          fillOpacity = matches ? 0.2 : 0.08;
        }
      }
    }

    const strokeStyle = getPolygonStrokeStyle('province', matches);

    layer.setStyle({
      color: strokeStyle.color,
      weight: strokeStyle.weight,
      fillColor,
      fillOpacity
    });

    updateProvinceLabelVisibility(layer, matches);
    refreshAreaValueLabel(layer, 'province', matches);

    if (matches && layer.getBounds) {
      selectedBounds.extend(layer.getBounds());
    }
  });

  if (shouldFitBounds && (currentRegionFilter || currentProvinceFilter) && selectedBounds.isValid()) {
    map.fitBounds(selectedBounds.pad(0.08));
  }
}

function updateCommuneLayerByFilters() {
  if (!communesLayer) return;
  const layerVisibility = ensureLayerVisibilityState();
  const communesVisible = layerVisibility.Communes;
  const communeLabelsVisible = layerVisibility.CommuneLabels;
  const zoom = map?.getZoom?.() || 0;
  const communeLabelsZoomReady = zoom >= COMMUNE_LABEL_MIN_ZOOM;
  const selectedProvinceCodes = currentProvinceFilter ? getProvinceCodesForFilter(currentProvinceFilter) : new Set();
  const activeTheme = getActiveExcelTheme();
  const applyCommuneTheme = !!(activeTheme && getExcelColoringTargetLevel() === 'commune');
  const hasCommuneThemeValues = !!(applyCommuneTheme && activeTheme.values?.commune?.size > 0);

  communesLayer.eachLayer(layer => {
    const props = layer.feature?.properties || {};
    const province = getCommuneProvinceName(props);
    const communeName = getLayerCommuneName(props);
    const communeProvinceCode = getCommuneProvinceCode(props);
    const codeRegion = communeProvinceCode ? provinceCodeToRegionMap[communeProvinceCode] || '' : '';
    const region = getLayerRegionName(props, province) || codeRegion;

    const matchesRegion = !currentRegionFilter || region === currentRegionFilter;
    const matchesProvince = !currentProvinceFilter
      || (selectedProvinceCodes.size > 0 && selectedProvinceCodes.has(communeProvinceCode));
    const matchesCommune = !currentCommuneFilter
      || toCommuneLookupKey(communeName) === toCommuneLookupKey(currentCommuneFilter);
    const matches = matchesRegion && matchesProvince && matchesCommune;

    let fillColor = '#bae6fd';
    let fillOpacity = matches ? 0.02 : 0;

    if (applyCommuneTheme) {
      if (!hasCommuneThemeValues) {
        fillColor = activeTheme.noDataColor || '#e5e7eb';
        fillOpacity = matches ? 0.14 : 0.06;
      } else {
        const communeThemeValue = getThemeValueForFeature(activeTheme, 'commune', props).value;
        const hasCommuneValue = typeof communeThemeValue !== 'undefined' && communeThemeValue !== null && communeThemeValue !== '';

        if (hasCommuneValue) {
          fillColor = getExcelFillColor('commune', props) || '#bae6fd';
          fillOpacity = matches ? 0.6 : 0.15;
        } else {
          fillColor = activeTheme.noDataColor || '#e5e7eb';
          fillOpacity = matches ? 0.14 : 0.06;
        }
      }
    }

    const strokeStyle = getPolygonStrokeStyle('commune', matches);

    layer.setStyle({
      color: strokeStyle.color,
      weight: strokeStyle.weight,
      fillColor,
      fillOpacity
    });

    if (layer._labelMarker?.getElement) {
      const el = layer._labelMarker.getElement();
      const showCommuneLabel = communesVisible && communeLabelsVisible && communeLabelsZoomReady && matches;
      if (el) el.style.display = showCommuneLabel ? '' : 'none';
    }
    refreshAreaValueLabel(layer, 'commune', matches);
  });

  resolveProvinceLabelObstacles();
}

function markerMatchesCurrentRegion(marker) {
  const regionOk = !currentRegionFilter || normalizeRegionName(marker.region) === currentRegionFilter;
  const provinceOk = !currentProvinceFilter || normalizeProvinceName(marker.province) === currentProvinceFilter;
  const communeOk = !currentCommuneFilter
    || toCommuneLookupKey(marker.commune) === toCommuneLookupKey(currentCommuneFilter);
  return regionOk && provinceOk && communeOk;
}

function applyGeographicFilters({ region, province, commune, fitBounds = true } = {}) {
  if (typeof region !== 'undefined') {
    currentRegionFilter = normalizeRegionName(region);
  }

  if (typeof province !== 'undefined') {
    currentProvinceFilter = normalizeProvinceName(province);
  }

  if (typeof commune !== 'undefined') {
    currentCommuneFilter = normalizeTextValue(commune);
  }

  const availableProvinces = getAvailableProvinceNames(currentRegionFilter);
  if (!availableProvinces.includes(currentProvinceFilter)) {
    currentProvinceFilter = '';
  }

  const availableCommunes = getAvailableCommuneNames(currentRegionFilter, currentProvinceFilter);
  if (!availableCommunes.includes(currentCommuneFilter)) {
    currentCommuneFilter = '';
  }

  applyReseauFilter();
  updateProvinceLayerByFilters(fitBounds);
  updateCommuneLayerByFilters();
  rebuildAllPopups();
  if (typeof createPivot === 'function') {
    createPivot(getFilteredInstitutions());
  }
  updateLegend();
  syncAppStateToUrl();
}

function getBaseMapTileUrl() {
  const apiKey = (CONFIG.CARTO_API_KEY || '').trim();

  const lightUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png';
  const darkUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png';
  const baseUrl = isDarkTheme() ? darkUrl : lightUrl;

  if (!apiKey) return baseUrl;

  return `${baseUrl}?key=${encodeURIComponent(apiKey)}`;
}

function createBaseMapTileLayer(url) {
  return L.tileLayer(url, {
    maxZoom: 19,
    subdomains: 'abcd',
    crossOrigin: 'anonymous',
    referrerPolicy: 'no-referrer',
    attribution: ''
  });
}

function applyBaseMapTheme() {
  if (!map || typeof L === 'undefined') return;

  const nextUrl = getBaseMapTileUrl();
  if (baseMapTileLayer && baseMapTileLayer._url === nextUrl) return;

  if (baseMapTileLayer && map.hasLayer(baseMapTileLayer)) {
    map.removeLayer(baseMapTileLayer);
  }

  baseMapTileLayer = createBaseMapTileLayer(nextUrl);
  baseMapTileLayer.addTo(map);
  if (typeof baseMapTileLayer.bringToBack === 'function') {
    baseMapTileLayer.bringToBack();
  }
}

/* ============ MAP INITIALIZATION ============ */
function initMap() {
  map = L.map('map', { attributionControl: false }).setView(CONFIG.MAP_CENTER, CONFIG.MAP_ZOOM);
  applyBaseMapTheme();

  // Create layers once
  provincesLayer = createProvinceLayer();
  communesLayer = createCommuneLayer();
  markersClusterGroup = createMarkersCluster();
  markersRawGroup = L.layerGroup();

  map.on('zoomend', () => {
    updateProvinceLayerByFilters(false);
    updateCommuneLayerByFilters();
  });

  map.on('moveend', () => {
    resolveProvinceLabelObstacles();
  });

  map.on('popupopen', () => {
    resolveProvinceLabelObstacles();
  });

  map.on('popupclose', () => {
    resolveProvinceLabelObstacles();
  });

  // Layer control disabled: using custom legend instead
}

function parseProvinceLabel(label) {
  if (!label || typeof label !== 'string') return { name: undefined, region: undefined };
  const parts = label.split(':');
  if (parts.length > 1) {
    return { name: parts.slice(1).join(':').trim() || undefined, region: undefined };
  }
  return { name: label.trim() || undefined, region: undefined };
}

function buildProvincePopup(props) {
  const name = getLayerProvinceName(props) || t('unknown');
  const region = getLayerRegionName(props, name) || '';
  const code = getResValue(props, ['CODE_1', 'code', 'PROV_CODE']) || '';

  let html = `<div class="popup-card">`;
  html += `<div class="popup-title">${escapeHtml(t('popupProvince'))}</div>`;
  html += `<div class="popup-value">${escapeHtml(langText(toArabicProvinceName(name), name))}</div>`;
  if (region) html += `<div class="popup-row"><span>${escapeHtml(t('popupRegion'))}</span><strong>${escapeHtml(langText(toArabicRegionName(region), region))}</strong></div>`;
  if (code) html += `<div class="popup-row"><span>${escapeHtml(t('popupCode'))}</span><strong>${escapeHtml(code)}</strong></div>`;
  html += buildPolygonColoringPopupRows('province', props);
  html += `</div>`;
  return html;
}

function buildPolygonColoringPopupRows(level, props = {}) {
  const activeTheme = getActiveExcelTheme();

  const popupLevel = level === 'commune' ? 'commune' : 'province';
  const targetLevel = getExcelColoringTargetLevel();
  const targetLevelLabel = targetLevel === 'province'
    ? langText('الأقاليم/العمالات', 'Provinces/préfectures')
    : langText('الجماعات', 'Communes');
  const selectedFieldLabel = getExcelSelectedValueFieldLabel(targetLevel);
  const isActiveForPopup = popupLevel === targetLevel;

  let valueDisplay = langText('— غير مفعل لهذا المستوى', '— Inactif pour ce niveau');
  if (activeTheme && isActiveForPopup) {
    const value = getThemeValueForFeature(activeTheme, targetLevel, props).value;
    valueDisplay = formatFieldValueForDisplay(value, selectedFieldLabel);
  }

  let html = '';
  html += `<div class="popup-row"><span>${escapeHtml(langText('مستوى التلوين', 'Niveau de coloration'))}</span><strong>${escapeHtml(targetLevelLabel)}</strong></div>`;
  html += `<div class="popup-row"><span>${escapeHtml(langText('حقل القيمة', 'Champ de valeur'))}</span><strong>${escapeHtml(selectedFieldLabel)}</strong></div>`;
  html += `<div class="popup-row"><span>${escapeHtml(langText('القيمة', 'Valeur'))}</span><strong>${escapeHtml(valueDisplay)}</strong></div>`;
  return html;
}

function buildCommunePopup(props) {
  const rawName = getResValue(props, ['NAME_2', 'NAME_1', 'NAME']) || t('unknown');
  const displayName = toArabicCommuneName(rawName, props || {});
  const popupDisplayName = langText(displayName, rawName);

  let html = `<div class="popup-card">`;
  html += `<div class="popup-title">${escapeHtml(t('popupCommune'))}</div>`;
  html += `<div class="popup-value">${escapeHtml(popupDisplayName)}</div>`;
  html += buildPolygonColoringPopupRows('commune', props);
  html += `</div>`;
  return html;
}

function getReseauList() {
  const reseaux = new Set();
  allInstitutions.forEach(item => {
    const reseau = getResValue(item, ['reseau', 'abr_reseau']) || '';
    if (reseau) reseaux.add(reseau);
  });
  return Array.from(reseaux).sort();
}

function ensureReseauVisibility() {
  if (!reseauVisibility) reseauVisibility = {};
  getReseauList().forEach(r => {
    if (typeof reseauVisibility[r] === 'undefined') reseauVisibility[r] = true;
  });
}

function applyReseauFilter() {
  const layerVisibility = ensureLayerVisibilityState();
  if (!markersClusterGroup) return;
  markersClusterGroup.clearLayers();
  if (markersRawGroup) markersRawGroup.clearLayers();
  allMarkers.forEach(marker => {
    const reseau = marker.reseau || '';
    if (reseauVisibility?.[reseau] !== false && markerMatchesCurrentRegion(marker)) {
      markersClusterGroup.addLayer(marker);
    }
  });
  allRawMarkers.forEach(marker => {
    const reseau = marker.reseau || '';
    if (reseauVisibility?.[reseau] !== false && markerMatchesCurrentRegion(marker)) {
      markersRawGroup?.addLayer(marker);
    }
  });
  if (layerVisibility.Clustered && !map.hasLayer(markersClusterGroup)) {
    map.addLayer(markersClusterGroup);
  }
  if (layerVisibility.RawInstitutions && markersRawGroup && !map.hasLayer(markersRawGroup)) {
    map.addLayer(markersRawGroup);
  }
  updateHeaderStats();
}

function buildAreaLabelHtml(text, type = 'commune', options = {}) {
  const typeClass = type === 'province' ? 'area-label-province' : 'area-label-commune';
  const extraClass = options.className ? ` ${options.className}` : '';
  const inlineStyle = Object.entries(options)
    .filter(([key]) => key !== 'className')
    .map(([key, value]) => `${key}:${value}`)
    .join(';');
  return `<div class="area-label ${typeClass}${extraClass}" style="${inlineStyle}">${escapeHtml(text)}</div>`;
}

function getAreaLabelRenderOptions(bounds, type = 'commune', options = {}) {
  if (!bounds) return {};

  const width = Math.abs((bounds.getEast?.() || 0) - (bounds.getWest?.() || 0));
  const height = Math.abs((bounds.getNorth?.() || 0) - (bounds.getSouth?.() || 0));
  const diagonal = Math.sqrt((width ** 2) + (height ** 2));

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  if (type === 'province') {
    const fontSize = clamp(Math.round(11 + diagonal * 10), 12, 16);
    const maxWidth = clamp(Math.round(180 + diagonal * 200), 180, 260);
    return {
      fontSize: `${fontSize}px`,
      maxWidth: `${maxWidth}px`,
      lineHeight: '1.4'
    };
  }

  const fontSize = clamp(Math.round(8 + diagonal * 16), 9, 12);
  const maxWidth = clamp(Math.round(95 + diagonal * 260), 95, 170);
  const rotationFromData = Number(options.rotation);
  const rotate = Number.isFinite(rotationFromData)
    ? rotationFromData
    : (width >= height ? -6 : -24);

  return {
    fontSize: `${fontSize}px`,
    maxWidth: `${maxWidth}px`,
    lineHeight: '1.35',
    transform: `rotate(${rotate}deg)`
  };
}

function getSmartPopupLatLng(anchorLatLng) {
  if (!map || !anchorLatLng || !map.latLngToContainerPoint || !map.containerPointToLatLng) {
    return anchorLatLng;
  }

  const sourcePoint = map.latLngToContainerPoint(anchorLatLng);
  const size = map.getSize?.() || { x: 0, y: 0 };
  const horizontalOffset = sourcePoint.x < (size.x / 2) ? 140 : -140;
  const verticalOffset = sourcePoint.y < (size.y / 2) ? 36 : -36;

  return map.containerPointToLatLng(
    L.point(sourcePoint.x + horizontalOffset, sourcePoint.y + verticalOffset)
  );
}

function bindSmartAreaPopup(layer, popupHtml) {
  if (!layer) return;

  layer.bindPopup(popupHtml, {
    className: 'area-popup',
    autoPan: true,
    keepInView: true,
    maxWidth: 320,
    minWidth: 210,
    autoPanPaddingTopLeft: L.point(24, 24),
    autoPanPaddingBottomRight: L.point(24, 24)
  });

  layer.on('click', (event) => {
    const sourceLatLng = event?.latlng
      || layer.getBounds?.()?.getCenter?.()
      || map?.getCenter?.();
    const targetLatLng = getSmartPopupLatLng(sourceLatLng);
    layer.openPopup(targetLatLng);
  });
}

function createInstitutionMarker(item, color, reseau, reseauArabic) {
  const lat = parseFloat(getResValue(item, ['latitude', 'lat', 'Lat', 'y']));
  const lon = parseFloat(getResValue(item, ['longitude', 'lon', 'Long', 'x']));

  const marker = L.circleMarker([lat, lon], {
    radius: 6,
    weight: 1,
    color: '#222',
    fillColor: color,
    fillOpacity: 0.9
  });

  marker.data = item;
  marker.reseau = reseau;
  marker.region = getInstitutionRegion(item);
  marker.province = getInstitutionProvince(item);
  marker.commune = getInstitutionCommune(item);
  marker._defaultStyle = {
    radius: 6,
    weight: 1,
    color: '#222',
    fillColor: color,
    fillOpacity: 0.9
  };

  const popup = buildMarkerPopupHtml(item, reseau);
  marker.bindPopup(popup);
  marker.on('click', () => handleRouteMarkerSelection(marker));

  return marker;
}

function getFeatureValueLabelText(level, props = {}) {
  const activeTheme = getActiveExcelTheme();
  const targetLevel = normalizeExcelColoringTargetLevel(level);
  if (!(activeTheme && targetLevel === getExcelColoringTargetLevel())) return '';

  const selectedFieldKey = excelSelectedValueFieldByLevel[targetLevel] || 'value';
  const valueResult = getThemeValueForFeatureField(activeTheme, targetLevel, selectedFieldKey, props);
  const value = valueResult?.value;
  if (typeof value === 'undefined' || value === null || value === '') return '';

  const fieldLabel = getExcelSelectedValueFieldLabel(targetLevel);
  return formatFieldValueForDisplay(value, fieldLabel);
}

function refreshAreaValueLabel(layer, level, matches = true) {
  if (!layer?._valueLabelMarker) return;
  const props = layer.feature?.properties || {};
  const text = getFeatureValueLabelText(level, props);
  const marker = layer._valueLabelMarker;
  const bounds = layer.getBounds?.();
  const center = bounds?.getCenter?.() || marker.getLatLng?.() || map?.getCenter?.();

  if (!center) return;
  const options = getAreaLabelRenderOptions(bounds, level, {
    className: level === 'province' ? 'province-value-label-inner' : 'commune-value-label-inner'
  });
  const iconClassName = level === 'province' ? 'province-value-label' : 'commune-value-label';
  marker.setLatLng(center);
  marker.setIcon(L.divIcon({
    className: iconClassName,
    html: buildAreaLabelHtml(text || '—', level, options),
    iconSize: null,
    iconAnchor: level === 'province' ? [34, 18] : [28, 12]
  }));

  const el = marker.getElement();
  if (!el) return;
  const layerVisibility = ensureLayerVisibilityState();
  const valueVisible = layerVisibility.IndicatorValues;
  const zoom = map?.getZoom?.() || 0;
  const validZoom = level === 'province'
    ? zoom >= PROVINCE_LABEL_MIN_ZOOM
    : zoom >= COMMUNE_LABEL_MIN_ZOOM;
  const canShow = !!text && valueVisible && matches && validZoom;
  el.style.display = canShow ? '' : 'none';
}

function updateProvinceLabelVisibility(layer, matches) {
  if (!layer?._labelMarker?.getElement) return;
  const el = layer._labelMarker.getElement();
  if (!el) return;

  const layerVisibility = ensureLayerVisibilityState();
  const provincesVisible = layerVisibility.Provinces;
  const communesVisible = layerVisibility.Communes;
  const labelsVisible = layerVisibility.ProvinceLabels;
  const zoom = map?.getZoom?.() || 0;
  const showProvinceLabelsByZoom = zoom >= PROVINCE_LABEL_MIN_ZOOM;
  const canShow = provincesVisible && labelsVisible && matches && showProvinceLabelsByZoom;
  el.dataset.baseVisible = canShow ? '1' : '0';
  el.style.display = canShow ? '' : 'none';

  if (layer._valueLabelMarker?.getElement) {
    const valueEl = layer._valueLabelMarker.getElement();
    if (valueEl) {
      const valueText = getFeatureValueLabelText('province', layer.feature?.properties || {});
      valueEl.style.display = (provincesVisible && matches && showProvinceLabelsByZoom && valueText) ? '' : 'none';
    }
  }
}

function isVisibleHtmlElement(element) {
  if (!element) return false;
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity || '1') > 0;
}

function doRectsIntersect(a, b, padding = 0) {
  return !(
    (a.right + padding) < b.left
    || (a.left - padding) > b.right
    || (a.bottom + padding) < b.top
    || (a.top - padding) > b.bottom
  );
}

function getProvinceLabelPriority(layer, element) {
  const baseRect = element.getBoundingClientRect();
  const baseLatLng = layer?._labelBaseLatLng || layer?._labelMarker?.getLatLng?.();
  const markerPoint = baseLatLng ? map.latLngToContainerPoint(baseLatLng) : null;
  const mapSize = map?.getSize?.() || { x: 0, y: 0 };

  let edgeDistance = 0;
  if (markerPoint && mapSize.x > 0 && mapSize.y > 0) {
    edgeDistance = Math.min(
      markerPoint.x,
      markerPoint.y,
      Math.max(0, mapSize.x - markerPoint.x),
      Math.max(0, mapSize.y - markerPoint.y)
    );
  }

  const featureBounds = layer?.getBounds?.();
  const boundsWidth = Math.abs((featureBounds?.getEast?.() || 0) - (featureBounds?.getWest?.() || 0));
  const boundsHeight = Math.abs((featureBounds?.getNorth?.() || 0) - (featureBounds?.getSouth?.() || 0));
  const featureArea = boundsWidth * boundsHeight;

  return {
    edgeDistance,
    featureArea,
    labelArea: baseRect.width * baseRect.height
  };
}

function getProvinceLabelCandidatePoints(basePoint) {
  return PROVINCE_LABEL_REPOSITION_OFFSETS.map(([dx, dy]) => ({
    point: L.point(basePoint.x + dx, basePoint.y + dy),
    distance: Math.hypot(dx, dy)
  }));
}

function getRectCollisionStats(rect, obstacleRects, placedRects, obstaclePadding, labelPadding) {
  const obstacleHits = obstacleRects.reduce(
    (count, obstacleRect) => count + (doRectsIntersect(rect, obstacleRect, obstaclePadding) ? 1 : 0),
    0
  );
  const labelHits = placedRects.reduce(
    (count, placedRect) => count + (doRectsIntersect(rect, placedRect, labelPadding) ? 1 : 0),
    0
  );
  return { obstacleHits, labelHits };
}

function getProvinceObstacleRects() {
  const selectors = [
    '.commune-label',
    '.leaflet-popup',
    '.marker-cluster',
    '.leaflet-marker-icon:not(.province-label):not(.commune-label)'
  ];

  const rects = [];
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!isVisibleHtmlElement(el)) return;
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;
      rects.push(rect);
    });
  });

  return rects;
}

function resolveProvinceLabelObstacles() {
  if (!map || !provincesLayer?.eachLayer) return;

  const zoom = map.getZoom?.() || 0;
  const isRelaxedAtThisZoom = zoom >= PROVINCE_LABEL_RELAXED_OBSTACLE_ZOOM;

  const candidates = [];
  provincesLayer.eachLayer((layer) => {
    const marker = layer?._labelMarker;
    const element = marker?.getElement?.();
    const baseLatLng = layer?._labelBaseLatLng || marker?.getLatLng?.();
    if (!marker || !element || !baseLatLng || element.dataset.baseVisible !== '1') return;

    marker.setLatLng(baseLatLng);
    element.style.display = '';
    if (!isVisibleHtmlElement(element)) return;

    const priority = getProvinceLabelPriority(layer, element);
    candidates.push({ layer, marker, element, baseLatLng, priority });
  });

  candidates.sort((a, b) => {
    if (b.priority.edgeDistance !== a.priority.edgeDistance) {
      return b.priority.edgeDistance - a.priority.edgeDistance;
    }
    if (b.priority.featureArea !== a.priority.featureArea) {
      return b.priority.featureArea - a.priority.featureArea;
    }
    return b.priority.labelArea - a.priority.labelArea;
  });

  const obstacleRects = getProvinceObstacleRects();
  const placedRects = [];

  const obstaclePadding = isRelaxedAtThisZoom ? -2 : PROVINCE_LABEL_OBSTACLE_PADDING;
  const labelPadding = isRelaxedAtThisZoom ? -3 : PROVINCE_LABEL_LABEL_PADDING;

  candidates.forEach((entry) => {
    const basePoint = map.latLngToContainerPoint(entry.baseLatLng);
    const points = getProvinceLabelCandidatePoints(basePoint);

    let best = null;
    points.forEach((candidate) => {
      const candidateLatLng = map.containerPointToLatLng(candidate.point);
      entry.marker.setLatLng(candidateLatLng);
      const rect = entry.element.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;

      const stats = getRectCollisionStats(rect, obstacleRects, placedRects, obstaclePadding, labelPadding);
      const score = (stats.obstacleHits * 1000) + (stats.labelHits * 1200) + candidate.distance;

      if (!best || score < best.score) {
        best = {
          score,
          rect,
          latlng: candidateLatLng,
          obstacleHits: stats.obstacleHits,
          labelHits: stats.labelHits,
          distance: candidate.distance
        };
      }
    });

    if (best) {
      entry.marker.setLatLng(best.latlng);
      entry.element.style.display = '';
      placedRects.push(best.rect);
    } else {
      entry.marker.setLatLng(entry.baseLatLng);
      entry.element.style.display = '';
      const fallbackRect = entry.element.getBoundingClientRect();
      if (fallbackRect.width >= 2 && fallbackRect.height >= 2) {
        placedRects.push(fallbackRect);
      }
    }
  });
}

function createProvinceLayer() {
  const defaultStroke = getPolygonStrokeStyle('province', false);
  return L.geoJSON(null, {
    style: { color: defaultStroke.color, weight: defaultStroke.weight, fillOpacity: 0.03 },
    onEachFeature: (f, l) => {
      const props = f?.properties || {};
      bindSmartAreaPopup(l, buildProvincePopup(props));

          if (f.geometry) {
        const bounds = L.geoJSON(f).getBounds();
        const center = bounds.getCenter();
        const provinceName = toArabicProvinceName(getLayerProvinceName(props));
        const labelOptions = getAreaLabelRenderOptions(bounds, 'province');
        const labelMarker = L.marker(center, {
          icon: L.divIcon({
            className: 'province-label',
            html: buildAreaLabelHtml(provinceName, 'province', labelOptions),
            iconSize: null,
            iconAnchor: [52, 14]
          })
        });
        labelMarker.addTo(map);
        l._labelMarker = labelMarker;
        l._labelBaseLatLng = center;

        const valueLabelMarker = L.marker(center, {
          icon: L.divIcon({
            className: 'province-value-label',
            html: buildAreaLabelHtml('', 'province', {
              ...labelOptions,
              className: 'province-value-label-inner'
            }),
            iconSize: null,
            iconAnchor: [34, 16]
          })
        });
        valueLabelMarker.addTo(map);
        l._valueLabelMarker = valueLabelMarker;
      }
    }
  }).addTo(map);
}

function createCommuneLayer() {
  const defaultStroke = getPolygonStrokeStyle('commune', false);
  const layer = L.geoJSON(null, {
    style: { color: defaultStroke.color, weight: defaultStroke.weight, fillOpacity: 0.01 },
    onEachFeature: (f, l) => {
      const popupHtml = buildCommunePopup(f?.properties || {});
      const rawName = getResValue(f.properties, ['NAME_2', 'NAME_1', 'NAME']) || t('unknown');
      const displayName = toArabicCommuneName(rawName, f?.properties || {});
      bindSmartAreaPopup(l, popupHtml);
      
      // Add commune name label in the center
      if (f.geometry) {
        const bounds = L.geoJSON(f).getBounds();
        const center = bounds.getCenter();
        const labelOptions = getAreaLabelRenderOptions(bounds, 'commune', {
          rotation: getResValue(f?.properties || {}, ['rotation', 'ROTATION', 'label_rotation'])
        });
        const labelMarker = L.marker(center, {
          icon: L.divIcon({
            className: 'commune-label',
            html: buildAreaLabelHtml(displayName, 'commune', labelOptions),
            iconSize: null,
            iconAnchor: [50, 12]
          })
        });
        labelMarker.addTo(map);
        l._labelMarker = labelMarker;

        const valueLabelMarker = L.marker(center, {
          icon: L.divIcon({
            className: 'commune-value-label',
            html: buildAreaLabelHtml('', 'commune', {
              ...labelOptions,
              className: 'commune-value-label-inner'
            }),
            iconSize: null,
            iconAnchor: [32, 10]
          })
        });
        valueLabelMarker.addTo(map);
        l._valueLabelMarker = valueLabelMarker;
      }
    }
  }).addTo(map);
  return layer;
}

function createMarkersCluster() {
  return L.markerClusterGroup({ chunkedLoading: true });
}

/* ============ DATA LOADING ============ */
async function loadGeoJSONData(url, layer) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    layer.addData(data);
    if (url === 'province.geojson' && layer.getBounds) {
      rebuildProvinceCodeIndexes();
      map.fitBounds(layer.getBounds());
    }
    return true;
  } catch (error) {
    console.warn(`Failed to load ${url}:`, error);
    showToast(langText(`فشل تحميل ${url}`, `Échec du chargement de ${url}`), 'error');
    return false;
  }
}

async function loadInstitutionsData() {
  try {
    const response = await fetch('koulchi.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    
    if (!Array.isArray(data)) throw new Error('البيانات ليست مصفوفة صحيحة');

    allInstitutions = data.filter(item => {
      const lat = parseFloat(getResValue(item, ['latitude', 'lat', 'Lat', 'y']) || 'NaN');
      const lon = parseFloat(getResValue(item, ['longitude', 'lon', 'Long', 'x']) || 'NaN');
      return isValidCoordinate(lat, lon);
    });

    // Build province-region mapping (exact + canonical)
    data.forEach(item => {
      const province = getResValue(item, ['province', 'province_name', 'delegation']) || '';
      const delegation = getResValue(item, ['delegation']) || '';
      const region = getResValue(item, ['region', 'Region', 'REGION']) || '';
      setProvinceRegionMapping(province, region);
      setProvinceRegionMapping(delegation, region);
    });

    rebuildProvinceCodeIndexes();

    // Update layer data with province info
    if (provincesLayer) {
      provincesLayer.eachLayer(layer => {
        const props = layer.feature?.properties || {};
        layer.bindPopup(buildProvincePopup(props));
      });
    }

    // Add markers to existing cluster group
    const reseauSet = new Set();

    allInstitutions.forEach(item => {
      const reseau = getResValue(item, ['reseau', 'abr_reseau']) || 'غير معروف';
      const reseauArabic = toArabicNetworkName(reseau);
      reseauSet.add(reseau);

      const color = colorForReseau(reseau);

      const clusteredMarker = createInstitutionMarker(item, color, reseau, reseauArabic);
      const rawMarker = createInstitutionMarker(item, color, reseau, reseauArabic);
      rawMarker.setStyle({ radius: 5, weight: 1, fillOpacity: 0.8 });
      rawMarker._defaultStyle = {
        ...rawMarker._defaultStyle,
        radius: 5,
        weight: 1,
        fillOpacity: 0.8
      };

      allMarkers.push(clusteredMarker);
      allRawMarkers.push(rawMarker);
      markersClusterGroup.addLayer(clusteredMarker);
    });

    const layerVisibility = ensureLayerVisibilityState();
    if (layerVisibility.Clustered) {
      map.addLayer(markersClusterGroup);
    }
    if (layerVisibility.RawInstitutions) {
      map.addLayer(markersRawGroup);
    }
    updateLegend();
    updateHeaderStats();
    applyGeographicFilters({ fitBounds: false });
    
    if (typeof createPivot === 'function') createPivot(allInstitutions);
    
    return true;
  } catch (error) {
    console.error('فشل تحميل البيانات:', error);
    showToast(langText('فشل تحميل البيانات', 'Échec du chargement des données'), 'error');
    return false;
  }
}

/* ============ HEADER STATS ============ */
function updateHeaderStats() {
  const visibleInstitutions = getVisibleInstitutionsForStats();
  const institutions = visibleInstitutions.length;
  const networks = new Set(visibleInstitutions.map(i => getResValue(i, ['reseau', 'abr_reseau'])).filter(Boolean)).size;
  const regions = new Set(visibleInstitutions.map(getInstitutionRegion).filter(Boolean)).size;
  const provinces = new Set(visibleInstitutions.map(getInstitutionProvince).filter(Boolean)).size;
  const filteredPopulationDetails = getFilteredPopulationBreakdown();
  const hasGeographicFilter = !!(currentRegionFilter || currentProvinceFilter || currentCommuneFilter);
  const hasRegionOnlyFilter = !!(currentRegionFilter && !currentProvinceFilter && !currentCommuneFilter);
  const officialRegionPopulation = hasRegionOnlyFilter ? getOfficialRegionPopulation2024(currentRegionFilter) : null;
  const officialBreakdown = !hasGeographicFilter
    ? getOfficialPopulationBreakdown2024('')
    : (hasRegionOnlyFilter ? getOfficialPopulationBreakdown2024(currentRegionFilter) : null);
  const usesOfficialPopulationSource = !hasGeographicFilter || officialRegionPopulation !== null;
  const population = !hasGeographicFilter
    ? RGPH2024_OFFICIAL_NATIONAL_POPULATION
    : (officialRegionPopulation ?? filteredPopulationDetails.totalPopulation);

  document.getElementById('totalInstitutions').textContent = formatIntegerForUi(institutions);
  document.getElementById('totalNetworks').textContent = formatIntegerForUi(networks);
  document.getElementById('totalRegions').textContent = formatIntegerForUi(regions);
  document.getElementById('totalProvinces').textContent = formatIntegerForUi(provinces);
  document.getElementById('totalPopulation').textContent = formatIntegerForUi(population);

  updateLandingStats({
    institutions,
    networks,
    regions,
    provinces,
    population,
    populationDetails: officialBreakdown || filteredPopulationDetails,
    showPopulationBreakdown: !usesOfficialPopulationSource || !!officialBreakdown,
    hasOfficialBreakdown: !!officialBreakdown
  });
}

/* ============ LEGEND ============ */
function updateLegend() {
  const div = document.getElementById('legend');
  const layerVisibility = ensureLayerVisibilityState();
  const legendTitle = isFrenchLanguage() ? 'Panneau de contrôle' : 'لوحة التحكم';
  const legendSubtitle = isFrenchLanguage() ? 'Couches et réseaux' : 'الطبقات والشبكات';
  const hideControl = isFrenchLanguage() ? 'Masquer le panneau' : 'إخفاء لوحة التحكم';
  const geoFilterTitle = isFrenchLanguage() ? 'Filtre géographique' : 'فلترة جغرافية';
  const allRegionsLabel = isFrenchLanguage() ? 'Toutes les régions' : 'كل الجهات';
  const allProvincesLabel = isFrenchLanguage() ? 'Toutes les provinces/préfectures' : 'كل العمالات والأقاليم';
  const allCommunesLabel = isFrenchLanguage() ? 'Toutes les communes' : 'كل الجماعات';
  const resetFiltersLabel = isFrenchLanguage() ? 'Réinitialiser les filtres' : 'إعادة تعيين الفلاتر';
  const regionInfoLabel = isFrenchLanguage() ? 'Région' : 'الجهة';
  const provinceInfoLabel = isFrenchLanguage() ? 'Province' : 'الإقليم';
  const communeInfoLabel = isFrenchLanguage() ? 'Commune' : 'الجماعة';
  const institutionsInfoLabel = isFrenchLanguage() ? 'Établissements' : 'المؤسسات';
  const provincesInfoLabel = isFrenchLanguage() ? 'Provinces/préfectures' : 'العمالات/الأقاليم';
  const communesInfoLabel = isFrenchLanguage() ? 'Communes' : 'الجماعات';
  const dynamicColoringTitle = isFrenchLanguage() ? 'Coloration dynamique' : 'مجموعة التلوين الديناميكي';
  const excelImportTitle = isFrenchLanguage() ? 'Importer des valeurs depuis Excel' : 'استيراد القيم من Excel';
  const excelUploadAria = isFrenchLanguage() ? 'Charger un fichier Excel de coloration' : 'تحميل ملف Excel للتلوين';
  const themeSelectAria = isFrenchLanguage() ? 'Choisir un thème' : 'اختيار الموضوع';
  const noThemeLabel = isFrenchLanguage() ? 'Sans thème' : 'بدون موضوع';
  const coloringTargetTitle = isFrenchLanguage() ? 'Niveau de coloration' : 'مستوى التلوين';
  const coloringTargetProvinceLabel = isFrenchLanguage() ? 'Provinces/préfectures' : 'الأقاليم/العمالات';
  const coloringTargetCommuneLabel = isFrenchLanguage() ? 'Communes' : 'الجماعات';
  const colorValueTitle = isFrenchLanguage() ? 'Champ de valeur de coloration' : 'حقل قيمة التلوين';
  const colorModeTitle = isFrenchLanguage() ? 'Mode de coloration' : 'نمط التلوين';
  const uniqueColorLabel = isFrenchLanguage() ? 'Couleur unique' : 'لون موحد';
  const minColorLabel = isFrenchLanguage() ? 'Couleur valeur minimale' : 'لون أصغر قيمة';
  const maxColorLabel = isFrenchLanguage() ? 'Couleur valeur maximale' : 'لون أكبر قيمة';
  const noCategoriesForLevel = isFrenchLanguage() ? 'Aucune catégorie après chargement' : 'لا توجد فئات بعد التحميل';
  const disableExcelColoring = isFrenchLanguage() ? 'Désactiver la coloration Excel' : 'تعطيل تلوين Excel';
  const statusLabel = isFrenchLanguage() ? 'Statut' : 'الحالة';
  const enabledLabel = isFrenchLanguage() ? 'Activé' : 'مفعل';
  const disabledLabel = isFrenchLanguage() ? 'Désactivé' : 'غير مفعل';
  const excelValuesOnlyLabel = isFrenchLanguage() ? 'Valeurs issues d’Excel uniquement' : 'القيم من Excel فقط';
  const layersSectionTitle = isFrenchLanguage() ? 'Couches' : 'الطبقات';
  const networksSectionTitle = isFrenchLanguage() ? 'Réseaux' : 'الشبكات';
  const uniqueModeLabel = isFrenchLanguage() ? 'Unique' : 'موحد';
  const categorizedModeLabel = isFrenchLanguage() ? 'Catégories' : 'فئات';
  const graduatedModeLabel = isFrenchLanguage() ? 'Gradué' : 'متدرج';
  const midColorLabel = isFrenchLanguage() ? 'Couleur valeur intermédiaire' : 'لون القيمة الوسطى';
  const valueLabel = isFrenchLanguage() ? 'Valeur' : 'القيمة';
  const autoValueLabel = isFrenchLanguage() ? 'Auto' : 'تلقائي';

  let html = '<div class="legend-header">'
    + '<i class="fas fa-map-signs"></i>'
    + `<div class="legend-title"><div>${escapeHtml(legendTitle)}</div><div class="legend-subtitle">${escapeHtml(legendSubtitle)}</div></div>`
    + `<button type="button" id="legendToggleBtn" class="legend-toggle" aria-label="${escapeHtml(hideControl)}" title="${escapeHtml(hideControl)}">`
    + '<i class="fas fa-chevron-down"></i>'
    + '</button>'
    + '</div>';
  html += '<div class="legend-content">';

  const regionOptions = Array.from(
    new Set(getAvailableRegionNames().map((region) => normalizeRegionName(region)).filter(Boolean))
  ).sort((a, b) => toArabicRegionName(a).localeCompare(toArabicRegionName(b), 'ar'));
  const provinceOptions = Array.from(
    new Set(getAvailableProvinceNames(currentRegionFilter).map((province) => normalizeProvinceName(province)).filter(Boolean))
  ).sort((a, b) => toArabicProvinceName(a).localeCompare(toArabicProvinceName(b), 'ar'));
  const communeOptions = Array.from(
    new Set(getAvailableCommuneNames(currentRegionFilter, currentProvinceFilter).map((commune) => normalizeTextValue(commune)).filter(Boolean))
  ).sort((a, b) => toArabicCommuneName(a).localeCompare(toArabicCommuneName(b), 'ar'));
  const filteredInstitutions = getFilteredInstitutions();
  const filteredProvinceCount = new Set(filteredInstitutions.map(getInstitutionProvince).filter(Boolean)).size;
  const filteredCommuneCount = new Set(filteredInstitutions.map(getInstitutionCommune).filter(Boolean)).size;
  const selectedRegionLabel = currentRegionFilter ? toArabicRegionName(currentRegionFilter) : allRegionsLabel;
  const selectedProvinceLabel = currentProvinceFilter ? toArabicProvinceName(currentProvinceFilter) : allProvincesLabel;
  const selectedCommuneLabel = currentCommuneFilter ? toArabicCommuneName(currentCommuneFilter) : allCommunesLabel;
  const activeTheme = getActiveExcelTheme();
  const coloringTargetLevel = getExcelColoringTargetLevel();
  const coloringTargetLabel = coloringTargetLevel === 'province' ? coloringTargetProvinceLabel : coloringTargetCommuneLabel;
  const targetSymbology = getUiSymbologyForLevel(coloringTargetLevel);
  const targetMinValue = Number.isFinite(targetSymbology.minValue) ? targetSymbology.minValue : '';
  const targetMidValue = Number.isFinite(targetSymbology.midValue) ? targetSymbology.midValue : '';
  const targetMaxValue = Number.isFinite(targetSymbology.maxValue) ? targetSymbology.maxValue : '';
  const targetFieldOptions = excelValueFieldOptionsByLevel[coloringTargetLevel] || [];
  const targetSelectedValueField = excelSelectedValueFieldByLevel[coloringTargetLevel] || 'value';
  const targetActiveCategories = activeTheme ? getThemeDistinctCategories(activeTheme, coloringTargetLevel) : [];
  const targetMergedCategories = activeTheme && coloringTargetLevel === 'commune'
    ? getDistinctCategoriesAcrossThemes('commune')
    : [];
  const targetCategories = targetMergedCategories.length > targetActiveCategories.length
    ? targetMergedCategories
    : targetActiveCategories;

  html += '<div class="legend-geo-filter">';
  html += `<div class="legend-geo-title"><i class="fas fa-filter"></i> ${escapeHtml(geoFilterTitle)}</div>`;
  html += `<select id="legendRegionFilter" class="legend-geo-select" aria-label="${escapeHtml(geoFilterTitle)}">`;
  html += `<option value="">${escapeHtml(allRegionsLabel)}</option>`;
  regionOptions.forEach(region => {
    const normalizedRegion = normalizeRegionName(region);
    const selected = currentRegionFilter === normalizedRegion ? 'selected' : '';
    html += `<option value="${escapeHtml(normalizedRegion)}" ${selected}>${escapeHtml(toArabicRegionName(normalizedRegion))}</option>`;
  });
  html += '</select>';

  html += `<select id="legendProvinceFilter" class="legend-geo-select" aria-label="${escapeHtml(allProvincesLabel)}">`;
  html += `<option value="">${escapeHtml(allProvincesLabel)}</option>`;
  provinceOptions.forEach(province => {
    const normalizedProvince = normalizeProvinceName(province);
    const selected = currentProvinceFilter === normalizedProvince ? 'selected' : '';
    html += `<option value="${escapeHtml(normalizedProvince)}" ${selected}>${escapeHtml(toArabicProvinceName(normalizedProvince))}</option>`;
  });
  html += '</select>';

  html += `<select id="legendCommuneFilter" class="legend-geo-select" aria-label="${escapeHtml(allCommunesLabel)}">`;
  html += `<option value="">${escapeHtml(allCommunesLabel)}</option>`;
  communeOptions.forEach(commune => {
    const normalizedCommune = normalizeTextValue(commune);
    const selected = currentCommuneFilter === normalizedCommune ? 'selected' : '';
    html += `<option value="${escapeHtml(normalizedCommune)}" ${selected}>${escapeHtml(toArabicCommuneName(normalizedCommune))}</option>`;
  });
  html += '</select>';

  html += `<button type="button" id="legendResetGeoFilter" class="legend-geo-reset">${escapeHtml(resetFiltersLabel)}</button>`;
  html += `<div class="legend-geo-info"><span>${escapeHtml(regionInfoLabel)}: ${escapeHtml(selectedRegionLabel)}</span><span>${escapeHtml(provinceInfoLabel)}: ${escapeHtml(selectedProvinceLabel)}</span></div>`;
  html += `<div class="legend-geo-info"><span>${escapeHtml(communeInfoLabel)}: ${escapeHtml(selectedCommuneLabel)}</span><span>${escapeHtml(institutionsInfoLabel)}: ${filteredInstitutions.length}</span></div>`;
  html += `<div class="legend-geo-info"><span>${escapeHtml(provincesInfoLabel)}: ${filteredProvinceCount}</span><span>${escapeHtml(communesInfoLabel)}: ${filteredCommuneCount}</span></div>`;
  html += '</div>';

  html += '<details class="legend-group legend-coloring-group" open>';
  html += `<summary class="legend-group-title"><i class="fas fa-palette"></i> ${escapeHtml(dynamicColoringTitle)}</summary>`;
  html += '<div class="legend-geo-filter legend-symbology-filter">';
  html += `<div class="legend-geo-title"><i class="fas fa-file-excel"></i> ${escapeHtml(excelImportTitle)}</div>`;
  html += `<input type="file" id="excelSymbologyFile" class="legend-file-input" accept=".xlsx,.xls" aria-label="${escapeHtml(excelUploadAria)}">`;
  html += `<select id="excelThemeSelect" class="legend-geo-select" aria-label="${escapeHtml(themeSelectAria)}"`;
  html += excelSymbologyThemes.length ? '' : ' disabled';
  html += '>';
  html += `<option value="">${escapeHtml(noThemeLabel)}</option>`;
  excelSymbologyThemes.forEach((theme) => {
    const selected = activeExcelThemeId === theme.id ? 'selected' : '';
    html += `<option value="${escapeHtml(theme.id)}" ${selected}>${escapeHtml(theme.label)}</option>`;
  });
  html += '</select>';

  html += `<div class="legend-geo-title"><i class="fas fa-draw-polygon"></i> ${escapeHtml(coloringTargetTitle)}</div>`;
  html += `<select id="excelColoringTarget" class="legend-geo-select" ${activeTheme ? '' : 'disabled'}>`;
  html += `<option value="province" ${coloringTargetLevel === 'province' ? 'selected' : ''}>${escapeHtml(coloringTargetProvinceLabel)}</option>`;
  html += `<option value="commune" ${coloringTargetLevel === 'commune' ? 'selected' : ''}>${escapeHtml(coloringTargetCommuneLabel)}</option>`;
  html += '</select>';

  html += `<div class="legend-geo-title"><i class="fas fa-sliders"></i> ${escapeHtml(colorValueTitle)} (${escapeHtml(coloringTargetLabel)})</div>`;
  html += `<select id="excelValueFieldTarget" class="legend-geo-select" ${activeTheme ? '' : 'disabled'}>`;
  targetFieldOptions.forEach((fieldOption) => {
    const selected = targetSelectedValueField === fieldOption.key ? 'selected' : '';
    html += `<option value="${escapeHtml(fieldOption.key)}" ${selected}>${escapeHtml(fieldOption.label)}</option>`;
  });
  html += '</select>';

  html += `<div class="legend-geo-title"><i class="fas fa-layer-group"></i> ${escapeHtml(colorModeTitle)} (${escapeHtml(coloringTargetLabel)})</div>`;
  html += `<select id="excelModeTarget" class="legend-geo-select" ${activeTheme ? '' : 'disabled'}>`;
  html += `<option value="unique" ${targetSymbology.mode === 'unique' ? 'selected' : ''}>${escapeHtml(uniqueModeLabel)}</option>`;
  html += `<option value="categorized" ${targetSymbology.mode === 'categorized' ? 'selected' : ''}>${escapeHtml(categorizedModeLabel)}</option>`;
  html += `<option value="graduated" ${targetSymbology.mode === 'graduated' ? 'selected' : ''}>${escapeHtml(graduatedModeLabel)}</option>`;
  html += '</select>';
  if (targetSymbology.mode === 'unique') {
    const defaultUniqueColor = coloringTargetLevel === 'province' ? '#0ea5e9' : '#22c55e';
    html += `<div class="legend-geo-info"><span>${escapeHtml(uniqueColorLabel)}</span><span><input type="color" id="excelUniqueColorTarget" value="${escapeHtml(normalizeHexColor(targetSymbology.uniqueColor, defaultUniqueColor))}" ${activeTheme ? '' : 'disabled'}></span></div>`;
  } else if (targetSymbology.mode === 'graduated') {
    const defaultMinColor = coloringTargetLevel === 'province' ? '#dbeafe' : '#dcfce7';
    const defaultMidColor = coloringTargetLevel === 'province' ? '#60a5fa' : '#4ade80';
    const defaultMaxColor = coloringTargetLevel === 'province' ? '#1d4ed8' : '#15803d';
    html += `<div class="legend-geo-info"><span>${escapeHtml(minColorLabel)}</span><span class="legend-color-value-wrap"><input type="color" id="excelMinColorTarget" value="${escapeHtml(normalizeHexColor(targetSymbology.minColor, defaultMinColor))}" ${activeTheme ? '' : 'disabled'}><input type="number" id="excelMinValueTarget" class="legend-geo-value-input" placeholder="${escapeHtml(valueLabel)}" value="${escapeHtml(String(targetMinValue))}" ${activeTheme ? '' : 'disabled'}><button type="button" id="excelMinValueTargetAuto" class="legend-geo-mini-btn" ${activeTheme ? '' : 'disabled'}>${escapeHtml(autoValueLabel)}</button></span></div>`;
    html += `<div class="legend-geo-info"><span>${escapeHtml(midColorLabel)}</span><span class="legend-color-value-wrap"><input type="color" id="excelMidColorTarget" value="${escapeHtml(normalizeHexColor(targetSymbology.midColor, defaultMidColor))}" ${activeTheme ? '' : 'disabled'}><input type="number" id="excelMidValueTarget" class="legend-geo-value-input" placeholder="${escapeHtml(valueLabel)}" value="${escapeHtml(String(targetMidValue))}" ${activeTheme ? '' : 'disabled'}><button type="button" id="excelMidValueTargetAuto" class="legend-geo-mini-btn" ${activeTheme ? '' : 'disabled'}>${escapeHtml(autoValueLabel)}</button></span></div>`;
    html += `<div class="legend-geo-info"><span>${escapeHtml(maxColorLabel)}</span><span class="legend-color-value-wrap"><input type="color" id="excelMaxColorTarget" value="${escapeHtml(normalizeHexColor(targetSymbology.maxColor, defaultMaxColor))}" ${activeTheme ? '' : 'disabled'}><input type="number" id="excelMaxValueTarget" class="legend-geo-value-input" placeholder="${escapeHtml(valueLabel)}" value="${escapeHtml(String(targetMaxValue))}" ${activeTheme ? '' : 'disabled'}><button type="button" id="excelMaxValueTargetAuto" class="legend-geo-mini-btn" ${activeTheme ? '' : 'disabled'}>${escapeHtml(autoValueLabel)}</button></span></div>`;
  } else {
    if (targetCategories.length) {
      targetCategories.forEach((category, index) => {
        const defaultMinColor = coloringTargetLevel === 'province' ? '#dbeafe' : '#dcfce7';
        const defaultMaxColor = coloringTargetLevel === 'province' ? '#1d4ed8' : '#15803d';
        const categoryColor = targetSymbology.categoryColors.get(category)
          || interpolateColor(targetSymbology.minColor || defaultMinColor, targetSymbology.maxColor || defaultMaxColor, index / Math.max(1, targetCategories.length - 1));
        html += `<div class="legend-geo-info"><span>${escapeHtml(category)}</span><span><input type="color" class="excel-category-color" data-level="${escapeHtml(coloringTargetLevel)}" data-category="${escapeHtml(category)}" value="${escapeHtml(normalizeHexColor(categoryColor, coloringTargetLevel === 'province' ? '#0ea5e9' : '#22c55e'))}" ${activeTheme ? '' : 'disabled'}></span></div>`;
      });
    } else {
      html += `<div class="legend-geo-info"><span>${escapeHtml(noCategoriesForLevel)}</span></div>`;
    }
  }

  html += `<button type="button" id="clearExcelSymbologyBtn" class="legend-geo-reset">${escapeHtml(disableExcelColoring)}</button>`;
  html += `<div class="legend-geo-info"><span>${escapeHtml(statusLabel)}: ${activeTheme ? escapeHtml(enabledLabel) : escapeHtml(disabledLabel)}</span><span>${escapeHtml(excelValuesOnlyLabel)}</span></div>`;
  html += '</div>';
  html += '</details>';

  // Layers Section
  html += `<strong><i class="fas fa-map"></i> ${escapeHtml(layersSectionTitle)}</strong>`;
  
  const layerItems = [
    { id: 'Provinces', name: langText('المحافظات', 'Préfectures/Provinces'), icon: 'fas fa-square', color: '#333' },
    { id: 'Communes', name: langText('الجماعات', 'Communes'), icon: 'fas fa-square', color: '#666' },
    { id: 'ProvinceLabels', name: langText('أسماء الأقاليم داخل المجال', 'Noms des provinces dans la carte'), icon: 'fas fa-font', color: '#334155' },
    { id: 'CommuneLabels', name: langText('أسماء الجماعات داخل المجال', 'Noms des communes dans la carte'), icon: 'fas fa-font', color: '#64748b' },
    { id: 'IndicatorValues', name: langText('قيمة المؤشر على الخريطة', 'Valeur de l’indicateur sur la carte'), icon: 'fas fa-hashtag', color: '#7c3aed' },
    { id: 'Clustered', name: langText('المؤسسات المجمعة', 'Établissements groupés'), icon: 'fas fa-circle', color: '#1f77b4' },
    { id: 'RawInstitutions', name: langText('المؤسسات كما هي على الخريطة', 'Établissements bruts sur la carte'), icon: 'fas fa-location-dot', color: '#0f766e' }
  ];

  layerItems.forEach(item => {
    const checked = layerVisibility[item.id] ? 'checked' : '';
    html += `<div class="item">
      <input type="checkbox" id="layer-${item.id}" class="layer-toggle" data-layer="${item.id}" ${checked} />
      <label for="layer-${item.id}" style="flex: 1; cursor: pointer; display: flex; align-items: center; gap: 8px; margin: 0;">
        <i class="${item.icon}" style="color: ${item.color}; width: 16px; text-align: center;"></i>
        <span>${item.name}</span>
      </label>
      <span class="legend-count">${getLayerCount(item.id)}</span>
    </div>`;
  });

  // Networks Section
  html += `<strong style="margin-top: 12px;"><i class="fas fa-network-wired"></i> ${escapeHtml(networksSectionTitle)}</strong>`;
  ensureReseauVisibility();
  
  const abbrevToFull = {
    'RESSP': langText('شبكة مؤسسات الرعاية الصحية الأولية', 'Réseau des établissements de soins de santé primaire'),
    'RH': langText('الشبكة الاستشفائية', 'Réseau hospitalier'),
    'RISUM': langText('الشبكة المندمجة لمستعجلات الطب', 'Réseau intégré des soins d’urgence médicale'),
    'REMS': langText('شبكة المؤسسات الطبية الاجتماعية', 'Réseau des établissements médico-sociaux')
  };

  const displayMap = new Map();
  getReseauList().forEach(k => {
    if (reseauColors[k]) displayMap.set(k, reseauColors[k]);
  });

  const preferredOrder = ['RESSP', 'RH', 'RISUM', 'REMS'];
  const shown = new Set();

  preferredOrder.forEach(abbrev => {
    if (displayMap.has(abbrev)) {
      const color = displayMap.get(abbrev);
      const fullName = abbrevToFull[abbrev] || toArabicNetworkName(abbrev);
      const count = allInstitutions.filter(i => {
        const reseau = getResValue(i, ['reseau', 'abr_reseau']) || '';
        return reseau === abbrev || reseau === fullName;
      }).length;
      
      const checked = reseauVisibility?.[abbrev] !== false ? 'checked' : '';
      html += `<div class="item">
        <input type="checkbox" class="reseau-toggle" data-reseau="${escapeHtml(abbrev)}" ${checked} />
        <span class="swatch" style="background:${color}"></span>
        <span style="flex: 1;">${fullName}</span>
        <span class="legend-count">${count}</span>
      </div>`;
      shown.add(abbrev);
    }
  });

  // Other networks
  Array.from(displayMap.keys()).sort().forEach(abbrev => {
    if (!shown.has(abbrev)) {
      const color = displayMap.get(abbrev);
      const count = allInstitutions.filter(i => {
        const reseau = getResValue(i, ['reseau', 'abr_reseau']) || '';
        return reseau === abbrev;
      }).length;

      const checked = reseauVisibility?.[abbrev] !== false ? 'checked' : '';
      html += `<div class="item">
        <input type="checkbox" class="reseau-toggle" data-reseau="${escapeHtml(abbrev)}" ${checked} />
        <span class="swatch" style="background:${color}"></span>
        <span style="flex: 1;">${escapeHtml(toArabicNetworkName(abbrev))}</span>
        <span class="legend-count">${count}</span>
      </div>`;
    }
  });

  html += '</div>';
  div.innerHTML = html;

  const legendToggleBtn = document.getElementById('legendToggleBtn');
  legendToggleBtn?.addEventListener('click', () => {
    const legend = document.getElementById('legend');
    const isCollapsed = legend.classList.toggle('collapsed');
    const showControl = isFrenchLanguage() ? 'Afficher le panneau' : 'إظهار لوحة التحكم';
    const hideControlLabel = isFrenchLanguage() ? 'Masquer le panneau' : 'إخفاء لوحة التحكم';
    legendToggleBtn.setAttribute('aria-label', isCollapsed ? showControl : hideControlLabel);
    legendToggleBtn.setAttribute('title', isCollapsed ? showControl : hideControlLabel);
  });

  // Attach layer toggle listeners
  div.querySelectorAll('.layer-toggle').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const layerId = e.target.dataset.layer;
      const isChecked = e.target.checked;
      layerVisibility[layerId] = isChecked;

      if (isChecked && layerId === 'Clustered') {
        layerVisibility.RawInstitutions = false;
        const rawToggle = div.querySelector('#layer-RawInstitutions');
        if (rawToggle) rawToggle.checked = false;
        toggleLayer('RawInstitutions', false);
      }

      if (isChecked && layerId === 'RawInstitutions') {
        layerVisibility.Clustered = false;
        const clusteredToggle = div.querySelector('#layer-Clustered');
        if (clusteredToggle) clusteredToggle.checked = false;
        toggleLayer('Clustered', false);
      }

      toggleLayer(layerId, isChecked);
    });
  });

  div.querySelectorAll('.reseau-toggle').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const reseau = e.target.dataset.reseau || '';
      reseauVisibility[reseau] = e.target.checked;
      applyReseauFilter();
    });
  });

  const legendRegionFilter = document.getElementById('legendRegionFilter');
  const legendProvinceFilter = document.getElementById('legendProvinceFilter');
  const legendCommuneFilter = document.getElementById('legendCommuneFilter');
  const legendResetGeoFilter = document.getElementById('legendResetGeoFilter');
  const excelSymbologyFile = document.getElementById('excelSymbologyFile');
  const excelThemeSelect = document.getElementById('excelThemeSelect');
  const excelColoringTarget = document.getElementById('excelColoringTarget');
  const excelValueFieldTarget = document.getElementById('excelValueFieldTarget');
  const excelModeTarget = document.getElementById('excelModeTarget');
  const excelUniqueColorTarget = document.getElementById('excelUniqueColorTarget');
  const excelMinColorTarget = document.getElementById('excelMinColorTarget');
  const excelMidColorTarget = document.getElementById('excelMidColorTarget');
  const excelMaxColorTarget = document.getElementById('excelMaxColorTarget');
  const excelMinValueTarget = document.getElementById('excelMinValueTarget');
  const excelMidValueTarget = document.getElementById('excelMidValueTarget');
  const excelMaxValueTarget = document.getElementById('excelMaxValueTarget');
  const excelMinValueTargetAuto = document.getElementById('excelMinValueTargetAuto');
  const excelMidValueTargetAuto = document.getElementById('excelMidValueTargetAuto');
  const excelMaxValueTargetAuto = document.getElementById('excelMaxValueTargetAuto');
  const clearExcelSymbologyBtn = document.getElementById('clearExcelSymbologyBtn');

  legendRegionFilter?.addEventListener('change', (e) => {
    applyGeographicFilters({ region: e.target.value || '', province: '', commune: '' });
  });

  legendProvinceFilter?.addEventListener('change', (e) => {
    applyGeographicFilters({ province: e.target.value || '', commune: '' });
  });

  legendCommuneFilter?.addEventListener('change', (e) => {
    applyGeographicFilters({ commune: e.target.value || '' });
  });

  legendResetGeoFilter?.addEventListener('click', () => {
    applyGeographicFilters({ region: '', province: '', commune: '' });
  });

  excelSymbologyFile?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await loadExcelSymbology(file);
      updateLegend();
    } catch (error) {
      console.error('Excel symbology load failed:', error);
      showToast(langText('فشل قراءة ملف Excel', 'Échec de lecture du fichier Excel'), 'error');
    } finally {
      e.target.value = '';
    }
  });

  excelThemeSelect?.addEventListener('change', (e) => {
    const themeId = e.target.value || '';
    if (!themeId) {
      activeExcelThemeId = '';
      applyGeographicFilters({ fitBounds: false });
      return;
    }
    applyExcelTheme(themeId);
    updateLegend();
  });

  excelColoringTarget?.addEventListener('change', (e) => {
    excelColoringTargetLevel = normalizeExcelColoringTargetLevel(e.target.value || 'province');
    applyGeographicFilters({ fitBounds: false });
    updateLegend();
  });

  const updateValueFieldForLevel = (level, fieldKey) => {
    const targetLevel = level === 'province' ? 'province' : 'commune';
    const options = excelValueFieldOptionsByLevel[targetLevel] || [];
    const fallbackKey = options[0]?.key || 'value';
    excelSelectedValueFieldByLevel[targetLevel] = options.some((opt) => opt.key === fieldKey) ? fieldKey : fallbackKey;
    syncAllThemesWithSelectedValueField(targetLevel);
    const activeTheme = getActiveExcelTheme();
    if (activeTheme && getUiSymbologyForLevel(targetLevel).mode === 'categorized') {
      ensureCategoryColorsForLevel(activeTheme, targetLevel);
    }
    applyGeographicFilters({ fitBounds: false });
    updateLegend();
  };

  excelValueFieldTarget?.addEventListener('change', (e) => {
    updateValueFieldForLevel(getExcelColoringTargetLevel(), e.target.value || 'value');
  });

  const updateModeForLevel = (level, mode) => {
    const cfg = getUiSymbologyForLevel(level);
    cfg.mode = normalizeRendererMode(mode) || 'graduated';
    const theme = getActiveExcelTheme();
    if (theme && cfg.mode === 'categorized') {
      ensureCategoryColorsForLevel(theme, level);
    }
    applyGeographicFilters({ fitBounds: false });
    updateLegend();
  };

  excelModeTarget?.addEventListener('change', (e) => {
    updateModeForLevel(getExcelColoringTargetLevel(), e.target.value || 'graduated');
  });

  excelUniqueColorTarget?.addEventListener('change', (e) => {
    const level = getExcelColoringTargetLevel();
    const defaultColor = level === 'province' ? '#0ea5e9' : '#22c55e';
    getUiSymbologyForLevel(level).uniqueColor = normalizeHexColor(e.target.value, defaultColor);
    applyGeographicFilters({ fitBounds: false });
  });

  const updateColorForTargetLevel = (colorKey, colorValue) => {
    const level = getExcelColoringTargetLevel();
    const defaults = level === 'province'
      ? { uniqueColor: '#0ea5e9', minColor: '#dbeafe', midColor: '#60a5fa', maxColor: '#1d4ed8' }
      : { uniqueColor: '#22c55e', minColor: '#dcfce7', midColor: '#4ade80', maxColor: '#15803d' };
    getUiSymbologyForLevel(level)[colorKey] = normalizeHexColor(colorValue, defaults[colorKey]);
    const theme = getActiveExcelTheme();
    if (theme && getUiSymbologyForLevel(level).mode === 'categorized') ensureCategoryColorsForLevel(theme, level);
    applyGeographicFilters({ fitBounds: false });
    updateLegend();
  };

  excelMinColorTarget?.addEventListener('change', (e) => {
    updateColorForTargetLevel('minColor', e.target.value);
  });

  excelMidColorTarget?.addEventListener('change', (e) => {
    updateColorForTargetLevel('midColor', e.target.value);
  });

  excelMaxColorTarget?.addEventListener('change', (e) => {
    updateColorForTargetLevel('maxColor', e.target.value);
  });

  const updateGraduatedValueForLevel = (level, key, rawValue) => {
    const cfg = getUiSymbologyForLevel(level);
    const text = (rawValue || '').toString().trim();
    if (!text) {
      cfg[key] = null;
    } else {
      const parsed = parseNumericValue(text);
      cfg[key] = Number.isFinite(parsed) ? parsed : null;
    }
    applyGeographicFilters({ fitBounds: false });
    updateLegend();
  };

  excelMinValueTarget?.addEventListener('change', (e) => {
    updateGraduatedValueForLevel(getExcelColoringTargetLevel(), 'minValue', e.target.value);
  });

  excelMidValueTarget?.addEventListener('change', (e) => {
    updateGraduatedValueForLevel(getExcelColoringTargetLevel(), 'midValue', e.target.value);
  });

  excelMaxValueTarget?.addEventListener('change', (e) => {
    updateGraduatedValueForLevel(getExcelColoringTargetLevel(), 'maxValue', e.target.value);
  });

  const resetGraduatedValueForLevel = (level, key) => {
    const cfg = getUiSymbologyForLevel(level);
    cfg[key] = null;
    applyGeographicFilters({ fitBounds: false });
    updateLegend();
  };

  excelMinValueTargetAuto?.addEventListener('click', () => {
    resetGraduatedValueForLevel(getExcelColoringTargetLevel(), 'minValue');
  });

  excelMidValueTargetAuto?.addEventListener('click', () => {
    resetGraduatedValueForLevel(getExcelColoringTargetLevel(), 'midValue');
  });

  excelMaxValueTargetAuto?.addEventListener('click', () => {
    resetGraduatedValueForLevel(getExcelColoringTargetLevel(), 'maxValue');
  });

  div.querySelectorAll('.excel-category-color').forEach((input) => {
    input.addEventListener('change', (e) => {
      const level = e.target.dataset.level === 'province' ? 'province' : 'commune';
      const category = normalizeTextValue(e.target.dataset.category || '');
      if (!category) return;
      const cfg = getUiSymbologyForLevel(level);
      cfg.categoryColors.set(category, normalizeHexColor(e.target.value));
      applyGeographicFilters({ fitBounds: false });
    });
  });

  clearExcelSymbologyBtn?.addEventListener('click', () => {
    clearExcelSymbologyTheme();
    updateLegend();
  });

}

function getLayerCount(layerId) {
  if (layerId === 'Provinces') return provincesLayer?.getLayers().length || 0;
  if (layerId === 'Communes') return communesLayer?.getLayers().length || 0;
  if (layerId === 'Clustered') return getFilteredInstitutions().length;
  if (layerId === 'RawInstitutions') return getFilteredInstitutions().length;
  if (layerId === 'ProvinceLabels') return provincesLayer?.getLayers().length || 0;
  if (layerId === 'CommuneLabels') return communesLayer?.getLayers().length || 0;
  return 0;
}

function toggleLayer(layerId, visible) {
  const layerVisibility = ensureLayerVisibilityState();
  if (layerId === 'Provinces' && provincesLayer) {
    if (visible) {
      map.addLayer(provincesLayer);
    } else {
      map.removeLayer(provincesLayer);
    }
    updateProvinceLayerByFilters(false);
  } else if (layerId === 'Communes' && communesLayer) {
    if (visible) {
      map.addLayer(communesLayer);
    } else {
      map.removeLayer(communesLayer);
    }
    updateCommuneLayerByFilters();
  } else if (layerId === 'ProvinceLabels') {
    updateProvinceLayerByFilters(false);
  } else if (layerId === 'CommuneLabels') {
    updateCommuneLayerByFilters();
  } else if (layerId === 'IndicatorValues') {
    updateProvinceLayerByFilters(false);
    updateCommuneLayerByFilters();
  } else if (layerId === 'Clustered' && markersClusterGroup) {
    if (visible) {
      layerVisibility.RawInstitutions = false;
      if (markersRawGroup && map.hasLayer(markersRawGroup)) {
        map.removeLayer(markersRawGroup);
      }
      applyReseauFilter();
    } else {
      map.removeLayer(markersClusterGroup);
    }
  } else if (layerId === 'RawInstitutions' && markersRawGroup) {
    if (visible) {
      layerVisibility.Clustered = false;
      if (markersClusterGroup && map.hasLayer(markersClusterGroup)) {
        map.removeLayer(markersClusterGroup);
      }
      applyReseauFilter();
    } else {
      map.removeLayer(markersRawGroup);
    }
  }
}

function setRouteModeButtonState() {
  const routeBtn = document.getElementById('routeModeBtn');
  if (!routeBtn) return;
  routeBtn.classList.toggle('active', routeModeActive);
  routeBtn.title = routeModeActive
    ? langText('وضع المسار مفعل: اختر مؤسستين من الخريطة', 'Mode itinéraire activé : choisissez deux établissements sur la carte')
    : langText('حساب المسافة والوقت بين مؤسستين', 'Calculer distance et durée entre deux établissements');
}

function resetRouteMarkerStyle(marker) {
  if (!marker?.setStyle || !marker?._defaultStyle) return;
  marker.setStyle(marker._defaultStyle);
}

function clearRouteVisuals({ keepInfo = false } = {}) {
  if (routeHaloLayer && map?.hasLayer(routeHaloLayer)) {
    map.removeLayer(routeHaloLayer);
  }
  routeHaloLayer = null;

  if (routeLineLayer && map?.hasLayer(routeLineLayer)) {
    map.removeLayer(routeLineLayer);
  }
  routeLineLayer = null;

  if (routeArrowDecorator && map?.hasLayer(routeArrowDecorator)) {
    map.removeLayer(routeArrowDecorator);
  }
  routeArrowDecorator = null;

  if (routeArrowAnimationTimer) {
    clearInterval(routeArrowAnimationTimer);
    routeArrowAnimationTimer = null;
  }
  routeArrowOffsetPercent = 0;

  if (routeMovingArrowTimer) {
    clearInterval(routeMovingArrowTimer);
    routeMovingArrowTimer = null;
  }

  if (routeMovingArrowMarker && map?.hasLayer(routeMovingArrowMarker)) {
    map.removeLayer(routeMovingArrowMarker);
  }
  routeMovingArrowMarker = null;
  routePathProgress = 0;

  routeSelectedMarkers.forEach(resetRouteMarkerStyle);
  routeSelectedMarkers = [];

  if (!keepInfo) {
    const panel = document.getElementById('routeInfoPanel');
    if (panel) {
      panel.innerHTML = '';
      panel.style.display = 'none';
    }
  }
}

function formatDistance(distanceKm) {
  return isFrenchLanguage() ? `${distanceKm.toFixed(1)} km` : `${distanceKm.toFixed(1)} كم`;
}

function formatDuration(durationMin) {
  if (durationMin < 60) return isFrenchLanguage() ? `${Math.round(durationMin)} min` : `${Math.round(durationMin)} دقيقة`;
  const hours = Math.floor(durationMin / 60);
  const mins = Math.round(durationMin % 60);
  return isFrenchLanguage() ? `${hours} h ${mins} min` : `${hours} س ${mins} د`;
}

function getMarkerDisplayName(marker) {
  return getResValue(marker?.data || {}, ['nom_etab', 'nom', 'key']) || langText('مؤسسة غير معروفة', 'Établissement inconnu');
}

function buildAnimatedArrowPattern(offsetPercent) {
  return {
    offset: `${offsetPercent}%`,
    repeat: '42px',
    symbol: L.Symbol.arrowHead({
      pixelSize: 16,
      polygon: true,
      pathOptions: {
        stroke: true,
        className: 'route-arrow-glow',
        color: '#f59e0b',
        weight: 3,
        fillOpacity: 0.95
      }
    })
  };
}

function startRouteArrowAnimation() {
  if (!routeArrowDecorator) return;
  if (routeArrowAnimationTimer) clearInterval(routeArrowAnimationTimer);

  routeArrowAnimationTimer = setInterval(() => {
    if (!routeArrowDecorator) return;
    routeArrowOffsetPercent = (routeArrowOffsetPercent + 3) % 100;
    routeArrowDecorator.setPatterns([buildAnimatedArrowPattern(routeArrowOffsetPercent)]);
  }, 75);
}

function computeBearingDegrees(fromLatLng, toLatLng) {
  const lat1 = (fromLatLng.lat * Math.PI) / 180;
  const lat2 = (toLatLng.lat * Math.PI) / 180;
  const deltaLng = ((toLatLng.lng - fromLatLng.lng) * Math.PI) / 180;

  const y = Math.sin(deltaLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng);
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

function buildRouteMetrics(coordinates) {
  if (!Array.isArray(coordinates) || coordinates.length < 2 || !map) return null;

  const latLngs = coordinates.map((coord) => L.latLng(coord[0], coord[1]));
  const cumulative = [0];
  let total = 0;

  for (let i = 1; i < latLngs.length; i++) {
    const segLength = map.distance(latLngs[i - 1], latLngs[i]) || 0;
    total += segLength;
    cumulative.push(total);
  }

  return { latLngs, cumulative, total };
}

function interpolateRoutePosition(metrics, progressRatio) {
  if (!metrics || !metrics.total || !metrics.latLngs.length) {
    return null;
  }

  const targetDistance = metrics.total * progressRatio;
  let segIndex = 1;

  while (segIndex < metrics.cumulative.length && metrics.cumulative[segIndex] < targetDistance) {
    segIndex++;
  }

  const i = Math.min(segIndex, metrics.latLngs.length - 1);
  const start = metrics.latLngs[i - 1];
  const end = metrics.latLngs[i];
  const segStart = metrics.cumulative[i - 1];
  const segEnd = metrics.cumulative[i];
  const segDistance = Math.max(segEnd - segStart, 1e-6);
  const segRatio = Math.min(Math.max((targetDistance - segStart) / segDistance, 0), 1);

  const lat = start.lat + (end.lat - start.lat) * segRatio;
  const lng = start.lng + (end.lng - start.lng) * segRatio;
  const bearing = computeBearingDegrees(start, end);

  return {
    latLng: L.latLng(lat, lng),
    bearing
  };
}

function setMovingArrowAngle(angleDeg) {
  const arrowEl = routeMovingArrowMarker?.getElement()?.querySelector('.route-moving-arrow');
  if (!arrowEl) return;
  arrowEl.style.transform = `rotate(${angleDeg - 90}deg)`;
}

function startRouteMovingArrowAnimation(coordinates) {
  if (!map || !Array.isArray(coordinates) || coordinates.length < 2) return;

  if (routeMovingArrowTimer) {
    clearInterval(routeMovingArrowTimer);
    routeMovingArrowTimer = null;
  }
  if (routeMovingArrowMarker && map.hasLayer(routeMovingArrowMarker)) {
    map.removeLayer(routeMovingArrowMarker);
  }

  const metrics = buildRouteMetrics(coordinates);
  if (!metrics || metrics.total <= 0) return;

  routePathProgress = 0;
  const startPoint = interpolateRoutePosition(metrics, routePathProgress);
  if (!startPoint) return;

  routeMovingArrowMarker = L.marker(startPoint.latLng, {
    interactive: false,
    keyboard: false,
    zIndexOffset: 1500,
    icon: L.divIcon({
      className: 'route-moving-arrow-icon',
      html: '<span class="route-moving-arrow">➤</span>',
      iconSize: [26, 26],
      iconAnchor: [13, 13]
    })
  }).addTo(map);

  setMovingArrowAngle(startPoint.bearing);

  routeMovingArrowTimer = setInterval(() => {
    routePathProgress = (routePathProgress + 0.006) % 1;
    const point = interpolateRoutePosition(metrics, routePathProgress);
    if (!point || !routeMovingArrowMarker) return;

    routeMovingArrowMarker.setLatLng(point.latLng);
    setMovingArrowAngle(point.bearing);
  }, 70);
}

function updateRouteInfoPanel({ fromName, toName, distanceKm, durationMin }) {
  const panel = document.getElementById('routeInfoPanel');
  if (!panel) return;

  panel.innerHTML = `
    <div class="route-info-title">${escapeHtml(langText('نتيجة المسار (سيارة)', 'Résultat de l’itinéraire (voiture)'))}</div>
    <div class="route-info-row"><span>${escapeHtml(langText('من', 'De'))}</span><strong>${escapeHtml(fromName)}</strong></div>
    <div class="route-info-row"><span>${escapeHtml(langText('إلى', 'À'))}</span><strong>${escapeHtml(toName)}</strong></div>
    <div class="route-info-row"><span>${escapeHtml(langText('المسافة', 'Distance'))}</span><strong>${escapeHtml(formatDistance(distanceKm))}</strong></div>
    <div class="route-info-row"><span>${escapeHtml(langText('الوقت التقريبي', 'Durée estimée'))}</span><strong>${escapeHtml(formatDuration(durationMin))}</strong></div>
    <div class="route-info-actions">
      <button type="button" id="clearRouteBtn" class="route-clear-btn">${escapeHtml(langText('مسح المسار', 'Effacer l’itinéraire'))}</button>
    </div>
  `;
  panel.style.display = 'block';

  document.getElementById('clearRouteBtn')?.addEventListener('click', () => {
    clearRouteVisuals();
    routeModeActive = false;
    setRouteModeButtonState();
  });
}

async function fetchDrivingRoute(fromLatLng, toLatLng) {
  const from = `${fromLatLng.lng},${fromLatLng.lat}`;
  const to = `${toLatLng.lng},${toLatLng.lat}`;
  const url = `https://router.project-osrm.org/route/v1/driving/${from};${to}?overview=full&geometries=geojson&steps=false`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Routing HTTP ${response.status}`);
  const data = await response.json();
  const route = data?.routes?.[0];
  if (!route?.geometry?.coordinates?.length) throw new Error('No route found');

  return {
    coordinates: route.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
    distanceKm: (route.distance || 0) / 1000,
    durationMin: (route.duration || 0) / 60
  };
}

async function finalizeRouteSelection() {
  if (routeSelectedMarkers.length < 2) return;

  const [fromMarker, toMarker] = routeSelectedMarkers;

  try {
    showLoadingOverlay(true);
    const result = await fetchDrivingRoute(fromMarker.getLatLng(), toMarker.getLatLng());

    clearRouteVisuals({ keepInfo: true });

    routeHaloLayer = L.polyline(result.coordinates, {
      color: '#38bdf8',
      weight: 14,
      opacity: 0.28,
      lineJoin: 'round',
      lineCap: 'round',
      className: 'route-halo-line'
    }).addTo(map);

    routeLineLayer = L.polyline(result.coordinates, {
      color: '#0284c7',
      weight: 6,
      opacity: 0.95,
      lineJoin: 'round',
      lineCap: 'round',
      className: 'route-main-line'
    }).addTo(map);

    if (routeHaloLayer?.bringToBack) routeHaloLayer.bringToBack();
    if (routeLineLayer?.bringToFront) routeLineLayer.bringToFront();

    if (typeof L.polylineDecorator === 'function' && typeof L.Symbol?.arrowHead === 'function') {
      routeArrowDecorator = L.polylineDecorator(routeLineLayer, {
        patterns: [buildAnimatedArrowPattern(routeArrowOffsetPercent)]
      }).addTo(map);
      startRouteArrowAnimation();
    }

    startRouteMovingArrowAnimation(result.coordinates);

    map.fitBounds(routeLineLayer.getBounds().pad(0.12));

    updateRouteInfoPanel({
      fromName: getMarkerDisplayName(fromMarker),
      toName: getMarkerDisplayName(toMarker),
      distanceKm: result.distanceKm,
      durationMin: result.durationMin
    });

    showToast(
      isFrenchLanguage()
        ? `Distance ${formatDistance(result.distanceKm)} • Durée ${formatDuration(result.durationMin)}`
        : `المسافة ${formatDistance(result.distanceKm)} • الوقت ${formatDuration(result.durationMin)}`,
      'success'
    );
  } catch (error) {
    console.error('Routing failed:', error);
    showToast(langText('تعذر حساب المسار بين المؤسستين', 'Impossible de calculer l’itinéraire entre les deux établissements'), 'error');
  } finally {
    showLoadingOverlay(false);
    routeModeActive = false;
    setRouteModeButtonState();
  }
}

function handleRouteMarkerSelection(marker) {
  if (!routeModeActive || !marker) return;

  if (routeSelectedMarkers.includes(marker)) {
    showToast(langText('تم اختيار هذه المؤسسة مسبقًا', 'Cet établissement est déjà sélectionné'), 'info');
    return;
  }

  if (routeSelectedMarkers.length === 0) {
    clearRouteVisuals({ keepInfo: false });
  }

  routeSelectedMarkers.push(marker);
  marker.setStyle({ radius: 8, weight: 2, color: '#b91c1c', fillColor: '#ef4444', fillOpacity: 1 });

  if (routeSelectedMarkers.length === 1) {
    showToast(langText('تم اختيار المؤسسة الأولى، اختر المؤسسة الثانية', 'Premier établissement sélectionné, choisissez le deuxième'), 'info');
    return;
  }

  finalizeRouteSelection();
}

function toggleRouteMode() {
  routeModeActive = !routeModeActive;

  if (routeModeActive) {
    clearRouteVisuals({ keepInfo: false });
    showToast(langText('وضع المسار مفعل: اختر مؤسستين من الخريطة', 'Mode itinéraire activé : choisissez deux établissements sur la carte'), 'info');
  } else {
    routeSelectedMarkers.forEach(resetRouteMarkerStyle);
    routeSelectedMarkers = [];
    showToast(langText('تم إلغاء وضع المسار', 'Mode itinéraire désactivé'), 'info');
  }

  setRouteModeButtonState();
}

/* ============ SEARCH FUNCTIONALITY ============ */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const clearBtn = document.getElementById('clearSearchBtn');

  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    clearBtn?.classList.toggle('visible', query.length > 0);

    if (searchDebounceTimer) clearTimeout(searchDebounceTimer);

    if (!query) {
      searchResults.style.display = 'none';
      return;
    }

    searchDebounceTimer = setTimeout(() => {
      const sourceList = getFilteredInstitutions();
      const results = sourceList.filter(item => {
        const name = getResValue(item, ['nom_etab', 'nom']) || '';
        const commune = getResValue(item, ['commune', 'cs']) || '';
        const province = getResValue(item, ['province', 'province_name']) || '';
        return name.toLowerCase().includes(query) || 
               commune.toLowerCase().includes(query) ||
               province.toLowerCase().includes(query);
      }).slice(0, CONFIG.MAX_RESULTS);

      renderSearchResults(results, searchResults);
    }, CONFIG.DEBOUNCE_DELAY);
  });

  clearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    searchResults.style.display = 'none';
    clearBtn.classList.remove('visible');
  });

  // Handle browser back button
  window.addEventListener('popstate', () => {
    searchInput.value = '';
    searchResults.style.display = 'none';
    clearBtn?.classList.remove('visible');
  });

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'f') {
      e.preventDefault();
      searchInput?.focus();
    }
    if (e.key === 'Escape') {
      searchInput.value = '';
      searchResults.style.display = 'none';
      clearBtn?.classList.remove('visible');
    }
  });
}

function renderSearchResults(results, container) {
  if (results.length === 0) {
    container.innerHTML = `<div style="padding: 12px; text-align: center; color: #666;">${escapeHtml(langText('لا توجد نتائج', 'Aucun résultat'))}</div>`;
    container.style.display = 'block';
    return;
  }

  container.innerHTML = results.map(item => `
    <div class="search-result-item" onclick="focusMarker(${allInstitutions.indexOf(item)})">
      <div>
        <div class="result-name">${escapeHtml(getResValue(item, ['nom_etab', 'nom']) || 'N/A')}</div>
        <div class="result-info">
          ${escapeHtml(getResValue(item, ['commune', 'cs']) || '')}
          <span class="result-badge">${escapeHtml(getResValue(item, ['reseau', 'abr_reseau']) || '')}</span>
        </div>
      </div>
    </div>
  `).join('');

  container.style.display = 'block';
}

function focusMarker(index) {
  if (index < 0 || index >= allMarkers.length) return;
  const marker = allMarkers[index];
  marker.openPopup();
  map.setView(marker.getLatLng(), 14);
  document.getElementById('searchResults').style.display = 'none';
  document.getElementById('searchInput').value = '';
}

/* ============ STATISTICS ============ */
function initStatistics() {
  document.getElementById('toggleStatsBtn')?.addEventListener('click', () => {
    const container = document.getElementById('app-container');
    const showing = container.classList.contains('with-stats');
    container.classList.toggle('with-stats', !showing);
    if (!showing) {
      updateStatistics();
    }
    setTimeout(() => map.invalidateSize(), 300);
  });
}

function updateStatistics() {
  const stats = generateStatistics();
  const panel = document.getElementById('statistics');
  
  let html = `
    <div class="stats-section">
      <div class="stats-title">${langText('ملخص البيانات', 'Résumé des données')}</div>
      <div class="stats-item">
        <span class="stats-label">${langText('إجمالي المؤسسات', 'Total établissements')}</span>
        <span class="stats-value">${stats.totalInstitutions}</span>
      </div>
      <div class="stats-item">
        <span class="stats-label">${langText('عدد الشبكات', 'Nombre de réseaux')}</span>
        <span class="stats-value">${stats.totalNetworks}</span>
      </div>
      <div class="stats-item">
        <span class="stats-label">${langText('عدد الجهات', 'Nombre de régions')}</span>
        <span class="stats-value">${stats.totalRegions}</span>
      </div>
    </div>
  `;

  if (stats.topNetwork) {
    html += `
      <div class="stats-section">
        <div class="stats-title">${langText('أكبر شبكة', 'Réseau principal')}</div>
        <div class="stats-item">
          <span class="stats-label">${stats.topNetwork}</span>
          <span class="stats-value" style="color: ${reseauColors[stats.topNetwork] || '#666'}">${stats.topNetworkCount}</span>
        </div>
      </div>
    `;
  }

  if (stats.categories.length > 0) {
    html += `
      <div class="stats-section">
        <div class="stats-title">${langText('التصنيفات', 'Catégories')}</div>
        <ul class="stat-list">
          ${stats.categories.slice(0, 5).map(c => `
            <li>${escapeHtml(c.name)}<span class="count">${c.count}</span></li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  panel.innerHTML = html;
}

function generateStatistics() {
  const stats = {
    totalInstitutions: allInstitutions.length,
    totalNetworks: new Set(allInstitutions.map(i => getResValue(i, ['reseau', 'abr_reseau']))).size,
    totalRegions: new Set(allInstitutions.map(i => i.region)).size,
    categories: []
  };

  const catCount = {};
  const reseauCount = {};

  allInstitutions.forEach(item => {
    const cat = getResValue(item, ['categorie', 'abr_categorie']) || 'Unknown';
    const res = getResValue(item, ['reseau', 'abr_reseau']) || 'Unknown';
    catCount[cat] = (catCount[cat] || 0) + 1;
    reseauCount[res] = (reseauCount[res] || 0) + 1;
  });

  const topReseau = Object.entries(reseauCount).sort((a, b) => b[1] - a[1])[0];
  if (topReseau) {
    stats.topNetwork = topReseau[0];
    stats.topNetworkCount = topReseau[1];
  }

  stats.categories = Object.entries(catCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return stats;
}

/* ============ PIVOT TABLE ============ */
function buildPivotData(list) {
  const categories = new Set();
  const reseaux = new Set();
  const agg = new Map();

  list.forEach(item => {
    const region = item.region || 'غير محدد';
    const province = getResValue(item, ['province', 'province_name']) || '—';
    const commune = getResValue(item, ['commune', 'cs']) || '—';
    const categorie = getResValue(item, ['categorie', 'abr_categorie']) || 'غير معرف';
    const reseau = getResValue(item, ['reseau', 'abr_reseau']) || 'غير معروف';

    categories.add(categorie);
    reseaux.add(reseau);

    if (!agg.has(region)) agg.set(region, new Map());
    const provMap = agg.get(region);
    if (!provMap.has(province)) provMap.set(province, new Map());
    const commMap = provMap.get(province);
    if (!commMap.has(commune)) {
      commMap.set(commune, { 
        total: 0, 
        byCategory: new Map(), 
        byReseau: new Map(), 
        byCategoryReseau: new Map() 
      });
    }

    const cell = commMap.get(commune);
    cell.total += 1;
    cell.byCategory.set(categorie, (cell.byCategory.get(categorie) || 0) + 1);
    cell.byReseau.set(reseau, (cell.byReseau.get(reseau) || 0) + 1);

    let catResMap = cell.byCategoryReseau.get(categorie);
    if (!catResMap) {
      catResMap = new Map();
      cell.byCategoryReseau.set(categorie, catResMap);
    }
    catResMap.set(reseau, (catResMap.get(reseau) || 0) + 1);
  });

  return { agg, categories: Array.from(categories).sort(), reseaux: Array.from(reseaux).sort() };
}

function buildCategoryFilterHtml(categories, selectedSet) {
  let html = '';
  html += '<div class="pivot-actions">';
  html += `<div class="category-filter category-filter-dropdown" data-total-cats="${categories.length}">`;
  html += '<div class="dropdown-toggle" role="button" aria-haspopup="listbox" aria-expanded="false">';
  html += `<strong>${langText('فلترة حسب تصنيف', 'Filtrer par catégorie')}</strong> <span class="drop-count">(${selectedSet.size}/${categories.length})</span>`;
  html += '</div><div class="dropdown-panel" role="listbox">';
  html += `<input class="cat-search" placeholder="${langText('البحث...', 'Rechercher...')}" aria-label="${langText('البحث في التصنيفات', 'Rechercher dans les catégories')}">`;
  html += `<div class="cat-actions"><button type="button" id="cat-select-all">${langText('الكل', 'Tout')}</button><button type="button" id="cat-clear">${langText('بدون', 'Vider')}</button></div>`;
  html += '<div class="cat-items">';

  categories.forEach(c => {
    const checked = selectedSet.has(c) ? 'checked' : '';
    html += `<label class="cat-item"><input type="checkbox" value="${escapeHtml(c)}" ${checked}> <span class="cat-name">${escapeHtml(c)}</span></label>`;
  });

  html += '</div></div></div></div>';
  return html;
}

function normalizePivotView(view) {
  if (view === PIVOT_VIEW.PROVINCE || view === PIVOT_VIEW.COMMUNE || view === PIVOT_VIEW.POPULATION_2024) return view;
  return PIVOT_VIEW.HEALTH;
}

function updatePivotPanelTitle() {
  const titleEl = document.getElementById('pivotPanelTitle');
  if (titleEl) titleEl.textContent = getPivotViewTitle(currentPivotView);
}

function setPivotViewButtonsState() {
  const healthBtn = document.getElementById('togglePivotBtn');
  const provinceBtn = document.getElementById('togglePivotProvinceBtn');
  const communeBtn = document.getElementById('togglePivotCommuneBtn');
  const populationBtn = document.getElementById('togglePivotPopulationBtn');

  healthBtn?.classList.toggle('active', currentPivotView === PIVOT_VIEW.HEALTH);
  provinceBtn?.classList.toggle('active', currentPivotView === PIVOT_VIEW.PROVINCE);
  communeBtn?.classList.toggle('active', currentPivotView === PIVOT_VIEW.COMMUNE);
  populationBtn?.classList.toggle('active', currentPivotView === PIVOT_VIEW.POPULATION_2024);
}

function getNumericPropertyValue(props = {}, keys = []) {
  for (const key of keys) {
    if (!Object.prototype.hasOwnProperty.call(props, key)) continue;
    const rawValue = props[key];
    if (typeof rawValue === 'undefined' || rawValue === null || rawValue === '') continue;
    const parsedValue = parseNumericValue(rawValue);
    if (Number.isFinite(parsedValue)) return parsedValue;
  }
  return 0;
}

function buildPopulationCensusPivotRows() {
  if (!communesLayer?.eachLayer) return [];

  const rows = [];
  communesLayer.eachLayer((layer) => {
    const props = layer?.feature?.properties || {};
    const province = getCommuneProvinceName(props) || '—';
    const region = getLayerRegionName(props, province) || t('unknown');
    const commune = getLayerCommuneName(props) || '—';

    const matchesRegion = !currentRegionFilter || normalizeRegionName(region) === currentRegionFilter;
    const matchesProvince = !currentProvinceFilter || normalizeProvinceName(province) === currentProvinceFilter;
    const matchesCommune = !currentCommuneFilter
      || toCommuneLookupKey(commune) === toCommuneLookupKey(currentCommuneFilter);
    if (!matchesRegion || !matchesProvince || !matchesCommune) return;

    const moroccans = getNumericPropertyValue(props, ['Marocains_', 'Marocains', 'moroccans']);
    const foreigners = getNumericPropertyValue(props, ['Etrangers_', 'Etrangers', 'foreigners']);
    const households = getNumericPropertyValue(props, ['Menages_', 'Menages', 'households']);
    const totalPopulationRaw = getNumericPropertyValue(props, ['Populati_1', 'population', 'Population', 'POPULATION']);
    const totalPopulation = Number.isFinite(totalPopulationRaw) && totalPopulationRaw > 0
      ? totalPopulationRaw
      : (moroccans + foreigners);

    if (!showZeroRows && totalPopulation <= 0) return;

    rows.push({
      region,
      province,
      commune,
      communeProps: props,
      moroccans,
      foreigners,
      households,
      totalPopulation
    });
  });

  rows.sort((a, b) => (
    compareLocalizedRegionValues(a.region, b.region)
    || compareLocalizedProvinceValues(a.province, b.province)
    || compareLocalizedCommuneValues(a.commune, b.commune)
  ));

  return rows;
}

function applyRgphDynamicColumnLayout(container = document.getElementById('pivotContent')) {
  const tableWrap = container?.querySelector('.pivot-table-wrap.commune-stats-wrap');
  const table = tableWrap?.querySelector('.pivot-table-rgph');
  if (!table || !tableWrap) return;

  const availableWidth = Math.max(0, Math.floor(tableWrap.clientWidth) - 2);
  if (!availableWidth) return;

  const ratios = isFrenchLanguage()
    ? [0.15, 0.18, 0.21, 0.09, 0.09, 0.14, 0.14]
    : [0.15, 0.17, 0.22, 0.09, 0.09, 0.14, 0.14];
  const minWidths = [110, 120, 130, 70, 70, 90, 95];

  const widths = ratios.map((ratio) => Math.floor(availableWidth * ratio));
  for (let index = 0; index < widths.length; index += 1) {
    if (widths[index] < minWidths[index]) widths[index] = minWidths[index];
  }

  let totalWidth = widths.reduce((sum, value) => sum + value, 0);
  let overflow = totalWidth - availableWidth;

  if (overflow > 0) {
    const reducible = widths.map((value, index) => Math.max(0, value - minWidths[index]));
    const reducibleTotal = reducible.reduce((sum, value) => sum + value, 0);

    if (reducibleTotal > 0) {
      for (let index = 0; index < widths.length; index += 1) {
        if (reducible[index] <= 0) continue;
        const shrink = Math.min(reducible[index], Math.round((overflow * reducible[index]) / reducibleTotal));
        widths[index] -= shrink;
      }

      totalWidth = widths.reduce((sum, value) => sum + value, 0);
      overflow = totalWidth - availableWidth;

      if (overflow > 0) {
        const shrinkOrder = [2, 1, 0, 5, 6, 3, 4];
        for (const targetIndex of shrinkOrder) {
          while (overflow > 0 && widths[targetIndex] > minWidths[targetIndex]) {
            widths[targetIndex] -= 1;
            overflow -= 1;
          }
          if (overflow <= 0) break;
        }
      }
    }
  }

  const stillOverflow = widths.reduce((sum, value) => sum + value, 0) > availableWidth;
  table.classList.toggle('rgph-compact', stillOverflow);

  table.style.setProperty('--rgph-col-region', `${widths[0]}px`);
  table.style.setProperty('--rgph-col-province', `${widths[1]}px`);
  table.style.setProperty('--rgph-col-commune', `${widths[2]}px`);
  table.style.setProperty('--rgph-col-moroccans', `${widths[3]}px`);
  table.style.setProperty('--rgph-col-foreigners', `${widths[4]}px`);
  table.style.setProperty('--rgph-col-households', `${widths[5]}px`);
  table.style.setProperty('--rgph-col-total', `${widths[6]}px`);
}

function renderPopulationCensusStatsTable() {
  const container = document.getElementById('pivotContent');
  if (!container) return;

  const rows = buildPopulationCensusPivotRows();
  const grouped = new Map();

  rows.forEach((row) => {
    if (!grouped.has(row.region)) grouped.set(row.region, new Map());
    const byProvince = grouped.get(row.region);
    if (!byProvince.has(row.province)) byProvince.set(row.province, []);
    byProvince.get(row.province).push(row);
  });

  let html = '';
  html += '<div class="pivot-table-wrap commune-stats-wrap"><table class="pivot-table pivot-table-commune pivot-table-rgph">';
  html += '<colgroup>';
  html += '<col class="rgph-col-region">';
  html += '<col class="rgph-col-province">';
  html += '<col class="rgph-col-commune">';
  html += '<col class="rgph-col-moroccans">';
  html += '<col class="rgph-col-foreigners">';
  html += '<col class="rgph-col-households">';
  html += '<col class="rgph-col-total">';
  html += '</colgroup>';
  html += '<thead><tr>';
  html += `<th>${escapeHtml(langText('الجهة', 'Région'))}</th>`;
  html += `<th>${escapeHtml(langText('الإقليم/العمالة', 'Province/Préfecture'))}</th>`;
  html += `<th>${escapeHtml(langText('الجماعة', 'Commune'))}</th>`;
  html += `<th>${escapeHtml(langText('المغاربة', 'Marocains'))}</th>`;
  html += `<th>${escapeHtml(langText('الأجانب', 'Étrangers'))}</th>`;
  html += `<th>${escapeHtml(langText('الأسر', 'Ménages'))}</th>`;
  html += `<th>${escapeHtml(langText('إجمالي السكان', 'Population totale'))}</th>`;
  html += '</tr></thead><tbody>';

  grouped.forEach((provinceMap, regionKey) => {
    let regionMoroccans = 0;
    let regionForeigners = 0;
    let regionHouseholds = 0;
    let regionPopulation = 0;

    provinceMap.forEach((provinceRows, provinceKey) => {
      let provinceMoroccans = 0;
      let provinceForeigners = 0;
      let provinceHouseholds = 0;
      let provincePopulation = 0;

      provinceRows.forEach((row) => {
        const regionLabel = getLocalizedRegionDisplayName(row.region);
        const provinceLabel = getLocalizedProvinceDisplayName(row.province);
        const communeLabel = getLocalizedCommuneDisplayName(row.commune, row.communeProps);

        html += `<tr><td>${escapeHtml(regionLabel)}</td><td>${escapeHtml(provinceLabel)}</td><td class="comm">${escapeHtml(communeLabel)}</td><td class="num">${escapeHtml(formatIntegerForUi(row.moroccans))}</td><td class="num">${escapeHtml(formatIntegerForUi(row.foreigners))}</td><td class="num">${escapeHtml(formatIntegerForUi(row.households))}</td><td class="num">${escapeHtml(formatIntegerForUi(row.totalPopulation))}</td></tr>`;

        provinceMoroccans += Number(row.moroccans) || 0;
        provinceForeigners += Number(row.foreigners) || 0;
        provinceHouseholds += Number(row.households) || 0;
        provincePopulation += Number(row.totalPopulation) || 0;
      });

      const provinceLabel = getLocalizedProvinceDisplayName(provinceKey);
      html += `<tr class="subtotal"><td colspan="3" class="subtotal-label"><strong>${escapeHtml(langText('مجموع', 'Total'))} ${escapeHtml(provinceLabel)}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(provinceMoroccans))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(provinceForeigners))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(provinceHouseholds))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(provincePopulation))}</strong></td></tr>`;

      regionMoroccans += provinceMoroccans;
      regionForeigners += provinceForeigners;
      regionHouseholds += provinceHouseholds;
      regionPopulation += provincePopulation;
    });

    const regionLabel = getLocalizedRegionDisplayName(regionKey);
    html += `<tr class="region-subtotal"><td colspan="3" class="subtotal-label"><strong>${escapeHtml(langText('مجموع', 'Total'))} ${escapeHtml(regionLabel)}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(regionMoroccans))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(regionForeigners))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(regionHouseholds))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(regionPopulation))}</strong></td></tr>`;
  });

  html += '</tbody><tfoot>';
  html += `<tr><td colspan="3" class="subtotal-label"><strong>${escapeHtml(langText('مجموع المغرب', 'Total Maroc'))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(RGPH2024_OFFICIAL_NATIONAL_BREAKDOWN.moroccans))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(RGPH2024_OFFICIAL_NATIONAL_BREAKDOWN.foreigners))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(RGPH2024_OFFICIAL_NATIONAL_BREAKDOWN.households))}</strong></td><td class="num"><strong>${escapeHtml(formatIntegerForUi(RGPH2024_OFFICIAL_NATIONAL_POPULATION))}</strong></td></tr>`;
  html += '</tfoot>';
  html += '</table></div>';

  container.innerHTML = html;
  requestAnimationFrame(() => applyRgphDynamicColumnLayout(container));
}

function getSelectedPivotCategoriesFromUi(categories = []) {
  const container = document.getElementById('pivotContent');
  const dropdown = container?.querySelector('.category-filter-dropdown');
  if (!dropdown) return new Set(categories);

  const items = Array.from(dropdown.querySelectorAll('.cat-item input[type=checkbox]'));
  if (!items.length) return new Set(categories);
  return new Set(items.filter(i => i.checked).map(i => i.value));
}

function getExcelSelectedValueFieldLabel(level) {
  const targetLevel = level === 'province' ? 'province' : 'commune';
  const selectedKey = excelSelectedValueFieldByLevel[targetLevel] || 'value';
  const options = excelValueFieldOptionsByLevel[targetLevel] || [];
  const found = options.find((opt) => opt.key === selectedKey);
  return normalizeTextValue(found?.label || selectedKey || 'value');
}

function normalizeExcelColoringTargetLevel(level) {
  return level === 'commune' ? 'commune' : 'province';
}

function getExcelColoringTargetLevel() {
  return normalizeExcelColoringTargetLevel(excelColoringTargetLevel);
}

function getExcelFilledFieldOptions(level) {
  const targetLevel = level === 'province' ? 'province' : 'commune';
  const activeTheme = getActiveExcelTheme();
  if (!activeTheme) return [];

  const options = excelValueFieldOptionsByLevel[targetLevel] || [];
  const valuesByField = activeTheme.valuesByField?.[targetLevel];
  if (!(valuesByField instanceof Map)) return [];

  return options.filter((option) => {
    const fieldMap = valuesByField.get(option.key);
    if (!(fieldMap instanceof Map) || !fieldMap.size) return false;
    return Array.from(fieldMap.values()).some((value) => normalizeTextValue(value) !== '');
  });
}

function formatPivotValue(value) {
  if (typeof value === 'undefined' || value === null || value === '') return '—';
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return String(value);
}

function trimTrailingZeros(value) {
  const text = String(value);
  if (!text.includes('.')) return text;
  return text.replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1');
}

function formatPercentageWithMaxTwoDecimals(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return String(value);
  return trimTrailingZeros(numeric.toFixed(2));
}

function isPercentageFieldLabel(label = '') {
  const text = normalizeTextValue(label).toLowerCase();
  if (!text) return false;
  return text.includes('%')
    || text.includes('pourcentage')
    || text.includes('pourcent')
    || text.includes('percent')
    || text.includes('pct')
    || text.includes('taux')
    || text.includes('ratio')
    || text.includes('نسبة');
}

function formatFieldValueForDisplay(value, fieldLabel = '') {
  if (typeof value === 'undefined' || value === null || value === '') return '—';

  if (isExplicitPercentageValue(value)) {
    const numeric = parseNumericValue(value);
    if (Number.isFinite(numeric)) {
      return `${formatPercentageWithMaxTwoDecimals(numeric)}%`;
    }
    return normalizeTextValue(value);
  }

  if (isPercentageFieldLabel(fieldLabel)) {
    const numeric = parseNumericValue(value);
    if (Number.isFinite(numeric)) {
      const absValue = Math.abs(numeric);
      const shouldScaleAsRatio = absValue <= 1 || (absValue > 1 && absValue < 10 && !Number.isInteger(numeric));
      const percentage = shouldScaleAsRatio ? (numeric * 100) : numeric;
      return `${formatPercentageWithMaxTwoDecimals(percentage)}%`;
    }
  }

  return formatPivotValue(value);
}

function inferPercentageFieldKeys(rows = [], fieldOptions = []) {
  const percentageKeys = new Set();

  fieldOptions.forEach((fieldOption) => {
    if (isPercentageFieldLabel(fieldOption.label)) {
      percentageKeys.add(fieldOption.key);
      return;
    }

    const columnValues = rows
      .map((row) => row?.values?.[fieldOption.key])
      .filter((value) => !(typeof value === 'undefined' || value === null || value === ''));

    if (!columnValues.length) return;

    const hasExplicitPercent = columnValues.some((value) => isExplicitPercentageValue(value));
    if (hasExplicitPercent) {
      percentageKeys.add(fieldOption.key);
      return;
    }

    const numericValues = columnValues
      .map((value) => parseNumericValue(value))
      .filter((value) => Number.isFinite(value));

    if (!numericValues.length) return;

    const allInUnitRange = numericValues.every((value) => value >= 0 && value <= 1);
    if (allInUnitRange) {
      percentageKeys.add(fieldOption.key);
    }
  });

  return percentageKeys;
}

function shouldIncludeExcelValue(value) {
  const hasValue = !(typeof value === 'undefined' || value === null || value === '');
  return hasValue || showZeroRows;
}

function buildExcelPivotRows(level, fieldOptions = []) {
  const activeTheme = getActiveExcelTheme();
  if (!activeTheme) return [];

  const hasGeoFilters = !!(currentRegionFilter || currentProvinceFilter || currentCommuneFilter);
  const allowedProvincesFromFilters = hasGeoFilters
    ? new Set(getFilteredInstitutions().map(getInstitutionProvince).filter(Boolean))
    : null;

  if (level === 'province') {
    if (!provincesLayer?.eachLayer) return [];
    const rows = [];
    provincesLayer.eachLayer((layer) => {
      const props = layer?.feature?.properties || {};
      const province = getLayerProvinceName(props) || '—';
      const normalizedProvince = normalizeProvinceName(province);
      const region = getLayerRegionName(props, province) || t('unknown');
      const matchesRegion = !currentRegionFilter || normalizeRegionName(region) === currentRegionFilter;
      const matchesProvince = !currentProvinceFilter || normalizedProvince === currentProvinceFilter;
      const matchesCommune = !currentCommuneFilter
        || (allowedProvincesFromFilters instanceof Set && allowedProvincesFromFilters.has(normalizedProvince));
      if (!matchesRegion || !matchesProvince || !matchesCommune) return;
      const values = {};
      let hasAnyValue = false;

      fieldOptions.forEach((fieldOption) => {
        const fieldValue = getThemeValueForFeatureField(activeTheme, 'province', fieldOption.key, props).value;
        values[fieldOption.key] = fieldValue;
        if (!(typeof fieldValue === 'undefined' || fieldValue === null || fieldValue === '')) {
          hasAnyValue = true;
        }
      });

      if (!showZeroRows && !hasAnyValue) return;
      rows.push({ region, province, commune: '', values });
    });

    rows.sort((a, b) => (
      compareLocalizedRegionValues(a.region, b.region)
      || compareLocalizedProvinceValues(a.province, b.province)
    ));
    return rows;
  }

  if (!communesLayer?.eachLayer) return [];
  const rows = [];
  communesLayer.eachLayer((layer) => {
    const props = layer?.feature?.properties || {};
    const province = getCommuneProvinceName(props) || '—';
    const region = getLayerRegionName(props, province) || t('unknown');
    const commune = getLayerCommuneName(props) || '—';
    const matchesRegion = !currentRegionFilter || normalizeRegionName(region) === currentRegionFilter;
    const matchesProvince = !currentProvinceFilter || normalizeProvinceName(province) === currentProvinceFilter;
    const matchesCommune = !currentCommuneFilter
      || toCommuneLookupKey(commune) === toCommuneLookupKey(currentCommuneFilter);
    if (!matchesRegion || !matchesProvince || !matchesCommune) return;
    const values = {};
    let hasAnyValue = false;

    fieldOptions.forEach((fieldOption) => {
      const fieldValue = getThemeValueForFeatureField(activeTheme, 'commune', fieldOption.key, props).value;
      values[fieldOption.key] = fieldValue;
      if (!(typeof fieldValue === 'undefined' || fieldValue === null || fieldValue === '')) {
        hasAnyValue = true;
      }
    });

    if (!showZeroRows && !hasAnyValue) return;
    rows.push({ region, province, commune, communeProps: props, values });
  });

  rows.sort((a, b) => (
    compareLocalizedRegionValues(a.region, b.region)
    || compareLocalizedProvinceValues(a.province, b.province)
    || compareLocalizedCommuneValues(a.commune, b.commune)
  ));
  return rows;
}

function openPivotPanel() {
  const container = document.getElementById('app-container');
  if (!container) return;
  container.classList.add('with-pivot');
  container.classList.remove('map-only');
  document.getElementById('pivotPanel')?.setAttribute('aria-hidden', 'false');
  setTimeout(() => map?.invalidateSize?.(), 300);
}

function closePivotPanel() {
  const container = document.getElementById('app-container');
  if (!container) return;
  container.classList.remove('with-pivot');
  container.classList.add('map-only');
  document.getElementById('pivotPanel')?.setAttribute('aria-hidden', 'true');
  setTimeout(() => map?.invalidateSize?.(), 300);
  syncAppStateToUrl();
}

function renderProvinceStatsTable(agg, categories, reseaux, selectedCategories) {
  const container = document.getElementById('pivotContent');
  if (!container) return;

  const fieldOptions = getExcelFilledFieldOptions('province');
  const rows = buildExcelPivotRows('province', fieldOptions);
  const percentageFieldKeys = inferPercentageFieldKeys(rows, fieldOptions);
  const emptyMessage = langText('لا توجد أعمدة قيم ممتلئة في ورقة provinces_db', 'Aucune colonne de valeurs remplie dans la feuille provinces_db');

  if (!fieldOptions.length) {
    container.innerHTML = `<div class="pivot-empty">${escapeHtml(emptyMessage)}</div>`;
    return;
  }

  const sortedRows = sortPivotRows(rows, PIVOT_VIEW.PROVINCE);

  let html = '';
  html += '<div class="pivot-table-wrap"><table class="pivot-table">';
  html += '<thead><tr>';
  html += buildPivotSortableHeader(langText('الجهة', 'Région'), 'region', PIVOT_VIEW.PROVINCE);
  html += buildPivotSortableHeader(langText('الإقليم', 'Province'), 'province', PIVOT_VIEW.PROVINCE);
  fieldOptions.forEach((fieldOption) => {
    html += buildPivotSortableHeader(fieldOption.label, `field:${fieldOption.key}`, PIVOT_VIEW.PROVINCE);
  });
  html += '</tr></thead><tbody>';

  sortedRows.forEach((row) => {
    const regionLabel = getLocalizedRegionDisplayName(row.region);
    const provinceLabel = getLocalizedProvinceDisplayName(row.province);
    html += `<tr><td>${escapeHtml(regionLabel)}</td><td>${escapeHtml(provinceLabel)}</td>`;
    fieldOptions.forEach((fieldOption) => {
      const value = row.values[fieldOption.key];
      const numericClass = typeof value === 'number' && Number.isFinite(value) ? 'num' : '';
      const percentLabel = percentageFieldKeys.has(fieldOption.key) ? `${fieldOption.label}%` : fieldOption.label;
      html += `<td class="${numericClass}">${escapeHtml(formatFieldValueForDisplay(value, percentLabel))}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody>';
  html += '</table></div>';

  container.innerHTML = html;
  attachPivotSortEventListeners(container);
}

function renderCommuneStatsTable(agg, categories, reseaux, selectedCategories) {
  const container = document.getElementById('pivotContent');
  if (!container) return;

  const fieldOptions = getExcelFilledFieldOptions('commune');
  const rows = buildExcelPivotRows('commune', fieldOptions);
  const percentageFieldKeys = inferPercentageFieldKeys(rows, fieldOptions);
  const emptyMessage = langText('لا توجد أعمدة قيم ممتلئة في ورقة communes_db', 'Aucune colonne de valeurs remplie dans la feuille communes_db');

  if (!fieldOptions.length) {
    container.innerHTML = `<div class="pivot-empty">${escapeHtml(emptyMessage)}</div>`;
    return;
  }

  const sortedRows = sortPivotRows(rows, PIVOT_VIEW.COMMUNE);

  let html = '';
  html += '<div class="pivot-table-wrap commune-stats-wrap"><table class="pivot-table pivot-table-commune">';
  html += '<thead><tr>';
  html += buildPivotSortableHeader(langText('الجهة', 'Région'), 'region', PIVOT_VIEW.COMMUNE);
  html += buildPivotSortableHeader(langText('الإقليم', 'Province'), 'province', PIVOT_VIEW.COMMUNE);
  html += buildPivotSortableHeader(langText('الجماعة', 'Commune'), 'commune', PIVOT_VIEW.COMMUNE);
  fieldOptions.forEach((fieldOption) => {
    html += buildPivotSortableHeader(fieldOption.label, `field:${fieldOption.key}`, PIVOT_VIEW.COMMUNE);
  });
  html += '</tr></thead><tbody>';

  sortedRows.forEach((row) => {
    const regionLabel = getLocalizedRegionDisplayName(row.region);
    const provinceLabel = getLocalizedProvinceDisplayName(row.province);
    const communeLabel = getLocalizedCommuneDisplayName(row.commune, row.communeProps);
    html += `<tr><td>${escapeHtml(regionLabel)}</td><td>${escapeHtml(provinceLabel)}</td><td class="comm">${escapeHtml(communeLabel)}</td>`;
    fieldOptions.forEach((fieldOption) => {
      const value = row.values[fieldOption.key];
      const numericClass = typeof value === 'number' && Number.isFinite(value) ? 'num' : '';
      const percentLabel = percentageFieldKeys.has(fieldOption.key) ? `${fieldOption.label}%` : fieldOption.label;
      html += `<td class="${numericClass}">${escapeHtml(formatFieldValueForDisplay(value, percentLabel))}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody>';
  html += '</table></div>';

  container.innerHTML = html;
  attachPivotSortEventListeners(container);
}

function renderCurrentPivotView(selectedCategories) {
  if (!lastPivotData) return;
  const { agg, categories, reseaux } = lastPivotData;

  updatePivotPanelTitle();
  setPivotViewButtonsState();

  if (currentPivotView === PIVOT_VIEW.PROVINCE) {
    renderProvinceStatsTable(agg, categories, reseaux, selectedCategories);
    return;
  }
  if (currentPivotView === PIVOT_VIEW.COMMUNE) {
    renderCommuneStatsTable(agg, categories, reseaux, selectedCategories);
    return;
  }
  if (currentPivotView === PIVOT_VIEW.POPULATION_2024) {
    renderPopulationCensusStatsTable();
    return;
  }

  renderPivotTable(agg, categories, reseaux, selectedCategories);
}

function togglePivotPanelByView(view) {
  currentPivotView = normalizePivotView(view);
  const container = document.getElementById('app-container');
  const isOpen = container?.classList.contains('with-pivot');
  const sameView = container?.dataset?.pivotView === currentPivotView;

  if (isOpen && sameView) {
    closePivotPanel();
    return;
  }

  if (container) container.dataset.pivotView = currentPivotView;
  renderCurrentPivotView(getSelectedPivotCategoriesFromUi(lastPivotData?.categories || []));
  openPivotPanel();
  syncAppStateToUrl();
}

function getPivotSortState(view = currentPivotView) {
  return pivotSortStateByView[view] || { key: 'region', direction: 'asc' };
}

function setPivotSortState(view, key) {
  const current = getPivotSortState(view);
  const direction = current.key === key
    ? (current.direction === 'asc' ? 'desc' : 'asc')
    : 'asc';
  pivotSortStateByView[view] = { key, direction };
}

function comparePivotLooseValues(left, right) {
  const leftNum = parseNumericValue(left);
  const rightNum = parseNumericValue(right);

  if (Number.isFinite(leftNum) && Number.isFinite(rightNum)) {
    return leftNum - rightNum;
  }

  const leftText = normalizeTextValue(left);
  const rightText = normalizeTextValue(right);
  const locale = isFrenchLanguage() ? 'fr' : 'ar';
  return leftText.localeCompare(rightText, locale, { sensitivity: 'base', numeric: true });
}

function getPivotRowSortValue(row, sortKey, view) {
  if (!row) return '';
  if (sortKey === 'region') return getLocalizedRegionDisplayName(row.region);
  if (sortKey === 'province') return getLocalizedProvinceDisplayName(row.province);
  if (sortKey === 'commune') return getLocalizedCommuneDisplayName(row.commune, row.communeProps);
  if (sortKey === 'total') return Number(row.total) || 0;
  if (sortKey === 'moroccans') return Number(row.moroccans) || 0;
  if (sortKey === 'foreigners') return Number(row.foreigners) || 0;
  if (sortKey === 'households') return Number(row.households) || 0;
  if (sortKey === 'populationTotal') return Number(row.totalPopulation) || 0;
  if (sortKey.startsWith('field:')) {
    const fieldKey = sortKey.slice('field:'.length);
    return row?.values?.[fieldKey] ?? '';
  }

  if (view === PIVOT_VIEW.HEALTH) return Number(row.total) || 0;
  return '';
}

function sortPivotRows(rows, view) {
  const safeRows = Array.isArray(rows) ? [...rows] : [];
  const sortState = getPivotSortState(view);
  const sortMultiplier = sortState.direction === 'desc' ? -1 : 1;

  safeRows.sort((a, b) => {
    const primary = comparePivotLooseValues(
      getPivotRowSortValue(a, sortState.key, view),
      getPivotRowSortValue(b, sortState.key, view)
    );
    if (primary !== 0) return primary * sortMultiplier;

    const byRegion = compareLocalizedRegionValues(a.region, b.region);
    if (byRegion !== 0) return byRegion;
    const byProvince = compareLocalizedProvinceValues(a.province, b.province);
    if (byProvince !== 0) return byProvince;
    const byCommune = compareLocalizedCommuneValues(a.commune || '', b.commune || '');
    if (byCommune !== 0) return byCommune;
    return (Number(a.total) || 0) - (Number(b.total) || 0);
  });

  return safeRows;
}

function buildPivotSortableHeader(label, sortKey, view) {
  const safeLabel = escapeHtml(label);
  const sortState = getPivotSortState(view);
  const isActive = sortState.key === sortKey;
  const ariaSort = isActive
    ? (sortState.direction === 'asc' ? 'ascending' : 'descending')
    : 'none';
  const arrow = !isActive ? '↕' : (sortState.direction === 'asc' ? '▲' : '▼');
  const activeClass = isActive ? ' is-sorted' : '';

  return `<th class="pivot-sortable${activeClass}" data-sort-key="${escapeHtml(sortKey)}" data-sort-view="${escapeHtml(view)}" aria-sort="${ariaSort}" role="button" tabindex="0">${safeLabel}<span class="sort-indicator" aria-hidden="true">${arrow}</span></th>`;
}

function attachPivotSortEventListeners(container) {
  const sortableHeaders = Array.from(container.querySelectorAll('th.pivot-sortable[data-sort-key][data-sort-view]'));
  if (!sortableHeaders.length) return;

  const triggerSort = (header) => {
    const sortKey = header.dataset.sortKey;
    const sortView = normalizePivotView(header.dataset.sortView);
    if (!sortKey || !sortView) return;
    setPivotSortState(sortView, sortKey);
    renderCurrentPivotView(getSelectedPivotCategoriesFromUi(lastPivotData?.categories || []));
  };

  sortableHeaders.forEach((header) => {
    header.addEventListener('click', () => triggerSort(header));
    header.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        triggerSort(header);
      }
    });
  });
}

function renderPivotTable(agg, categories, reseaux, selectedCategories) {
  const container = document.getElementById('pivotContent');
  if (!container) return;

  const selectedSet = (typeof selectedCategories === 'undefined' || selectedCategories === null) 
    ? new Set(categories) 
    : selectedCategories;

  const tableRows = [];
  agg.forEach((provMap, region) => {
    provMap.forEach((commMap, prov) => {
      commMap.forEach((cell, comm) => {
        const totalForComm = selectedSet.size === categories.length
          ? cell.total
          : Array.from(selectedSet).reduce((sum, cat) => sum + (cell.byCategory.get(cat) || 0), 0);

        if (!showZeroRows && totalForComm === 0) return;
        tableRows.push({ region, province: prov, commune: comm, total: totalForComm });
      });
    });
  });

  const sortedRows = sortPivotRows(tableRows, PIVOT_VIEW.HEALTH);

  let html = buildCategoryFilterHtml(categories, selectedSet);
  html += '<div class="pivot-table-wrap"><table class="pivot-table">';
  html += '<thead><tr>';
  html += buildPivotSortableHeader(langText('الجهة', 'Région'), 'region', PIVOT_VIEW.HEALTH);
  html += buildPivotSortableHeader(langText('الإقليم', 'Province'), 'province', PIVOT_VIEW.HEALTH);
  html += buildPivotSortableHeader(langText('الجماعة', 'Commune'), 'commune', PIVOT_VIEW.HEALTH);
  html += buildPivotSortableHeader(langText('المجموع', 'Total'), 'total', PIVOT_VIEW.HEALTH);
  html += '</tr></thead>';
  html += '<tbody>';

  let grandTotal = 0;
  sortedRows.forEach((row) => {
    const regionLabel = getLocalizedRegionDisplayName(row.region);
    const provinceLabel = getLocalizedProvinceDisplayName(row.province);
    const communeLabel = getLocalizedCommuneDisplayName(row.commune);
    html += `<tr><td>${escapeHtml(regionLabel)}</td><td>${escapeHtml(provinceLabel)}</td><td class="comm">${escapeHtml(communeLabel)}</td><td class="num">${row.total}</td></tr>`;
    grandTotal += row.total;
  });

  html += '</tbody>';
  html += `<tfoot><tr><td colspan="3"><strong>${escapeHtml(langText('المجموع', 'Total'))}</strong></td><td class="num"><strong>${grandTotal}</strong></td></tr></tfoot>`;
  html += '</table></div>';

  container.innerHTML = html;
  attachPivotEventListeners(container, agg, categories, reseaux);
}

function attachPivotEventListeners(container, agg, categories, reseaux) {
  attachPivotSortEventListeners(container);

  const dropdown = container.querySelector('.category-filter-dropdown');
  if (!dropdown) return;

  const toggle = dropdown.querySelector('.dropdown-toggle');
  const panel = dropdown.querySelector('.dropdown-panel');
  const search = dropdown.querySelector('.cat-search');
  const items = Array.from(dropdown.querySelectorAll('.cat-item input[type=checkbox]'));
  const countEl = dropdown.querySelector('.drop-count');

  function updateCount() {
    const selCount = items.filter(i => i.checked).length;
    if (countEl) countEl.textContent = `(${selCount}/${categories.length})`;
  }

  toggle.addEventListener('click', () => {
    panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', panel.classList.contains('open'));
  });

  items.forEach(cb => cb.addEventListener('change', () => {
    updateCount();
    const vals = items.filter(i => i.checked).map(i => i.value);
    renderCurrentPivotView(new Set(vals));
  }));

  if (search) {
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      dropdown.querySelectorAll('.cat-item').forEach(el => {
        el.style.display = el.querySelector('.cat-name').textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }

  const btnAll = dropdown.querySelector('#cat-select-all');
  const btnClear = dropdown.querySelector('#cat-clear');
  if (btnAll) btnAll.addEventListener('click', () => {
    items.forEach(i => i.checked = true);
    updateCount();
    renderCurrentPivotView(new Set(categories));
  });
  if (btnClear) btnClear.addEventListener('click', () => {
    items.forEach(i => i.checked = false);
    updateCount();
    renderCurrentPivotView(new Set());
  });
}

function createPivot(list) {
  const { agg, categories, reseaux } = buildPivotData(list);
  lastPivotData = { agg, categories, reseaux };
  renderCurrentPivotView();
}

/* ============ EXPORT FUNCTIONS ============ */
function buildExportRows() {
  if (!lastPivotData) return [];
  const { agg, categories } = lastPivotData;
  const selectedSet = getSelectedPivotCategoriesFromUi(categories);

  const rows = [];

  if (currentPivotView === PIVOT_VIEW.PROVINCE) {
    const fieldOptions = getExcelFilledFieldOptions('province');
    const rowsData = buildExcelPivotRows('province', fieldOptions);
    const percentageFieldKeys = inferPercentageFieldKeys(rowsData, fieldOptions);
    rowsData.forEach((row) => {
      const exportRow = {
        'Région': row.region,
        'Province': row.province,
        'Commune': ''
      };
      fieldOptions.forEach((fieldOption) => {
        const percentLabel = percentageFieldKeys.has(fieldOption.key) ? `${fieldOption.label}%` : fieldOption.label;
        exportRow[fieldOption.label] = formatFieldValueForDisplay(row.values[fieldOption.key], percentLabel);
      });
      rows.push(exportRow);
    });
    return rows;
  }

  if (currentPivotView === PIVOT_VIEW.COMMUNE) {
    const fieldOptions = getExcelFilledFieldOptions('commune');
    const rowsData = buildExcelPivotRows('commune', fieldOptions);
    const percentageFieldKeys = inferPercentageFieldKeys(rowsData, fieldOptions);
    rowsData.forEach((row) => {
      const exportRow = {
        'Région': row.region,
        'Province': row.province,
        'Commune': row.commune
      };
      fieldOptions.forEach((fieldOption) => {
        const percentLabel = percentageFieldKeys.has(fieldOption.key) ? `${fieldOption.label}%` : fieldOption.label;
        exportRow[fieldOption.label] = formatFieldValueForDisplay(row.values[fieldOption.key], percentLabel);
      });
      rows.push(exportRow);
    });
    return rows;
  }

  if (currentPivotView === PIVOT_VIEW.POPULATION_2024) {
    const rowsData = buildPopulationCensusPivotRows();
    const grouped = new Map();

    rowsData.forEach((row) => {
      if (!grouped.has(row.region)) grouped.set(row.region, new Map());
      const byProvince = grouped.get(row.region);
      if (!byProvince.has(row.province)) byProvince.set(row.province, []);
      byProvince.get(row.province).push(row);
    });

    grouped.forEach((provinceMap, regionKey) => {
      let regionMoroccans = 0;
      let regionForeigners = 0;
      let regionHouseholds = 0;
      let regionPopulation = 0;

      provinceMap.forEach((provinceRows, provinceKey) => {
        let provinceMoroccans = 0;
        let provinceForeigners = 0;
        let provinceHouseholds = 0;
        let provincePopulation = 0;

        provinceRows.forEach((row) => {
          rows.push({
            'Région': row.region,
            'Province': row.province,
            'Commune': row.commune,
            'Marocains': Math.round(Number(row.moroccans) || 0),
            'Étrangers': Math.round(Number(row.foreigners) || 0),
            'Ménages': Math.round(Number(row.households) || 0),
            'Population totale': Math.round(Number(row.totalPopulation) || 0)
          });

          provinceMoroccans += Number(row.moroccans) || 0;
          provinceForeigners += Number(row.foreigners) || 0;
          provinceHouseholds += Number(row.households) || 0;
          provincePopulation += Number(row.totalPopulation) || 0;
        });

        rows.push({
          'Région': '',
          'Province': `${langText('مجموع', 'Total')} ${provinceKey}`,
          'Commune': '',
          'Marocains': Math.round(provinceMoroccans),
          'Étrangers': Math.round(provinceForeigners),
          'Ménages': Math.round(provinceHouseholds),
          'Population totale': Math.round(provincePopulation)
        });

        regionMoroccans += provinceMoroccans;
        regionForeigners += provinceForeigners;
        regionHouseholds += provinceHouseholds;
        regionPopulation += provincePopulation;
      });

      rows.push({
        'Région': `${langText('مجموع', 'Total')} ${regionKey}`,
        'Province': '',
        'Commune': '',
        'Marocains': Math.round(regionMoroccans),
        'Étrangers': Math.round(regionForeigners),
        'Ménages': Math.round(regionHouseholds),
        'Population totale': Math.round(regionPopulation)
      });
    });

    rows.push({
      'Région': langText('مجموع المغرب', 'Total Maroc'),
      'Province': '',
      'Commune': '',
      'Marocains': Math.round(Number(RGPH2024_OFFICIAL_NATIONAL_BREAKDOWN.moroccans) || 0),
      'Étrangers': Math.round(Number(RGPH2024_OFFICIAL_NATIONAL_BREAKDOWN.foreigners) || 0),
      'Ménages': Math.round(Number(RGPH2024_OFFICIAL_NATIONAL_BREAKDOWN.households) || 0),
      'Population totale': Math.round(Number(RGPH2024_OFFICIAL_NATIONAL_POPULATION) || 0)
    });

    return rows;
  }

  agg.forEach((provMap, region) => {
    provMap.forEach((commMap, province) => {
      commMap.forEach((cell, commune) => {
        let totalToShow = selectedSet.size === categories.length 
          ? cell.total 
          : Array.from(selectedSet).reduce((sum, cat) => sum + (cell.byCategory.get(cat) || 0), 0);
        rows.push({ 'Région': region, 'Province': province, 'Commune': commune, 'Total': totalToShow });
      });
    });
  });
  return rows;
}

function exportToXLSX() {
  if (typeof XLSX === 'undefined') {
    showToast(langText('مكتبة XLSX غير محملة', 'La bibliothèque XLSX n’est pas chargée'), 'error');
    return;
  }

  const rows = buildExportRows();
  if (!rows.length) {
    showToast(langText('لا توجد بيانات للتصدير', 'Aucune donnée à exporter'), 'error');
    return;
  }

  const isHealthView = currentPivotView === PIVOT_VIEW.HEALTH;
  const baseHeaders = ['Région', 'Province', 'Commune'];
  const dynamicHeaders = Object.keys(rows[0] || {}).filter((key) => !baseHeaders.includes(key));
  const headers = [...baseHeaders, ...dynamicHeaders];

  const formattedRows = rows.map((row) => {
    const out = {};
    headers.forEach((header) => {
      out[header] = row[header] ?? '';
    });
    return out;
  });

  if (isHealthView && dynamicHeaders.length) {
    const totalHeader = dynamicHeaders[0];
    const totalSum = rows.reduce((sum, row) => sum + (Number(row[totalHeader]) || 0), 0);
    formattedRows.push({ 'Région': '', 'Province': '', 'Commune': langText('المجموع', 'Total'), [totalHeader]: totalSum });
  }

  const ws = XLSX.utils.json_to_sheet(formattedRows, { header: headers });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Pivot');
  
  const fname = `pivot_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, fname);
  showToast(langText('تم التصدير بنجاح', 'Export effectué avec succès'), 'success');
}

function exportToCSV() {
  const rows = buildExportRows();
  if (!rows.length) {
    showToast(langText('لا توجد بيانات للتصدير', 'Aucune donnée à exporter'), 'error');
    return;
  }

  const baseHeaders = ['Région', 'Province', 'Commune'];
  const dynamicHeaders = Object.keys(rows[0] || {}).filter((key) => !baseHeaders.includes(key));
  const headers = [...baseHeaders, ...dynamicHeaders];

  const csv = [headers.join(',')];
  rows.forEach(r => {
    const line = headers.map((header) => `"${String(r[header] ?? '').replace(/"/g, '""')}"`).join(',');
    csv.push(line);
  });

  const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pivot_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(langText('تم التصدير بنجاح', 'Export effectué avec succès'), 'success');
}

function printTable() {
  const content = document.getElementById('pivotContent').innerHTML;
  const printWindow = window.open('', '_blank');
  const printTitle = langText('طباعة الجدول', 'Impression du tableau');
  const tableTitle = langText('جدول البيانات', 'Tableau des données');
  const printDir = isFrenchLanguage() ? 'ltr' : 'rtl';
  const textAlign = isFrenchLanguage() ? 'left' : 'right';
  printWindow.document.write(`
    <!DOCTYPE html>
    <html dir="${printDir}">
    <head>
      <meta charset="utf-8">
      <title>${printTitle}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: ${textAlign}; }
        th { background: #f5f5f5; font-weight: bold; }
        @media print { body { margin: 0; } }
      </style>
    </head>
    <body>
      <h2>${tableTitle}</h2>
      ${content}
      <script>window.print(); window.close();</script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

function drawRoundedRect(ctx, x, y, w, h, r = 12) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function getExportMapFilterSummary() {
  const parts = [];
  if (currentRegionFilter) {
    parts.push(`${langText('الجهة', 'Région')} : ${toArabicRegionName(currentRegionFilter)}`);
  }
  if (currentProvinceFilter) {
    parts.push(`${langText('الإقليم', 'Province')} : ${toArabicProvinceName(currentProvinceFilter)}`);
  }
  if (currentCommuneFilter) {
    parts.push(`${langText('الجماعة', 'Commune')} : ${toArabicCommuneName(currentCommuneFilter)}`);
  }
  if (!parts.length) {
    return langText('خريطة المغرب', 'Carte du Maroc');
  }
  return parts.join(' • ');
}

function getExportLegendValues() {
  const targetLevel = getExcelColoringTargetLevel();
  const activeTheme = getActiveExcelTheme();
  if (!activeTheme) return null;

  const symbology = getUiSymbologyForLevel(targetLevel);
  const values = Array.from(activeTheme.values?.[targetLevel]?.values?.() || [])
    .map((value) => parseNumericValue(value))
    .filter((value) => Number.isFinite(value));

  if (!values.length) return null;

  const minValue = Number.isFinite(parseNumericValue(symbology.minValue)) ? parseNumericValue(symbology.minValue) : Math.min(...values);
  const maxValue = Number.isFinite(parseNumericValue(symbology.maxValue)) ? parseNumericValue(symbology.maxValue) : Math.max(...values);
  const midValue = Number.isFinite(parseNumericValue(symbology.midValue)) ? parseNumericValue(symbology.midValue) : (minValue + maxValue) / 2;

  return {
    min: minValue,
    mid: midValue,
    max: maxValue,
    fieldLabel: getExcelSelectedValueFieldLabel(targetLevel),
    minColor: normalizeHexColor(symbology.minColor, targetLevel === 'province' ? '#dbeafe' : '#dcfce7'),
    midColor: normalizeHexColor(symbology.midColor, targetLevel === 'province' ? '#60a5fa' : '#4ade80'),
    maxColor: normalizeHexColor(symbology.maxColor, targetLevel === 'province' ? '#1d4ed8' : '#15803d')
  };
}

async function loadExportLogoImage() {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = 'logo-GST.png';
  });
}

function drawMapExportOverlay(ctx, mapW, mapH, mapRef, logoImage = null) {
  const legendData = getExportLegendValues();
  const isDark = isDarkTheme();
  const panelX = 18;
  const panelY = Math.max(12, mapH - 132);
  const panelW = Math.min(260, Math.max(220, mapW * 0.22));
  const panelH = legendData ? 116 : 90;

  if (logoImage) {
    const targetW = Math.min(120, mapW * 0.11);
    const targetH = (logoImage.height / logoImage.width) * targetW;
    const x = mapW - targetW - 22;
    const y = 20;
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.drawImage(logoImage, x, y, targetW, targetH);
    ctx.restore();
  }

  ctx.save();
  ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.72)' : 'rgba(255,255,255,0.86)';
  drawRoundedRect(ctx, panelX, panelY, panelW, panelH, 12);
  ctx.fill();
  ctx.strokeStyle = isDark ? 'rgba(148,163,184,0.32)' : 'rgba(15,23,42,0.12)';
  ctx.lineWidth = 1;
  ctx.stroke();

  const title = legendData?.fieldLabel
    ? `${langText('المؤشر', 'Indicateur')} : ${legendData.fieldLabel}`
    : langText('المؤشر', 'Indicateur');
  ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
  ctx.font = '700 12px Arial';
  ctx.textAlign = 'right';
  ctx.direction = 'rtl';
  ctx.fillText(title, panelX + panelW - 12, panelY + 18);

  const filterText = getExportMapFilterSummary();
  ctx.font = '600 9px Arial';
  ctx.fillStyle = isDark ? '#cbd5e1' : '#334155';
  ctx.textAlign = 'right';
  ctx.fillText(filterText, panelX + panelW - 12, panelY + 34, panelW - 24);

  const bounds = mapRef.getBounds();
  const centerLat = (bounds.getNorth() + bounds.getSouth()) / 2;
  const widthKm = mapRef.distance([centerLat, bounds.getWest()], [centerLat, bounds.getEast()]) / 1000;
  const physicalCm = (mapW / 96) * 2.54;
  const kmPerCm = physicalCm > 0 ? (widthKm / physicalCm) : 0;
  const scaleText = `1 cm = ${Number.isFinite(kmPerCm) && kmPerCm > 0 ? kmPerCm.toFixed(1) : '—'} km`;

  if (legendData) {
    const gX = panelX + 12;
    const gY = panelY + 44;
    const gW = panelW - 24;
    const barHeight = 10;
    const gradient = ctx.createLinearGradient(gX, gY, gX + gW, gY);
    gradient.addColorStop(0, legendData.minColor);
    gradient.addColorStop(0.5, legendData.midColor);
    gradient.addColorStop(1, legendData.maxColor);
    ctx.fillStyle = gradient;
    drawRoundedRect(ctx, gX, gY, gW, barHeight, 5);
    ctx.fill();

    ctx.fillStyle = isDark ? '#e2e8f0' : '#0f172a';
    ctx.font = '600 8px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(langText('أدنى', 'Min'), gX, gY - 7);
    ctx.textAlign = 'center';
    ctx.fillText(langText('متوسط', 'Moyenne'), gX + gW / 2, gY - 7);
    ctx.textAlign = 'right';
    ctx.fillText(langText('أعلى', 'Max'), gX + gW, gY - 7);

    const valueStyle = { min: legendData.min, mid: legendData.mid, max: legendData.max };
    const labels = [
      formatFieldValueForDisplay(valueStyle.min, legendData.fieldLabel || langText('المؤشر', 'Indicateur')),
      formatFieldValueForDisplay(valueStyle.mid, legendData.fieldLabel || langText('المؤشر', 'Indicateur')),
      formatFieldValueForDisplay(valueStyle.max, legendData.fieldLabel || langText('المؤشر', 'Indicateur'))
    ];

    const labelY = gY + 22;
    ctx.font = '700 8px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(labels[0], gX, labelY);
    ctx.textAlign = 'center';
    ctx.fillText(labels[1], gX + gW / 2, labelY);
    ctx.textAlign = 'right';
    ctx.fillText(labels[2], gX + gW, labelY);
  }

  ctx.fillStyle = isDark ? '#cbd5e1' : '#334155';
  ctx.font = '600 9px Arial';
  ctx.textAlign = 'right';
  ctx.fillText(langText('المقياس', 'Échelle'), panelX + panelW - 12, panelY + 86);
  ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
  ctx.fillText(scaleText, panelX + panelW - 12, panelY + 98);

  ctx.restore();

  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.font = '600 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Direction des soins de santé primaires, prévention et promotion de la santé 2026', mapW / 2, mapH - 14);
}

async function exportMapAsPNG() {
  const mapEl = document.getElementById('map');
  if (!mapEl) {
    showToast(langText('عنصر الخريطة غير موجود', 'Element introuvable'), 'error');
    return;
  }

  /* -------------------------------------------------------
     Draw the map directly onto an offscreen canvas.
     We do NOT use html2canvas at all  it can't handle
     Leaflet tile transforms reliably.
     Instead we:
       1. Collect every <img class="leaflet-tile"> that is loaded.
       2. Use getBoundingClientRect() to find its screen position
          relative to the map container (no transform parsing needed).
       3. Draw SVG overlays (GeoJSON) via the existing <canvas> or
          <svg> elements inside the map.
       4. Draw circle markers from the Leaflet canvas pane.
  ------------------------------------------------------- */

  const overlay = document.getElementById('loadingOverlay');
  const prevOverlay = overlay?.style?.display ?? '';
  const hiddenRestore = [];

  const hideEl = (el) => {
    hiddenRestore.push({ el, vis: el.style.visibility });
    el.style.visibility = 'hidden';
  };
  const restoreHidden = () => {
    hiddenRestore.forEach(({ el, vis }) => { el.style.visibility = vis; });
    hiddenRestore.length = 0;
  };

  try {
    if (overlay) overlay.style.display = 'none';

    /* Wait for any pending tile loads */
    await new Promise((r) => setTimeout(r, 200));

    const mapRect  = mapEl.getBoundingClientRect();
    const mapW     = Math.round(mapRect.width)  || mapEl.clientWidth  || 800;
    const mapH     = Math.round(mapRect.height) || mapEl.clientHeight || 600;
    const scale    = 2;

    const offscreen = document.createElement('canvas');
    offscreen.width  = mapW * scale;
    offscreen.height = mapH * scale;
    const ctx = offscreen.getContext('2d');
    ctx.scale(scale, scale);

    /* --- 1. Background fill --- */
    ctx.fillStyle = '#e8e0d8';
    ctx.fillRect(0, 0, mapW, mapH);

    /* --- 2. Raster tile layers --- */
    const drawImage = (img, dx, dy, dw, dh) => {
      try { ctx.drawImage(img, dx, dy, dw, dh); } catch (_) {}
    };

    const tiles = Array.from(mapEl.querySelectorAll('img.leaflet-tile'))
      .filter((img) => img.complete && img.naturalWidth > 0 && img.style.display !== 'none');

    for (const tile of tiles) {
      const r  = tile.getBoundingClientRect();
      const dx = r.left - mapRect.left;
      const dy = r.top  - mapRect.top;
      const dw = r.width;
      const dh = r.height;
      drawImage(tile, dx, dy, dw, dh);
    }

    /* --- 3. SVG overlay layers (GeoJSON polygons) --- */
    /* Use Leaflet's own coordinate system to compute the correct viewBox.
       map.containerPointToLayerPoint([0,0]) gives the top-left of the
       visible area in SVG/layer-point coordinates, which is exactly the
       viewBox origin we need. */
    const mapSize   = map.getSize();           // {x: px, y: px} of container
    const topLeft   = map.containerPointToLayerPoint(L.point(0, 0));
    const svgVbX    = topLeft.x;
    const svgVbY    = topLeft.y;
    const svgVbW    = mapSize.x;
    const svgVbH    = mapSize.y;

    const seenSvg = new Set();
    const svgEls  = Array.from(mapEl.querySelectorAll('.leaflet-overlay-pane svg'));
    for (const svg of svgEls) {
      if (seenSvg.has(svg)) continue;
      seenSvg.add(svg);
      if (!svg.hasChildNodes()) continue;

      const clone = svg.cloneNode(true);
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      clone.setAttribute('viewBox', `${svgVbX} ${svgVbY} ${svgVbW} ${svgVbH}`);
      clone.setAttribute('width',  mapW);
      clone.setAttribute('height', mapH);
      clone.style.transform = 'none';

      const svgStr  = new XMLSerializer().serializeToString(clone);
      const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl  = URL.createObjectURL(svgBlob);

      await new Promise((resolve) => {
        const img = new Image();
        img.onload  = () => { drawImage(img, 0, 0, mapW, mapH); URL.revokeObjectURL(svgUrl); resolve(); };
        img.onerror = () => { URL.revokeObjectURL(svgUrl); resolve(); };
        img.src = svgUrl;
      });
    }

    /* --- 4. Leaflet canvas pane (circle markers) --- */
    const canvasEls = Array.from(mapEl.querySelectorAll('.leaflet-canvas-pane canvas, canvas.leaflet-zoom-animated'));
    for (const c of canvasEls) {
      const r  = c.getBoundingClientRect();
      const dx = r.left - mapRect.left;
      const dy = r.top  - mapRect.top;
      const dw = r.width;
      const dh = r.height;
      if (dw < 1 || dh < 1) continue;
      try { ctx.drawImage(c, dx, dy, dw, dh); } catch (_) {}
    }

    /* --- 5. Marker icons (img icons) --- */
    const markerImgs = Array.from(mapEl.querySelectorAll('.leaflet-marker-pane img.leaflet-marker-icon'));
    for (const img of markerImgs) {
      if (!img.complete || !img.naturalWidth) continue;
      const r  = img.getBoundingClientRect();
      const dx = r.left - mapRect.left;
      const dy = r.top  - mapRect.top;
      drawImage(img, dx, dy, r.width, r.height);
    }

    /* --- 6. Province & commune text labels (divIcon HTML elements) --- */
    /* Ensure Arabic font is loaded before drawing */
    try { await document.fonts.load('bold 14px Tajawal'); await document.fonts.load('12px Tajawal'); } catch (_) {}

    const labelSelectors = [
      '.leaflet-marker-pane .province-label',
      '.leaflet-marker-pane .commune-label',
      '.leaflet-marker-pane .province-value-label',
      '.leaflet-marker-pane .commune-value-label'
    ];
    const labelEls = Array.from(mapEl.querySelectorAll(labelSelectors.join(',')));
    for (const wrapper of labelEls) {
      const inner = wrapper.querySelector('.area-label') || wrapper;
      const text  = inner.textContent?.trim();
      if (!text) continue;

      /* Position: center of the wrapper div */
      const wr = wrapper.getBoundingClientRect();
      if (wr.width < 1 && wr.height < 1) continue;
      const cx = wr.left - mapRect.left + wr.width  / 2;
      const cy = wr.top  - mapRect.top  + wr.height / 2;

      /* Styles */
      const cs       = window.getComputedStyle(inner);
      const fontSize = parseFloat(cs.fontSize) || 11;
      const color    = cs.color || '#333';
      const isProvince = wrapper.classList.contains('province-label') || wrapper.classList.contains('province-value-label');
      const mapThemeIsDark = isDarkTheme();
      const adaptiveTextColor = mapThemeIsDark ? '#f8fafc' : '#0f172a';
      const adaptiveOutlineColor = mapThemeIsDark ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.86)';

      /* Rotation from inline style (transform: rotate(Xdeg)) */
      const transformStr = inner.style.transform || cs.transform || '';
      let rotateDeg = 0;
      const rotMatch = transformStr.match(/rotate\(\s*(-?[\d.]+)deg\s*\)/i);
      if (rotMatch) rotateDeg = parseFloat(rotMatch[1]);

      ctx.save();
      ctx.translate(cx, cy);
      if (rotateDeg) ctx.rotate(rotateDeg * Math.PI / 180);

      ctx.font        = `${isProvince ? 'bold ' : ''}${fontSize}px 'Tajawal', Arial, sans-serif`;
      ctx.fillStyle   = color || adaptiveTextColor;
      ctx.textAlign   = 'center';
      ctx.textBaseline = 'middle';
      ctx.direction   = 'rtl';

      /* Adapt contour to the map background for readable export labels */
      ctx.strokeStyle = adaptiveOutlineColor;
      ctx.lineWidth   = isProvince ? 4.2 : 3.1;
      ctx.lineJoin    = 'round';

      /* Multi-line support: split on newlines or word-wrap */
      const lines = text.split(/\n/).flatMap((line) => {
        const words = line.split(/\s+/);
        const max   = isProvince ? 14 : 10;
        const result = [];
        let cur = '';
        for (const w of words) {
          if ((cur + ' ' + w).trim().length > max && cur) {
            result.push(cur.trim());
            cur = w;
          } else {
            cur = cur ? cur + ' ' + w : w;
          }
        }
        if (cur) result.push(cur.trim());
        return result;
      });

      const lineH = fontSize * 1.35;
      const startY = -((lines.length - 1) * lineH) / 2;
      lines.forEach((line, i) => {
        const y = startY + i * lineH;
        ctx.strokeText(line, 0, y);
        ctx.fillText(line, 0, y);
      });

      ctx.restore();
    }
    const clusterEls = Array.from(mapEl.querySelectorAll('.marker-cluster'));
    for (const cl of clusterEls) {
      const r  = cl.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) continue;
      const cx = r.left - mapRect.left + r.width  / 2;
      const cy = r.top  - mapRect.top  + r.height / 2;

      /* Outer ring */
      const outerR = r.width / 2;
      const cs = window.getComputedStyle(cl);
      const outerColor = cs.backgroundColor || 'rgba(241,211,87,0.6)';
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
      ctx.fillStyle = outerColor.replace(/[\d.]+\)$/, '0.5)');
      ctx.fill();

      /* Inner circle */
      const innerDiv = cl.querySelector('div');
      const innerR   = outerR * 0.65;
      const innerCs  = innerDiv ? window.getComputedStyle(innerDiv) : cs;
      ctx.beginPath();
      ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
      ctx.fillStyle = innerCs.backgroundColor || 'rgba(241,211,87,0.9)';
      ctx.fill();

      /* Count text */
      const span = cl.querySelector('span');
      const label = span ? span.textContent.trim() : '';
      if (label) {
        const fontSize = Math.max(10, Math.round(innerR * 0.85));
        ctx.font        = `bold ${fontSize}px sans-serif`;
        ctx.fillStyle   = '#333';
        ctx.textAlign   = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, cx, cy);
      }
    }

    /* --- 7. Individual circleMarkers (SVG path elements in overlay pane) --- */
    /* Already captured in step 3 via SVG serialization.
       If markersRawGroup is used (no clustering), they appear in overlay SVG. */
    const rawMarkerSvgs = Array.from(mapEl.querySelectorAll('.leaflet-overlay-pane svg circle, .leaflet-overlay-pane svg path[d]'));
    /* These are already inside the SVG captured in step 3, nothing extra needed. */

    const exportLogoImage = await loadExportLogoImage();
    drawMapExportOverlay(ctx, mapW, mapH, map, exportLogoImage);

    /* --- Download --- */
    const now      = new Date();
    const datePart = now.toISOString().slice(0, 10);
    const timePart = `${String(now.getHours()).padStart(2,'0')}-${String(now.getMinutes()).padStart(2,'0')}`;
    const filename = `map_${datePart}_${timePart}.png`;

    offscreen.toBlob((blob) => {
      if (!blob) {
        showToast(langText('فشل إنشاء الصورة', 'Echec de creation de l\'image'), 'error');
        return;
      }
      const url  = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href     = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      showToast(langText('تم حفظ صورة الخريطة PNG', 'Carte exportee en PNG'), 'success');
    }, 'image/png');

  } catch (err) {
    console.error('exportMapAsPNG error:', err);
    showToast(langText('تعذر حفظ الصورة', 'Impossible d\'exporter la carte'), 'error');
  } finally {
    restoreHidden();
    if (overlay) overlay.style.display = prevOverlay;
  }
}

function initLanding() {
  const startBtn = document.getElementById('startMapBtn');
  const startWithTableBtn = document.getElementById('startWithTableBtn');
  const startWithSearchBtn = document.getElementById('startWithSearchBtn');

  const closeLanding = ({ openTable = false, focusSearch = false } = {}) => {
    document.body.classList.remove('landing-open');
    document.body.classList.add('landing-closed');

    setTimeout(() => {
      map?.invalidateSize();

      if (openTable) {
        const container = document.getElementById('app-container');
        if (container && !container.classList.contains('with-pivot')) {
          document.getElementById('togglePivotBtn')?.click();
        }
      }

      if (focusSearch) {
        const searchInput = document.getElementById('searchInput');
        searchInput?.focus();
        searchInput?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }, 350);
  };

  startBtn?.addEventListener('click', () => closeLanding());
  startWithTableBtn?.addEventListener('click', () => closeLanding({ openTable: true }));
  startWithSearchBtn?.addEventListener('click', () => closeLanding({ focusSearch: true }));

  document.addEventListener('keydown', (e) => {
    if (!document.body.classList.contains('landing-open')) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      closeLanding();
    }
  });
}

/* ============ UI EVENT HANDLERS ============ */
function initUI() {
  applyLanguageToStaticUi();
  initLanding();
  setRouteModeButtonState();
  updatePivotPanelTitle();
  setPivotViewButtonsState();

  const helpModal = document.getElementById('helpModal');
  const helpBtn = document.getElementById('helpBtn');
  const modalClose = helpModal?.querySelector('.modal-close');

  helpBtn?.addEventListener('click', () => {
    helpModal.style.display = 'flex';
  });

  modalClose?.addEventListener('click', () => {
    helpModal.style.display = 'none';
  });

  helpModal?.addEventListener('click', (e) => {
    if (e.target === helpModal) helpModal.style.display = 'none';
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
      if (e.key === 't') { e.preventDefault(); document.getElementById('togglePivotBtn').click(); }
      if (e.key === 's') { e.preventDefault(); document.getElementById('toggleStatsBtn')?.click(); }
      if (e.key === 'e') { e.preventDefault(); exportToXLSX(); }
      if (e.key === 'p') { e.preventDefault(); printTable(); }
    }
  });

  // Share button
  document.getElementById('shareBtn')?.addEventListener('click', () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: 'خريطة المؤسسات', url });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast(t('copyLinkSuccess'), 'success');
    }
  });

  // Capture map as PNG
  document.getElementById('captureMapBtn')?.addEventListener('click', exportMapAsPNG);

  // Route mode toggle
  document.getElementById('routeModeBtn')?.addEventListener('click', toggleRouteMode);

  // ---- Pivot / Table buttons ----
  document.getElementById('togglePivotBtn')?.addEventListener('click', () => togglePivotPanelByView(PIVOT_VIEW.HEALTH));
  document.getElementById('togglePivotProvinceBtn')?.addEventListener('click', () => togglePivotPanelByView(PIVOT_VIEW.PROVINCE));
  document.getElementById('togglePivotCommuneBtn')?.addEventListener('click', () => togglePivotPanelByView(PIVOT_VIEW.COMMUNE));
  document.getElementById('togglePivotPopulationBtn')?.addEventListener('click', () => togglePivotPanelByView(PIVOT_VIEW.POPULATION_2024));

  document.getElementById('closePivot')?.addEventListener('click', closePivotPanel);
  document.getElementById('downloadCsvBtn')?.addEventListener('click', exportToCSV);
  document.getElementById('exportExcelBtn')?.addEventListener('click', exportToXLSX);
  document.getElementById('printTableBtn')?.addEventListener('click', printTable);
  document.getElementById('toggleZerosBtn')?.addEventListener('click', () => {
    showZeroRows = !showZeroRows;
    const btn = document.getElementById('toggleZerosBtn');
    if (btn) btn.textContent = showZeroRows
      ? (isFrenchLanguage() ? '0️⃣ Masquer zéros' : '0️⃣ إخفاء أصفار')
      : (isFrenchLanguage() ? '0️⃣ Afficher zéros' : '0️⃣ عرض أصفار');
    if (lastPivotData) createPivot(lastPivotData);
    syncAppStateToUrl();
  });

  // Language toggle
  document.getElementById('languageToggleBtn')?.addEventListener('click', () => {
    toggleAppLanguage();
  });

  // Theme toggle
  document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
    toggleAppTheme();
  });

  window.addEventListener('resize', () => {
    if (currentPivotView === PIVOT_VIEW.POPULATION_2024) {
      applyRgphDynamicColumnLayout(document.getElementById('pivotContent'));
    }
  });
}

/* ============ INITIALIZATION ============ */
async function initApp() {
  const initialUrlState = readAppStateFromUrl();
  applyInitialPreferencesFromUrl(initialUrlState);
  suppressUrlStateSync = true;
  initializeTheme();
  showLoadingOverlay(true);
  setLoadingStatus(langText('بدء التحميل...', 'Démarrage du chargement...'), 5);

  try {
    setLoadingStatus(langText('تهيئة الخريطة والواجهة...', 'Initialisation de la carte et de l’interface...'), 15);
    initMap();
    initSearch();
    initUI();

    setLoadingStatus(langText('تحميل معجم الجماعات...', 'Chargement du mapping des communes...'), 35);
    await loadCommuneArabicMapping();
    setLoadingStatus(langText('اكتمل تحميل معجم الجماعات', 'Mapping des communes chargé'), 50);

    // Load data in parallel
    let doneSteps = 0;
    const markStep = (stageAr, stageFr) => {
      doneSteps += 1;
      const pct = 50 + Math.round((doneSteps / 3) * 45);
      setLoadingStatus(langText(stageAr, stageFr), pct);
    };

    setLoadingStatus(langText('تحميل ملفات البيانات...', 'Chargement des fichiers de données...'), 55);
    await Promise.all([
      loadGeoJSONData('province.geojson', provincesLayer).then(() => markStep('تم تحميل الأقاليم', 'Provinces chargées')),
      loadGeoJSONData('communes.geojson', communesLayer).then(() => markStep('تم تحميل الجماعات', 'Communes chargées')),
      loadInstitutionsData().then(() => markStep('تم تحميل المؤسسات', 'Établissements chargés'))
    ]);

    setLoadingStatus(langText('اكتمل التحميل', 'Chargement terminé'), 100);
    applyRuntimeStateFromUrl(initialUrlState);
    suppressUrlStateSync = false;
    syncAppStateToUrl();

    hideLoadingOverlay();
    showToast(t('appLoaded'), 'success');
  } catch (error) {
    suppressUrlStateSync = false;
    hideLoadingOverlay();
    showToast(t('appLoadError'), 'error');
    console.error(error);
  }
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
