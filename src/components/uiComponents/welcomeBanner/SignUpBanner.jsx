import React from 'react'

function SignUpBanner() {

    const image = "https://img.freepik.com/free-vector/emoji-framed-background_53876-91633.jpg?w=1380&t=st=1668206314~exp=1668206914~hmac=0d2d5323c6b00525b5e955fbe11ff18bfe9b2c6ef4231ccc3ca531a69d6ec992"
    return (
        <div className=' flex  flex-col justify-center drop-shadow-lg p-8 lg:px-16' >
            <h1>LOGO</h1>
            <div className='max-w-sm'>
                <h2>Create account and start your Jounrney with us!!</h2>
                <p>Connect and share with thousands others </p>
                {/* <img src={image} /> */}
            </div>
        </div>
    )
}

export default SignUpBanner


// style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}