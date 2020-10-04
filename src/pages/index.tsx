import { Header } from "components/organisms";
import { Link } from "components/atoms";

const Index = () => (
  <Header title="Faux! A Headless CMS POC">
    <div className="mx-auto" style={{ maxWidth: "55ch" }}>
      See{" "}
      <Link className="text-indigo-700 hover:text-indigo-500" href="/blog/">
        blog
      </Link>{" "}
      for an overview of the architecture, the technical choices made and the
      benefits of a Headless CMS-based stack
    </div>
  </Header>
);

export default Index;
