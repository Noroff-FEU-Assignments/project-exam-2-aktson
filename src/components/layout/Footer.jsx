import React from "react";
import { MdCopyright } from "react-icons/md";

function Footer() {
	return (
		<footer className="bg-secondary flex text-white p-5 justify-center " style={{ zIndex: "100" }}>
			<MdCopyright />
			2022 Designed and Developed by
			<a href="https://ankitsoni.netlify.app/" target="_blank" rel="noreferrer" className="ml-1 text-accent font-semibold">
				AnkSon
			</a>
		</footer>
	);
}

export default Footer;
