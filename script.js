const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function name(params) {
    const inputValue = document.getElementById("inputValue").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data));
})

const displayMeal = data => {
    let foodItem = '';
    if (data.meals) {  
        data.meals.forEach(meal => {
            foodItem += `
        <div  onclick="mealDetails('${meal.idMeal}')" class="meal text-center">
         <img src="${meal.strMealThumb}"></img>
         <h1>${meal.strMeal}</h1>
         </div>
        `;
        });

        meals.classList.remove('notFound');
    }
    else {

        foodItem = "Sorry, we can't find any meal!"
        const meals = document.getElementById("meals");
        meals.classList.add('notFound');
    }
    document.getElementById("searchText").style.display = "block";
    document.getElementById("meals").innerHTML = foodItem;
    inputValue = document.getElementById("inputValue").value='';
}

const mealDetails= id=> {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    console.log(url)
    fetch(url)
    .then(res =>res.json())
    .then(data =>mealDetailsContent(data.meals[0]))
}

const mealDetailsContent = meal=>{
    const mealContent =`
    <img src="${meal.strMealThumb}"></img>
    <h1>${meal.strMeal}</h1>
    <br>
   <div class="content">
   <h1>Ingredients</h1>
   <h3>1. ${meal.strIngredient1}</h3>
   <h3>2. ${meal.strIngredient2}</h3>
   <h3>3. ${meal.strIngredient3}</h3>
   <h3>4. ${meal.strIngredient4}</h3>
   <h3>5. ${meal.strIngredient5}</h3>
   </div>    
     `;
   
    document.getElementById("details-meal").innerHTML=mealContent;

    const clearDetailsDiv = document.getElementById("search-btn");clearDetailsDiv.addEventListener("click",function(){
        document.getElementById("details-meal").innerHTML = '';
    })


}



