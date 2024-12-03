let homeTitle = document.querySelector("#home h1");

console.log(homeTitle);

// homeTitle.style.backgroundColor = "red";
// homeTitle.style.fontSize = "50px";
// homeTitle.style.color = "white";

homeTitle.style = `
  background-color: red;
  font-size: 50px;
  color: white;
`;

let homeTitleStyle = getComputedStyle(homeTitle);

console.log(homeTitleStyle.backgroundColor);
console.log(homeTitleStyle.fontSize);
console.log(homeTitleStyle.color);
