import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";
import BlogHome from "@/app/_components/blog";
import { Layout } from "nextra-theme-blog";

import "nextra-theme-blog/style.css";
import Header from "@/app/_components/layout/Header";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any) {
  const params = await props?.params;
  const { metadata } = await importPage(params?.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogDetailPage(props: any) {
  const params = await props?.params;
  const result = await importPage(params?.mdxPath);
  const { default: MDXContent, toc, metadata } = result;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tags, ...filteredMetadata } = metadata;

  const isBlogPage = Object.keys(params).length !== 0

  return (
    <Layout banner={<Header isAgentOS={false} />}>
      {isBlogPage ? (
        <div className="pt-20">
          <Wrapper toc={toc} metadata={filteredMetadata}>
            <MDXContent {...props} params={params} />
          </Wrapper>
        </div>
      ) : (
        <BlogHome />
      )}
    </Layout>

  );
}
