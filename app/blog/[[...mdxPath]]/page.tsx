import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";
import BlogList from "@/app/_components/blog";
import { Layout } from "nextra-theme-blog";

import "nextra-theme-blog/style.css";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

type BlogDetailProps = {
  params: { mdxPath: string[]; };
};


export async function generateMetadata(props: BlogDetailProps) {
  const params = await props?.params;
  const { metadata } = await importPage(params?.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function BlogDetailPage(props: BlogDetailProps) {
  const params = await props?.params;
  const result = await importPage(params?.mdxPath);

  const { default: MDXContent, toc, metadata } = result;
  const { tags: _, ...filteredMetadata } = metadata;

  if (Object.keys(params).length === 0) return <BlogList />;

  return (
    <Layout nextThemes={{ forcedTheme: "dark" }}>
      <div className="pt-20">
        <Wrapper toc={toc} metadata={filteredMetadata}>
          <MDXContent {...props} params={params} />
        </Wrapper>
      </div>
    </Layout>
  );
}
