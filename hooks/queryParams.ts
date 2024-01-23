"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const setQueryParams = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    router.push(`${pathName}?${params.toString()}`);
  };
  return { setQueryParams };
};
