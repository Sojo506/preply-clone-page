import About from "@/components/About";
import CardProfile from "@/components/CardProfile";
import Header from "@/components/Header";
import Resume from "@/components/Resume";
import Schedule from "@/components/Schedule";
import Students from "@/components/Students";
import Subjects from "@/components/Subjects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <CardProfile />
      <main className="flex flex-col items-center bg-gray-200 pt-10 px-2 pb-1">
        <About />
        <Schedule />
        <Students />
        <Resume />
        <Subjects />
      </main>
    </>
  );
}
