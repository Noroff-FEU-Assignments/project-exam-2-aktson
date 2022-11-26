import React from "react";
import { MdNorth } from "react-icons/md";
import { motion } from "framer-motion";

function ScrollToTopBtn() {
	const [show, setShow] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			const position = window.pageYOffset;

			position > 300 ? setShow(true) : setShow(false);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScrollClick = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{show && (
				<motion.button
					initial={{ opacity: 0, translateY: -20 }}
					animate={{ opacity: 1, translateY: 0 }}
					exit={{ opacity: 0, translateY: -20 }}
					transition={{ type: "tween", duration: 0.1, delay: 0.1 }}
					className="fixed right-2 z-40 bg-primary text-white p-2 rounded-lg shadow-xl hover:scale-90 transition-scale duration-200"
					color="cyan"
					onClick={handleScrollClick}
					style={{ top: "92vh" }}>
					<MdNorth size={24} />
				</motion.button>
			)}
		</>
	);
}

export default ScrollToTopBtn;
