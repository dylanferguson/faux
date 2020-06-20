import Link from "next/link";
import { Date } from "components/atoms";
import { IReleaseNoteFields } from "types/generated/contentful";
import snarkdown from "snarkdown";

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
  <article className="container my-16">
    <div className="mx-3 sm:w-2/3 sm:mx-auto">
      <h2 className="text-4xl font-semibold leading-snug sm:text-5xl">
        <Link href="/release-notes/[version]" as={`/release-notes/${version}`}>
          <a>{version}</a>
        </Link>
      </h2>
      <div className="mb-2 text-xl text-gray-700">
        <span>{category}</span> ·{" "}
        <span>
          <Date date={releaseDate} />
        </span>
      </div>
      <div className="space-y-2">
        {scope?.map((item) => (
          <span
            key={item}
            className="inline-block px-3 mr-2 text-lg text-white bg-indigo-600 rounded-md small-caps"
          >
            {item}
          </span>
        ))}
      </div>
      {description && (
        <div
          style={{ maxWidth: "70ch" }}
          className="my-6 space-y-4 text-lg release-note"
          dangerouslySetInnerHTML={{ __html: snarkdown(description) }}
        />
      )}
    </div>
  </article>
);
