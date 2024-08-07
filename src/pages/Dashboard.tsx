import { SquareDashedKanban } from "lucide-react";
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
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-10 items-center mt-10 justify-between">
        <Title>
          <SquareDashedKanban /> Dashboard
        </Title>
      </div>
      <Tabs defaultValue="all-products">
        <TabsList className="bg-transparent mb-5 border p-0">
          <TabsTrigger value="all-products" asChild>
            <Button variant="ghost">All Products</Button>
          </TabsTrigger>
          <TabsTrigger value="add-new-product" asChild>
            <Button variant="ghost">Add New Product</Button>
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
