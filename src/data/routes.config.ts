export const routes = {
    "home-page": "/",
    "about-page": "/about",
    "services-page": "#",
    "projects-page": "#",
    "contact-page": "/contact",
    "blogs-page": "#",
    "privacy-policy": "#",
    "terms-and-conditions": "#",
} as const;

export type RouteKey = keyof typeof routes;

// Helper function to check if route exists and get URL
export function getRouteUrl(routeName: RouteKey): string {
  return routes[routeName] || "#";
}