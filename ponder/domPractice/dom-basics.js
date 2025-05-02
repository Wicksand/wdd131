
// add additional paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JAvascript!";
document.body.appendChild(newParagraph);

//add an img
const newImg = document.createElement("img");
newImg.setAttribute("src","https://picsum.photos/200");
document.body.appendChild(newImg);

//insert full string at once
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

//create a new section element w/ a paragraph and new h2 element
const newSection = document.createElement("section")
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);
