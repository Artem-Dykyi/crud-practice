export const createPlantList = (plants) => 
    plants.map(
        (plant) => `
            <li class="plants__item">
                <h2 class="plant__title">${plant.title}</h2>
                <img src="${plant.imeg}" alt="" class="plants__image">
                <p class="plant__price">${plant.price}</p>
                <lable  class="plants__lable">
                    <input type="checkbox" class="plant__checkbox" id="" checked="${plant.isFavourite}">
                </lable>
            </li>`
).join("");
