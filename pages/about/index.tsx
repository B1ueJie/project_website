import Link from "next/link";

export default function About() {
    return (
        <section>
            <p>
                I got sucked into computer science because of the ideas of virtual reality presented in SAO, which is kind of one of my embarassing secrets.<br/>
                Right now, I&apos;m into playing fighting games and being a coffee snob.
            </p>
            <br/>
            <h2 className="text-2xl">Socials</h2>
            <div className="flex-initial bg-yellowgray hover:bg-brown hover:text-tan hover:transition-all">
                <Link href="https://www.youtube.com/@bluejie828" className="block px-2 py-1">Youtube</Link>
            </div>
        </section>
    );
}