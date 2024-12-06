import { graphql } from 'gatsby';

export const query = graphql`
  fragment ProjectFragment on ProjectsYaml {
    url
    title
    description
    image {
      childImageSharp {
        gatsbyImageData(width: 600, height: 300, layout: CONSTRAINED)
      }
    }
  }
`;
