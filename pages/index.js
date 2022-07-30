import Head from "next/head";
import Image from "next/image";
import Calander from "./calander";
import Tables from "./table";
import { useState } from "react";
export default function Home({ columns }) {
  const [date, setDate] = useState("");

  return (
    <div className="bg-red-400 flex justify-start gap-8 py-6 h-[100vh] flex">
      <Calander setDate={setDate} />
      <Tables date={date} />
    </div>
  );
}
