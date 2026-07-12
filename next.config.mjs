/** @type {import('next').NextConfig} */
const nextConfig = {
  // Makes the project export as a fully static website in the /out folder.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
