/**
 * Environment variables:
 * - baseUrl: The base url for the backend api
 * - endpoints:
 */
// environments/environment.prod.ts (für Produktion)
export const environment = {
  production: true,
  apiBaseUrl: 'hier Server url einfügen',
  endpoints: {
    user: {
      login: '/user/login',
      register: '/user',
    },
    touren: {
      getAll: 'touren',
      getById: 'touren',
    }
  },
};
