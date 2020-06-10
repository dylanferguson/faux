import { Header } from "components/organisms";
import Link from "next/link";

export default () => (
  <Header title="Faux! A Headless CMS POC">
    See{" "}
    <Link href="/blog/">
      <a>/Blog</a>
    </Link>{" "}
    for an overview of the architecture, the technical choices made and the
    benefits of a Headless CMS-based stack
  </Header>
);
