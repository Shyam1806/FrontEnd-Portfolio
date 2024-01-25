import React from 'react'

const Footer = () => {
    const dateyeardetails = new Date();
    const autodetails = dateyeardetails.getFullYear();
    console.log("details-year" , autodetails);
    return (
        <>
            <div className="footer-parent bg-slate-700 pt-2 pb-2">
                <p className="text-white text-center">
                Designed and Coded with <span>&#10084;</span> by Shyam. © {autodetails} All rights reserved.                </p>
            </div>
        </>
    )
}

export default Footer