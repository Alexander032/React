import React from 'react';
import Chat from "./components/Chat";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Routes, Route, NavLink} from "react-router-dom";

const App = () => {
    return (
        <>
             <Routes>
                <Route path={'/'} element ={<Layout/>}>
                    <Route index element = {<Home/>}/>
                    <Route path='/Profile' element ={<Profile/>}/>
                    <Route path='/Chat' element={<Chat/>}/>
                    <Route path='*' element ={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );

};

export default App;