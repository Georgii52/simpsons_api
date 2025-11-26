import Image from "next/image"
import NavBarImage from '@/app/shared/200481282-0cb6ec11-3042-43a9-8996-34048b4ca6af.png'
import GitHubLogo from '@/app/shared/github-mark.png'
export default function NavBar () {
    return (
        <nav className="
        flex flex-row items-center
        justify-between px-4 py-4
        fixed inset-x-0 top-0 z-50
        bg-white/20
        w-full
        backdrop-blur-xs
        [mask-image:linear-gradient(to_bottom,white_65%,transparent)]">
            <Image src={NavBarImage} alt="Navigation Bar Image" className="w-auto h-8" />
            <a href="https://github.com/Georgii52" target="_blank">
                <Image src={GitHubLogo} alt="Visit GitHub"
                className="
                w-auto h-8
                hover:scale-115
                transition-all
                "/>
            </a>
        </nav>
    )
}