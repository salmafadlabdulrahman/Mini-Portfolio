let title = document.querySelector(".title");
let iteach = document.querySelector(".iteach");
let teaching = document.querySelector(".teaching");
let languages = document.querySelector(".eachTopic");
let titleWrapper = document.querySelector(".title-wrapper");

const titles = [
  ["🌱", "Educator"],
  ["💻", "Programmer"],
  ["🌐", "Developer"],
  ["🔥", "Motivator"],
  ["📔", "Content Creator"],
];

const topics = [
  "React",
  "Redux",
  "MongoDB",
  "Node",
  "MERN",
  "Python",
  "Numpy",
  "Pandas",
  "javascript",
];

const randomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};

let eachTopic = 0;
const interval = setInterval(function () {
  eachTopic += 1;

  eachTopic = (eachTopic + 1) % topics.length;
  teaching.innerHTML = `The technologies I teach`;
  languages.textContent = `${topics[eachTopic]}`;
  languages.style.color = randomColor();
  languages.style.opacity = 1;
  languages.style.transition = `opacity 0.5s ease`;
  languages.classList.add("hidden");
}, 2000);

let eachtitle = 0;
let position = 0;
const titleInterval = setInterval(function () {
  eachtitle += 1;
  eachtitle = (eachtitle + 1) % titles.length;
  title.innerHTML = `${titles[eachtitle].join(" ")}`;
  position += 5;
  title.style.transform = `translateX(${position}%)`;
}, 2000);
