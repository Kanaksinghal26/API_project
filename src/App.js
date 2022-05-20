import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from  "react-router-dom" ;
import UserDetail from './UserDetail';

const App = () => {
  return (
	<>
		<BrowserRouter>
			<Routes>
				<Route path = "/" element = {<Home />}	/>
				<Route exact path="user/:username" element = {<UserDetail />} />
			</Routes>
		</BrowserRouter>
	</>
  )
}

export default App