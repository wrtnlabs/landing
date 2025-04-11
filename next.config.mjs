import nextra from "nextra";

const withNextra = nextra({
  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
  output: "export",
  assetPrefix: "/landing",
  basePath: "/landing",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
});
