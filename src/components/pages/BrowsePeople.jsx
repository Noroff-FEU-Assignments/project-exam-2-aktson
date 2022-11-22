import React from 'react'
import UsersContext from '../context/UsersContext'
import UserCard from '../uiComponents/cards/UserCard'
import Section from '../uiComponents/Section'


function BrowsePeople() {
    document.title = "Browse People | ShareIt"

    const { users } = React.useContext(UsersContext)

    return (

        <Section>
            <div className='grid grid-cols-auto md:grid-cols-2  gap-8 '>
                {users && users.map(user => {
                    return <UserCard user={user} key={user.email} />
                })}
            </div>
        </Section>

    )

}

export default BrowsePeople