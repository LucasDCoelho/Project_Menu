import { Link } from "../../Link";

export function DrawerDashboard(){
  return(
    <div className="w-1/3 bg-cyan-600 h-full flex justify-center py-4">
      <h1 className="text-cyan-50 font-bold text-2xl uppercase">Dashboard</h1>

      <Link.Root>
        <Link.Linked link="" />
      </Link.Root>
    </div>
  )
}