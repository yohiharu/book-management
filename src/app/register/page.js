import Login from "@/module/Login";
import { auth } from "../../../auth";
import Register from "./register";

export default async function Page(){
    const session = await auth()
    console.log(!session?.user?.name)
    if(!session?.user?.name){
        return (
            <Login></Login>
        )
    }
    return(
        <Register></Register>
    )
}