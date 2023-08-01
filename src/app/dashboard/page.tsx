import { Link } from "@/components/Link";

export default function DashboardPage(){
  return(
    <div className="flex items-center justify-around py-4">
      <h1>Dashboard</h1>
      <Link.Root>
        <Link.Linked link="/login" content="Login"/>
      </Link.Root>
    </div>
  )
}