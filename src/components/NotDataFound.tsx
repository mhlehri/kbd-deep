import { FileSearchIcon } from "lucide-react";

export default function NotDataFound() {
  return (
    <div className="flex flex-col items-center space-y-4 justify-center min-h-[70vh] mx-auto">
      <FileSearchIcon size={40} />
      <h4 className="text-3xl">No data found</h4>
    </div>
  );
}
