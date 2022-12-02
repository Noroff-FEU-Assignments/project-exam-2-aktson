import React from "react";
import Footer from "../layout/Footer";
import bgImage from "../../assets/bg.jpg";
import { BRAND } from "../constants/api";
import gant from "../../assets/gantt-chart_project-exam-2_ankit-soni.pdf";
import userTesting from "../../assets/user-testing_report_project-exam-2_ankit-soni.pdf";
import trelloReport from "../../assets/agile_board_project-exam-2_ankit-soni.png";

function Delivery() {
	document.title = `Delivery Resaurces | ${BRAND}`;

	const github = "https://github.com/Noroff-FEU-Assignments/project-exam-2-aktson";
	const prototype = "https://xd.adobe.com/view/966e91c4-dd85-4413-9da9-30f0a5ab23cc-c33d/";
	const hostedDemo = "https://socialme.vercel.app/";
	const trelloBoard = "https://trello.com/b/OAI4sz0g/project-exam-2ankit-soni";
	const styleGuide = "https://xd.adobe.com/view/fe9970b9-8d94-4d16-9f3a-acce8907131f-abca/";

	return (
		<section
			className="h-auto sm:h-screen flex justify-center items-center p-4 relative"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<div className="container ">
				<h1 className=" mb-0 flex justify-center ">Delivery - Links to Resources</h1>
				<table class="border-separate border-spacing-2 shadow-xl mx-auto  ">
					<thead className="bg-secondary text-white">
						<tr>
							<th class=" p-2">Resource</th>
							<th class=" p-2">URL</th>
						</tr>
					</thead>
					<tbody className="bg-gray-100 p-2">
						<tr>
							<td class=" p-2 ">Gantt Chart</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href={gant} target="_blank" rel="noreferrer">
									gantt-chart_project-exam-2_ankit-soni.pdf
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Design Prototype</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href={prototype} target="_blank" rel="noreferrer">
									{prototype}
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Style Guide</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href={styleGuide} target="_blank" rel="noreferrer">
									{styleGuide}
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Kanban Board</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href={trelloBoard} target="_blank" rel="noreferrer">
									{trelloBoard}
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Repository</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href={github} target="_blank" rel="noreferrer">
									{github}
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Hosted Demo</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href={hostedDemo} target="_blank" rel="noreferrer">
									{hostedDemo}
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Trello board report</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href={trelloReport} target="_blank" rel="noreferrer">
									agile_board_project-exam-2_ankit-soni
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">User testing report</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href={userTesting} target="_blank" rel="noreferrer">
									user-testing_report_project-exam-2_ankit-soni.pdf
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Footer position="absolute bottom-0" />
		</section>
	);
}

export default Delivery;
