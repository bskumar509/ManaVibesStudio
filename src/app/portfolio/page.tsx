import { Portfolio } from "@/components/sections/portfolio";
import { Employees } from "@/components/sections/employees";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <Portfolio />
      <Employees />
    </div>
  );
}
