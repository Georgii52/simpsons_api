'use client'
import { useEffect, useState } from "react";
import Cards from "./ui/cards";
import MainLoad from "./ui/mainLoad";
import NavBar from "./ui/navBar";
import CardsSkeleton from "./ui/cardsSkeleton";

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading (true)
    try{
      const res = await fetch ('/provider', {
        method: 'GET',
        headers: { 'Content-Type':'application/json' }
        })
      const data = await res.json()
      setData (data.reply.results ?? [])
      console.log (data.reply.results)
      } catch (err) {
        console.error (`Ошибка: ${err}`)
      } finally {
        setIsLoading(false)
      }
  }

  useEffect (()=>{
    fetchData()
  }, [])

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-sky-100/80 font-sans dark:bg-black">
      <NavBar />
      <MainLoad />
      {isLoading ? (<CardsSkeleton />): (<Cards data={data} />)}
    </main>
  );
}
