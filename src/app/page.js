"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [ bookData, setBookData] = useState([])
  const getData = () => {
    fetch("/api", {
      method: "GET"
    }).then(ret => ret.json()).then(ret => setBookData(ret.reverse()))
  }
  useEffect(() => {
    getData()
  }, [])
  console.log("bd", bookData)
  return (
  <>
    <header className="flex justify-between items-center">
      <h1 className="text-center text-3xl ml-6">BOOK MANAGER</h1>
      <nav>
        <ul className="flex gap-6 mr-6">
          <li>
            <Link href="/register">register</Link>
          </li>
          <li>
            <Link href="/delete">delete</Link>
          </li>
          <li>
            <Link href="/search">search</Link>
          </li>
          <li>
            <Link href="/logout">logout</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main className="flex items-center flex-col bg-slate-100 w-1/3 mx-auto mt-2 rounded-xl">
      <p>蔵書一覧</p>
      <ul className="mt-2 list-disc">
        {bookData.map((e) => {
          return(
            <li key={e.created_at}>{e.title}</li>
          )
        })}
      </ul>
    </main>

  </>
  );
}