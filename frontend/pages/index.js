import client from '../src/apollo/apollo-client';
import Layout from '../src/components/layout';
import { sanitize } from '../src/utilis/misc';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { GET_MENUS } from '../src/queries/get-header-footer';

export default function Home({ data }) {

    // console.warn('data', data);
    return (
        <Layout data={data}>
            {/* {data?.page?.content ? <div dangerouslySetInnerHTML={{ __html: sanitize(data?.page?.content ?? {}) }} /> : null} */}content

        </Layout>



    );
}

export async function getStaticProps(context) {

    const { data } = await client.query({
        query: GET_MENUS,

    });

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    // revalidate: 1
    return {
        props: {
            data: {
                header: data?.header || [],
                menus: {
                    headerMenus: data?.headerMenus?.edges,
                    footerMenus: data?.footerMenus?.edges,
                },
                footer: data?.footer || [],

            }
        }
    };

}