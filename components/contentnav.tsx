import { ReactNode } from "react";

export async function getStaticProps(context: ReactNode) {
    const stuff = await fetch("");
}

export default function ContentNav(props: ReactNode) {
    return (
        <div>

        </div>
    );
}