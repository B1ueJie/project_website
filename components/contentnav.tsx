import { ReactNode } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ContentNav(props: any) {
    const router = useRouter();
    const currentPath = router.asPath;
    console.log(currentPath);
    const basePath = currentPath.replace(/\/skills&education.*/, '/skills&education/');


    return (
        <nav>
            <ul className="">
                {props.props.map(( file: any ) => ( // checking by just the file.id is unsafe, but should be fine with the scale of the website
                    <li className={`hover:bg-brown hover:text-tan hover:transition-all ${(currentPath.match(file.id)) ? "pointer-events-none bg-brown text-tan" : "bg-yellowgray"}`}>
                        <Link className={`text-xl block p-3 ${(currentPath.match(file.id)) ? "pointer-events-none" : ""}`} href={basePath + file.id}>{file.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}