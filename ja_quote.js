"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 3

   Random Jane Austen Quote Generator
   Author: Tristan Poss
   Date:  11/14/2023
   
   This script randomly generates a Jane Austen quote from a list of 10 quotes and writes that quote into the first quotation tag in the Web page.

*/

/* 
	A function with a list of Jane Austen quotes
	DO NOT EDIT this function
*/
function getQuote(n) {
   var quotes = [
   "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
   "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
   "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
   "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
   "Life seems but a quick succession of busy nothings.",
   "Our scars make us know that our past was for real.",
   "I cannot speak well enough to be unintelligible.",
   "One cannot be always laughing at a man without now and then stumbling on something witty.",
   "Men were put into the world to teach women the law of compromise.",
   "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
   ];
   
   return quotes[n];
}


/* Random Number Generating Function */
function randomInt(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

var randomQ = randomInt(0,9);

var quoteElement = document.getElementsByTagName('q')[0];

quoteElement.textContent = getQuote(randomQ);


