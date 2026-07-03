import shea254Logo from '../assets/images/logos/shea254-logo.jpg';
import alsuwaLogo from '../assets/images/logos/alsuwa-logo.svg';
import youTubeLogo from '../assets/images/logos/youtube.svg';
import faceBookLogo from '../assets/images/logos/facebook.svg';
import instagramLogo from '../assets/images/logos/instagram.svg';
import whatsAppLogo from '../assets/images/logos/whatsapp.svg';
import tikTokLogo from '../assets/images/logos/tiktok.svg';

import webDevelopment from '../assets/images/services/web-development.webp';
import customSoftware from '../assets/images/services/custom-software.webp';
import visualDesign from '../assets/images/services/visual-design.webp';
import apiIntegration from '../assets/images/services/api-integration.webp';
import mobileAppDevelopment from '../assets/images/services/mobile-app-development.webp';

import shea254DemoImage from '../assets/images/projects/shea254.webp';

export interface Client {
    id: string;
    name: string;
    image: ImageMetadata;
}

export interface Service {
    id: number;
    label: string;
    name: string;
    slug: string;
    description: string;
    image: ImageMetadata;
    tags: string[];
}

export interface Works {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: ImageMetadata;
    tags: string[];
}

export const AppConfig = {
    brand_name: "Alsuwa",
    brand_tagline: "Business Growth Company",
    address: "Kiambu, Kenya",
    email: "info@alsuwa.com",
    time: "Mon - Fri: 09:00 AM - 05:00 PM",
    phone: "+254 745 744 261",
    whatsappScheduleCall: "https://wa.me/254745744261?text=Hi%20Alsuwa!%20I'd%20like%20to%20schedule%20a%20%20call!",
    instagram: "https://instagram.com/alsuwahq",
    facebook: "https://www.facebook.com/people/Alsuwahq/61591579591758/",
    tiktok: "https://www.tiktok.com/@alsuwahq",
    youtube: "https://youtube.com/@alsuwahq",

    currentYear: new Date().getFullYear(),

    images: {
        services: {
            webDevelopment,
            customSoftware,
            visualDesign,
            apiIntegration,
            mobileAppDevelopment,
        },
        logos: {
            shea254Logo,
            alsuwaLogo,
            youTubeLogo,
            instagramLogo,
            faceBookLogo,
            tikTokLogo,
            whatsAppLogo,
        },
    },

    stats: {
        projects: 30,
        years_of_experience: 4,
        client_satisfaction: '98%',
        client_ROI: '3X',
    },

    services: [
        {
            id: 1,
            label: '01',
            name: 'Web Development',
            slug: 'web-development',
            description: 'Websites should be your conversion engines, not just look good on a portfolio.',
            image: webDevelopment,
            tags: ['Web Development', 'Web Design', 'SEO'],
        },
        {
            id: 2,
            label: '02',
            name: 'Custom Software',
            slug: 'custom-software',
            description: 'Ecommerce, management systems, dashboards and internal tools that hold up under real conditions.',
            image: customSoftware,
            tags: ['Ecommerce', 'Dashboards', 'Management Systems'],
        },
        {
            id: 3,
            label: '03',
            name: 'Visual Design',
            slug: 'visual-design',
            description: 'Beautiful and functional designs that enhance user experience and drive engagement.',
            image: visualDesign,
            tags: ['Brand Identity', 'Brand Strategy', 'Brand Presentation'],
        },
        {
            id: 4,
            label: '04',
            name: 'API Integration',
            slug: 'api-integration',
            description: 'Custom APIs and third-party integrations to make your tools a single  coherent workflow.',
            image: apiIntegration,
            tags: ['Payment Gateways', 'Third-party APIs', 'Custom APIs'],
        },
    ],

    processes: [
        {
            id: 1,
            label: '01',
            name: 'Discovery Call',
            description: "A deep dive focused 15-minute conversation to dive into your goals, users and constraints so we build the right thing, not just anything.",
        },
        {
            id: 2,
            label: '02',
            name: 'Scoped Proposal',
            description: "Clearly written document: deliverables, timeline, pricing — no vague estimates. You know exactly what you're signing before any money moves.",
        },
        {
            id: 3,
            label: '03',
            name: 'Design Sprints',
            description: "Clickable prototypes before building anything. You approve the experience. What you see is what gets built.",
        },
        {
            id: 4,
            label: '04',
            name: 'Agile Build Sprints',
            description: "Weekly demos and transparent progress tracking. No black boxes, no empty promises for six weeks.",
        },
        {
            id: 5,
            label: '05',
            name: 'QA & Launch',
            description: "Tested across devices, browsers, and load scenarios. We release in stages so launch day is quiet — which means everything worked.",
        },
        {
            id: 6,
            label: '06',
            name: 'Growth & Support',
            description: "Post-launch support, monitoring, perfomance tuning and a retainer option for ongoing features. We're not a project shop — we become part of your team.",
        },
    ],

    works: [
        {
            id: 1,
            name: 'Shea254',
            slug: 'shea254',
            description: 'Full e-commerce platform for a natural beauty brand. Built with a product catalogue, cart, and checkout flow - designed to convert  browsing shoppers into customers.',
            image: shea254DemoImage,
            tags: ['Company Website', 'Ecommerce'],
        }
    ],

    clients: [
        {
            name: 'shea254',
            image: shea254Logo,
        },
        {
            name: 'Alsuwa',
            image: alsuwaLogo,
        }
    ]
} as const;