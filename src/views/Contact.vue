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
              CONTACT US</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-icon>email</v-icon>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-textarea name="message1" label="Message" v-model="message" id="message1" type="text"></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="primary" @click="send_email(message)">Send</v-btn>
              <v-spacer/>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import router from '@/router'

  export default {
    data: () => ({
      drawer: null,
      message: ""
    }),
    methods: {
      send_email(msg) {
        window.location.href = `mailto:sam@pelori.io?subject=[Pelori]&body=`+msg;
        router.push('/')
      }
    },
    props: {
      source: String
    }
  }
</script>