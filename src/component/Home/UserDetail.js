
import React, { useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
// import GoogleMapReact from 'google-map-react';
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const UserDetail = (props) => {

    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // });



    // if (!isLoaded) return <div>Baad me ana</div>;

    // const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    const [userData, setUserData] = useState()

    const location = useLocation()

    // const defaultProps = {
    //     center: {
    //         lat: 59.95,
    //         lng: 30.33
    //     },
    //     zoom: 11
    // };

    useEffect(() => {

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
                            Full Address: <b>{userData.address.street}, {userData.address.suite}, {userData.address.city}, {userData.address.zipcode}</b>
                        </div>

                        <div>
                            Company Name: <b>{userData.company.name}</b>
                        </div>

                    </>
                }
            </div>

            {/* <GoogleMap zoom={10} center={{lat: userData.address.geo.lat, lng: userData.address.geo.lng }} mapContainerClassName="map-container">

                <Marker position={{lat: userData.address.geo.lat , lng: userData.address.geo.lng }} />
            </GoogleMap> */}
                   
      </div >
  )


}
export default UserDetail








