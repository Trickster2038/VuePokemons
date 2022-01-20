<template>
  <div class="hello">
    <HelloWorld msg="Welcome to Pokemons catalogue based on Vue" />
    <span>
      <span
        ><v-btn color="#41b883" elevation="2" v-on:click="increment"
          >Increment</v-btn
        ></span
      >
      <span>Cnt: {{ cnt }}</span>
    </span>
    <div class="d-flex flex-wrap gallery">
      <ul>
        <li v-for="item in pokemons" :key="item.name" class="poke-li">
          <v-card
            elevation="2"
            outlined
            class="poke-card"
            v-on:click="goto(item.url)"
          >
            <v-img
              height="250"
              v-bind:src="
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                get_poke_id(item.url) +
                '.png'
              "
            ></v-img>
            <div class="poke-card-body">
              {{ item.name }}
            </div>
          </v-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

let nextTodoId = 1;
export default {
  name: "PokeList",
  components: {
    HelloWorld,
  },
  props: {
    limit: Number,
  },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: nextTodoId++,
          text: "Learn Vue",
        },
        {
          id: nextTodoId++,
          text: "Learn about single-file components",
        },
        {
          id: nextTodoId++,
          text: "Fall in love",
        },
      ],
      cnt: 4,
      pokemons: [],
    };
  },
  created: function () {
    this.call_api();
  },
  watch: {
    cnt: function () {
      // watch it
      this.call_api();
    },
  },

  methods: {
    get_poke_id(url) {
      return url.split("/")[url.split("/").length - 2];
    },
    goto(item_url) {
      window.location.replace("/pokemon/" + this.get_poke_id(item_url));
    },
    increment() {
      this.cnt += 4;
    },
    call_api() {
      //   console.log("https://pokeapi.co/api/v2/pokemon?limit=" + this.limit);
      //   fetch("https://pokeapi.co/api/v2/pokemon?limit=" + this.limit)
      fetch("https://pokeapi.co/api/v2/pokemon?limit=" + this.cnt)
        .then((res) => res.json())
        .then(
          (result) => {
            this.pokemons = result.results;
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            console.log(error);
          }
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  margin: 4px;
}
.gallery {
  width: 70%;
  margin: auto;
}
.poke-li {
  width: 20%;
  margin: 8px;
}
.poke-card-body {
  padding: 8px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>