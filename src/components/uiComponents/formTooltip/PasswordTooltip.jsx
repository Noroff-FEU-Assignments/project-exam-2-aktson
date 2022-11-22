import React from "react";
import PropTypes from "prop-types";

function PasswordTooltip({ message }) {
	return (
		<p
			className="absolute -top-2 left-16 w-max text-xs bg-grey  text-white  pb-3 px-1 shadow-2xl opacity-80"
			style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 63%, 74% 63%, 59% 100%, 64% 63%, 0 62%)" }}>
			{message}
		</p>
	);
}

export default PasswordTooltip;

PasswordTooltip.propTypes = {
	message: PropTypes.string.isRequired,
};
