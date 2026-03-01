/**
 * Prepend Vite's base URL to a public-folder image path.
 * In dev  → BASE_URL = '/'    → '/images/foo.jpg'     ✅
 * In prod → BASE_URL = '/CXS/' → '/CXS/images/foo.jpg' ✅
 */
export const img = (path: string): string =>
  import.meta.env.BASE_URL + path.replace(/^\//, '');
