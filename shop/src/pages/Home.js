import HeroHome from "../hero/HeroHome";
export default function Home() {
  return (
    <div className="flex-col flex justify-center items-center bg-blue-200 min-h-[1000px] relative">
      <HeroHome />
      <p>Home page</p>
    </div>
  );
}
