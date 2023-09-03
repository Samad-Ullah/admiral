const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");

const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withPurgeCss = require("next-purgecss");
const bundler = withBundleAnalyzer({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  compress: true,
});
const compressCss = withCss(
  withPurgeCss({
    // Only enable PurgeCSS for client-side production builds
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
  })
);
const compressSass = withSass(
  withPurgeCss({
    // Only enable PurgeCSS for client-side production builds
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
  })
);

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cities/[slug]",
        destination: "/",
        permanent: true,
      },
      {
        source: "/404",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/events/sport-events-transfer",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/",
        permanent: true,
      },
      {
        source: "/airport-transportation/aadmirals.com/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/airport-transportation/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Car%20services/galveston-cruise-transfer",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/kids-are-special-so-they-deserve-birthday-party-in-limo/800-994-5078",
        destination: "/",
        permanent: true,
      },
      {
        source: "/airport-transportation",
        destination: "/",
        permanent: true,
      },
      {
        source: "/transportation/limo-service-sugarland-tx",
        destination: "/",
        permanent: true,
      },
      {
        source: "/airport-transportation/hobby-airport",
        destination: "/",
        permanent: true,
      },
      {
        source: "/transportation/limo-service-houston-tx",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/hourly-trips",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/travel-location-with-price",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/cities/Conroe-car-service",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/blog/60f8e05433bbd00004ec7266/Fulshear%20Airport%20Transportation",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([compressCss, compressSass, bundler], nextConfig);
