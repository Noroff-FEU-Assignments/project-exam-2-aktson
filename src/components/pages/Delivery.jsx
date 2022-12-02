import React from "react";
import Footer from "../layout/Footer";
import bgImage from "../../assets/bg.jpg";
import { BRAND } from "../constants/api";
import gant from "../../assets/gantt-chart_project-exam-2_ankit-soni.pdf";
import userTesting from "../../assets/user-testing_report_project-exam-2_ankit-soni.pdf";
import trelloReport from "../../assets/agile_board_project-exam-2_ankit-soni.png";

function Delivery() {
	document.title = `Delivery Resaurces | ${BRAND}`;

	return (
		<section
			className="h-screen flex justify-center items-center p-4 relative"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<div className=" ">
				<h1 className=" mb-0 flex gap-2 items-center">Delivery - Links to Resources</h1>
				<table class="border-separate border-spacing-2 shadow-xl  ">
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
								<a href="https://xd.adobe.com/view/966e91c4-dd85-4413-9da9-30f0a5ab23cc-c33d/" target="_blank" rel="noreferrer">
									https://xd.adobe.com/view/966e91c4-dd85-4413-9da9-30f0a5ab23cc-c33d/
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Style Guide</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href="https://xd.adobe.com/view/fe9970b9-8d94-4d16-9f3a-acce8907131f-abca/" target="_blank" rel="noreferrer">
									https://xd.adobe.com/view/fe9970b9-8d94-4d16-9f3a-acce8907131f-abca/
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Kanban Board</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href="https://trello.com/b/OAI4sz0g/project-exam-2ankit-soni" target="_blank" rel="noreferrer">
									https://trello.com/b/OAI4sz0g/project-exam-2ankit-soni
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Repository</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-aktson" target="_blank" rel="noreferrer">
									https://github.com/Noroff-FEU-Assignments/project-exam-2-aktson
								</a>
							</td>
						</tr>
						<tr>
							<td class=" p-2 ">Hosted Demo</td>
							<td class=" p-2 text-secondary hover:scale-90 transition-all duration-300">
								<a href="https://socialme.vercel.app/" target="_blank" rel="noreferrer">
									https://socialme.vercel.app/
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
