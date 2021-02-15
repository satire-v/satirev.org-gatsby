// import { processArticleQuery } from "queries/Article";
// import { ArticleFullFragment } from "#graphql";

export type Maybe<T> = T | undefined;

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type ImageSharpFluid = {
  readonly base64: Maybe<Scalars["String"]>;
  readonly tracedSVG: Maybe<Scalars["String"]>;
  readonly aspectRatio: Scalars["Float"];
  readonly src: Scalars["String"];
  readonly srcSet: Scalars["String"];
  readonly srcWebp: Maybe<Scalars["String"]>;
  readonly srcSetWebp: Maybe<Scalars["String"]>;
  readonly sizes: Scalars["String"];
  readonly originalImg: Maybe<Scalars["String"]>;
  readonly originalName: Maybe<Scalars["String"]>;
  readonly presentationWidth: Scalars["Int"];
  readonly presentationHeight: Scalars["Int"];
};

export type GatsbyImageSharpFluid_withWebpFragment = Pick<
  ImageSharpFluid,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

const searchQuery = `
  {
    articles: allDataArticle(limit: 100) {
      edges {
        node {
          id
          body
          category {
            name
            slug
          }
          featured_image {
            title
            data {
              full_url
            }
            localFile {
              extension
              childImageSharp {
                fluid(
                  maxWidth: 960
                  maxHeight: 540
                  fit: CONTAIN
                  srcSetBreakpoints: [240, 480]
                ) {
                  aspectRatio
                  originalImg
                  originalName
                  presentationHeight
                  presentationWidth
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
          slug
          tags
          title
          modified_on
          legacy_slug
        }
      }
    }
  }
`;

const flatten = arr =>
  arr.map(({ node: { ...rest } }) => {
    return {
      ...rest,
    };
  });

const searchQueries = [
  {
    query: searchQuery,
    indexName: `TestArticles`,
    transformer: ({ data }) => flatten(data.articles.edges),
  },
];

export default searchQueries;
