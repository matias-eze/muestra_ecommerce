<script setup>
import { useCarritoStore } from "../stores/CarritoStore";
const store = useCarritoStore();
</script>
<script>
export default {
  name: "TiendaHeader",
  data() {
    return {
      carrito: 0,
    };
  },
  methods: {
    items() {
      let len = localStorage.length;
      for (let i = 0; i < len; i++) {
        this.carrito++;
      }
    },
  },
};
</script>

<template>
  <div class="header py-3">
    <router-link class="px-5 mb-2 link-logo" to="/">
      <img class="logo" src="@/assets/logo.jpg" alt="Logo" />
    </router-link>
    <h1 class="titulo">CERAMICA HECHA A MANO</h1>
    <a
      class="px-5 link-insta"
      href="https://www.instagram.com/mmisticadeco/?hl=es"
      target="blank"
    >
      <img src="@/assets/insta.png" alt="instagram" />
    </a>
  </div>
  <div id="nav-bar" class="nav-bar p-2">
    <nav>
      <RouterLink to="/" class="btn btn-primary me-2">Inicio</RouterLink>
      <RouterLink to="/productos" class="btn btn-primary">Productos</RouterLink>
      <RouterLink to="/carrito" class="btn btn-primary ms-2">
        <img
          class="--carrito"
          src="@/assets/carrito-de-compras.png"
          alt="Carrito"
        /><span class="badge bg-danger ms-1">{{ store.carrito }}</span>
      </RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
$primary: #5d2b66;
@import "../../node_modules/bootstrap/scss/bootstrap";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  background-color: #efeaf0;
}
img {
  max-width: 12vw;
}
.nav-bar {
  display: flex;
  flex-basis: 100%;
  background-color: #5d2b66;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px 10px 0 #000;
}
nav {
  background-color: #5d2b66;
}
a {
  text-decoration: none;
  color: #ddc3e8;
  text-transform: uppercase;
  text-decoration: none;
}
.logo {
  border-radius: 50%;
}
.titulo {
  color: #5d2b66;
  font-size: 2.5em;
  font-family: "Koulen";
  display: inline-block;
  text-align: center;
}
.--carrito {
  max-width: 5vw;
}

@media screen and (max-width: 600px) {
  .header {
    display: grid;
    grid-template-areas:
      "logo titulo titulo"
      "insta titulo titulo";
  }
  .titulo {
    grid-area: titulo;
    margin-right: 10px;
  }
  .link-logo {
    grid-area: logo;
  }
  .link-insta {
    grid-area: insta;
  }
}
@media screen and (max-width: 350px) {
  .header {
    display: grid;
    grid-template-areas:
      "titulo titulo"
      "logo insta";
    justify-items: center;
  }
  .titulo {
    grid-area: titulo;
    margin-right: 10px;
  }
  .link-logo {
    grid-area: logo;
  }
  .link-insta {
    grid-area: insta;
  }
}
@media screen and (min-width: 300px) {
  img {
    max-width: 10vw;
  }
  .--carrito {
    max-width: 7vw;
  }
}
@media screen and (min-width: 600px) {
  img {
    max-width: 8vw;
  }
  .--carrito {
    max-width: 5vw;
  }
}

@media screen and (min-width: 800) {
  img {
    max-width: 6vw;
  }
  .--carrito {
    max-width: 4vw;
  }
}
@media screen and (min-width: 1000px) {
  img {
    max-width: 5vw;
  }
  .--carrito {
    max-width: 3vw;
  }
}
@media screen and (min-width: 1500px) {
  img {
    max-width: 4vw;
  }
}
</style>
