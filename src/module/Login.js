import { signIn } from "../../auth"
import Link from "next/link"
export default async function Login(){
  const loginClick = async() => {
    "use server"
     await signIn("github")
  }
  return(
    <>
      <p>login page</p>
      <form action={loginClick}>
        <button>button</button>
      </form>
      <Link href="/">TOP</Link>
    </>

  )
}