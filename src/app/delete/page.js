import Delete from "./delete";
import { auth } from "../../../auth";
import Login from "@/module/Login";

export default async function Page(){
    const session = await auth()
    if(!session?.user?.name){
        return (
            <Login></Login>
        )
    }else{

    }
    return(
        <Delete></Delete>
    )
}