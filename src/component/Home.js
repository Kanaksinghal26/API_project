import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss'
import UserCard from './UserCard';

const Home = () => {

  const [userList, setUserList] = useState();

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
      setUserList(res.data)
    })
    .catch(err =>{

    })
  }

  useEffect(() =>{
      fetchData()
  }, )
  return (
      <div className='home'>
        <div className='home-container flex flex-col'>
          <div className='home-container-heading'><h1>List of users</h1></div>
          <div className='home-container-list flex flex-wrap' style={{gap: '2rem'}}>
            {
              userList && userList.map(ul => {
                return <UserCard item={ul} />
              })
            }
          </div>
        </div>
      </div>
  )
}

export default Home