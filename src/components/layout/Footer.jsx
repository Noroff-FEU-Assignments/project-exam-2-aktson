import React from "react";
import PropTypes from "prop-types";

import { MdCopyright } from "react-icons/md";

function Footer({ position }) {
	return (
		<footer
			className={`text-black w-full flex flex-col sm:flex-row items-center   p-3 sm:p-5  justify-center ${position} shadow-xl  `}
			style={{ zIndex: "100" }}>
			<div className="flex  justify-center ">
				<MdCopyright />
				2022 Designed and Developed by
			</div>
			<a href="https://ankitsoni.netlify.app/" target="_blank" rel="noreferrer" className="ml-1 text-primary font-bold text-lg ">
				AnkSon
			</a>
		</footer>
	);
}

export default Footer;

Footer.propTypes = {
	position: PropTypes.string.isRequired,
};
