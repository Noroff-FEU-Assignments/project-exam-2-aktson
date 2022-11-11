import React from 'react'
import PropTypes from "prop-types";

function WrapperSignInUp({ children }) {
    const bg = "https://img.freepik.com/free-vector/illustration-social-https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1380&t=st=1668206552~exp=1668207152~hmac=802894084160d7c592ec7dce3808f172743d2497e92dd2534c2280a2b110eab6-concept_53876-18310.jpg?w=1380&t=st=1668206403~exp=1668207003~hmac=43267c564a3302d61b0250e3797ae8da789e8c17bf38e376111897f77926f3ac"


    return (
        <section className=' h-screen flex justify-center items-center'
            style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            {children}
        </section>
    )
}

export default WrapperSignInUp




WrapperSignInUp.prototype = {
    children: PropTypes.node.isRequired
}