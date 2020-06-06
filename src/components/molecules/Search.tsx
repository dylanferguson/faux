import classNames from "classnames";
import { Icon } from "components/atoms";
import { useCallback, useState } from "react";
import { search } from "lib/algolia";

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

const ResultItem = ({ result }: ResultItemProps) => (
  <div data-cy="search-result">{result.title}</div>
);

type ResultsProps = {
  results: { [key: string]: any }[]; // ugh
  query: string;
};

const Results = ({ results, query }: ResultsProps) => (
  <div
    style={{ top: "110%", zIndex: 1 }}
    className="absolute bg-white w-full border-gray-300 rounded shadow py-8 space-y-2"
  >
    {results.length ? (
      results.map((result) => <ResultItem key={result.title} result={result} />)
    ) : (
      <span data-cy="no-search-result">
        No results found for query <strong>{query}</strong>
      </span>
    )}
  </div>
);

type SearchProps = {
  className?: string;
};

export const Search = ({ className }: SearchProps) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>([]);
  const [query, setQuery] = useState("");

  const updateResults = (currentQuery: string) => {
    search(currentQuery).then(({ hits }) => {
      setResults(hits);
      setLoading(false);
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
    <>
      <form className={classNames(className, "relative")}>
        <fieldset className="w-full relative  flex items-center">
          <input
            type="search"
            className="shadow appearance-none border rounded w-full text-xl py-4 px-4 text-gray-700 leading-tight focus-outline"
            placeholder="Big Friendly Search"
            onChange={handleChange}
            onBlur={() => {
              setQuery("");
            }}
            data-cy="search-input"
          />
          <Icon
            className="absolute right-0 w-10 h-10 z-10 mr-3 pointer-events-none fill-current text-gray-300 hover:opacity-75"
            id="magnifyingGlass"
          />
          {query.length > 0 && <Results results={results} query={query} />}
        </fieldset>
      </form>
    </>
  );
};
