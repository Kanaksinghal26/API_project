import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from  "react-router-dom" ;

const App = () => {
  return (
	<>
		<BrowserRouter>
			<Routes>
				<Route path = "/" element = {<Home />}	/>
			</Routes>
		</BrowserRouter>
	</>
  )
}

export default App