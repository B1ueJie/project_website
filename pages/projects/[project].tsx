import { getFileNames, getFileData, getFilesData } from '../../lib/helpers';
import ContentNav from '@/components/contentnav';
import SubMenu from '@/components/submenu';

export default function Project(props: any) {
    return (
        <section className="w-full items-center grid grid-cols-3 gap-10">
            <div>
                <ContentNav props={props.files}></ContentNav>
            </div>
            <SubMenu title={props.fileContent.title} contentHtml={props.fileContent.contentHtml}></SubMenu>
        </section>
    );
}

export async function getStaticProps(context: any) {
    const data = await getFileData('projects', context.params.project);
    const filesData= await getFilesData('projects');

    return {
        props: {
            fileContent: data,
            files: filesData
        }
    }
}

export async function getStaticPaths(context: any) {
    const data = await getFileNames('projects');
    const pathsWithParams = data.map((name: string) => {
        return {
            params: {project: name}
        };
    });
    return {
        paths: pathsWithParams,
        fallback: false
    };
}