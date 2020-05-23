const btn = $("#submit-btn");

$("form").submit((event) => {

	btn.toggleClass("animate");
	setTimeout(() => btn.toggleClass("animate"), 100);

	Validate();
	event.preventDefault();
});

const Validate = () => {
	const nameRegx = /^[a-zA-Z ]{2,30}$/;
	const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const inputFields = $("form")[0].elements;
	
	
	for (let i = 0; i < 4; ++i) {

		let field = inputFields[i];
		let message = $(`#${field.id}-message`);
		// let fieldType = field.attr("type");
		
		switch (i) {
			case 0:
			case 1:
					//Calls function that returns Regx.test(value). See function below
				if ( !testExp(field.value, nameRegx)){
					message.css("display","block");
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