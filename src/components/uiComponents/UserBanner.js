import { Button } from '@material-tailwind/react';
import React from 'react';
import EditProfile from './modals/EditProfile';
import AuthContext from "../context/AuthContext";



function UserBanner({ user }) {
    const image = "https://img.freepik.com/free-photo/emotional-happy-young-caucasian-female-with-fair-hair-dressed-blue-clothes-giving-her-thumbs-up-showing-how-good-product-is-pretty-girl-smiling-brodly-with-teeth-gestures-body-language_176420-13493.jpg?w=1380&t=st=1667557356~exp=1667557956~hmac=cf5e2aa6232576b7534354e8fd74f8325693bfc180f2b4a0b3d59575aa92d706"

    const { auth } = React.useContext(AuthContext);

    // console.log(auth)
    const isAdmin = true;


    return (
        <section className='w-full h-76 bg-dark col-span-12 lg:col-span-10 my-16 lg:col-start-4 xl:col-start-3 p-4'>
            <div className='grid grid-cols-auto md:grid-cols-2 items-end max-w-7xl justify-items-center gap-4'>
                <div className='md:translate-y-24 drop-shadow-2xl relative'
                    style={{
                        background: `url(${image}) no-repeat center `,
                        height: "200px",
                        width: "200px",
                        backgroundSize: "cover",
                        borderRadius: "50%"
                    }}
                >

                </div>
                <div className='flex gap-2 flex-col text-primary'>
                    <p className='text-3xl'>Ankit Soni</p>
                    {!isAdmin && <Button color='cyan' className="w-auto">Follow</Button>}
                    {isAdmin && <EditProfile />}
                </div>

            </div>

        </section>
    )
}

export default UserBanner