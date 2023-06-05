import { sliceStringByValue } from "@/utility/sliceStringByValue";
import Image from "next/image";
import Button from "../Button/Button";

interface Props {
  searchInput: string;
  filteredGallery: IPhoto[];
}

const GridGallery = ({ searchInput, filteredGallery }: Props) => {
  const maxLength = 12;
  return (
    <div>
      {!!filteredGallery.length && (
        <p className="m-4">
          Results:{" "}
          {filteredGallery.length > maxLength ? "12+" : filteredGallery.length}
          {filteredGallery.length > maxLength && (
            <span className="px-1">
              ({filteredGallery.length}){" "}
              <Button href="/gallery" variant="secondary">
                More
              </Button>
            </span>
          )}
        </p>
      )}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
        {filteredGallery
          ?.slice(0, maxLength)
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
    </div>
  );
};

export default GridGallery;
