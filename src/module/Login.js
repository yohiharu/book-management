import { Button } from "@mui/material"
import { signIn } from "../../auth"
import Link from "next/link"
export default async function Login(){
  const loginClick = async() => {
    "use server"
     await signIn("github")
  }
  return(
    <>
      <p className="text-right"><Link href="/">TOP</Link></p>
      <h1 className="text-center text-3xl">Login page</h1>
      <form className="flex flex-row justify-center mt-3" action={loginClick}>
        <Button onClick={loginClick} variant="contained">button</Button>
      </form>
    </>

  )
}