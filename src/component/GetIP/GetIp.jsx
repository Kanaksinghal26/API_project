// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { toast, ToastContainer } from 'react-toastify'
// import { compileString } from 'sass'

// const GetIp = () => {

//     const [data, setData] = useState()

//     const getData = () => {
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then(res => {
//             setData(res.data)
//             toast.success('🦄 Wow so easy! IP', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 });
//         })

//         .catch(err => {
//             console.log(err)
//         })    
//     }

//     useEffect(() =>{
//         console.log("useEffect")
//         getData()
        
//     })
//   return (
//     <div>
//         {
//             data ? data.ip : <button onClick={getData}>Get My IP</button>
//         }

//         <ToastContainer
//             position="top-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             />
//             {/* Same as */}
//         <ToastContainer />

//     </div>
//   )
// }

// export default GetIp