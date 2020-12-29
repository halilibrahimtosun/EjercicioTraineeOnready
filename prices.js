const vehicles = [
	{
		marca: "Peugeot",
		modelo: 206,
		puertas: 4,
		precio: 200000
	},
	{
		marca: "Peugeot",
		modelo: 208,
		puertas: 5,
		precio: 250000
	},
	{
		marca: "Honda",
		modelo: "Titan",
		cilindirada: 125,
		precio: 60000
	},
	{
		marca: "Yamaha",
		modelo: "YBR",
		cilindirada: 160,
		precio: 80500.50,
	}];


let newArr = vehicles.map((item) => {
	return {
		price: item.precio,
		marca: item.marca,
		modelo: item.modelo
	}
})
console.log(newArr);

// mas caro
let biggest = newArr[0].price;

for (let i = 0; i < newArr.length; i++) {
	if (biggest < newArr[i].price) {
		biggest = newArr[i].price;
	}
}

let index = newArr.findIndex(x => x.price === biggest)
console.log("Vehículo más caro:" + newArr[index].marca + " " + newArr[index].modelo)



// mas barato
let cheapest = newArr[0].price;

for (let i = 0; i < newArr.length; i++) {
	if (cheapest > newArr[i].price) {
		cheapest = newArr[i].price
	}
}
let inx = newArr.findIndex(x => x.price === cheapest)
console.log("Vehículo más barato:" + newArr[inx].marca + " " + newArr[inx].modelo)

// finding >>> Y 

for (let i = 0; i < newArr.length; i++) {
	let xxx = newArr[i].modelo.toString();
	if ((xxx.includes("Y")) || (xxx.includes("y"))) {
		let idx = newArr.findIndex(x => x.modelo === xxx)



		var formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		});
		console.log("Vehículo que contiene en el modelo la letra ‘Y’:" + newArr[idx].marca + " " + xxx + " " + formatter.format(newArr[idx].price))
	}
}

// Vehículos ordenados por precio de mayor a menor:

while (newArr.length > 0) {
	//console.log(newArr)
	let biggest = newArr[0].price;

	for (let i = 0; i < newArr.length; i++) {
		if (biggest < newArr[i].price) {
			biggest = newArr[i].price;
		}
	}

	let index = newArr.findIndex(x => x.price === biggest)
	console.log(newArr[index].marca + " " + newArr[index].modelo)

	newArr.splice(index, 1)

}

