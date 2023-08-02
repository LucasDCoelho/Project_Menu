import { Link } from "@/components/Link";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardLogadoPage() {
  const { user } = useAuth()

  return (
    <div className="flex items-center justify-around py-4">
      <h1>Dashboard</h1>
      {user?.id}
      {user?.name}
    </div>
  )
}