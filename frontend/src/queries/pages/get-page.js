import { gql } from '@apollo/client';
import MenuFragment from '../fragments/menus';
import { HeaderFooter } from '../get-header-footer'
import SeoFragment from '../fragments/seo';

// Get Pages

export const GET_PAGE = gql`
    query GET_PAGE($uri: String) {
        ${HeaderFooter}
        page: pageBy(uri: $uri) {
            id
            title
            content
            slug
            uri
            seo {
                ...SeoFragment
              }
        }
    }
    ${MenuFragment}
    ${SeoFragment}
`;
