import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

// Pages created in the src/pages directory use the name of the file as the route for the page.
// So, in the dev server, we can access this page at localhost:8000/about
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
