import React from 'react'

function Loader() {
    return (
        <div aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center  ">
            <div className="p-6 space-y-6  flex justify-center h-full items-center backdrop-opacity-40 bg-dark/40">
                <div className="text-center z-60 ">
                    <div class="lds-facebook"><div></div><div></div><div></div></div>
                </div>
            </div>
        </div>
    )
}

export default Loader