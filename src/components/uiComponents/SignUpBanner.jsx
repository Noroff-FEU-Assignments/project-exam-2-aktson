import React from "react";
import image from "../../assets/signup-bg.jpg";
import { MdOutlineModeComment } from "react-icons/md";

function SignUpBanner() {
	return (
		<div
			className=" flex  flex-col justify-center p-8  lg:px-16 h-80 lg:h-auto lg:rounded-l-xl rounded-t-xl lg:rounded-tr-none rounde "
			style={{
				backgroundImage: `url(${image})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<div className="max-w-sm">
				<h1 className="text-5xl lg:text-7xl text-secondary font-bold mt-16 mb-2 sm:mb-8 sm:mt-0">SocialMe</h1>
				<h2 className="md:text-4xl text-2xl font-bold text-black ">
					Sign up to connect and share with thousands others.....
					<MdOutlineModeComment className="text-white text-5xl" />
				</h2>
			</div>
		</div>
	);
}

export default SignUpBanner;
