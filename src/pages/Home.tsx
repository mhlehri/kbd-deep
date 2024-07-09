import Featured from "../components/section/Featured";
import { Hero } from "../components/section/Hero";
import Service from "../components/section/Service";

export default function Home() {
  return (
    <main className="space-y-24 mb-20">
      <Hero />
      <Service />
      <Featured />
    </main>
  );
}
