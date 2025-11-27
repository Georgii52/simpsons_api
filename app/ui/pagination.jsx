'use client'

export default function Pagination ({ page, totalPages, setPage}) {
    const pages = []
    const start = Math.max(1, page-2)
    const end = Math.min(totalPages, page+2)
    for (let i=start; i <= end; i++) {
        pages.push(i)
    }
    return (
        <div className="flex flex-row gap-3 mt-2 mb-12 transition-all ease text-xl font-bold items-center justify-center w-full">
            {start > 1 && (
                <button onClick={()=> setPage(1)}
                className="cursor-pointer bg-black text-white px-3 rounded-full shadow-md"
                >1</button>
            )}
            {pages.map(num=>(
                <button key={num} onClick={()=>setPage(num)}
                className={`px-3 rounded-full cursor-pointer transition-all ease duration-500 shadow-md
                    ${num === page
                    ? 'bg-cyan-500/80 scale-125 -translate-y-1 text-white shadow-cyan-500/80'
                    : 'bg-white'
                    }`}
                >{num}</button>
            ))}
            {end < totalPages && (
                <button onClick={()=>setPage(totalPages)}
                className="cursor-pointer bg-black text-white px-3 rounded-full">{totalPages}</button>
            )}
        </div>
    )
}