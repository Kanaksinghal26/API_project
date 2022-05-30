import React from 'react'
import Home from './component/Home/Home'
import { BrowserRouter, Routes, Route } from  "react-router-dom" ;
import UserDetail from './component/Home/UserDetail';
import CityDetail from './component/Home/CityDetails';
import CreateUser from './component/Home/CreateUser';
// import GetIp from './component/GetIP/GetIp'




const App = () => {
  return (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/"  element={<Home />} />
				<Route exact path='/user/:username' element={<UserDetail />} />
				<Route exact path='/:city/detail' element={<CityDetail />} />
				{/* <Route exact path='/getip' element={<GetIp />} /> */}
				<Route exact path='/createuser' element={<CreateUser />} />
			</Routes>
		</BrowserRouter>
	</>
  )
}

export default App


