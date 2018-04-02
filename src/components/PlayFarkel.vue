<template>
  <div class="farkel">
    <h1>{{ msg }}</h1>
    <h2>Lets' Play</h2>
    <div id="roll">
      <p><button @click="firstRoll">Roll Dice</button></p>
      <ul>
        <li v-for="die in theRoll">
          <p class="dice">
            {{ die }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Farkel',
  data() {
    return {
      msg: 'Farkel: A Game of Guts and Luck',
      theRoll: [],
      dice: [],
      counter: 0,
    };
  },
  methods: {
    rollDice: function () {
      this.roll = Math.floor(Math.random() * 6) + 1;
    },
    firstRoll: function () {
      this.theRoll = [];
      for ( var i = 0 ; i < 6 ; i++ ) {
        this.theRoll.push(Math.floor(Math.random() * 6) + 1);
      }
    },
    scoreRoll: function () {
    },
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

.dice {
  height: 50px;
  width: 50px;
  padding: 25px;
  margin: 25px auto;
  border: 1px solid gray;
  border-radius: 5px;
  font-size:40px;
}
</style>
