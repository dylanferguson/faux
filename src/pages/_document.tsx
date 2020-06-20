import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="noindex" />
          <meta
            name="version"
            content={process.env.NEXT_PUBLIC_VERSION as string}
          />
          <meta
            name="build-time"
            content={process.env.NEXT_PUBLIC_BUILD_TIME as string}
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin=""
          />
          <link
            rel="preconnect"
            href="https://www.googletagmanager.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;900&display=swap&subset=latin"
            rel="stylesheet"
          />
          {process.env.NODE_ENV === "production" && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });`,
                }}
              ></script>
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
