<template>
  <div class="hello">
    <v-card elevation="2" outlined class="poke-card">
      <v-img
        class="poke-img"
        height="250"
        width="250"
        v-bind:src="
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
          id +
          '.png'
        "
      ></v-img>
      <div class="poke-card-body">
        <span
          ><h1 class="text-left">{{ pokemon.name }}</h1></span
        >
        <p>Types</p>
        <v-list>
          <v-list-item v-for="type in pokemon.types" :key="type">
            <v-list-item-content>
              {{ type.type.name }}
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <p>Abilities</p>
        <v-list>
          <v-list-item v-for="ability in pokemon.abilities" :key="ability">
            <v-list-item-content>
              {{ ability.ability.name }}
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <p>Weight: {{ pokemon.weight }}</p>
        <v-btn class="btn" color="#41b883" elevation="2" v-on:click="goto('/')"
          >Back</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PokePage",
  props: {
    id: String,
    pokemon: [],
  },
  created: function () {
    this.call_api();
  },

  methods: {
    get_poke_id(url) {
      return url.split("/")[url.split("/").length - 2];
    },
    goto(url) {
      window.location.replace(url);
    },
    increment() {
      this.cnt += 4;
    },
    call_api() {
      fetch("https://pokeapi.co/api/v2/pokemon/" + this.id)
        .then((res) => res.json())
        .then(
          (result) => {
            this.pokemon = result;
          },
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
.btn {
  margin: 8px;
  width: 90%;
}
.poke-img {
  margin: auto;
}
span {
  margin: 4px;
}
.poke-card {
  width: 720px;
  margin: auto;
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