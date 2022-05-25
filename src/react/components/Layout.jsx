import React from 'react';
import {NavLink, Outlet, Link} from "react-router-dom";
import CustomLink from "../components/CastomLink";

const Layout = () => {
    return (
        <>
            <header style={{width: '100%', height: 100, background: '#86aecc'}}>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/Profile'>Profile</CustomLink>
                <CustomLink   to="/Chat">Chat</CustomLink>
            </header>
            <main>
                <Outlet/>
            </main>

            <footer>

            </footer>
        </>
    );
};

export default Layout;