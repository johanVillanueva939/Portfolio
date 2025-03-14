import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = ({ route, children }) => {
    return (
        <>
            <NavLink to={route} href={route}>{children}</NavLink>
        </>
    )
}

export default Nav