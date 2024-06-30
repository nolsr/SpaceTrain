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
    booking: {
      getById: '/booking',
      book: '/booking'
    },
    rockets: {
      getAll: '/rockets',
      getById: '/rockets',
      getSeats: '/rockets/seats'
    },
    tours: {
      getAll: '/tours',
      getTourdatesByTournr: '/tours/dates',
      getCountdown: '/tours/next'
    },
    staff: {
      getAll: '/staff'
    }
  },
};
