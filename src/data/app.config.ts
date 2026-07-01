import shea254Logo from '../assets/images/logos/shea254-logo.jpg';
import simianSafarisLogo from '../assets/images/logos/simian-safaris-logo.svg';
import twangizaMetalsLogo from '../assets/images/logos/twangiza-metals-group-logo.png';
import alsuwaLogo from '../assets/images/logos/alsuwa-logo.svg';

export interface Client {
    id: string;
    name: string;
    image: ImageMetadata;
}

export const AppConfig = {
    brand_name: "Alsuwa",
    brand_tagline: "Business Growth Company",
    address: "Kiambu, Kenya",
    email: "info@alsuwa.com",
    time: "Mon - Fri: 09:00 AM - 05:00 PM",
    phone: "+254 746 055 487",
    instagram: "https://instagram.com/alsuwa",
    linkedin: "https://linkedin.com/alsuwa",
    tiktok: "https://tiktok.com/alsuwa",
    youtube: "https://youtube.com/alsuwa",
    twitter: "https://x.com/alsuwa",

    currentYear: new Date().getFullYear(),

    stats: {
        projects: 30,
        years_of_experience: 4,
        client_satisfaction: '98%',
        client_ROI: '3X',
    },

    clients: [
        {
            name: 'shea254',
            image: shea254Logo,
        },
        {
            name: 'Simian Safaris',
            image: simianSafarisLogo,
        },
        {
            name: 'Twangiza Metals',
            image: twangizaMetalsLogo,
        },
        {
            name: 'Alsuwa',
            image: alsuwaLogo,
        }
    ]
} as const;