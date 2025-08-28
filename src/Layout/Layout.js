import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname === "/subscribe";

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "70vh", padding: "20px" }}>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

export default Layout;
