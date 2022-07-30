import Head from "next/head";
import Image from "next/image";
import Calander from "./calander";
import Tables from "./table";

export default function Home({columns}) {
  return (
    <div className="bg-red-400 flex justify-start gap-8 py-6 h-[100vh] flex">
    
      <Calander />
      <Tables/>
    </div>
  );
}
