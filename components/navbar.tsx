import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/global.css';

export default function NavBar() {
    const router = useRouter();
    var currentPath = router.pathname;

    return (
        <nav className="border-b-2 border-brown">
            <ul className="flex flex-row gap-8 px-8 py-2 text-xl">
                <li className={`flex-initial hover:bg-brown hover:text-tan hover:transition-all ${(currentPath === "/") ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                    <Link className={`block px-2 py-1 ${(currentPath === "/") ? "pointer-events-none" : ""}`} href="/">HOME</Link>
                </li>
                <li className={`flex-initial hover:bg-brown hover:text-tan hover:transition-all ${(currentPath === "/projects") ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                    <Link className={`block px-2 py-1 ${(currentPath === "/projects") ? "pointer-events-none" : ""}`} href="/projects">PROJECTS</Link>
                </li>
                <li className={`flex-initial hover:bg-brown hover:text-tan hover:transition-all ${(currentPath === "/writing") ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                    <Link className={`block px-2 py-1 ${(currentPath === "/writing") ? "pointer-events-none" : ""}`} href="/writing">WRITING</Link>
                </li>
                <li className={`flex-initial hover:bg-brown hover:text-tan hover:transition-all ${(currentPath === "/about") ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                    <Link className={`block px-2 py-1 ${(currentPath === "/about") ? "pointer-events-none" : ""}`} href="/about">ABOUT ME</Link>
                </li>
            </ul>
        </nav>
    );
}