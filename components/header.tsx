import NavBar from './navbar';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const currentPath = router.asPath;
    console.log(router.asPath);
    let title;

    if (currentPath === "/") title = 'HOME';
    if (currentPath.match(/\/skills&education.*/)) title = 'SKILLS/EDUCATION';
    if (currentPath.match(/\/projects.*/)) title = 'PROJECTS';
    if (currentPath.match(/\/writing.*/)) title = 'WRITING';
    if (currentPath.match(/\/about.*/)) title = 'ABOUT';
    

    return (
        <div>
            <NavBar/>
            <div className="text-3xl p-4">
                {title}
            </div>
        </div>
    );
}