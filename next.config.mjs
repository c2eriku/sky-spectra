/** @type {import('next').NextConfig} */
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: '/sky-spectra',
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },

    sassOptions: {
        includePaths: [join(__dirname, 'styles')],
        additionalData: `
            @import "src/app/globals.scss";
        `,
    },
};

export default nextConfig;
