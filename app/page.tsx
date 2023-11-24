import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold "> Car Catalogue</h1>
          <p>Explore the cars you mi9ght like</p>
        </div>
        <div className="home__filters"> 
        <SearchBar/>
        <div className="home__filter-container">
          <CustomFilter title='fuel'/>
          <CustomFilter title='year'/>
        </div>
        </div>
      </div>
    </main>
  );
}
