import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";
import BlogList from "@/app/_components/blog";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: any) {
  const params = await props?.params;
  const { metadata } = await importPage(params?.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function BlogDetailPage(props: any) {
  const params = await props?.params;
  const result = await importPage(params?.mdxPath);

  const { default: MDXContent, toc, metadata } = result;

  if (Object.keys(params).length === 0) return <BlogList />;

  return (
    <div className="pt-20">
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    </div>
  );
}
