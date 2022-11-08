import { Avatar, Button } from '@material-tailwind/react';
import Container from './Container';
import React from 'react';
import EditProfile from './modals/editProfile/EditProfile';



function UserBanner({ user }) {
    const image = "https://img.freepik.com/free-photo/emotional-happy-young-caucasian-female-with-fair-hair-dressed-blue-clothes-giving-her-thumbs-up-showing-how-good-product-is-pretty-girl-smiling-brodly-with-teeth-gestures-body-language_176420-13493.jpg?w=1380&t=st=1667557356~exp=1667557956~hmac=cf5e2aa6232576b7534354e8fd74f8325693bfc180f2b4a0b3d59575aa92d706"
    const banner = "https://img.freepik.com/free-vector/abstract-business-professional-background-banner-design-multipurpose_1340-16858.jpg?w=1800&t=st=1667603478~exp=1667604078~hmac=edff4505156347adbac16eb5d55115445001c6025751b76d8966443136686222"

    const isAdmin = true;


    return (
        <section className='w-full bg-dark my-16 p-4 relative '
            style={{
                backgroundImage: `url(${user?.banner ? user.banner : banner}) `,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "40vh",
                backgroundSize: "cover",
            }}
        >

            <div className='grid grid-cols-auto md:grid-cols-2 max-w-screen-2xl mx-auto items-end justify-items-center p-4 absolute top-0 right-0 left-0 -bottom-2 '>
                <figure className='drop-shadow-xl'>
                    <img src={user?.avatar ? user.avatar : image}
                        alt={user?.name}
                        className="w-40 h-40 lg:w-52 lg:h-52 object-cover rounded-full shadow-xl  justify-items-center md:translate-y-24 " />
                </figure>
                <div className='flex gap-2 flex-col text-primary '>
                    <p className='text-3xl text-light'>{user?.name}</p>
                    {!isAdmin && <Button color='cyan' className="w-auto">Follow</Button>}
                    {isAdmin && <EditProfile />}
                </div>

            </div>

        </section>
    )
}

export default UserBanner