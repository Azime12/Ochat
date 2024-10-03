import React from 'react'
import "./App.css";
import Signup from './components/Authontcaion/SignUp';
import  {
   
    Routes,
    Route 
  } from "react-router-dom"

import Homepage from "./pages/HomePage"
import ChatePage from "./pages/ChatPage"


function App() {

    return ( <div  >
        
 
     <Routes>
      <Route path="/" element={<Homepage />} exact
       />
      <Route path="/chats" element={<ChatePage />} />
     </Routes> 

           
    </div>
    );
}



export default App
