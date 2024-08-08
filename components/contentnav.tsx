import { ReactNode } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ContentNav(props: any) {
    const router = useRouter();
    const currentPath = router.asPath;
    const paths = router.asPath.split('/');
    const basePath = '/' + paths[1] + '/';

    return (
        <nav>
            <ul className="">
                {props.props.map(( file: any ) => ( // checking by just the file.id is unsafe, but should be fine with the scale of the website
                    <li key={file.id} className={`my-1 hover:bg-brown hover:text-tan hover:transition-all ${(currentPath.match(file.id)) ? "pointer-events-none bg-brown text-tan outline outline-black outline-offset-2x outline-2" : "bg-yellowgray"}`}>
                        <Link className={`text-xl block p-3 ${(currentPath.match(file.id)) ? "pointer-events-none" : ""}`} href={basePath + file.id}>{file.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}