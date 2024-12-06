// src/app/(home)/page.tsx



import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import NonAuthHomeView from "../../sections/NonAuthHomeView";
import {redirect} from "next/navigation"

export const metadata = { title: "Domov | ZoškaSnap" };


export default async function HomePage() {

  const session = await getServerSession(authOptions);
  session ? redirect("/prispevok") : null;

  return <NonAuthHomeView/>
}