import React, { useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import 'react-toastify/dist/ReactToastify.css';
import CreateUser from './CreateUser';



const UserDetail = (props) => {

    const [weather, setWeather] = useState()
    const [userData, setUserData] = useState()
    const location = useLocation()


    const notify = ()=>{
        toast.success('Succed', {autoClose:3000, position:"top-left", progress:undefined,})       // Set to 3sec 
    }


    const pullData = () => {
        axios.get("https://jsonplaceholder.typice.com/users")
        .then(res => {
            setWeather(res.data)
        })

        .catch(err => {
            console.log(err)

        })    
    }

    useEffect(() => {
        

        pullData()



        if (location.state) {
            setUserData(location.state.userData)
        }
    }, [])

    return (
        <div className='user-detail'>
            <div className='user-detail-container'><h1>Detail of User</h1></div>
            <div className='user-detail-container-inner flex flex-col'>
                {
                    userData && <>
                        <div>
                            Id: <b>{userData.id}</b>
                        </div>

                        <div>
                            Full Name : <b>{userData.name}</b>
                        </div>

                        <div>
                            Email : <b>{userData.email}</b>
                        </div>

                        <div>
                            Email : <b>{userData.username}</b>
                        </div>

                        <div>
                            phone: <b>{userData.phone}</b>
                        </div>

                        <div>
                            Website: <b>{userData.website}</b>
                        </div>

                        <div>
                            Full Address:
                             <b>
                                 <Link to={`/${userData.address.city}/detail`}
                                    state={{cityName: userData.address.city}}>

                                    {userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}
                                 </Link>
                            </b>
                        </div>

                        <div>
                            Company Name: <b>{userData.company.name}</b>
                        </div>

                        <div>
                            {weather && weather}
                        </div>
                        
                    </>		
                }
            </div>      

               
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
      </div >
  )


}

export default UserDetail








