import { gql } from "@apollo/client";

export const GET_POSTS = gql`
    query GetAllPosts {
        posts {
        edges {
            node {
            title
            uri
            excerpt
            content
            }
        }
        }
    }
`