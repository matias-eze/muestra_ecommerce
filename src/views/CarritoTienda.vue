<template>
  <div class="--container">
    <table class="table --table" style="background-color: transparent">
      <tr>
        <th class="p-2 m-2">Producto</th>
        <th class="p-2 m-2">Nombre</th>
        <th class="p-2 m-2">Precio</th>
        <th class="p-2 m-2 --stock">Stock</th>
        <th class="p-2 m-2">Comprar</th>
        <th class="p-2 m-2"></th>
      </tr>
      <tr v-for="(producto, index) in productos" :key="index">
        <td class="p-2 m-2">
          <img
            :src="producto.img"
            class="img-thumbnail --img"
            :alt="producto.nombre"
          />
        </td>
        <td class="p-2 m-2">{{ producto.nombre }}</td>
        <td class="p-2 m-2 fst-italic">${{ producto.precio }}</td>
        <td class="p-2 m-2 --stock">{{ producto.stock }} un.</td>
        <td class="p-2 m-2">
          <button
            @click="
              Add(producto.id);
              sumarTotales();
            "
            class="mx-2 btn btn-success bg-success"
          >
            +
          </button>
          {{ producto.cantidad }}un.
          <button
            @click="
              remove(producto.id);
              quitar();
              sumarTotales();
            "
            class="mx-2 btn btn-danger bg-danger"
          >
            -
          </button>
        </td>
      </tr>
      <tr v-if="total > 0">
        <td></td>
        <td class="fw-bolder p-2">Total:</td>
        <td class="fw-bolder p-2">${{ total }}</td>
        <td></td>
      </tr>
    </table>
    <div v-if="productos.length > 0" class="d-flex justify-content-center mt-5">
      <button
        @click="
          comprar();
          quitar();
          sumarTotales();
        "
        class="btn btn-primary mb-5"
      >
        COMPRAR
      </button>
    </div>
    <div>
      <div
        class="alert alert-success mt-5"
        role="alert"
        v-if="compraOk == true"
      >
        <h4 class="alert-heading">Gracias por su compra!!</h4>
        <p>Desde MMistica agradecemos mucho su confianza.</p>
        <hr />
        <p class="mb-0">
          Esta es una version de prueba por lo que no se realizara ningun cobro ni envio.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCarritoStore } from "../stores/CarritoStore";
const store = useCarritoStore();
const quitar = () => {
  console.log("tengo:", localStorage.length);
  store.$patch({
    carrito: localStorage.length,
  });
};
</script>
<script>
export default {
  name: "CarritoTienda",
  data() {
    return {
      productos: [],
      total: 0,
      compraOk: false,
    };
  },
  methods: {
    cargarProductos() {
      this.productos = [];
      let len = localStorage.length;
      for (let i = 0; i < len; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        this.productos.push(JSON.parse(value));
      }
      this.sumarTotales();
    },
    sumarTotales() {
      let len = localStorage.length;
      this.total = 0;
      for (let i = 0; i < len; i++) {
        let total = this.productos[i].precio * this.productos[i].cantidad;
        this.total = this.total + total;
        this.total = this.total.toFixed(2);
      }
    },
    Add(id) {
      console.log("entre a la funcion");
      for (let i in this.productos) {
        console.log(i);
        if (this.productos[i].id === id) {
          if (this.productos[i].stock > this.productos[i].cantidad) {
            this.productos[i].cantidad++;
            let agregado = { ...this.productos[i] };
            let agregar = "agregado" + this.productos[i].id;
            localStorage.setItem(agregar, JSON.stringify(agregado));
          } else {
            console.log(
              "la cantidad solicitada supera el stock actual del producto"
            );
          }
        }
      }
    },
    remove(id) {
      console.log("entre remover");
      for (let i in this.productos) {
        //console.log(i, this.productos[i].id, id);
        if (this.productos[i].id == id) {
          if (this.productos[i].cantidad == 1) {
            let mensaje = confirm(
              "¿Seguro que deseas eliminar este producto del carrito?"
            );
            if (mensaje) {
              console.log("entre al tercer if", this.productos[i].cantidad);
              let remover = "agregado" + this.productos[i].id;
              console.log(remover);
              localStorage.removeItem(remover);
              this.cargarProductos();
            }
          } else {
            if (this.productos[i].cantidad > 1) {
              console.log("entre al segundo if", this.productos[i].cantidad);
              this.productos[i].cantidad -= 1;
              console.log(this.productos[i].cantidad);
              let agregado = { ...this.productos[i] };
              console.log(agregado);
              let agregar = "agregado" + this.productos[i].id;
              console.log(agregar);
              localStorage.setItem(agregar, JSON.stringify(agregado));
            }
          }
        }
      }
    },
    comprar() {
      for (let i in this.productos) {
        console.log("entre al for");
        if (this.productos[i].cantidad == this.productos[i].stock) {
          console.log("entre al if eliminar");
          var url =
            "https://quiet-harbor-36470.herokuapp.com/producto/" +
            this.productos[i].id;
          let options = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          };
          fetch(url, options).then((res) => console.log(res.text()));
        } else {
          console.log("entre al else modificar");
          let url =
            "https://quiet-harbor-36470.herokuapp.com/productos/" +
            this.productos[i].id;
          console.log(url);
          let producto = {};
          producto.id = this.productos[i].id;
          producto.nombre = this.productos[i].nombre;
          producto.precio = this.productos[i].precio;
          producto.stock = this.productos[i].stock - this.productos[i].cantidad;
          producto.img = this.productos[i].img;
          console.log(producto);
          let options = {
            body: JSON.stringify(producto),
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
          };
          fetch(url, options).catch((err) => {
            console.error(err);
          });
        }
        let remover = "agregado" + this.productos[i].id;
        console.log(remover);
        localStorage.removeItem(remover);
        this.cargarProductos();
        this.compraOk = true;
      }
    },
  },
  created() {
    this.cargarProductos();
  },
};
</script>

<style lang="scss" scoped>
$primary: #5d2b66;
@import "../../node_modules/bootstrap/scss/bootstrap";
.--img {
  max-width: 100px;
}
@media screen and (max-width: 450px) {
  .--img {
    max-width: 50px;
  }
  .--stock {
    display: none;
  }
}
</style>
