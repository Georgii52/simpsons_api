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
  const selectedItem = data.find((el)=> el.id === selectedId)

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
    if(selectedId !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [selectedId])

  useEffect(()=> {
    fetchData()
  }, [page])

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-sky-100/80 font-sans dark:bg-black">
      <NavBar />
      <MainLoad />
      {isCardsLoading ? (<CardsSkeleton />):
      (<>
      <Cards data={data} onSelect={setSelectedId}/>
      <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
      </>)}
      {selectedId && (<Popup id={selectedId} onClose={()=>setSelectedId(null)}/>)}
    </main>
  );
}
