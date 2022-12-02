import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import BrowsePeople from "../pages/BrowsePeople";
import MyProfile from "../pages/MyProfile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UserSpecific from "../pages/UserSpecific";
import NotFound from "../pages/NotFound";
import Delivery from "../pages/Delivery";

function AnimatedRoute() {
	const location = useLocation();

	return (
		<>
			<ToastContainer position="top-right" autoClose={2500} />
			<AnimatePresence location={location} key={location.key}>
				<Routes>
					<Route element={<AuthenticatedRoute />}>
						<Route
							path="/home"
							element={
								<Layout>
									<Home />
								</Layout>
							}
						/>
						<Route
							path="/browse-people"
							element={
								<Layout>
									<BrowsePeople />
								</Layout>
							}
						/>
						<Route
							path="/my-profile"
							element={
								<Layout>
									<MyProfile />
								</Layout>
							}
						/>
						<Route
							path="/user-specific/:username"
							element={
								<Layout>
									<UserSpecific />
								</Layout>
							}
						/>
					</Route>
					<Route path="/" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/*" element={<NotFound />} />
					<Route path="/delivery" element={<Delivery />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default AnimatedRoute;
