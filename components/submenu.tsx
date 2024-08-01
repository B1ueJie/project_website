import { ReactNode } from "react";

interface SubmenuProp {
    title: ReactNode
    contentHtml: string
}

export default function SubMenu(props: SubmenuProp) {
    return (
        <div>
            <div className="bg-brown text-tan text-xl">
                <h1 className="block p-3">{props.title}</h1>
            </div>
            <div className="bg-yellowgray text-lg p-3" dangerouslySetInnerHTML={{__html: props.contentHtml}}/>
        </div>
    );
}