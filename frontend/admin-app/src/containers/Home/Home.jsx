import React from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'

const Home = () => {
  return (
    <div>
      <Jumbotron
      style={{textAlign:"center", margin:"5rem", background:"white"}}
      heading="Welcome to Admin Dashboard"
      paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam vero placeat, magnam aut, enim possimus expedita sit amet consectetur adipisicing elit. Numquam vero placeat, magnam aut, enim possimus expedita a ullam praesentium doloribus iusto, distinctio tempora eligendi consequatur omnis quisquam dicta dolore similique?"
      />
    </div>
  )
}

export default Home
