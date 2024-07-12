import MainLayout from "./components/layout/MainLayout";
import "./index.css";

export default function App() {
  window.addEventListener("beforeunload", function (event) {
    // Set a custom message. Note: Most modern browsers will not display this message.
    const message =
      "Are you sure you want to leave? Your changes may not be saved.";
    // For most browsers
    event.returnValue = message;
    // For some older browsers
    return message;
  });
  return <MainLayout />;
}
