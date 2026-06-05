import { useMemo } from "react";
import type { ICategory, IPropsPosts } from "../types";
import { postsCategories } from "../data";

export const useCategoriesWithCount = (posts: IPropsPosts[]) => {
  return useMemo(() => {
    if (!posts || posts.length < 2) {
      return postsCategories.map((cat) => ({ ...cat, count: 0 }));
    }

    const postsForCounting = posts.slice(2);

    const countMap = postsForCounting.reduce(
      (acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
      },
      {} as Record<number, number>,
    );

    return postsCategories.map((category: ICategory) => ({
      ...category,
      count:
        category.id === 0
          ? postsForCounting.length
          : countMap[category.id] || 0,
    }));
  }, [posts]); 
};