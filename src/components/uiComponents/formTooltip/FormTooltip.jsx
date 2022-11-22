import React from "react";
import PropTypes from "prop-types";
import { MdInfoOutline } from "react-icons/md";

function FormTooltip({ message }) {
	return (
		<p
			className="absolute -top-8 left-0 w-max text-xs bg-grey  text-white  pb-3 px-1 shadow-xl flex items-center gap-1 rounded-sm"
			style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 63%, 74% 63%, 59% 100%, 64% 63%, 0 62%)" }}>
			<MdInfoOutline size={16} />
			{message}
		</p>
	);
}

export default FormTooltip;

FormTooltip.propTypes = {
	message: PropTypes.string.isRequired,
};
