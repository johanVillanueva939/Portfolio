import React from 'react'

export const Nav = ({enlaces, children}) => {
    return (
        <>
            <a href={enlaces} target="_blank" rel="noopener noreferrer">{children}</a>
        </>
    )
}

export default Nav