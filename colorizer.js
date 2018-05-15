async function startProgram() {
	while(true) {
		await colorize();
		await delay(0.2);
	}	
}
async function colorize() {
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	setMainLed({r: red, g: green, b: blue})
}
