import Image from "next/image"
import random_num from "../provider/number"
export default function Cards ({ data, onSelect }) {
    const PHOTO_BASE_URL = 'https://cdn.thesimpsonsapi.com/500'
    return (
        <div className="
        flex flex-row flex-wrap
        p-4 w-full
        items-center justify-center
        gap-6
        ">
            {data.map((item) =>
            <div key={item.id} onClick={()=> onSelect(item.id)} className="
            cursor-pointer
            group
            flex flex-col flex-wrap
            p-4 items-center justify-center
            bg-white rounded-2xl
            w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-80
            inset-shadow-sm
            outline outline-gray-200
            hover:outline-cyan-500/20 hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-xl
            transition
            ">
                <Image
                src={PHOTO_BASE_URL + item.portrait_path}
                height={150} width={150}
                alt={`${item.name}`}
                className="
                shadow-md
                rounded-2xl
                p-2
                group-hover:rotate-2 group-hover:shadow-cyan-500/80 group-hover:shadow-xl
                transition-all"/>
                <p className="
                text-xl mt-auto font-bold text-center break-words w-full
                group-hover:text-cyan-500/80
                transition-all">{item.name}</p>
                <p className="
                text-sm text-gray-500 text-center line-clamp-2 max-w-full
                group-hover:text-cyan-500/80
                transition-all">Occupation: {item.occupation}</p>
                <div className="
                flex flex-row items-center justify-around flex-wrap
                w-full mt-auto">
                    <p className="bg-gray-100/60 font-bold rounded-2xl px-3 py-1">Age: {item.age? item.age: 'Unknown'}</p>
                    {item.status === 'Alive' ?
                    (<p className="
                        bg-green-200/30
                        text-green-500 rounded-2xl
                        flex flex-row
                        px-3 py-1 gap-1
                        items-center
                        ">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {item.status}
                    </p>)
                    :(<p className="
                        bg-red-200/30
                        text-red-500 rounded-2xl
                        flex flex-row
                        px-3 py-1 gap-1
                        items-center
                        ">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            {item.status}
                    </p>)}
                </div>
                <p className="
                text-xs text-gray-400 text-center break-words mt-auto line-clamp-2
                group-hover:text-cyan-500/80
                transition-all
                ">
                    {item.phrases.length === 0 ? ('Nothing to say :('):(`"${item.phrases[random_num(item)]}"`)}
                </p>
            </div>
            )}
        </div>
    )
}