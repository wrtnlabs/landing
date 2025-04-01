import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

export async function getPosts() {
  const { directories } = normalizePages({
    list: await getPageMap(""),
    route: "/blog",
  });

  return directories
    .filter((post) => post.name !== "index")
    .sort(
      (a, b) =>
        new Date(b.frontMatter?.date as string).getTime() -
        new Date(a.frontMatter?.date as string).getTime(),
    );
}
