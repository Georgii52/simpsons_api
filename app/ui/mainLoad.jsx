import Image from "next/image"
import BackGroundPhoto from '@/app/shared/thesimpsons_couch_zoom_aa570da9.jpeg'
import CenterImage from '@/app/shared/200481282-0cb6ec11-3042-43a9-8996-34048b4ca6af.png'
export default function MainLoad () {
    return (
        <div className="relative w-full h-128">
            <Image
            src={BackGroundPhoto}
            alt="Background Photo"
            fill
            className="object-cover object-center"
            />
            <Image
            src={CenterImage}
            alt="Central image"
            className="
            absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[450px] h-auto"
            />
            <p className="
            absolute
            top-1/2 left-1/2 
            -translate-x-1/2 translate-y-35 break-all w-[450px] h-auto
            text-center"></p>
        </div>
    )
}