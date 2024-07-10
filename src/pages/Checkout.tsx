import PricingDetails from "../components/card/PricingDetails";
import BillingForm from "../components/form/BillingForm";

export default function Checkout() {
  return (
    <div className="my-10 space-y-10">
      <h1 className="text-3xl">Checkout</h1>
      <div className="flex justify-between items-start">
        <BillingForm />
        <PricingDetails />
      </div>
    </div>
  );
}
