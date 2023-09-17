import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { type ITCombineStore } from "~/@types/store";
import { env } from "~/env.mjs";
import { createAuthSlice } from "./auth.store";

export const useIStore = create<ITCombineStore>()(
  devtools(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    { enabled: env.NEXT_PUBLIC_APP_ENV === "development" ? true : false }
  )
);
