import Link from "next/link";
import { Date } from "components/Date";
import { IReleaseNoteFields } from "types/generated/contentful";
import marked from "marked";

/**
 * Ref:
 * - Stripe Changelog: https://stripe.com/blog/changelog
 * - Changefeed: https://changelog.changefeed.app/
 */
type ReleaseProps = IReleaseNoteFields;

export const ReleaseNote = ({
  version,
  category,
  releaseDate,
  description,
  scope,
}: ReleaseProps) => (
  <article className="container text-gray-800 my-16">
    <div className="mx-3 sm:w-2/3 sm:mx-auto">
      <h2 className="text-4xl sm:text-5xl font-semibold leading-snug">
        <Link href={`/release-notes/v${version}`}>
          <a>v{version}</a>
        </Link>
      </h2>
      <div className="text-xl mb-2 text-gray-700">
        <span>{category}</span> ·{" "}
        <span>
          <Date date={releaseDate} />
        </span>
      </div>
      <div className="space-y-2">
        {scope?.map((item) => (
          <span
            key={item}
            className="text-white bg-indigo-600 px-3 mr-2 small-caps rounded-md text-lg inline-block"
          >
            {item}
          </span>
        ))}
      </div>
      {description && (
        <div
          style={{ maxWidth: "70ch" }}
          className="release-note text-lg my-6 space-y-4"
          dangerouslySetInnerHTML={{ __html: marked(description) }}
        />
      )}
    </div>
  </article>
);
