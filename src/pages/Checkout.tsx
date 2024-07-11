import { useEffect } from "react";
import PricingDetails from "../components/card/PricingDetails";
import BillingForm from "../components/form/BillingForm";
import Title from "../components/Title";

export default function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-10 space-y-10">
      <Title>Checkout</Title>
      <div className="flex justify-between items-start">
        <BillingForm />
        <PricingDetails />
      </div>
    </div>
  );
}
