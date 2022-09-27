// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

// The Gatsby Head API is used by exporting a named function called Head in your pages and page templates
// It lets you add document metadata to the generated pages
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
