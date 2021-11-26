<template>
  <div class="container py-2">
    <div class="row text-center text-white mb-5">
      <div class="col-lg-7 mx-auto">
        <h1 class="display-4 text-body mb-5">Búsqueda de cócteles</h1>
        <div class="d-flex justify-content-center">
          <form class="form-inline" v-on:submit.prevent="buscarCoctel()">
            <input type="text" class="form-control mr-2" placeholder="Introduce el cóctel..." v-model="nombreCoctel"/>
            <button class="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="bebidas != null">
        <div class="row">
        <div class="col-lg-8 mx-auto">
            
            <paginate  class="list-group shadow" ref="paginator" name="bebidas" :list="bebidas" :per="2">
            
            <li class="list-group-item" v-for="bebida in paginated('bebidas')" :key="bebida.idDrink">
                
                <div class="media align-items-lg-center flex-column flex-lg-row p-3" >
                <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">{{ bebida.strDrink }}</h5>
                    <p class="font-italic text-muted mb-0 small"> {{ bebida.strCategory }} | {{ bebida.strAlcoholic }} | {{ bebida.strGlass }}</p>
                    <p>{{ bebida.strInstructions }}</p>
                </div>
                <img :src="bebida.strDrinkThumb" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2" />
                </div>
                
            </li>
            
            </paginate>
        
        </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
            <paginate-links :classes="{ ul: 'pagination', li: 'page-item', a: 'page-link' }" for="bebidas" :show-step-links="true" :limit="4" :async="true"></paginate-links>
        </div>
    </div>
    <div v-else>
        <h2 class="display-5 text-center">Sin resultados</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PaginacionEnumerada",
  data() {
    return {
      bebidas: [],
      paginate: ["bebidas"],
      nombreCoctel: "",
    };
  },
  methods: {
    buscarCoctel() {
      var request = "/api/json/v1/1/search.php?s=" + this.nombreCoctel;
      var url = "https://www.thecocktaildb.com/" + request;
      axios.get(url).then((res) => {
        this.bebidas = res.data.drinks;
        console.log(this.bebidas);
      });
    },
  },
};
</script>

<style scoped>
img {
  height: 170px;
  width: 140px;
}
</style>