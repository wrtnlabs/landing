import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useURLSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const searchParamsChange = (values: {
    [key: string]: string | string[] | number | boolean;
  }) => {
    const searchParams = new URLSearchParams(params.toString());

    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        searchParams.delete(key);
        value.forEach((item) => searchParams.append(key, String(item)));
      } else {
        searchParams.set(key, String(value));
      }
    });

    updateURL(searchParams);
  };

  const deleteSearchParams = (key: string) => {
    const searchParams = new URLSearchParams(params.toString());
    searchParams.delete(key);
    updateURL(searchParams);
  };

  const resetSearchParams = () => {
    updateURL(new URLSearchParams());
  };

  const updateURL = (searchParams: URLSearchParams) => {
    const search = searchParams.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  };

  return {
    searchParams: params,
    searchParamsChange,
    deleteSearchParams,
    resetSearchParams,
  };
};
