import React from 'react'
import "./picwrapper.css"

function page({ children }) {
    return (
        <div className="main-image-wrapper">
            <figure className="aligncenter">
                {children}
            </figure>
        </div>
    )
}

export default page