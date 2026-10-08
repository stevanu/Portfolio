import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main
        key={pathname}
        className="mx-auto min-h-[70vh] max-w-100 animate-page pb-4"
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
