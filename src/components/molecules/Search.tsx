import classNames from "classnames";
import { Icon } from "components/atoms";
import { useCallback, useState } from "react";
import { search } from "lib/algolia";
import Link from "next/link";

type SearchResult = {
  _highlightResult: {
    [key: string]: highlightResultValueInterface;
  };
  category: string;
  content: string;
  date: string;
  objectID: string;
  title: string;
  url: string;
};

type ResultItemProps = {
  result: { [key: string]: any };
};

const ResultItem = ({ result }: ResultItemProps) => {
  return (
    <div
      data-cy="search-result"
      className="mb-2 text-lg text-xl text-left text-gray-800"
    >
      <Link href={result.url}>
        <a>
          <div>{result.title}</div>
          <p
            className="overflow-hidden text-lg text-gray-600"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
            }}
          >
            {result.content}
          </p>
        </a>
      </Link>
    </div>
  );
};

type ResultsProps = {
  results: { [key: string]: any }[]; // ugh
  query: string;
};

const Results = ({ results, query }: ResultsProps) => (
  <>
    {results.length ? (
      <div className="flex px-6 display">
        <div className="pr-4 text-lg text-gray-500 border-r-2 border-gray-200 small-caps">
          Releases
        </div>
        <div className="ml-4">
          {results.map((result) => (
            <ResultItem key={result.title} result={result} />
          ))}
        </div>
      </div>
    ) : (
      <span data-cy="no-search-result">
        No results found for query <strong>{query}</strong>
      </span>
    )}
  </>
);

type SearchProps = {
  className?: string;
};

export const Search = ({ className }: SearchProps) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>([]);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  const updateResults = (currentQuery: string) => {
    search(currentQuery)
      .then(({ hits }) => {
        setResults(hits);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(false);
      });
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (e.target.value.length > 0) {
      setLoading(true);
      updateResults(e.target.value);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className={classNames(className, "relative")}>
      <div className="relative flex items-center w-full">
        <label className="sr-only" htmlFor="search">
          search
        </label>
        <input
          type="search"
          id="search"
          className="w-full px-4 py-4 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus-outline"
          placeholder="Search"
          onChange={handleChange}
          onBlur={() => {
            setQuery("");
          }}
          data-cy="search-input"
        />
        <Icon
          className="absolute right-0 z-10 w-10 h-10 mr-3 text-gray-300 transform -translate-y-1/2 pointer-events-none fill-current hover:opacity-75"
          style={{ top: "50%" }}
          id="magnifyingGlass"
        />
        {query.length > 0 && (
          <div
            style={{ top: "110%", zIndex: 1 }}
            className="absolute w-full py-8 space-y-2 bg-white border-gray-300 rounded shadow"
          >
            {loading ? (
              <p>Loading…</p>
            ) : error ? (
              <p>Ooops… Something went wrong</p>
            ) : (
              <Results results={results} query={query} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
