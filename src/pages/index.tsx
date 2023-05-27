import GridGallery from "@/components/GridGallery/GridGallery";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useDebounce } from "@/hooks/useDebounce";
import { getData } from "@/utility/getData";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const data = await getData();

  return {
    props: {
      photos: data,
    },
  };
};

interface Props {
  photos: IPhoto[];
}

const Home = ({ photos }: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredGallery, setFilteredGallery] = useState<IPhoto[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const { debouncedValue, loading } = useDebounce(searchInput, 1000);

  useEffect(() => {
    let re = new RegExp(`${debouncedValue}`, "gi");
    searchInput.length >= 3
      ? setFilteredGallery(photos.filter((photo) => photo.title.match(re)))
      : setFilteredGallery([]);
  }, [debouncedValue, photos, searchInput, searchInput.length]);

  return (
    <div className="flex flex-col gap-10 items-center justify-center m-4">
      <h1>Instagallery</h1>
      <h3>Search your favorite pics here</h3>
      <SearchBar
        setSearchInput={setSearchInput}
        setShowResult={setShowResult}
      />
      <div>{loading && searchInput.length >= 3 && <p>Waiting...</p>}</div>
      <div className="w-full justify-center items-center flex flex-col">
        {searchInput.length < 3 ? (
          <p>Enter at least 3 characters to get results.</p>
        ) : (
          !loading && (
            <GridGallery
              searchInput={searchInput}
              filteredGallery={filteredGallery}
            />
          )
        )}
        {showResult &&
          !loading &&
          !filteredGallery.length &&
          searchInput.length >= 3 && (
            <p>No result found. Search for something else</p>
          )}
      </div>
    </div>
  );
};

export default Home;
