import * as React from "react"
import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HeroSection } from "../components/Hero";
import Section1 from "../components/Section1";
import { themeOptions } from "../../mui.config";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const theme = createTheme(themeOptions);
const IndexPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <HeroSection />
          <Section1 />
          <Section2 />
          <Section3 />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Риа Моторс" />

export default IndexPage
