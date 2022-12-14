import React from "react";
import { Link } from "react-router-dom";
import { Input, Avatar, Button } from "@material-tailwind/react";
import { MdPersonSearch, MdClear, MdOutlineSearch } from "react-icons/md";
import UsersContext from "../../../../context/UsersContext";
import defaultAvatar from "../../../../../assets/user.png";
import Animate from "../../../Animate";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

function MobileSearchPeople() {
	const [value, setValue] = React.useState("");
	const { users } = React.useContext(UsersContext);
	const [filteredUsers, setFilteredUsers] = React.useState([]);
	const [show, setShow] = React.useState(false);
	const [showSearchBar, setShowSearchBar] = React.useState(false);

	// closes container on outside click then parent container
	const handleClickOutside = () => {
		setShowSearchBar(false);
		setShow(false);
		setValue("");
	};
	const ref = useOutsideClick(handleClickOutside);

	// filters users array and matches with name
	const handleSearch = (event) => {
		setValue(event.target.value);

		if (!value) return;

		if (value !== "") {
			const filterUser = users.filter((user) => user.name.trim().toLowerCase().includes(value));
			setShow(true);
			setFilteredUsers(filterUser);
		} else {
			setFilteredUsers([]);
			setShow(false);
			setValue("");
		}
	};

	// close button inside searchbar closes result container onclick
	const handleClose = () => {
		setShow(false);
		setValue("");
	};

	// toggles search bar onclick, by default is hidden
	const handleSearchIconClick = () => {
		setShowSearchBar((prevState) => !prevState);
	};

	return (
		<div className="relative">
			<div className="relative flex items-center flex-col justify-center" ref={ref}>
				<Button className="p-0 w-full sm:hidden flex justify-center relative text-white" variant="text">
					<MdOutlineSearch size={24} onClick={handleSearchIconClick} />
				</Button>

				{showSearchBar && (
					<form className={`w-72 absolute -bottom-16  -left-24 sm:hidden`}>
						<Animate>
							<Input
								variant="standard"
								placeholder="Search People"
								color="light-blue"
								className=" w-full max-w-md bg-lightGray rounded-xl text-md p-2 mb-4"
								icon={
									!show ? (
										<MdPersonSearch size={24} className=" -translate-y-1  -translate-x-3 text-primary" />
									) : (
										<MdClear size={24} className=" -translate-y-1  -translate-x-3 cursor-pointer" onClick={handleClose} />
									)
								}
								value={value}
								onChange={handleSearch}
							/>
							{show && (
								<div className="absolute grid grid-cols-2 bg-lightGray rounded-xl overflow-x-hidden  top-full styledScrollbar max-h-72 mt-1 shadow-xl">
									{filteredUsers && filteredUsers.length === 0 ? (
										<p className="w-full p-2 py-3">No users found</p>
									) : (
										filteredUsers.map((user) => {
											return (
												<Link
													to={`/user-specific/${user.name}`}
													key={user.name}
													className="flex gap-2 bg-gray-200 p-1 rounded-xl shadow-md overflow-hidden m-2 items-center">
													<Avatar
														src={user.avatar ? user.avatar : defaultAvatar}
														alt="avatar"
														size="sm"
														variant="circular"
														className="shadow-xl"
													/>
													<p className="text-sm">{user.name}</p>
												</Link>
											);
										})
									)}
								</div>
							)}
						</Animate>
					</form>
				)}
			</div>
		</div>
	);
}

export default MobileSearchPeople;
