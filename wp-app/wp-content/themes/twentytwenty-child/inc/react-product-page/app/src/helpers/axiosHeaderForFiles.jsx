/**
 * Nonce header for files in axios requests
 */
export const axiosHeaderForFiles = (
    {
        headers: {
        'Content-Type': 'multipart/form-data',
        'X-WP-Nonce': window.wpApiSettings.nonce
        },
    }
)

export default axiosHeaderForFiles;
