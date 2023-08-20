import { type StateCreator } from "zustand";
import { type IAuthSlice } from "~/@types/auth";
import { type ITCombineStore } from "~/@types/store";

export const createAuthSlice: StateCreator<
  ITCombineStore,
  [],
  [],
  IAuthSlice
> = (set) => ({
  value: "",
  setValue: (value) => set((state) => ({ ...state, value })),
});
