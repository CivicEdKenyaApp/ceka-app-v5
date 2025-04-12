
import { Language } from '@/contexts/LanguageContext';

export const translations: Record<string, Record<Language, string>> = {
  // General
  'Loading...': { en: 'Loading...', sw: 'Inapakia...' },
  'Search...': { en: 'Search...', sw: 'Tafuta...' },
  'Learn More': { en: 'Learn More', sw: 'Jifunze Zaidi' },
  'View All': { en: 'View All', sw: 'Tazama Zote' },
  'Download': { en: 'Download', sw: 'Pakua' },
  'Submit': { en: 'Submit', sw: 'Wasilisha' },
  'Cancel': { en: 'Cancel', sw: 'Ghairi' },
  'Save': { en: 'Save', sw: 'Hifadhi' },
  'Delete': { en: 'Delete', sw: 'Futa' },
  'Edit': { en: 'Edit', sw: 'Hariri' },
  'Close': { en: 'Close', sw: 'Funga' },
  'Back': { en: 'Back', sw: 'Rudi' },
  'Next': { en: 'Next', sw: 'Endelea' },
  'Previous': { en: 'Previous', sw: 'Iliyotangulia' },
  'Yes': { en: 'Yes', sw: 'Ndio' },
  'No': { en: 'No', sw: 'La' },
  'Success': { en: 'Success', sw: 'Imefaulu' },
  'Error': { en: 'Error', sw: 'Hitilafu' },
  'Warning': { en: 'Warning', sw: 'Onyo' },
  'Info': { en: 'Info', sw: 'Habari' },
  
  // Navigation
  'Home': { en: 'Home', sw: 'Nyumbani' },
  'Resources': { en: 'Resources', sw: 'Rasilimali' },
  'Community': { en: 'Community', sw: 'Jamii' },
  'Notifications': { en: 'Notifications', sw: 'Arifa' },
  'Profile': { en: 'Profile', sw: 'Wasifu' },
  'Legislative Tracker': { en: 'Legislative Tracker', sw: 'Kifuatiliaji cha Sheria' },
  'Resource Hub': { en: 'Resource Hub', sw: 'Kituo cha Rasilimali' },
  'Volunteer': { en: 'Volunteer', sw: 'Kujitolea' },
  'Browse all resources': { en: 'Browse all resources', sw: 'Vinjari rasilimali zote' },
  'Change Language': { en: 'Change Language', sw: 'Badilisha Lugha' },
  'Upload Resource': { en: 'Upload Resource', sw: 'Pakia Rasilimali' },
  'English': { en: 'English', sw: 'Kiingereza' },
  'Swahili': { en: 'Swahili', sw: 'Kiswahili' },
  'Languages': { en: 'Languages', sw: 'Lugha' },
  
  // Auth
  'Sign In': { en: 'Sign In', sw: 'Ingia' },
  'Sign Up': { en: 'Sign Up', sw: 'Jisajili' },
  'Sign Out': { en: 'Sign Out', sw: 'Toka' },
  'Email': { en: 'Email', sw: 'Barua pepe' },
  'Password': { en: 'Password', sw: 'Nenosiri' },
  'Confirm Password': { en: 'Confirm Password', sw: 'Thibitisha Nenosiri' },
  'Forgot Password?': { en: 'Forgot Password?', sw: 'Umesahau Nenosiri?' },
  'Reset Password': { en: 'Reset Password', sw: 'Weka upya Nenosiri' },
  
  // ResourceHighlights component
  'Educational Resources': { en: 'Educational Resources', sw: 'Rasilimali za Elimu' },
  'Understanding the Constitution of Kenya': { 
    en: 'Understanding the Constitution of Kenya', 
    sw: 'Kuelewa Katiba ya Kenya' 
  },
  'A comprehensive guide to the Kenyan Constitution and its key provisions.': { 
    en: 'A comprehensive guide to the Kenyan Constitution and its key provisions.', 
    sw: 'Mwongozo kamili wa Katiba ya Kenya na masharti yake muhimu.' 
  },
  'How Laws Are Made in Kenya': { 
    en: 'How Laws Are Made in Kenya', 
    sw: 'Jinsi Sheria Zinavyoundwa nchini Kenya' 
  },
  'Visual explanation of the legislative process from bill proposal to enactment.': { 
    en: 'Visual explanation of the legislative process from bill proposal to enactment.', 
    sw: 'Maelezo ya kuona ya mchakato wa kutunga sheria kutoka pendekezo la mswada hadi kuundwa.' 
  },
  'Your Rights as a Kenyan Citizen': { 
    en: 'Your Rights as a Kenyan Citizen', 
    sw: 'Haki Zako kama Mwananchi wa Kenya' 
  },
  'Visual representation of fundamental rights guaranteed by the Constitution.': { 
    en: 'Visual representation of fundamental rights guaranteed by the Constitution.', 
    sw: 'Uwakilishi wa kuona wa haki za msingi zinazodhaminiwa na Katiba.' 
  },
  'Learn about governance, civic rights, and public participation': { 
    en: 'Learn about governance, civic rights, and public participation', 
    sw: 'Jifunze kuhusu utawala, haki za kiraia, na ushiriki wa umma' 
  },
  'PDF': { en: 'PDF', sw: 'PDF' },
  'Video': { en: 'Video', sw: 'Video' },
  'Infographic': { en: 'Infographic', sw: 'Infografiki' },
  
  // Legislative Tracker
  'Bills': { en: 'Bills', sw: 'Miswada' },
  'Acts': { en: 'Acts', sw: 'Sheria' },
  'Policies': { en: 'Policies', sw: 'Sera' },
  'Status': { en: 'Status', sw: 'Hali' },
  'Date': { en: 'Date', sw: 'Tarehe' },
  'Category': { en: 'Category', sw: 'Kategoria' },
  'Sponsor': { en: 'Sponsor', sw: 'Mdhamini' },
  'First Reading': { en: 'First Reading', sw: 'Kusomwa kwa Kwanza' },
  'Second Reading': { en: 'Second Reading', sw: 'Kusomwa kwa Pili' },
  'Committee Stage': { en: 'Committee Stage', sw: 'Hatua ya Kamati' },
  'Third Reading': { en: 'Third Reading', sw: 'Kusomwa kwa Tatu' },
  'Presidential Assent': { en: 'Presidential Assent', sw: 'Idhini ya Rais' },
  'Enacted': { en: 'Enacted', sw: 'Imetungwa' },
  
  // Resource Hub
  'All Resources': { en: 'All Resources', sw: 'Rasilimali Zote' },
  'Documents': { en: 'Documents', sw: 'Nyaraka' },
  'Videos': { en: 'Videos', sw: 'Video' },
  'Infographics': { en: 'Infographics', sw: 'Infografiki' },
  'Audio': { en: 'Audio', sw: 'Sauti' },
  'Filter': { en: 'Filter', sw: 'Chuja' },
  'Sort By': { en: 'Sort By', sw: 'Panga Kwa' },
  'Most Recent': { en: 'Most Recent', sw: 'Za Hivi Karibuni' },
  'Most Popular': { en: 'Most Popular', sw: 'Maarufu Zaidi' },
  'Title (A-Z)': { en: 'Title (A-Z)', sw: 'Kichwa (A-Z)' },
  
  // Community Portal
  'Discussions': { en: 'Discussions', sw: 'Majadiliano' },
  'Events': { en: 'Events', sw: 'Matukio' },
  'Campaigns': { en: 'Campaigns', sw: 'Kampeni' },
  'Start a Discussion': { en: 'Start a Discussion', sw: 'Anzisha Majadiliano' },
  'Create Event': { en: 'Create Event', sw: 'Unda Tukio' },
  'Join Campaign': { en: 'Join Campaign', sw: 'Jiunge na Kampeni' },
  
  // Volunteer
  'Opportunities': { en: 'Opportunities', sw: 'Fursa' },
  'Apply': { en: 'Apply', sw: 'Omba' },
  'Location': { en: 'Location', sw: 'Eneo' },
  'Duration': { en: 'Duration', sw: 'Muda' },
  'Skills Required': { en: 'Skills Required', sw: 'Ujuzi Unaohitajika' },
  
  // User Profile
  'Account Settings': { en: 'Account Settings', sw: 'Mipangilio ya Akaunti' },
  'My Contributions': { en: 'My Contributions', sw: 'Michango Yangu' },
  'Saved Resources': { en: 'Saved Resources', sw: 'Rasilimali Zilizohifadhiwa' },
  'Volunteer History': { en: 'Volunteer History', sw: 'Historia ya Kujitolea' },
  'Notifications Settings': { en: 'Notifications Settings', sw: 'Mipangilio ya Arifa' }
};

export const translate = (key: string, language: Language): string => {
  if (!translations[key]) {
    console.warn(`Translation missing for: ${key}`);
    return key;
  }
  return translations[key][language] || key;
};
