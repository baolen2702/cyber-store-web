"use client";

import { fetchCategories } from "@/services/category";
import { RootStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useContext } from "react";
export const StoreContext = createContext<RootStore | null>(null);

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}
export function StoreProvider({ children }: { children: ReactNode }) {
  const { data: categoriesResponse, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories({ page: 1, take: 10 }),
  });
  const categories = categoriesResponse ? categoriesResponse.data : [];

  const store = new RootStore(categories);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
