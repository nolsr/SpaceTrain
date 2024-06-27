/**
 * Environment variables:
 * - baseUrl: The base url for the backend api
 * - endpoints:
 */
// environments/environment.prod.ts (für Produktion)
export const environment = {
  production: true,
  apiBaseUrl: 'http://localhost:8080',
  endpoints: {
    user: {
      login: '/user/login',
      register: '/user',
    },
    touren: {
      getAll: '/touren',
      getById: '/touren',
    },
    rockets: {
      getAll: '/rockets',
      getById: '/rockets',
    },
    tours: {
      getAll: '/tours'
    }
  },
};
