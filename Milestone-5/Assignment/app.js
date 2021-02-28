
function loadData() {
    let searchText = document.getElementById("text-input-box").value;
    callApi(searchText);

}

function callApi(searchText) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => parseData(data.meals));
}


function parseData(data) {
    document.getElementById("food-info-details").innerHTML = " ";
    const foodsDiv = document.getElementById("foods");
    foodsDiv.innerHTML = "";

    if(data==null){
        document.getElementById("food-info-details").innerHTML = `<h1>No Data. Please Search Again</h1>`;
        return;
    }

    data.forEach(meal => {

        const foodInfo = `
            <img class="card-img-top" src=${meal.strMealThumb} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <button onclick="getDetails('${meal.strMeal}')" class="btn btn-outline-primary">Details</button>
            </div>
        `
        const foodDiv = document.createElement('div');
        foodDiv.className = "card";
        foodDiv.style.width = "17rem";

        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);

    });
    let searchText = document.getElementById("text-input-box").value = "";
}

function showDetails(data) {

    let foodInfoDiv = document.getElementById("food-info-details");
    foodInfoDiv.innerHTML = "";

    const foodDetails = `
    <div class="card" style="width: 30rem;">
    <img class="card-img-top" src=${data.strMealThumb} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${data.strMeal}</h5>
                <h6>Ingredients</h6>
                <p>${data.strIngredient1} : ${data.strMeasure1}</p>
                <p>${data.strIngredient2} : ${data.strMeasure2}</p>
                <p>${data.strIngredient3} : ${data.strMeasure3}</p>
                <p>${data.strIngredient4} : ${data.strMeasure4}</p>
                <p>${data.strIngredient5} : ${data.strMeasure5}</p>
                <p>${data.strIngredient6} : ${data.strMeasure6}</p>
                <p>${data.strIngredient7} : ${data.strMeasure7}</p>
                <p>${data.strIngredient8} : ${data.strMeasure8}</p>
                <p>${data.strIngredient9} : ${data.strMeasure9}</p>
                <p>${data.strIngredient10} : ${data.strMeasure10}</p>
            </div>
    </div>
    `;

    foodInfoDiv.innerHTML = foodDetails;

}

function getDetails(searchText) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => showDetails(data.meals[0]));
}
