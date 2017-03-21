<template>
  <div class="c">
  <div class="box outerDiv">
    <h1 class="title">Develop your number sense!!!</h1>
    <p class="control">
      <label class="radio">
        <input type="radio" id="beginner" value="1" v-model="level">
        Beginner
      </label>
      <label class="radio">
        <input type="radio" id="intermediate" value="2" v-model="level">
        Intermediate
      </label>
      <label class="radio">
        <input type="radio" id="expert" value="3" v-model="level">
        Expert
      </label>
      <label class="radio">
        <input type="radio" id="expert" value="4" v-model="level">
        Math Wiz
      </label>
    </p>
    <p class="control">
      <router-link class="button is-primary is-large" :to="{ name: 'bubbles', params: { gameLevel: level }}" exact>Play</router-link>
    </p>
  </div>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      level: 1
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.c {
  padding: 0px;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  background: url(../assets/beach.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.outerDiv { 
  position: absolute;
  top: 25%;
  left: 35%;
}
</style>
