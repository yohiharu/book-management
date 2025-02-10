import Logout from "@/module/Logout";
import { auth } from "../../../auth";
import Link from "next/link";

export default async function Page(){
    const session = await auth()
    console.log(session?.user?.name)
    if(session?.user?.name){
        return (
            <Logout></Logout>
        )
    }
    return(
        <>
          <p className="text-right"><Link href="/">TOP</Link></p>
          <h1 className="text-center text-lg mt-3">now logout</h1>

          </>

    )
}