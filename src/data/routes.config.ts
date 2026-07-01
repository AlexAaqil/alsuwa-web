export const routes = {
    "home-page": "/",
    "about-page": "/about",
    "services-page": "/services",
    "contact-page": "/contact",
    "privacy-policy": "/privacy",
    "terms-and-conditions": "/terms",
} as const;

export type RouteKey = keyof typeof routes;

// Helper function to check if route exists and get URL
export function getRouteUrl(routeName: RouteKey): string {
  return routes[routeName] || "#";
}