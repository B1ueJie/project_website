
import { getFileNames, getFileData } from "../../lib/helpers";

export default function Post(props: { fileContent: any }) {
    return (
        <div>
            <h1>{props.fileContent.title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.fileContent.contentHtml}} />
        </div>
    )
}

// to be used in final product
export async function getStaticProps(context: any) {
    const data = await getFileData('homeinfo', 'educationalexperience');

    return {
        props: {
            fileContent: data
        }
    }
}

// to be used for final product
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