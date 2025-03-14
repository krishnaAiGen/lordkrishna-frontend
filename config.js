// Using a relative URL that will be proxied by Vercel to the backend
// This avoids mixed content issues when the frontend is served over HTTPS
const API_BASE_URL = 'https://lordkrishna-backend.vercel.app';  // Set to the actual backend URL

// Export the configuration
window.API_CONFIG = {
    BASE_URL: API_BASE_URL
}; 