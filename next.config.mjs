import nextra from "nextra";

const withNextra = nextra({
  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
  output: "export",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
});
