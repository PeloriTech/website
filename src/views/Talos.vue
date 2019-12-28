<template>
  <v-content style="background-color:white">
    <v-layout row wrap>
      <v-flex xs12 md4 my-5 mx-3>
        <span style="
        font-size:60px;
        font-weight:200"
        >
        Talos
        </span><br><br><br>
        <b> Summary </b><br>
        Talos is a platform to manage any number of autonomous drones such as quadrotors,
        fixed-wings, rovers, autonomous boats, etc.. Talos is abstracted to allow for many
        different robotic systems to work together. Drones operate without human intervention.
        <br><br>
        
        Talos is used to secure property more efficiently and effectively compared to
        traditional methods. 
        <br><br>
        <b> Use Cases </b><br>
        Talos oversees a variety of applications in industries such as agriculture,
        public safety, security, and infrastructure. 
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
      screenshot: require('@/assets/talos/screenshot.png')
    }
  }
}
</script>

<style>
  ul {
    margin-right: 0;
  }
  ul.dashed {
    list-style-type: none;
  }
  ul.dashed > li {
    text-indent: -5px;
  }
  ul.dashed > li:before {
    content: "-";
    text-indent: -5px;
  }
</style>
