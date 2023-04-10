import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../containers/Home/Home'
import Signin from '../containers/Signin/Signin'
import Signup from '../containers/Signup/Signup'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
    )
}

export default AllRoutes
