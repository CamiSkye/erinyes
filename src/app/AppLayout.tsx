import { Outlet } from "react-router-dom";

import { Navigation } from "../shared/components/Navigation";
import { Footer } from "../shared/components/Footer";
import CookieBanner from "../shared/components/CookieBanner";
import { QuickExitButton } from "../shared/components/QuickExitButton";
import { ScrollToTop } from "../shared/components/ScrollToTop";

export default function AppLayout() {
  return (
    <>
      <CookieBanner />
      <QuickExitButton />
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}