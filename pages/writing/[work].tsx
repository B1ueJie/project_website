import { getFileNames, getFileData, getFilesData } from '../../lib/helpers';

export default function Work(props: any) {
    return (
        <div></div>
    );
}

export async function getStaticProps(context: any) {
    const data = await getFileData('works', context.params.work);
    const filesData = await getFilesData('works');

    return {
        props: {
            fileContent: data,
            files: filesData
        }
    };
}

export async function getStaticPaths(context: any) {
    const data = await getFileNames('works');
    const pathsWithParams = data.map((name: string) => {
        return {
            params: {work: name}
        };
    });
    return {
        paths: pathsWithParams,
        fallback: false
    };
}