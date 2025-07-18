const ditto = {
    id: 132,
    name: "ditto",
    type: "normal",
    abilities: ["limber", "imposter"],
    base_experience: 101,
    height: 3,
    weight: 40,
    stats: {
        hp: 48,
        attack: 48,
        defense: 48,
        special_attack: 48,
        special_defense: 48,
        speed: 48
    },
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
transform: function(){
    return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
}
};

const ditname = document.querySelector("#name");
const ability = document.querySelector("#ability");
const img = document.querySelector("#ditto");

ditname.textContent = ditto.name;
ability.textContent = ditto.abilities[0];
img.src = ditto.sprite;
img.alt = "an img of ditto";

function changeD(){
img.src = ditto.transform();
};

document.addEventListener('click', changeD);