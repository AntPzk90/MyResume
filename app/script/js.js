//Элементы навигации
let aboutMeLink = $("#about-me"),
	technologyLink = $("#techn"),
	portfolioLink = $("#my-port"),
	contactsLink = $("#cont");
//жлементы выведения в контентную область
let myInfo = $(".about-me"),
	myTechnology = $(".technology"),
	myPortfolio = $(".portfolio"),
	myContacts = $(".contacts");
//элементы сайдбара
let	sideAboutMeLink = $("#side-about-me"),
	sideTechnologyLink = $("#side-techn"),
	sidePortfolioLink = $("#side-my-port"),
	sideContactsLink = $("#side-cont");

let linkArr = [
	aboutMeLink,
	portfolioLink,
	contactsLink,
	technologyLink
];

let contentArr = [
	myInfo,
	myTechnology,
	myPortfolio,
	myContacts
];
let sideBarArr = [
	sideAboutMeLink,
	sideTechnologyLink,
	sidePortfolioLink,
	sideContactsLink
];
let remCl = function(arr,elemClass){
	for(var i = 0; i < arr.length; i++ ){
		if(arr[i].hasClass(elemClass)){
			arr[i].removeClass(elemClass);
		}
	}
};
//главное меню
aboutMeLink.on("click", function(e){
	remCl(contentArr,"active--item");
	remCl(linkArr,"active--link");
	e.preventDefault();
	myInfo.addClass("active--item");
	$(this).addClass("active--link");
	remCl(sideBarArr,"side-bar__active--link");
	sideAboutMeLink.addClass("side-bar__active--link");
});
technologyLink.on("click", function(e){
	remCl(contentArr,"active--item");
	remCl(linkArr,"active--link");
	e.preventDefault();
	myTechnology.addClass("active--item");
	$(this).addClass("active--link");
	remCl(sideBarArr,"side-bar__active--link");
	sideTechnologyLink.addClass("side-bar__active--link");
});
portfolioLink.on("click", function(e){
	remCl(contentArr,"active--item");
	remCl(linkArr,"active--link");
	e.preventDefault();
	myPortfolio.addClass("active--item");
	$(this).addClass("active--link");
	remCl(sideBarArr,"side-bar__active--link");
	sidePortfolioLink.addClass("side-bar__active--link");
});
contactsLink.on("click", function(e){
	remCl(contentArr,"active--item");
	remCl(linkArr,"active--link");
	e.preventDefault();
	myContacts.addClass("active--item");
	$(this).addClass("active--link");
	remCl(sideBarArr,"side-bar__active--link");
	sideContactsLink.addClass("side-bar__active--link");
});
//управление сайдбаром
sideAboutMeLink.on("click",function(e){
	e.preventDefault();
	remCl(contentArr,"active--item");
	remCl(linkArr,"active--link");
	remCl(sideBarArr,"side-bar__active--link");
	$(this).addClass("side-bar__active--link");
	myInfo.addClass("active--item");
	aboutMeLink.addClass("active--link");
});
sideTechnologyLink.on("click",function(e){
	e.preventDefault();
	remCl(contentArr,"active--item");
	remCl(linkArr,"active--link");
	remCl(sideBarArr,"side-bar__active--link");
	$(this).addClass("side-bar__active--link");
	myTechnology.addClass("active--item");
	technologyLink.addClass("active--link");
});
sidePortfolioLink.on("click",function(e){
	e.preventDefault();
	remCl(contentArr,"active--item");
	remCl(linkArr,"active--link");
	remCl(sideBarArr,"side-bar__active--link");
	$(this).addClass("side-bar__active--link");
	myPortfolio.addClass("active--item");
	portfolioLink.addClass("active--link");
});
sideContactsLink.on("click",function(e){
	e.preventDefault();
	remCl(contentArr,"active--item");
	remCl(linkArr,"active--link");
	remCl(sideBarArr,"side-bar__active--link");
	$(this).addClass("side-bar__active--link");
	myContacts.addClass("active--item");
	contactsLink.addClass("active--link");
});