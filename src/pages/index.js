// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Fern sprouts"
        src="https://images.unsplash.com/photo-1663919009310-ecd1d054e09f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </Layout>
  );
};

// The Gatsby Head API is used by exporting a named function called Head in your pages and page templates
// It lets you add document metadata to the generated pages
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
