import { Hero } from "./components/Hero.jsx";
import { PricingPage } from "./components/PricingPage.jsx";

export function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  return pathname === "/pricing" ? <PricingPage /> : <Hero />;
}
