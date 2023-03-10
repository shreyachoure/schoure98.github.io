const ProjectData = [
	{
		title: "Android Application Analysis",
		subject: "Database Management",
		description:
			"Database project demonstrating Python and Postgres SQL connectivity for analysis of mobile applications. Focussed on Database design, SQL Query optimizations, implementation of joins and concluding with creating visualizations.",
		image: "../images/database_project.png",
		github: "https://github.com/schoure98/Google-Applications-Analysis",
	},
	{
		title: "Digital Travel Memories",
		subject: "Fullstack Web Development",
		description:
			"Fullstack project developed on ReactJS and bootstrap for collection of digital photographs. Implementation of Google location API to discover photographs clicked at different locations and auto completion functionality.",
		image: "../images/fullstack_project.png",
		github: "https://github.com/schoure98/image_gallery_fullstack",
	},
	{
		title: "Book Recommendation System",
		subject: "Software Engineering",
		description:
			"Web application to recommend books to readers based on popularity parameters and collaborative approach. Backend implementation through Python and frontend development through Flask displaying categorical books.",
		image: "../images/recommendation_project.png",
		github: "https://github.com/schoure98/FindYourNextBook",
	},
];

let projectContainer = document.querySelector(".project-container");

const addToDOM = (project) => {
	//project card
	let card = document.createElement("div");
	card.classList.add("project-card", "card");

	//project image
	let image = document.createElement("img");
	image.src = project.image;
	image.alt = `Project image ${project.projectName}`;
	image.classList.add("project-image", "card-img-top");
	card.append(image);

	//project body
	let cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	//project name
	let projectName = document.createElement("h6");
	projectName.textContent = project.title;
	projectName.classList.add("card-title");
	cardBody.append(projectName);

	//project description
	let projectDesc = document.createElement("p");
	projectDesc.textContent = project.description;
	projectDesc.classList.add("project-desc", "card-text");
	cardBody.append(projectDesc);

	//project link
	let projectLink = document.createElement("a");
	projectLink.textContent = "View on Github";
	projectLink.href = project.github;
	projectLink.target = "_blank";
	projectLink.classList.add("github-project", "card-link");
	cardBody.append(projectLink);

	card.append(cardBody);
	projectContainer.append(card);
};

const displayProjects = (ProjectData) => {
	ProjectData.forEach((project) => {
		addToDOM(project);
	});
};

displayProjects(ProjectData);
