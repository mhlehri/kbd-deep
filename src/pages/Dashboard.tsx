import ProductTable from "../components/table/ProductTable";

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl mt-10 font-semibold">Dashboard</h1>
      <div>
        <h2 className="text-xl font-semibold mb-3">All Products</h2>
        <ProductTable />
      </div>
    </div>
  );
}
