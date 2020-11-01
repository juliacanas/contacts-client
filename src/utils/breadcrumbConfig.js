/* export function getBreadcrumbConfig({ path: pathname, scope = BREADCRUMB_CONFIG }) {
    const pathnameMatch = scope.find(route => pathname.startsWith(route.path));
    const config = [];
    if (pathnameMatch) {
        config.push(pathnameMatch);
    }
    if (pathnameMatch?.routes) {
        const subSearch = getBreadcrumbConfig({ path: pathname, scope: pathnameMatch.routes });
        config.push(...subSearch);
    }
    return config;
} */

export function getBreadcrumbConfig() {
    
}