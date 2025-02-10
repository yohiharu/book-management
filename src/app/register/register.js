"use client"

import Link from "next/link";
import { useRef } from "react";
import { Button } from "@mui/material";
export default function Register(){
    const title_ref = useRef()
    const desc_ref = useRef()
    const registerClick = () => {
        var title = title_ref.current.value
        var desc = desc_ref.current.value
        if (title == "" || desc == ""){
            return
        }
        fetch("/api", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                desc: desc
            })
        })
        title_ref.current.value = ""
        desc_ref.current.value = ""
    }
    return(
        <>
            <p className="text-right select-none">
                <Link href="/">back</Link>
            </p>
            <h1 className="text-center text-3xl ml-6">REGISTER</h1>
            <table className="w-1/4 mx-auto">
                <tbody>
                    <tr className="">
                        <th className="w-1/3 border border-solid border-black">title</th>
                        <td className="w-2/3 border border-solid border-black"><input className="w-full" ref={title_ref} type="text"></input></td>
                    </tr>
                    <tr>
                        <th className="w-1/3 border border-solid border-black">desc</th>
                        <td className="w-2/3 border border-solid border-black"><textarea ref={desc_ref} className="block resize-none w-full"></textarea></td>
                    </tr>
                </tbody>
            </table>
            <div className="w-1/3 mx-auto flex justify-center mt-3">
                <Button variant={"contained"} onClick={registerClick}>SUBMIT</Button>
            </div>
        </>
    )
}