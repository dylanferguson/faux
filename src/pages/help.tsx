import { Search as SearchBar } from "components/Search";
import { HeaderTitle } from "components/Header";

export default () => {
  return (
    <div
      className="container flex flex-col justify-center text-center"
      style={{ minHeight: "50vh" }}
    >
      <HeaderTitle>Help!</HeaderTitle>
      <div className="flex items-center">
        <SearchBar className="w-full md:w-1/2 mx-auto mb-24" />
      </div>
    </div>
  );
};
