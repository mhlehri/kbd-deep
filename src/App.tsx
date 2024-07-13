import { useEffect } from "react";
import MainLayout from "./components/layout/MainLayout";
import "./index.css";
import { useAppSelector } from "./redux/hook";

export default function App() {
  const cart = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const haveCartItem = cart.length > 0;

    const handleBeforeUnload = (event) => {
      if (haveCartItem) {
        const message =
          "You have unsaved changes. Are you sure you want to leave?";
        event.preventDefault();
        event.returnValue = message; // For most browsers
        return message; // For some older browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);

  return <MainLayout />;
}
