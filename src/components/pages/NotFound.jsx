import React from "react";
import { MdHome, MdOutlineWarningAmber } from "react-icons/md";
import Footer from "../layout/Footer";
import bgImage from "../../assets/bg.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function NotFound() {
	const { auth } = React.useContext(AuthContext);
	return (
		<section
			className="h-screen flex justify-center items-center p-4 relative"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<div className="flex flex-col justify-center max-w-sm  gap-8 items-center">
				<h1 className="text-8xl mb-0 flex gap-2 items-center">
					<MdOutlineWarningAmber />
					404
				</h1>
				<p className="text-4xl text-secondary text-center">Page not found</p>
				<Link to={auth ? "/home" : "/"}>
					<Button className="w-max flex items-center gap-2" color="light-blue" variant="gradient">
						<MdHome size={24} />
						Back to Home
					</Button>
				</Link>
			</div>
			<Footer position="absolute bottom-0" />
		</section>
	);
}

export default NotFound;
