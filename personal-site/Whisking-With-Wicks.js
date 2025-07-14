//recipies ----------------------------

const recipe = [
  {
  "tags": ["Cookies", "Chocolate", "Dessert"],
  "image": "dessert.png",
  "imgName": "cookies",
  "ingredient": [
    "2/3 cup shortening",
    "2/3 cup butter",
    "2 eggs",
    "1 cup brown sugar",
    "1 cup white sugar",
    "2 tsp vanilla extract",
    "1 tsp salt",
    "1 tsp baking soda",
    "3 cups flour",
    "1 bag of chocolate chips"
  ],
  "name": "Foolproof Chocolate Chip Cookies",
  "prepTime": "30 Min",
  "instructions": [
    "Cream together shortening, butter, eggs, brown sugar, white sugar, and vanilla extract until fully combined.",
    "In a separate bowl, combine baking soda, salt, and flour.",
    "Gradually add the dry mixture to the wet mixture, mixing as you go.",
    "Add the chocolate chips and mix until evenly distributed.",
    "Roll or scoop cookie dough into balls and place on a baking sheet.",
    "Bake in a preheated oven at 375°F for 8–10 minutes or until golden around the edges."
  ]
},
{
  "tags": ["Cookies", "Lemon", "Dessert"],
  "description": "Tender and buttery lemon shortbread cookies with a zesty glaze for a fresh citrusy finish.",
  "image": "dessert.png",
  "imgName": "cookies",
  "ingredient": [
    "2 1/4 cups flour",
    "1/2 tsp baking powder",
    "1/2 tsp salt",
    "1 cup butter (softened)",
    "3/4 cup sugar",
    "1 egg",
    "2 Tbsp lemon peel (divided)",
    "1 tsp vanilla",
    "1 cup powdered sugar (for glaze)",
    "4–5 tsp lemon juice (for glaze)",
    "Remaining lemon peel (for glaze)"
  ],
  "name": "Jessica’s Lemon Shortbread Cookies",
  "prepTime": "30 Min",
  "instructions": [
    "Preheat oven to 375°F.",
    "In a bowl, combine flour, baking powder, and salt. Set aside.",
    "In a large bowl, beat softened butter and sugar until light and fluffy.",
    "Beat in the egg, 1 Tbsp lemon peel, and vanilla until well blended.",
    "Gradually beat in the flour mixture on low speed until fully incorporated.",
    "Scoop dough and form into cookies; place on a baking sheet.",
    "Bake for 12–14 minutes, or until edges are lightly golden.",
    "To make the glaze, mix powdered sugar with 4–5 tsp lemon juice and the remaining lemon peel.",
    "Drizzle glaze over cooled cookies before serving."
  ]
},
]

//recipe templates --------------------

function recipeTemplate(recipe){
  let html = `<section class= recipe>
                <img src = "${recipe.image}" alt = "${recipe.imgName}" class = "Foodimg">
                <div class="info">
                  <h2 class = "name"> ${recipe.name}</h2>
                  <div class = "tags">${tagsTemplate(recipe.tags)}</div>

                <div class="accordion">
                    <button class="accordion-header">Recipe</button>
                    <div class="accordion-content">
                    <button class = "12but">1/2</button>
                    <button class = "1but">1</button>
                    <button class = "2but">2</button>

                    <h3>Ingredients</h3>
                    <ul>
                        ${ingredientTemplate(recipe.ingredient)}
                    </ul>
<h3>
Instructions
</h3>
<ol>
${instructionsTemplate(recipe.instructions)}
</ol>
                </div>
            </div>

        </section>`
	return html;
}

function tagsTemplate(tags){
	let html1 = ``;
	for(let tag of tags){
		html1 += `<p class="tag">${tag}</p>`;
	}
	return html1;
}
function ingredientTemplate(ingredients) {
  let html = ``;
  for (let item of ingredients) {
    html += `<li>${item}</li>`;
  }
  return html;
}

function instructionsTemplate(instructions) {
  let html = ``;
  for (let step of instructions) {
    html += `<li>${step}</li>`;
  }
  return html;
}

//render -----------------------------
const main = document.querySelector('#recipe-book');

recipe.forEach(r => {
  main.innerHTML += recipeTemplate(r);});


// accordion -------------------------

const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');

    const content = accordion.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // collapse
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'; // expand
    }
  });
});