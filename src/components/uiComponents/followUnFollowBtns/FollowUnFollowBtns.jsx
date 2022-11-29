import React from "react";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import UsersContext from "../../context/UsersContext";
import AdminContext from "../../context/AdminContext";
import AuthContext from "../../context/AuthContext";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import Spinner from "../loader/Spinner";

function FollowUnFollowBtns({ username }) {
	const http = useAxios();
	const { auth } = React.useContext(AuthContext);
	const { admin } = React.useContext(AdminContext);
	const { setUpdateUsersUi } = React.useContext(UsersContext);

	const [isfollowing, setIsFollowing] = React.useState(false);
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	React.useEffect(() => {
		if (auth) {
			const findUser = admin.following && admin?.following.find((adminFollowing) => adminFollowing?.name === username);

			if (!findUser) {
				return;
			} else {
				setIsFollowing(true);
			}
		}
	}, [auth]);

	const handleFollow = async () => {
		const url = `/api/v1/social/profiles/${username}/follow`;

		setIsSubmitting(true);
		try {
			const response = await http.put(url);

			if (response) {
				setIsFollowing(true);
				setUpdateUsersUi(response.data.following);
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleUnFollow = async () => {
		const url = `/api/v1/social/profiles/${username}/unfollow`;

		setIsSubmitting(true);
		try {
			const response = await http.put(url);

			if (response) {
				setIsFollowing(false);
				setUpdateUsersUi(response.data);
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			{!isfollowing && (
				<Button color="light-blue" onClick={handleFollow} disabled={isSubmitting} className="flex gap-2 items-center  w-auto">
					<Spinner isSubmitting={isSubmitting} />
					Follow
				</Button>
			)}
			{isfollowing && (
				<Button color="light-blue" onClick={handleUnFollow} disabled={isSubmitting} className="flex gap-2 items-center w-auto">
					<Spinner isSubmitting={isSubmitting} />
					Unfollow
				</Button>
			)}
		</>
	);
}

export default FollowUnFollowBtns;

FollowUnFollowBtns.propTypes = {
	user: PropTypes.string,
};
