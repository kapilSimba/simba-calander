import Head from "next/head";
import Image from "next/image";
import Calander from "./calander";

export default function Home() {
  return (
    <div className="bg-red-400 flex justify-center py-6 h-[100vh]">
      <Calander />
    </div>
  );
}
