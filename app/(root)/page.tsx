import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?:string}>}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="grey_container">
        <h1 className="heading">
          Read Anything About <br/>Software Engineering
        </h1>
        <p className="sub-heading !max-w-3xl">
          A blog about software engineering, programming, and web development.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
