const API_KEY = "227c6758438b42f7b893652508087a05";
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes){
recipeListEl.innerHTML="";

recipes.forEach((recipe)=>{
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");

    const recipeImageEl =document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = recipe.image;

    recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `
    <strong>Ingredients: ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(",")}</strong>`;

    recipeLinkEl = document.createElement("a")
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerHTML = "View Recipe"

    

    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListEl.appendChild(recipeItemEl);
});
}

async function getRecipes(){
    const response =await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await response.json()

    return data.recipes

}

async function init(){
    try {
        const recipes = await getRecipes();
        displayRecipes(recipes)
    } catch (error) {
       
    }
  
}

init()