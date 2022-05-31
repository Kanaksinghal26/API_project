import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import './Home.scss'
import UserCard from './UserCard';
import { Button, ButtonGroup } from '@chakra-ui/react'

const Home = () => {

	const [userList, setUserList] = useState();
	const [searchText, setSearchText] = useState();
	const [searchTextEmail, setSearchTextEmail] = useState();
	const [searchTextPhone, setSearchTextPhone] = useState(0);
	const [searchTextFullName, setSearchTextFullName] = useState();


	const fetchData = () => {
		axios.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				setUserList(res.data)
				console.log(res)
			})
			.catch(err => {
				console.log("error")
			})
	}



	const handleSearch = (e) => {
		setSearchText(e.target.value)
	}

	const handleSearchEmail = (e) => {
		setSearchTextEmail(e.target.value)
	}

	const handleSearchPhone = (e) => {
		setSearchTextPhone(e.target.value)
	}

	const handleSearchFullName = (e) => {
		setSearchTextFullName(e.target.value)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const filterList = () => {
		if (searchText) {
			return userList && userList.filter(ul => ul.username
				.toLowerCase().startsWith(searchText.toLowerCase()))
		}

		else if (searchTextEmail) {
			return userList && userList.filter(ul => ul.email.toLowerCase().startsWith(searchTextEmail.toLowerCase()))
		}

		else if (searchTextPhone) {
			return userList && userList.filter(ul => ul.phone.toLowerCase().startsWith(searchTextPhone.toLowerCase()))
		}

		else if (searchTextFullName) {
			return userList && userList.filter(ul => ul.name.toLowerCase().startsWith(searchTextFullName.toLowerCase()))
		}

		else {
			return userList

		}
	}

	// const filterListEmail =() => {
	// 	if(searchText || searchTextEmail)
	// 		return userList && userList.filter(ul => (ul.email.toLowerCase().startsWith(searchTextEmail?.toLowerCase()) && ul.Object.keys.toLowerCase().startsWith(searchText?.toLowerCase())))
	// 	return userList
	// }

	return (
		<div className='home'>
			<div className='home-container flex flex-col'>
				<div className='home-container-heading'><h1>List of users</h1></div>

				<div className='home-container-search'>
					<input onChange={handleSearchFullName} className="input-search" type="text" placeholder="Search by Full name" id='search4' />
					<input onChange={handleSearch} className="input-search" type="search" placeholder="Search by username" id='search1' />
					<input onChange={handleSearchEmail} className="input-search" type="search" placeholder="Search by email" id='search2' />
					<input onChange={handleSearchPhone} className="input-search" type="number" placeholder="Search by phone" id='search3' />
				</div>

				<div className='home-container-list flex flex-wrap' style={{ gap: '2rem' }}>
					{
						filterList() && filterList().map(ab => {
							return <UserCard item={ab} />
						})
					}
				</div>

				<div id='linkPart'>
					<Link to={'/createuser'}>
						<Button colorScheme='blue'>+ CreateUser</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home


// t3asks -->
// 1. implement filter with all keys.
// 2. Apply CSS  to whole project as Product.
// 3. Apply one in all filter
// 4. Weather Api.
// 5. City details.


// filterList() && filterList().map(ab => {
// 	return <UserCard item={ab} />
// })