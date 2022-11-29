import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IconButton, Avatar } from "@material-tailwind/react";
import AuthContext from "../context/AuthContext";
import defaultAvatar from "../../assets/user.png";
import SearchPeopleInput from "../uiComponents/inputs/search/searchPeople/SearchPeopleInput";
import MobileSearchPeople from "../uiComponents/inputs/search/searchPeople/MobileSearchPeople";
import { useProSidebar } from "react-pro-sidebar";
import logo from "../../assets/logo.svg";

function Header() {
	const { auth } = React.useContext(AuthContext);
	const { collapseSidebar, toggleSidebar } = useProSidebar();

	return (
		<header className=" shadow-xl gap-2 z-50 bg-secondary fixed w-full  mx-auto ">
			<div className="flex py-3  px-2 lg:px-12 justify-between rounded-full  mx-auto items-center">
				<Link to="/home" className="p-1">
					<img src={logo} alt="socialMe logo" className="w-24 sm:w-32" />
				</Link>
				<MobileSearchPeople />
				<SearchPeopleInput />
				<div className="flex items-center gap-4">
					<Link to="/my-profile" className="flex items-center gap-2">
						{auth && <p className="text-white text-lg">{auth?.name}</p>}
						{auth && (
							<Avatar
								src={auth?.avatar ? auth.avatar : defaultAvatar}
								alt={auth.name}
								variant="circular"
								size="sm"
								className="shadow-xl "
							/>
						)}
					</Link>
					<IconButton variant="text" className="lg:hidden">
						<MdDashboard className="icon text-light" onClick={() => toggleSidebar()} />
					</IconButton>
					<IconButton variant="text" className="hidden lg:block">
						<MdDashboard className="icon text-light" onClick={() => collapseSidebar()} />
					</IconButton>
				</div>
			</div>
		</header>
	);
}

export default Header;
