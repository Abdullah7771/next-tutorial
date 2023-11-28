import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home({searchParams}:any) {
  const allCars = await fetchCars({
    manufacturer:searchParams.manufacturer || '',
    model:searchParams.model || '',
    year:searchParams.year || 2022,
    fuel:searchParams.fuel || '',
    limit:searchParams.limit || 10
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold "> Car Catalogue</h1>
          <p>Explore the cars you mi9ght like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel"  options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__ cars-wrapper">
              {allCars.map((car) => (
                <CarCard key={car.manufacturer} car={car} />
              ))}
            </div>
            <ShowMore pageNumber={(searchParams.limit || 10)/10} isNext={(searchParams.limit || 10)>allCars.length} />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold ">Oops No cars</h2>
            <p>{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
