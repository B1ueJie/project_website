import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();
    const currentPath = router.asPath;

    return (
        <nav className="m-1 border-b-2 border-brown">
            <ul className="flex flex-row gap-8 px-8 py-2 text-xl">
                <li className={`flex-initial hover:bg-brown hover:text-tan hover:transition-all ${(currentPath === "/") ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                    <Link className={`block px-2 py-1 ${(currentPath === "/") ? "pointer-events-none" : ""}`} href="/">HOME</Link>
                </li>
                <li className={`flex-initial hover:bg-brown hover:text-tan hover:transition-all ${(currentPath.match(/\/skills&education.*/)) ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                    <Link className={`block px-2 py-1 ${(currentPath.match(/\/skills&education.*/)) ? "pointer-events-none" : ""}`} href="/skills&education">SKILLS/EDUCATION</Link>
                </li>
                <li className={`flex-initial hover:bg-brown hover:text-tan hover:transition-all ${(currentPath.match(/\/projects.*/)) ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                    <Link className={`block px-2 py-1 ${(currentPath.match(/\/projects.*/)) ? "pointer-events-none" : ""}`} href="/projects">PROJECTS</Link>
                </li>
                <li className={`flex-initial hover:bg-brown hover:text-tan hover:transition-all ${(currentPath.match(/\/writing.*/)) ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                    <Link className={`block px-2 py-1 ${(currentPath.match(/\/writing.*/)) ? "pointer-events-none" : ""}`} href="/writing">WRITING</Link>
                </li>
                <li className={`flex-initial hover:bg-brown hover:text-tan hover:transition-all ${(currentPath.match(/\/about.*/)) ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                    <Link className={`block px-2 py-1 ${(currentPath.match(/\/about.*/)) ? "pointer-events-none" : ""}`} href="/about">ABOUT ME</Link>
                </li>
            </ul>
        </nav>
    );
}