import {Navigation} from "./shared/components/Navigation";
import {Footer} from "./shared/components/Footer";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;