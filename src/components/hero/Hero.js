
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark {
            nodes {
              frontmatter {
                description
                subtitle
                title
                img {
                  alt
                  file {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            layout: FULL_WIDTH
                          )
                    }
                  }
                }
                link
              }
              html
            }
          }
      }
    `);
    const { nodes = [] } = data?.allMarkdownRemark || {};

    return (
        <section className='py-4'>
            <div className='container'>
                <HeroCarousel data={nodes}/>
            </div>
        </section>
    )
}