export default function CardsSkeleton () {
return (
        Array.from ({length: 5}).map((_,i) => (
        <div key={i} className="
        flex flex-row flex-wrap
        py-2 px-4 w-full
        items-center justify-center
        ">
            <div className="
            flex flex-col flex-wrap
            p-4 items-center justify-center gap-2
            bg-white
            w-full sm:w-1/2 md:w-1/3 lg:w-1/4
            h-80
            inset-shadow-sm
            outline outline-gray-200
            shimmer
            ">
                <div
                className="
                shadow-md
                rounded-2xl
                bg-gray-100
                h-[150px] w-[150px]
                p-2"/>
                <p className="
                bg-gray-100 w-50 h-8 rounded-4xl shadow-sm"></p>
                <p className="
                bg-gray-100 w-20 h-5 max-w-full rounded-4xl shadow-sm"></p>
                <div className="
                flex flex-row items-center justify-around flex-wrap
                w-full mt-auto">
                    <p className="bg-gray-100 rounded-4xl w-20 h-5 shadow-sm"></p>
                    <p className="bg-gray-100 rounded-4xl w-20 h-5 shadow-sm"></p>
                </div>
                <p className="bg-gray-100 rounded-4xl w-full h-5 shadow-sm"></p>
            </div>
        </div>
    )))
}