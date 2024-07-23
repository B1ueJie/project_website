import { useRouter } from 'next/router';

export default async function Home() {
    const router = useRouter();
    return (<div>{router.push('/home')}</div>);
}