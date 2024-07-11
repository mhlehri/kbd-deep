import { MessageSquare } from "lucide-react";
import Title from "../Title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  return (
    <div>
      <form className="space-y-4 p-8 rounded-lg border max-w-md mx-auto">
        <Title>
          <MessageSquare /> Send us a message
        </Title>
        <p className="text-sm text-muted-foreground mb-5">
          We'll get back to you as soon as possible.
        </p>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <Button type="button" className="w-full">
          Send
        </Button>
      </form>
    </div>
  );
}
