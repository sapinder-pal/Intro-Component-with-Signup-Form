const btn = $("#submit-btn");
const form = $("form");

// Used mousedown() to apply animation before submission
btn.mousedown(() => { 
	btn.toggleClass("animate");
	setTimeout(() => btn.toggleClass("animate"), 100);
});

form.submit((event) => {
	Validate();
	event.preventDefault();
});

const Validate = () => {
	const nameRegx = /^[a-zA-Z ]{2,30}$/;
	const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const inputFields = form[0].elements;
	
	
	for (let i = 0; i < 4; ++i) {

		let field = inputFields[i];
		let message = $(`#${field.id}-message`); //I've set custom error-message for each field

		switch (i) {
			case 0:
			case 1:
					//Call function that returns Boolean Regx.test(value). See function at the end
				if ( !testExp(field.value, nameRegx)){
					message.css("display","block"); //show message
					field.classList.add("invalid-input"); //turn border & text color to red
				}
				else{
					message.css("display","none");
					field.classList.remove("invalid-input");
				}
				break;

			case 2:

				if (!testExp(field.value, emailRegx)){
					message.css("display","block");
					field.classList.add("invalid-input");
				}
				else{
					message.css("display","none");
					field.classList.remove("invalid-input");
				}			
				break;

			case 3:

				if (field.value === ""){
					message.css("display","block");
					field.classList.add("invalid-input");
				}
				else{
					message.css("display","none");
					field.classList.remove("invalid-input");
				}
		}

	}
}

function testExp(value, Regx) {
	if (value !== "")
		return Regx.test(value);
	else
		return false;
}