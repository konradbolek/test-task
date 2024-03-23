/**
 * Nonce header for axios requests
 */
const axiosHeaders = (
    {
        headers: {
            'content-type': 'application/json',
            'X-WP-Nonce': window.wpApiSettings.nonce
        }
    }
);

export default axiosHeaders;
