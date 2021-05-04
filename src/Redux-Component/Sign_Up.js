// import React, { useState } from 'react'
// import Compose from './Compose';
// import Display from './Display';


// function Sign_Up() {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [userError, setUserError] = useState(false);
//     const [passwordError, setPasswordError] = useState(false);

//     function loginHandle(e) {
        
//         if(username || password != "")
//         {
//             <>
//                <Compose/>
//                <Display/>
//            </>
//         }
//         else
//         {
//            alert("Not valid");
//         }
//         e.preventDefault();
//     }

//     function userHandle(e){
//         let item=e.target.value;
//         if(item.length<3){
//             setUserError(true)
//         }
//         else{
//             setUserError(false)
//         }
//         setUsername(item)
//     }

//     function passwordHandle(e){
//         let item=e.target.value;
//         if(item.length<3){
//             setPasswordError(true)
//         }
//         else{
//             setPasswordError(false)
//         }
//         setPassword(item)
//     }

//     return (
//         <form onSubmit={loginHandle}>
//             <label>USERNAME: </label>
//             <input
//                 type="text"
//                 onChange={userHandle}
//             />
//             <br/>{userError?<span>Invalid Username</span>:""}
//             <br /><br />
//             <label>PASSWORD: </label>
//             <input
//                 type="text"
//                 onChange={passwordHandle}
//             />
//             <br/>{passwordError?<span>Invalid Password</span>:""}
//             <br /><br />
//             <button>Submit</button>
//         </form>
//     )
// }

// export default Sign_Up
