import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const UserDetail = (props) => {

    const [userData, setUserData] = useState()

    const location = useLocation()

    useEffect(()  => {

        if (location.state){
            setUserData(location.state.userData)
        }
    }, [])
  return (
      <div>
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
                            Full Address: <b>{userData.address.street}</b>
                        </div>

                        <div>
                            Company Name: <b>{userData.company.name}</b>
                        </div>

                
                        </>
                    }
                </div>    
      </div>
  )
}

export default UserDetail