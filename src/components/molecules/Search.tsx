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
      className="text-gray-800 text-lg mb-2 text-left text-xl"
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
      <div className="display flex px-6">
        <div className="text-lg text-gray-500 small-caps border-r-2 pr-4 border-gray-200">
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
      <div className="w-full relative  flex items-center">
        <label className="sr-only" htmlFor="search">
          search
        </label>
        <input
          type="search"
          id="search"
          className="shadow appearance-none border rounded w-full text-xl py-4 px-4 text-gray-700 leading-tight focus-outline"
          placeholder="Search"
          onChange={handleChange}
          onBlur={() => {
            setQuery("");
          }}
          data-cy="search-input"
        />
        <Icon
          className="absolute transform -translate-y-1/2 right-0 w-10 h-10 z-10 mr-3 pointer-events-none fill-current text-gray-300 hover:opacity-75"
          style={{ top: "50%" }}
          id="magnifyingGlass"
        />
        {query.length > 0 && (
          <div
            style={{ top: "110%", zIndex: 1 }}
            className="absolute bg-white w-full border-gray-300 rounded shadow py-8 space-y-2"
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
