import { useMemo } from "react";
import type { IPropsPosts } from "../types";

export const useFilteredPosts = (
  posts: IPropsPosts[],
  currentCategory: number | undefined,
) => {
  return useMemo(() => {
    if (!posts) return [];

    if (currentCategory === 0) {
      return posts.slice(2);
    } else if (currentCategory) {
      return posts.filter(
        (item) => item.category === currentCategory && item.id > 2,
      );
    }
    return posts;
  }, [posts, currentCategory]);
};
