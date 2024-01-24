"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const setQueryParams = (name: string, value: string | string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name);
    let param;
    if (typeof value === "string") {
      param = new URLSearchParams({ [name]: value });
    } else {
      param = new URLSearchParams(value.map((e) => [name, e]));
    }
    console.log(`${pathName}?${params.toString()}&${param.toString()}`);

    router.push(`${pathName}?${params.toString()}&${param.toString()}`);
  };

  const appendQueryParams = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.append(name, value);
    router.push(`${pathName}?${params.toString()}`);
  };

  const removeQueryParams = (name: string, value?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name, value);
    router.push(`${pathName}?${params.toString()}`);
  };

  return {
    searchParams: new URLSearchParams(searchParams.toString()),
    setQueryParams,
    appendQueryParams,
    removeQueryParams,
  };
};
