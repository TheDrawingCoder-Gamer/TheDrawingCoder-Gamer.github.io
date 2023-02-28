const listies = 
	["Emi Memy Imi",
	"Exhaustively Many Items",
	"Explicitly Mandated Items",
	"Endless Material Information",
	"Evolving Manufacturing Index",
	"Evidently, Many Ingredients",
	"Earnestly Made Imitation",
	"Even More Items",
	"Eminence, My Inception",
	"Explore My Inventory",
	"Expounded Minutia Introspection",
	"Exciting Minecraft Information",
	"Expropriated Matter Insights",
	"Efficiently Managed Inventory",
	"Eerily Many Items",
	"Eventually Made Impressive",
	"Exceptionally Motionless Interface",
	"Emi's Magic Inventory",
	"Egad, My Items!",
	"Exploring Modified: Iridescent",
	"E M I"];

function funnyFunction() {
	const random = Math.floor(Math.random() * listies.length);
	document.getElementById("emi").innerHTML = listies[random]; 
}
