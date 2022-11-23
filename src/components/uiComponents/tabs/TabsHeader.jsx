import React from "react";
import Proptypes from "prop-types";

function TabsHeader({ children }) {
	return (
		<div className="p-4 w-full">
			<div className="mx-auto mb-4 text-center flex-col  sm:flex sm:flex-row justify-center items-center  responsive-width bg-lightGray shadow-xl rounded-xl p-3">
				{children}
			</div>
		</div>
	);
}

export default TabsHeader;

TabsHeader.propTypes = {
	children: Proptypes.node.isRequired,
};
