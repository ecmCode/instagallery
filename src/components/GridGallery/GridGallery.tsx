import { sliceStringByValue } from "@/utility/sliceStringByValue";
import Image from "next/image";

interface Props {
  searchInput: string;
  filteredGallery: IPhoto[];
}

const GridGallery = ({ searchInput, filteredGallery }: Props) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {filteredGallery
        ?.slice(0, 12)
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((photo) => {
          return (
            <li key={photo.id}>
              <Image
                width={300}
                height={300}
                src={photo.url}
                alt={photo.title}
              />
              <p>
                {sliceStringByValue(photo.title, searchInput).map((str) =>
                  str === searchInput ? (
                    <span
                      key={photo.id + crypto.randomUUID()}
                      className="bg-amber-500 font-semibold"
                    >
                      {str}
                    </span>
                  ) : (
                    str
                  )
                )}
              </p>
            </li>
          );
        })}
    </ul>
  );
};

export default GridGallery;
