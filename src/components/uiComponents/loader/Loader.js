import React from 'react'

function Loader() {
    return (
        <div aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center backdrop-blur-sm  ">
            <div className="p-6 space-y-6  flex justify-center h-full items-center bg-dark/60">
                <div className="text-center z-60 ">
                    <div className="lds-facebook"><div></div><div></div><div></div></div>
                </div>
            </div>
        </div>
    )
}

export default Loader