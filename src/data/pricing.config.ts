import { AppConfig } from "./app.config";

export interface PricingFeature {
  text: string;
  included?: boolean;
}

export interface PricingPlan {
  id: number;
  name: string;
  badge?: string; // Optional badge like "Most Popular"
  starting_price: string;
  payment_model: string;
  description: string;
  features: string[];
  action: {
    text: string;
    url: string;
  };
}

export const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        name: 'Essentials',
        starting_price: 'Ksh. 25,000',
        payment_model: '(one-time payment)',
        description: 'Company website development',
        features: [
            '4 pages (Home, about, services / products, contact)', 
            'Mobile responsive', 
            '1 year hosting', 
            '.com domain', 
            '2 - 3 days delivery time', 
            '30 day free post-launch support'
        ],
        action: {
            text: 'Schedule a call',
            url: AppConfig.whatsappScheduleCallEssentialsPackage
        }
    },
    {
        id: 2,
        name: 'Growth',
        badge: 'Most Popular',
        starting_price: 'Ksh. 35,000',
        payment_model: '(one-time payment)',
        description: 'Custom Software for businesses ready to scale',
        features: [
            'MVP, e-commerce, dashboard or management system',
            'Hosting set up',
            'Admin Panel with an analytics dashboard',
            '2 - 4 weeks delivery time',
            '30 days free post launch support'
        ],
        action: {
        text: 'Schedule a call',
        url: AppConfig.whatsappScheduleCallGrowthPackage
        }
    },
    {
        id: 3,
        name: 'Enterprise',
        starting_price: 'Ksh. 15,000',
        payment_model: '/ month',
        description: 'Monthly retainer as your dedicated technical long-term',
        features: [
            'Dedicated development team',
            'Unlimited features & iterations',
            'Priority response times',
            'Architecture consulting',
            'Monthly strategy reviews'
        ],
        action: {
        text: 'Schedule a call',
        url: AppConfig.whatsappScheduleCallEnterprisePackage
        }
    }
];