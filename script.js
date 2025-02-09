function searchRecipes(){
    const searchInput = document.getElementById
    ('searchInput').value;
    const recipesDiv= document.getElementById('recipes');
    const notFoundDiv= document.getElementById('notFound');

    //clear previous results
    recipesDiv.innerHTML="";
    notFoundDiv.style.display="none";

    if(searchInput.trim() === ""){
        notFoundDiv.innerHTML="Please enter a recipe name to search!";
        notFoundDiv.style.display="block";
        return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        if(!data.meals){
           notFoundDiv.innerHTML="Recipe not found, please try another search !";
           notFoundDiv.style.display="block";
        }else{
            data.meals.forEach(meal => {
                const card= document.createElement('div');
                card.classList.add('recipe-card');

                card.innerHTML=`
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <h3>${meal.strMeal}</h3>
                <p>${meal.strCategory}</p>
                <button onclick="viewRecipes('${meal.idMeal}')"> View Recipes</button>
                `;
            
            recipesDiv.appendChild(card);
        });
    }
});
            
}

function viewRecipes(mealId){
    const popupCard= document.getElementById('popupCard');
    const recipeTitle= document.getElementById('recipeTitle');
    const recipeDetails= document.getElementById('recipeDetails');

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(response => response.json())
    .then(data => {
        const meal= data.meals[0];
        recipeTitle.innerText= meal.strMeal;
        recipeDetails.innerText= meal.strInstructions;
        popupCard.style.display="block";
    })
}


function closeRecipe(){
    document.getElementById('popupCard').style.display="none";
}

// Replace 'YOUR_API_KEY' with your actual API key from exchangerate-api.com
const API_KEY = '8d8722dba5897c59a0f8af25';

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultElement = document.getElementById('result');

    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            resultElement.textContent = `${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error:', error);
            resultElement.textContent = 'Error converting currency';
        });
}

// Add event listeners for currency conversion
document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    // Initial conversion
    convertCurrency();

    // Convert when any value changes
    amount.addEventListener('input', convertCurrency);
    fromCurrency.addEventListener('change', convertCurrency);
    toCurrency.addEventListener('change', convertCurrency);
});