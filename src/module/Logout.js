import { signOut } from "../../auth"
import { Link, Button } from "@mui/material"

export default async function Logout(){
  const logoutClick = async() => {
    "use server"
     await signOut("github")
  }
  return(
    <>
      <p className="text-right"><Link href="/">TOP</Link></p>
      <h1 className="text-center text-3xl">Logout page</h1>
      <form className="flex flex-row justify-center mt-3" action={logoutClick}>
        <Button variant="contained" onClick={logoutClick}>Button</Button>
      </form>
    </>

  )
}