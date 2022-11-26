import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";
import Dashboard from "./Dashboard";
import ScrollToTopBtn from "../uiComponents/ScrollToTopBtn";

function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="lg:grid grid-cols-12 relative ">
				<Dashboard />
				<motion.div
					className=" col-span-10 grid auto-rows-auto "
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4 }}>
					{children}
				</motion.div>
				<ScrollToTopBtn />
			</main>
			<Footer position="relative" />
		</>
	);
}

export default Layout;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
