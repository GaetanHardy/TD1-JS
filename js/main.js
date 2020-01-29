window.addEventListener("load", event => main());

const main = () => {
	
	console.log("MAIN");

	test_voiture();
	
	let user = {
		firstName: "gaëtan",
		lastName: "hardy",
		age: 20,
		address: "1 rue de l'avenue",
		eMail: "hardygaetan@outlook.fr",
		phoneNumber: "0123456789"
	};

	// console.log("Bonjour " + capFirstLetter(user.firstName) + " " + capFirstLetter(user.lastName));
	// console.log("Bonjour ", capFirstLetter(user.firstName), capFirstLetter(user.lastName));

	let capFirstName = user.firstName.charAt(0).toUpperCase();

	// console.log(capFirstName);

	// console.log(testPileOuFace(100));

	let tab = []; // let tab = newArray();
	for (let i = 0; i < 500; i++) tab.push(i);
	// tab.forEach(element => console.log(element));
	// let tab2 = tab.map(element => element * 2);
	// console.log(tab);
	// console.log(tab2);
	let sum = tab.reduce((acc, element) => {
		return acc + element;
	}, 0); // Le 0 est la valeur de base de l'accumulateur donc la valeur de base de reduce
	//console.log(sum);
}

const capFirstLetter = value => value.charAt(0).toUpperCase() + value.slice(1);

const pileOuFace = () => Math.random() > 0.5 ? "face" : "pile";

// Nom de la fonction = paramètres => corps de la fonction

const testPileOuFace = amount => {
	let result = {pile: 0, face: 0};
	for (let i = 0; i < amount; i++) result[pileOuFace()]++;
	return(result);
}