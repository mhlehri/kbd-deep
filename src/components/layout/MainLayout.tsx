import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./container";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <div>
        <Container className="min-h-screen">
          <Outlet />
        </Container>
      </div>
      <Footer />
    </main>
  );
}
