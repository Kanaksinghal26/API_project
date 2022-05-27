import React from 'react'
import Home from './component/Home/Home'
import { BrowserRouter, Routes, Route } from  "react-router-dom" ;
import UserDetail from './component/Home/UserDetail';


const App = () => {
  return (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/"  element={<Home />} />
				<Route path='/user/:username' element={<UserDetail />} />
			</Routes>
		</BrowserRouter>
	</>
  )
}

export default App


