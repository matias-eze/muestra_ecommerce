<script>
export default {
  name: "ProductosTienda",
  data() {
    return {
      productos: [],
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.productos = data;
        })
        .then(() => {
          for (let i in this.productos) {
            this.productos[i].precio = parseFloat(this.productos[i].precio);
          }
        })
        .catch((err) => {
          console.log("error al cargar", err);
        });
    },
  },
  created() {
    var url = "https://quiet-harbor-36470.herokuapp.com/productos";
    this.fetchData(url);
  },
};
</script>

<template>
  <div v-if="productos.length > 0">
    <div class="card--container p-1 my-3">
      <div v-for="(i, index) in productos" :key="index">
        <div class="card m-1">
          <img class="card-img-top" :src="i.img" alt="Title" />
          <div class="card-body card--body">
            <h5 class="card-title text-capitalize fw-bolder">{{ i.nombre }}</h5>
            <p class="card-text fst-italic">Precio: ${{ i.precio }}</p>
            <router-link
              class="btn btn-primary link p-2 fw-bold"
              :to="{ name: 'ProductoTienda', params: { id: i.id } }"
            >
              COMPRAR
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="d-flex justify-content-center">
    <h3>Cargando..</h3>
    <div class="spinner-border" role="status"></div>
  </div>
</template>

<style lang="scss" scoped>
$primary: #5d2b66;
@import "../../node_modules/bootstrap/scss/bootstrap";
.card--container {
  display: grid;
  gap: 3vh;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 400px;
}
img {
  object-fit: cover;
  height: 250px;
  border-radius: 5px;
  max-width: 100%;
}
.card {
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  height: 400px;
  background-color: #efeaf0;
  border-radius: 5px;
  box-shadow: -1px 1px 6px 4px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: -1px 1px 6px 4px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: -1px 1px 6px 4px rgba(0, 0, 0, 0.47);
}
.main {
  display: flex;
  justify-content: center;
}
.card--body {
  display: grid;
  height: 150px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
