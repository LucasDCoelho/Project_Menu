import { DrawerDashboard } from "@/components/Dashboard/DrawerDashboard/DrawerDashboard";
import { HeaderDashboard } from "@/components/Dashboard/HeaderDashboard/HeaderDashboard";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}){
  return(
    <div className="flex w-full h-full">
      <DrawerDashboard />
      <div className="w-full">
        <HeaderDashboard />
        {children}
      </div>
    </div>
  );
}