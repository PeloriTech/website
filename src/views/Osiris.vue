<template>
  <v-content style="background-color:white">
    <v-layout row wrap>
      <v-flex xs12 md4 my-5 mx-3>
        <span style="
        font-size:60px;
        font-weight:200"
        >
        Osiris
        </span><br><br><br>
        <b> Summary </b><br>
        Osiris uses a single server to run AI processes on any number of
        video pipelines. Our product takes input from video steams and
        leverages AI to provide with workable insights. The server is
        ideal for facilities with multiple CCTV feeds, drones, rovers, or any
        combination of the former.<br><br>

        <b> Use Cases </b><br>
        <ul class="dashed">
        <li> Augment and refine the ability of security guards to assess and respond
         to surveillance footage</li>
        <li> Relevant for a variety of infrastructure management applications
        Automate responses through our Talos platform</li>
        </ul>
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
      screenshot: require('@/assets/osiris/yolo_output.png'),
      logo: require('@/assets/talos/logo.png')
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
