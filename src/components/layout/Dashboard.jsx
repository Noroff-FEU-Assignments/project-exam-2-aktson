import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdHome, MdGroups, MdAccountCircle, MdLogout, MdCreate } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import AuthContext from "../context/AuthContext";
import ModalContext from "../context/ModalContext";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

function Dashboard() {
	const { auth, setAuth } = React.useContext(AuthContext);
	const { openCreatePostModal } = React.useContext(ModalContext);

	const { pathname } = useLocation();
	const navigate = useNavigate();

	// function logsout user and navigates to sign in page
	const handleLogout = () => {
		setAuth(null);
		navigate("/");
	};

	return (
		<nav className=" h-full  lg:w-72 xl:w-full pl-0 lg:col-span-2 relative ">
			<Sidebar
				className=" pt-24  bg-lightGray h-full shadow-xl text-grey"
				breakPoint="lg"
				overlayColor="bg-lightGray"
				style={{ zIndex: "40", position: "fixed" }}
				width="320px">
				<Menu>
					<MenuItem
						className={pathname === "/home" ? " active" : "menu-item"}
						icon={<MdHome className="icon " />}
						onClick={() => navigate("/home")}>
						<span className="ml-4">Home</span>
					</MenuItem>

					<MenuItem
						className={pathname === "/browse-people" ? " active" : "menu-item"}
						icon={<MdGroups className="icon" />}
						onClick={() => navigate("/browse-people")}>
						<span className="ml-4"> Browse People</span>
					</MenuItem>

					<MenuItem
						className={pathname === "/my-profile" ? " active" : "menu-item"}
						icon={<MdAccountCircle className="icon" />}
						onClick={() => navigate("/my-profile")}>
						<span className="ml-4"> My Profile</span>
					</MenuItem>

					<MenuItem onClick={openCreatePostModal} className="p-2 menu-item" icon={<MdCreate className="icon" />}>
						<p className="nav-link cursor-pointer" variant="text">
							Create Post
						</p>
					</MenuItem>
					<MenuItem className="p-2" icon={auth && <MdLogout onClick={handleLogout} className="icon" />}>
						{auth && (
							<Button size="md" className="ml-4" color="cyan" onClick={handleLogout}>
								Log Out
							</Button>
						)}
					</MenuItem>
				</Menu>
			</Sidebar>
		</nav>
	);
}

export default Dashboard;
