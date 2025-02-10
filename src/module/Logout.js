import { signOut } from "../../auth"

export default async function Logout(){
  const logoutClick = async() => {
    "use server"
     await signOut("github")
  }
  return(
    <>
      <p>logout page</p>
      <form action={logoutClick}>
        <button>button</button>
      </form>
    </>

  )
}