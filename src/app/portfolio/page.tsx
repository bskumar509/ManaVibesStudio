import { Portfolio } from "@/components/sections/portfolio";
import { Employees } from "@/components/sections/employees";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col py-16 md:py-24">
      <Portfolio />
      <Employees />
    </div>
  );
}
