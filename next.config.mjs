/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true
            }
        ]
    },
    images: {
        domains: ['www.leedyer.com'],
    },
};

export default nextConfig;
