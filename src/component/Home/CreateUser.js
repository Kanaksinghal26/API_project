import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CreateUser = () => {

	const[username, setUsername] = React.useState()
	const[email, setEmail] = React.useState()
	const[fullname, setFullname] = React.useState()
	const[phone, setPhone] = React.useState()
	const[website, setWebsite] = React.useState()
	const[street, setStreet] = React.useState()
	const[suite, setSuite] = React.useState()
	const[city, setCity] = React.useState()
	const[zipcode, setZipcode] = React.useState()
	const[company, setCompany] = React.useState()

	const handleusername = (e) => {
		setUsername(e.target.vale)
	}

	const handleemail = (e) => {
		setEmail(e.target.vale)
	}

	const handlefullname = (e) => {
		setFullname(e.target.vale)
	}

	const handlephone = (e) => {
		setPhone(e.target.vale)
	}

	const handlewebsite = (e) => {
		setWebsite(e.target.vale)
	}

	const handlestreet = (e) => {
		setStreet(e.target.vale)
	}

	const handlesuite = (e) => {
		setSuite(e.target.vale)
	}

	const handlecity = (e) => {
		setCity(e.target.vale)
	}

	const handlezipcode = (e) => {
		setZipcode(e.target.vale)
	}

	const handlecompany = (e) => {
		setCompany(e.target.vale)
	}

    return (
        <>
			<div>
				<h1>New Registration List</h1>
			</div>

			<Box className='addnew'
			sx={{
				width: 500,
				maxWidth: '100%',
				}}
				>

			<TextField fullWidth label="UserName" id="fullWidth" onClick={handleusername} />
			<TextField fullWidth label="User Email" id="fullWidth" onClick={handleemail} />
			<TextField fullWidth label="Ful Name" id="fullWidth" onClick={handlefullname} />
			<TextField fullWidth label="Phone" id="fullWidth" onClick={handlephone} />
			<TextField fullWidth label="Website URL" id="fullWidth" onClick={handlewebsite} />
			<TextField fullWidth label="Street" id="fullWidth" onClick={handlestreet} />
			<TextField fullWidth label="Enter Suite" id="fullWidth" onClick={handlesuite} />
			<TextField fullWidth label="Enter City" id="fullWidth" onClick={handlecity} />
			<TextField fullWidth label="Enter ZipCode" id="fullWidth" onClick={handlezipcode} />
			<TextField fullWidth label="Company Name" id="fullWidth" onClick={handlecompany} />

			</Box>
        </>
      );
}

export default CreateUser