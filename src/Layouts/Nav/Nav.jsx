import React from 'react'

export const Nav = ({links, children}) => {
    return (
        <>
            <a href={links}>{children}</a>
        </>
    )
}

export default Nav