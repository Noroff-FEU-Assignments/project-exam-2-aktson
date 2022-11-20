import React from 'react'
import UsersContext from '../context/UsersContext'
import UserCard from '../uiComponents/cards/UserCard'


function BrowsePeople() {
    document.title = "Browse People | ShareIt"

    const { users } = React.useContext(UsersContext)

    return (

        <section className="section">
            <div className='grid grid-cols-auto md:grid-cols-2  gap-8 '>
                {users && users.map(user => {
                    return <UserCard user={user} key={user.email} />
                })}
            </div>
        </section>

    )

}

export default BrowsePeople