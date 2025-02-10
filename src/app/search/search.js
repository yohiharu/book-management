"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@mui/material";

export default function Search(){
    const searchRef = useRef()
    const [bookData, setBookData] = useState([])
    const searchClick = async() => {
        var searchWord = searchRef.current.value
        var ret = await fetch("/api", {
            method: "GET"
          }).then(ret => ret.json()).then(ret => ret.reverse())
        var bookShowList = []
        for(var i of ret){
            if(i.title.indexOf(searchWord) != - 1 || i.desc.indexOf(searchWord) != -1){
                bookShowList.push(i)
            }
        }
        setBookData(bookShowList)
    }
    console.log(bookData)
    return(
        <>
            <p className="text-right select-none">
                <Link href="/">back</Link>
            </p>
            <h1 className="text-center text-3xl ml-6">SEARCH</h1>
            <div className="mx-auto mt-4 w-1/3 flex flex-col">
                <textarea className="border border-solid border-b-gray-700 resize-none" ref={searchRef}></textarea>
                <Button className="mt-3" variant="contained" onClick={searchClick}>search</Button>
            </div>


            <div className="mx-auto w-1/3">
                {bookData.map((e) => {
                return(
                    <div key={e.created_at} className="w-full my-4">
                        <p className="w-full text-center font-bold">{e.title}</p>
                        <p className="w-full text-center">{e.desc}</p>
                    </div>
                )
                })}
            </div>

        </>
    )
}