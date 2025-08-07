import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeAnswer } from "./screens/HomeAnswer";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeAnswer />
  </StrictMode>,
);
