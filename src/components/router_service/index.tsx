import { constRoute } from '../../utils/route'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoard from '@components/dashboard';
import About from '@components/about';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<DashBoard />} />
        <Route path={constRoute.home} element={<DashBoard />} />
        <Route path={constRoute.about} element={<About />} />
      </Routes>
    </>
  )
}
export default Routing