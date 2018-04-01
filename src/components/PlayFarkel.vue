<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Lets' Play</h2>
    <div id="dice">
      <p><button @click="rollDice">Roll Dice</button></p>
    </div>
    <div id="roll">
      {{roll}}
    </div>
    <div id="roll">
      <p><button @click="firstRoll">Roll Dice</button></p>
      {{theRoll}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Farkel',
  data() {
    return {
      msg: 'Farkel: A Game of Guts and Luck',
      roll: 0,
      theRoll: [],
      //firstRoll: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
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
    rollAny: function () {
      this.theRoll = [];
      for ( var i = 0 ; i < 6 ; i++ ) {
        this.theRoll.push(Math.floor(Math.random() * 6) + 1);
      }
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
</style>
