import client from '../src/apollo/apollo-client';
import Layout from '../src/components/layout';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { GET_PAGES_URI } from '../src/queries/pages/get-pages';
import { useRouter } from 'next/router';

const Pages = ({ data }) => {
    const router = useRouter();


    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <Layout>
            content
        </Layout>
    );
}

export default Pages;

export async function getStaticProps({ params }) {

    const { data } = await client.query({
        query: GET_PAGE,
        vairables: {
            slug: params?.slug.join("/"),
        }
    });

    console.warn('page', data);


    revalidate: 1

    return {
        props: {
            data: data,
        }
    };
}

export async function getStaticPaths() {
    const { data } = await client.query({
        query: GET_PAGES_URI
    });

    const pathData = [];

    data?.pages?.nodes && data?.pages?.nodes.map(page => {


        if (!page?.slug == 0) {
            const slugs = page?.slug?.split('/').filter(pageSlug => pageSlug);

            pathData.push({ params: { slug: slugs } });
        }
    });

    return {
        paths: pathData,
        fallback: true,
    }
}
