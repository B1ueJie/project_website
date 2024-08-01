import ContentNav from "@/components/contentnav"
import { getFilesData } from "@/lib/helpers";

export default function Index(props: any) {
	return (
		<section className="w-full items-center grid grid-cols-3 gap-10">
			<ContentNav props={props.files}></ContentNav>
		</section>
	)
}

export async function getStaticProps(context: any) {
	const data = await getFilesData('homeinfo');

	return {
		props: {
			files: data
		}
	}
}