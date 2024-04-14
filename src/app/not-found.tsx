

import { ColorModeContextProvider } from "@contexts/color-mode";
import { ErrorComponent } from "@refinedev/antd";
import { Authenticated } from "@refinedev/core";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Error from "./Error";

export default function NotFound() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  return (
    <Suspense>
      <Authenticated key="not-found">
      <ColorModeContextProvider defaultMode={defaultMode}>
        <Error />
        </ColorModeContextProvider>
      </Authenticated>
    </Suspense>
  );
}
