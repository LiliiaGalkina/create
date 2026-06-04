import type { IBasePost } from "./types";

export const sortArrByDate = <T extends IBasePost>(arr: T[]): T[] => {
  return [...arr].sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-")).getTime();
    const dateB = new Date(b.date.split(".").reverse().join("-")).getTime();

    if (isNaN(dateA) || isNaN(dateB)) {
      return 0;
    }

    return dateB - dateA;
  });
};
