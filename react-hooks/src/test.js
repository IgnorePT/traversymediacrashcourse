function addressMaker(address) {

	let {
		city,
		state,
		country
	} = address;

	const newAddress = {
		city,
		state,
		country
	};

	return newAddress;
}

let {
	city: ct,
	state: st,
	country: cnt
} = addressMaker({
	city: 'Maia',
	state: 'Porto',
	country: 'Portugal'
});

console.log(`${ct} ${st} ${cnt}`);