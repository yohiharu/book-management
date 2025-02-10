"use client"

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Delete() {
  const [ bookData, setBookData] = useState([])
  const getData = () => {
    fetch("/api", {
      method: "GET"
    }).then(ret => ret.json()).then(ret => setBookData(ret.reverse()))
  }
  useEffect(() => {
    getData()
  }, [])
  const clickDelete = async(created_at) => {
    await fetch("/api", {
        method: "DELETE",
        body: JSON.stringify({
            created_at: created_at
        })
    })
    await getData()
  }
  return (
  <>
    <p className="text-right select-none">
        <Link href="/">back</Link>
    </p>
    <h1 className="text-center text-3xl ml-6">DELETE</h1>

    <main className="flex items-center flex-col bg-slate-100 w-1/3 mx-auto mt-2 rounded-xl">
      <ul className="mt-2 list-disc">
        {bookData.map((e) => {
          return(
            <li key={e.created_at} className="my-1 underline hover:cursor-pointer"><a onClick={() => {
                clickDelete(e.created_at)
            }}>{e.title}</a>
            </li>
          )
        })}
      </ul>
    </main>

  </>
  );
}