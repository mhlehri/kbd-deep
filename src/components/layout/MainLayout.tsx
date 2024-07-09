import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./container";

export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <div className="overflow-hidden">
        <Container>
          <Outlet />
        </Container>
      </div>
    </main>
  );
}
