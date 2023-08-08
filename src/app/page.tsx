"use client"
import { useAuth } from "@/hooks/useAuth";

import AuthLayout from "./(auth)/layout";
import PageLogin from "./(auth)/login/page";
import DashboardLogadoPage from "./(admin)/dashboard/[id]/page";
import Loading from "./loading";


export default function HomePage() {
  return (
    <Content />
  );
}

function Content() {
  const { isAuthenticated, isLoading } = useAuth()


  if (isLoading) {
    return <Loading />
  }

  return !isAuthenticated ? 
    <AuthLayout>
      <PageLogin/>
    </AuthLayout> :
    <AuthLayout>
      <DashboardLogadoPage/>
    </AuthLayout>;
}