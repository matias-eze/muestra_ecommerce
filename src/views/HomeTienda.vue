<template>
  <section class="seccion">
    <div class="titulo">
      <h2 class="m-3 mb-5">Sobre Nosotros:</h2>
      <article class="parrafo">
        <div class="imagen mb-5">
          <img class="img-fluid" src="@/assets/imgClases.jpeg" alt="clases" />
        </div>
        <div class="texto-parrafo">
          <p class="parrafo1">MMistica es un emprendimiento que nace en el año 2021, fusionando mis gustos por el arte y lo místico. Trabajando un material tan noble como lo es la arcilla, logrando piezas decorativas y de gran funcionalidad.</p> 
          <p class="parrafo2">Somos un proyecto 100% auto gestionado y sustentable, que comparte la preocupación por el medioambiente y por ello apuesta a volver a los materiales de siempre, el uso de la arcilla es una de las tradiciones más antiguas de la humanidad y su condición reutilizable aporta a la lucha contra los plásticos.</p> 
          <p class="parrafo3">Brindamos clases de cerámica hecha a mano en la zona oeste de la Provincia de Buenos Aires. En nuestros talleres veras técnicas como: conformar una pieza desde cero, modelarla, retornearla, esgrafiarla, esmaltarla, pintarla y mucho más. Llevándote las piezas finalizadas de tu CREACION.</p>
        </div>
      </article>
    </div>
    <div class="iframe-container mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26256.26948817749!2d-58.5756589639817!3d-34.65385219609635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7d93bab75a3%3A0xaafe140bc9dea3db!2sRamos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1652574079421!5m2!1ses!2sar"
        width="500"
        height="450"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
img {
  max-width: 40vw;
}
.seccion {
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titulo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.parrafo {
  max-width: 70vw;
}
.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imagen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
