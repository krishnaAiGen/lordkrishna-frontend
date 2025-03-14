// Using a relative URL that will be proxied by Vercel to the backend
// This avoids mixed content issues when the frontend is served over HTTPS
const API_BASE_URL = '';  // Empty string means use the same origin (the frontend URL)

// Export the configuration
window.API_CONFIG = {
    BASE_URL: API_BASE_URL
}; 