emailjs.init("2qwtbtqQ9yzS2C5xh");
window.onload = () => {
	const emailForm = document.getElementById("email-form");
	emailForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const senderName = document.getElementById("name");
		const email = document.getElementById("email");

		if (!senderName.value || !email.value) {
			alert("You must enter atleast name and email to submit this form");
			return;
		}
		const serviceID = "service_portfolio_form";
		const templateID = "get_message_data";

		emailjs.sendForm(serviceID, templateID, emailForm).then(
			() => {
				alert("Email sent to Shreya!");
			},
			(error) => {
				alert("Email failed to send", error);
			}
		);
	});
};
