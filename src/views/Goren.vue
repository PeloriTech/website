<template>
  <v-content style="background-color:white">
    <v-layout row wrap>
      <v-flex xs12 md4 my-5 mx-3>
        <span style="
        font-size:60px;
        font-weight:200"
        >
        Goren
        </span><br><br><br>
        The Goren hardware was born out of a need for an enterprise drone built
        on an open-system. Don't be limited by an SDK: load any code on our system and take complete control.
        <br><br>
      </v-flex>
      <v-flex xs12 md7 my-5 mx-4>
        <v-card style="max-width:80vw;height:auto;">
          <v-img :src="screenshot" style="max-width:80vw;height:auto;"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      screenshot: require('@/assets/talos/goren.jpeg'),
      logo: require('@/assets/talos/logo.png')
    }
  }
}
</script>

<style>

</style>
