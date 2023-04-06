import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      this is home{data.length}
    </div>
  )
}

export default Home