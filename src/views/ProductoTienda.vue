<template>
  <div class="--container">
    <div class="producto--container">
      <img :src="producto.img" alt="imagen del producto" />
      <div class="producto--body">
        <h2 class="text-capitalize fw-bolder">{{ producto.nombre }}</h2>
        <h4 class="fst-italic">${{ producto.precio }}</h4>
        <h5>Stock: {{ producto.stock }} un.</h5>
        <button
          @click="
            agregarCarrito();
            agregar();
          "
          class="fw-bold btn btn-primary"
        >
          Agregar al CARRITO
        </button>
      </div>
    </div>
  </div>
  <div v-if="cargado == true" class="d-flex justify-content-center">
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">
        <img
          style="max-width: 5vw"
          class="img-fluid me-3"
          src="@/assets/cheque.png"
        />
        Producto agregado al Carrito!!
      </h4>
    </div>
  </div>
</template>
<script setup>
import { useCarritoStore } from "../stores/CarritoStore";
const store = useCarritoStore();
const agregar = () => {
  store.$patch({
    carrito: localStorage.length,
  });
};
</script>
<script>
export default {
  name: "ProductoTienda",
  data() {
    return {
      producto: [],
      cargado: false,
    };
  },
  methods: {
    seleccionar: function (x) {
      this.seleccion = x;
    },
    cargarProducto(y) {
      let url = "https://quiet-harbor-36470.herokuapp.com/productos/" + y;
      console.log(url);
      var options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          this.producto = data;
          console.log(this.producto);
        })
        .catch((err) => {
          console.log(err, "error al cargar");
        });
    },
    agregarCarrito() {
      let agregado = { ...this.producto };
      agregado.cantidad = 1;
      let agregar = "agregado" + this.producto.id;
      localStorage.setItem(agregar, JSON.stringify(agregado));
      console.log(agregado);
      this.cargado = true;
    },
  },
  mounted() {
    this.cargarProducto(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
$primary: #5d2b66;
@import "../../node_modules/bootstrap/scss/bootstrap";
img {
  max-width: 40vw;
  max-height: 40vh;
}
.producto--container {
  display: grid;
  gap: 5vw;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 2vw;
  padding: 2vw;
  border-radius: 5px;
  box-shadow: -1px 1px 6px 4px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: -1px 1px 6px 4px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: -1px 1px 6px 4px rgba(0, 0, 0, 0.47);
}
.--container {
  display: flex;
  justify-content: center;
  margin: 2vw;
  padding: 2vw;
}
.producto--body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 450px) {
  .producto--container {
    grid-template-columns: 1fr;
    grid-template-rows: 1.5fr 0.5fr;
  }
  img {
    max-width: none;
  }
}
</style>
