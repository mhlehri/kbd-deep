import { ChevronRight, FileSearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function NotDataFound() {
  return (
    <div className="flex flex-col items-center space-y-4 justify-center min-h-[70vh] mx-auto">
      <FileSearchIcon size={40} />
      <h4 className="text-3xl">Data not found</h4>
      <Button asChild className="w-fit flex">
        <Link to="/">
          Back to Home <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}
