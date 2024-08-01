import { ReactNode } from "react";
import ContentNav from "../../components/contentnav";
import { getFileNames, getFileData, getFilesData } from "../../lib/helpers";
import SubMenu from "@/components/submenu";

interface Props {
    fileContent: { title: ReactNode, contentHtml: string };
    files: any
}

export default function Post(props: Props) {
    return (
        <section className="w-full items-center grid grid-cols-3 gap-10">
            <div>
                <ContentNav props={props.files}></ContentNav>
            </div>
            <SubMenu title={props.fileContent.title} contentHtml={props.fileContent.contentHtml}></SubMenu>
        </section>
    )
}

export async function getStaticProps(context: any) {
    const data = await getFileData('homeinfo', context.params.id);
    const filesData = await getFilesData('homeinfo');

    return {
        props: {
            fileContent: data,
            files: filesData
        }
    }
}

export async function getStaticPaths() {
    const data = await getFileNames('homeinfo');
    const pathsWithParams = data.map((name: string) => {
        return {
            params: {id: name}
        }
    });
    return {
        paths: pathsWithParams,
        fallback: false
    }
}