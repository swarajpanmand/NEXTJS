'use client'
import ExampleServer from "./ExampleServer"

const ExampleClient = () => {

    console.log("i am cliet")
  return (
    <div>
      <p>this is client</p>
      <ExampleServer/>
    </div>
  )
}

export default ExampleClient
