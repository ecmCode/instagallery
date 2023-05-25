import Link from "next/link";

interface Props {
  results: string[];
}

const Results = ({ results }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {results.length >= 8 && <Link href="">More contents: </Link>}
    </div>
  );
};

export default Results;
