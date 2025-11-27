'use client'
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Popup ({ id, onClose, data }) {
    const PHOTO_BASE_URL = 'https://cdn.thesimpsonsapi.com/500'
    const [details, setDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchDetailedData = async () => {
        setIsLoading(true)
        if (!id) return
        try {
            const res = await fetch (`/provider/details?id=${id}`)
            if (!res.ok) {
                throw new Error (`Loading error: ${res.status}`)
            }
            const data = await res.json()
            setDetails (data.reply)
        } catch (err) {
            console.error (`Ошибка: ${err}`)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchDetailedData()
    }, [id])

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-[999]">
            <div className="bg-white rounded-xl p-6 w-[80%] max-w-2xl max-h-[90%] overflow-y-auto relative">
                <button onClick={onClose} className="bg-red-300 text-white rounded-full px-2 font-bold absolute top-1 right-1 text-xl cursor-pointer">X</button>
                {!details? (<p>Loading...</p>)
                : (<div className="flex flex-col flex-wrap items-center justify-center py-4">
                    <div className="flex flex-row w-full justify-between gap-8 md:justify-around">
                        <div className="w-full">
                            <Image src={PHOTO_BASE_URL + details.portrait_path} height={200} width={200} alt={details.name}
                            className="shadow-md rounded-2xl p-2"/>
                        </div>
                        <div className="w-full">
                            <p className="text-xl font-bold">{details.name}</p>
                            <p className="italic text-sm">{details.birthdate}</p>
                            <p className="">Age: {details.age? (details.age + " years"): 'Unknown'}</p>
                            <p className="italic text-sm">{details.occupation}</p>
                            {details.status === 'Alive' ? (<p className="bg-green-200/30 text-green-500 rounded-2xl flex flex-row px-4 gap-1 items-center max-w-[5rem]">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {details.status}
                            </p>)
                            :(<p className="bg-red-200/30 text-red-500 rounded-2xl flex flex-row px-4 gap-1 items-center max-w-[7.5rem]">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            {details.status}
                            </p>)}
                        </div>
                    </div>
                    <p>{details.description}</p>
                </div>)}
            </div>
        </div>
    )
}