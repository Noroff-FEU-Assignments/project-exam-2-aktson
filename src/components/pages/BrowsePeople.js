import React from 'react'
import Container from '../uiComponents/Container'
import UsersContext from '../context/UsersContext'
import UserCard from '../uiComponents/cards/UserCard'


function BrowsePeople() {
    const { users } = React.useContext(UsersContext)

    return (
        <Container>
            <section className="my-20">
                <div className='grid grid-cols-auto md:grid-cols-2  gap-8 '>
                    {users && users.map(user => {
                        return <UserCard user={user} key={user.email} />
                    })}
                </div>
            </section>
        </Container>
    )

}

export default BrowsePeople