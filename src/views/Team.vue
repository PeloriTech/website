<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12"
          style="padding-bottom:10px;">
            <v-toolbar dark color="primary" flat>
              <v-toolbar-title
              style="font-weight:300">
              Sam Crane, Founder</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-media>
              <v-img
              aspect-ratio="2.55"
              :src="sam"/>
            </v-card-media>
            <v-card-text>
              Sam has experience in numerous technical projects, and a passion for drones. 
              He has taken part in fulfilling many security/IoT contracts, and has a deep
              understanding of multiple disciplines of software development.
              <br><br>
              Sam has worked on IoT, Computer Vision, Unmanned Aerial Vehicles, Various
              SLAM applications, Video pipelines, backend systems, and has built many
              products from start to finish.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    data() {
      return {
        sam: require('@/assets/sam.jpeg')
      }
    }
  }
</script>