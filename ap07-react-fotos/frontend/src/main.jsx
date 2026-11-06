import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PrimeReactProvider } from "@primereact/core";
import Aura from "@primeuix/themes/aura";
import "primeflex/primeflex.min.css";

createRoot(document.getElementById("root")).render(
  <PrimeReactProvider theme={{ preset: Aura }}>
    <App />
  </PrimeReactProvider>
);