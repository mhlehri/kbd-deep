import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./container";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
