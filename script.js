class QAItem {

constructor(question, answer){
this.question = question;
this.answer = answer;
this.isVisible = false;
}

toggleVisibility(answerElement, icon){
this.isVisible = !this.isVisible;

if(this.isVisible){
answerElement.style.display = "block";
icon.textContent = "-";
}else{
answerElement.style.display = "none";
icon.textContent = "+";
}
}

render(){
const container = document.createElement("div");
container.className = "faq-item";

const questionDiv = document.createElement("div");
questionDiv.className = "question";

const questionText = document.createElement("span");
questionText.textContent = this.question;

const icon = document.createElement("span");
icon.className = "icon";
icon.textContent = "+";

questionDiv.appendChild(questionText);
questionDiv.appendChild(icon);

const answerDiv = document.createElement("div");
answerDiv.className = "answer";
answerDiv.textContent = this.answer;

questionDiv.addEventListener("click", () => {
this.toggleVisibility(answerDiv, icon);
});

container.appendChild(questionDiv);
container.appendChild(answerDiv);

return container;
}

}

const qaList = [
new QAItem(
"What is JavaScript?",
"JavaScript is a programming language used to create dynamic and interactive web pages."
),

new QAItem(
"What is Object-Oriented Programming?",
"OOP is a programming paradigm based on objects and classes."
),

new QAItem(
"What is an Event Listener?",
"An event listener is a JavaScript function that waits for an event like click, hover, or keyboard input."
)
];

const faqContainer = document.getElementById("faq-container");

qaList.forEach(item => {
faqContainer.appendChild(item.render());
});