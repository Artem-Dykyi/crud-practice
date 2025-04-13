import { getPlantApi } from "./getPlantsApi";
import { createPlantList } from "./markup/createPlantList";
import { openModal } from "./moduls/addPlantModal";

getPlantApi().then(plants => {document.querySelector(".plants__list").innerHTML = createPlantList(plants) })
document.querySelector(".plants__btn").addEventListener("click", openModal())
document.querySelector(".form__close").addEventListener("click", closeModal())
