import React from 'react'
import { Routes, Route } from "react-router-dom";
import AApp from "./Admin/App";
import UApp from "./User/App";
import GApp from "./Guest/App";
import HApp from "./Hospital/App";

export default function App() {
  return (
    <Routes>
      <Route path='/Admin/*' element={<AApp />} />
      <Route path='/User/*' element={<UApp />} />
      <Route path='/Hospital/*' element={<HApp />} />
      <Route path='/*' element={<GApp />} />
    </Routes>
  )
}
