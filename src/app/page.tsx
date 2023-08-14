"use client"
import { useAuth } from "@/hooks/useAuth";

import AuthLayout from "./(auth)/layout";
import PageLogin from "./(auth)/login/page";
import DashboardLogadoPage from "./(admin)/dashboard/[id]/page";
import Loading from "./loading";
import { useRouter } from "next/navigation"


export default function HomePage() {
  return (
    <Content />
  );
}

function Content() {
  const { isAuthenticated, isLoading,user } = useAuth()
  const router = useRouter()


  if (isLoading) {
    return <Loading />
  }
  if(isAuthenticated){
    router.push(`/dashboard/${user?.id}`)
  }

  return !isAuthenticated ? 
    <AuthLayout>
      <PageLogin />
    </AuthLayout> :
    <AuthLayout>
      <DashboardLogadoPage/>
    </AuthLayout>;
}