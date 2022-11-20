import React from 'react'
import { Input, Avatar } from '@material-tailwind/react'
import { MdPersonSearch } from "react-icons/md"
import UsersContext from '../../context/UsersContext'
import defaultAvatar from "../../../assets/user.png";

function SearchInput() {

    const [value, setValue] = React.useState("")
    const { users } = React.useContext(UsersContext)
    const [filteredUsers, setFilteredUsers] = React.useState([])
    const [show, setShow] = React.useState(false)



    const handleSearch = (event) => {
        setValue(event.target.value)
        if (!value) return;

        if (value !== "") {
            const filterUser = users.filter(user => user.name.trim().toLowerCase().includes(value))
            setFilteredUsers(filterUser)
            setShow(true)
        } else if (value === "") {
            setFilteredUsers([])
            setShow(false)

        }
    }



    return (

        <form className='w-full max-w-sm hidden sm:block relative' >
            <Input variant="standard"
                placeholder="Search People"
                className=" w-full max-w-md bg-lightGray rounded-xl text-md p-2"
                icon={<MdPersonSearch size={26} className=" -translate-y-2  -translate-x-4" />}
                value={value}
                onChange={handleSearch}
            />
            {show
                &&
                <div className='absolute grid grid-cols-2 lg:grid-cols-3  bg-lightGray rounded-xl overflow-x-hidden max-h-60'>
                    {filteredUsers &&
                        filteredUsers.length === 0 ?
                        <p className='w-full p-2 py-3'>No users found</p>
                        :
                        filteredUsers.map(user => {
                            return <div key={user.name} className="flex gap-2 bg-gray-200 p-1 rounded-xl shadow-md overflow-hidden m-2">
                                <Avatar src={user.avatar ? user.avatar : defaultAvatar} alt="avatar" size="xs" variant="circular" className='shadow-xl' />
                                <p className='text-sm'>{user.name}</p>
                            </div>

                        })}
                </div>}
        </form>
    )
}

export default SearchInput