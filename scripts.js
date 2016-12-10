function Smartphone(brand, model, price, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
}

Smartphone.prototype.printInfo = function() {
	console.log('The model of this cellphone is ' + this.brand + ' ' + this.model + ', the color is ' + this.color + ' and the price is ' + this.price + ' USD. It is a nice ' + this.brand + '. You should buy it.');
}

Smartphone.prototype.canIBuy = function(wallet) {
	if (wallet >= this.price) {
		console.log(this.brand + this.model + ' is affordable.');
	} else if (wallet < this.price) {
		console.log(this.brand + this.model + ' is out of reach.');
	} else {
		console.log('I think I misunderstood something... Stop mumbling!');
	}
} 

var samsung = new Smartphone('Samsung', 'Galaxy S6', 160, 'navy blue');
var iphone = new Smartphone('iPhone', '6s', 199, 'pearl white');
var oneplus = new Smartphone('OnePlus', 'One', 59, 'teal');

samsung.printInfo();
iphone.printInfo();
oneplus.printInfo();

window.alert("Let's check if you can buy some of these");
var canIBuyIt = window.prompt('How much do you have in your wallet?');

samsung.canIBuy(canIBuyIt);
iphone.canIBuy(canIBuyIt);
oneplus.canIBuy(canIBuyIt);