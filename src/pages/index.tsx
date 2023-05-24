import SearchBar from "@/components/SearchBar/SearchBar"
import { useDebounce } from "@/hooks/useDebounce"
import getData from "@/utility/getData"
import { sliceStringByValue } from "@/utility/sliceStringByValue"
import Image from "next/image"
import { useEffect, useState } from "react"


export const getStaticProps = async () => {

    const data = await getData();

    return {
      props: {
        photos: data
      }
    }
    
}

interface Props {
    photos: IPhoto[]
}

const Home = ({photos}: Props) => {

    const [searchInput, setSearchInput] = useState<string>('');
    const [filteredGallery, setFilteredGallery] = useState<IPhoto[]>([])
    const [showResult, setShowResult] = useState<boolean>(false)
    const {debouncedValue, loading} = useDebounce(searchInput, 1000)

    useEffect(() => {
        let re = new RegExp(`${debouncedValue}`, "gi");
        searchInput.length >= 3 ?
          setFilteredGallery(
            photos.filter(photo => (
                  photo.title.match(re)
              ))
          )
        : setFilteredGallery([])

    }, [debouncedValue, photos, searchInput, searchInput.length]);
    

    return (
        <div className="flex flex-col gap-10 items-center justify-center m-4">
            <h1>Instagallery</h1>
            <h3>Search your favorite pics here</h3>
            <SearchBar
            setSearchInput={setSearchInput}
            setShowResult={setShowResult}
            setFilteredGallery={setFilteredGallery}
            />
            <div>
            {!!filteredGallery.length && <p>Results:</p>}
                        
            {showResult && searchInput.length < 3 && !loading && <p>Enter at least 3 characters to get results.</p> }
            
            </div>
                {
                  loading
                  ? showResult && <p>Waiting...</p>
                  : filteredGallery?.length
                    ?  
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {filteredGallery?.slice(0,12).sort((a,b) => a.title.localeCompare(b.title)).map(photo => {
                        return (
                          <li key={photo.id}>
                              <Image
                              width={300}
                              height={300} 
                              src={photo.url}
                              alt={photo.title} 
                              />
                              <p>
                                {
                                  sliceStringByValue(photo.title, searchInput)
                                  .map(str => (
                                    str === searchInput
                                    ? <span key={str} className="bg-amber-500 font-semibold">{str}</span> 
                                    : str
                                  ))
                                }
                              </p>
                          </li>
                      )})}
                    </ul>
                    : showResult && searchInput.length >= 3 && <p>No result found. Search for something else</p>
                }
        </div>
    )
}

export default Home;
