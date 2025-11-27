'use client'
import { useEffect, useState } from "react";
import Cards from "./ui/cards";
import MainLoad from "./ui/mainLoad";
import NavBar from "./ui/navBar";
import CardsSkeleton from "./ui/cardsSkeleton";
import Pagination from "./ui/pagination";
import Popup from "./ui/popup";

export default function Home() {
  const [data, setData] = useState([])
  const [isCardsLoading, setIsCardsLoading] = useState(false)
  const [IsPopupLoading, setIsPopupLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedId, setSelectedId] = useState(null)
  const [detailedData, setDetailedData] = useState([])

  const fetchData = async () => {
    setIsCardsLoading (true)
    try {
      const res = await fetch (`/provider?page=${page}`)
      const data = await res.json()
      setData (data.reply.results ?? [])
      setTotalPages(data.reply.pages ?? 10)
      } catch (err) {
        console.error (`Ошибка: ${err}`)
      } finally {
        setIsCardsLoading(false)
      }
  }

  useEffect(()=> {
    fetchData()
  }, [page])

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-sky-100/80 font-sans dark:bg-black">
      <NavBar />
      <MainLoad />
      {isCardsLoading ? (<CardsSkeleton />): (<Cards data={data} onSelect={setSelectedId}/>)}
      {selectedId && (<Popup id={selectedId} onClose={()=>setSelectedId(null)}/>)}
      <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
    </main>
  );
}
