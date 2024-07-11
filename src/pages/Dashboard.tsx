import AddProductForm from "../components/form/AddProductForm";
import ProductTable from "../components/table/ProductTable";
import Title from "../components/Title";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-10 items-center mt-10 justify-between">
        <Title>Dashboard</Title>
      </div>
      <Tabs defaultValue="all-products">
        <TabsList className="bg-transparent mb-5 border p-0">
          <TabsTrigger value="all-products" asChild>
            <Button variant="ghost">All Products</Button>
          </TabsTrigger>
          <TabsTrigger value="add-new-product" asChild>
            <Button variant="ghost">Add New Products</Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all-products">
          <ProductTable />
        </TabsContent>
        <TabsContent value="add-new-product">
          <AddProductForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
