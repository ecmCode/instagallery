import Button from "@/components/Button/Button"
import SearchBar from "@/components/SearchBar/SearchBar"
import getData from "@/utility/getData"

export const getStaticProps = async () => {
  const data = await getData()
  return {
    props: {
      photos: data
    }
  }
}

interface Props {
  photos: IPhoto[]
}

export default function Home({photos}: Props) {
  return (
    <div className="flex flex-col gap-10 items-center justify-center m-4">
      <h1>Instagallery</h1>
      <h3>Search your favorite pics here</h3>
      <SearchBar/>
      <p>Results:</p>
    </div>
  )
}
