<template>
    <div class="container">

      <div class="row text-center text-white mb-5 mt-2">
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
        <paginate ref="paginator" name="bebidas" :list="bebidas" :per="4" >
          <ul v-for="bebida in paginated('bebidas')" :key="bebida.id" class="list-group mx-auto" style="width:550px">
            <li class="list-group-item text-center">{{ bebida.strDrink }}</li>
          </ul>
        </paginate>

        <div class="d-flex justify-content-center mt-4">
          <paginate-links :classes="{ ul: 'pagination', li: 'page-item', a: 'page-link' }" for="bebidas" :show-step-links="true" :async="true"
              :simple="{
                prev: 'Anterior',
                next: 'Siguiente',
              }"
            >
          </paginate-links>
        </div>
          <span class="text-center d-block" v-if="$refs.paginator">
            Viewing {{$refs.paginator.pageItemsCount}} results
          </span>
      </div>
      <div v-else>
        <h2 class="display-5 text-center">Sin resultados</h2>
      </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PaginacionSimple",
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
