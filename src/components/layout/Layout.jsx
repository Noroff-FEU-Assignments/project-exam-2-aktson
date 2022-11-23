import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";
import Dashboard from "./Dashboard";

function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="lg:grid grid-cols-12  ">
				<Dashboard />
				<motion.div
					className=" col-span-10 grid auto-rows-auto "
					initial={{ opacity: 0, translateY: -20 }}
					animate={{ opacity: 1, translateY: 0 }}
					exit={{ opacity: 0, translateY: 0 }}
					transition={{ duration: 0.4 }}>
					{children}
				</motion.div>
			</main>
			<Footer />
		</>
	);
}

export default Layout;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
