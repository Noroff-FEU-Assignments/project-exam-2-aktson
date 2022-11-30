import React from "react";
import image from "../../assets/signup-bg.jpg";
import { MdOutlineModeComment } from "react-icons/md";
import logo from "../../assets/logo.svg";

function SignUpBanner() {
	return (
		<div
			className=" flex  flex-col justify-center p-8  lg:px-16 h-80 lg:h-auto lg:rounded-l-xl rounded-t-xl lg:rounded-tr-none rounde "
			style={{
				backgroundImage: `url(${image})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundColor: "rgba(0,0,0,0.2)",
				backgroundBlendMode: "overlay",
			}}>
			<div className="max-w-sm">
				<img src={logo} alt="socialMe logo" className="mb-6 w-48 rounded-xl shadow-2xl drop-shadow-xl p-2 bg-secondary" />
				<h2 className="md:text-4xl text-2xl font-bold text-white ">
					Sign up to connect and share with thousands others.....
					<MdOutlineModeComment className="text-white text-5xl" />
				</h2>
			</div>
		</div>
	);
}

export default SignUpBanner;
