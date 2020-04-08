"use strict";

const countdownDiv = document.getElementById("countdown");
const countdownOver = document.getElementById("countdown-over");
const target = document.getElementById("main-target");
const btnShowPraisy = document.getElementById("btn-praisy");
const btnShowBavya = document.getElementById("btn-bavya");
const praisyVideoDiv = document.getElementById("praisy-video-div");
const bavyaVideoDiv = document.getElementById("bavya-video-div");

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");

window.addEventListener("scroll", noscroll);

let deadline = new Date("apr 08, 2020 22:55:00").getTime();

let x = setInterval(function () {
	let now = new Date().getTime();
	let t = deadline - now;
	let days = Math.floor(t / (1000 * 60 * 60 * 24));
	let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((t % (1000 * 60)) / 1000);
	if (t < 0) {
		clearInterval(x);
		document.getElementById("day").innerHTML = "0";
		document.getElementById("hour").innerHTML = "0";
		document.getElementById("minute").innerHTML = "0";
		document.getElementById("second").innerHTML = "0";
		showWishes();
	} else {
		document.getElementById("day").innerHTML = days;
		document.getElementById("hour").innerHTML = hours;
		document.getElementById("minute").innerHTML = minutes;
		document.getElementById("second").innerHTML = seconds;
	}
}, 1000);

function showWishes() {
	countdownOver.innerHTML = `
      <h2> It's Your Birthday!! </h2>
    `;
	window.removeEventListener("scroll", noscroll);
	target.scrollIntoView({
		behavior: "smooth",
	});
	btnShowPraisy.addEventListener("click", () => {
		praisyVideoDiv.scrollIntoView({
			behavior: "smooth",
		});
	});
	btnShowBavya.addEventListener("click", () => {
		bavyaVideoDiv.scrollIntoView({
			behavior: "smooth",
		});
	});
	showAnimation();
}

function showAnimation() {
	animateCSS("#text1", "fadeInDown");
	animateCSS("#text2", "fadeIn");
	// animateCSS("#text3", "fadeIn");
	animateCSS("#text4", "fadeIn");
	animateCSS("#text5", "fadeIn");
	animateCSS("#btn-praisy", "fadeInUp");
	animateCSS("#btn-bavya", "fadeInUp");
}

function animateCSS(element, animationName, callback) {
	const node = document.querySelector(element);
	node.classList.add("animated", animationName);

	function handleAnimationEnd() {
		node.classList.remove("animated", animationName);
		node.removeEventListener("animationend", handleAnimationEnd);

		if (typeof callback === "function") callback();
	}

	node.addEventListener("animationend", handleAnimationEnd);
}

function noscroll() {
	window.scroll(0, 0);
}
