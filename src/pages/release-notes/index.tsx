import { getStaticProps as pageStaticProps } from "./page/[page]";

// Probably a more idiomatic Next.js way to do this…

export { default } from "./page/[page]";

export const getStaticProps = () => pageStaticProps({ params: { page: "1" } });
