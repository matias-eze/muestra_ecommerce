import { defineStore } from "pinia";
/* var url = "https://quiet-harbor-36470.herokuapp.com/productos";
let productos = [];
const fetchData = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      productos = data;
    })
    .then(() => {
      for (let i in this.productos) {
        productos[i].precio = parseFloat(productos[i].precio);
      }
    })
    .catch((err) => {
      console.log("error al cargar", err);
    });
};
fetchData(); */

export const useCarritoStore = defineStore("CarritoStore", {
  //state
  state: () => {
    return {
      carrito: localStorage.length,
    };
  },
  //actions

  //getters
});
