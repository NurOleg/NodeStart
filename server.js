function User(name) {
  this.name = name;
}

User.prototype.hello = function (who) {
  console.log("Hello " + who.name)
};

var petya = new User("Вася");
var vasya = new User("Петя");

vasya.hello(petya);