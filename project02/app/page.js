'use client'

import Image from "next/image";

export default function Home() {

  function handleChange(e) {
    console.log(e.target.value);
    
  }

  console.log("where");
  return (
    <main>
      <input className="bg-white" type="text" placeholder="type here" onChange={handleChange}/>
    </main>
  );
}
