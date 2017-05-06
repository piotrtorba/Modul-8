var a = 2,
	b = 3,
	value = ((a * a) + (2 * a * b) - (b * b));
console.log(value);
if (value > 0) {
	console.log('wynik dodatni');
} else if (value < 0) {
	console.log('wynik ujemny')
} else {
	console.log('Wynik zero');
}