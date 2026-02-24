import { atom } from "jotai";

export const scoreAtom = atom(null);
if (import.meta.env.DEV) {
  scoreAtom.debugLabel = "scoreAtom";
}
