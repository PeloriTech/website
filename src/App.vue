<template>
  <v-app>
    <toolbar/>
    <v-content style="background-color:white;">
      <router-view/>
    </v-content>
    <span style="background-color:white;">
      <section style="margin-bottom:20px;margin-top:20px;">
        <v-layout row>
          <v-layout column style="margin-left:50px;">
            <v-flex class="text-xs-left"
            style="line-height:2;font-weight:300;">
              <span style="line-height:3;font-weight:400"> PRODUCTS<br> </span>
              <router-link to="/product/talos" tag="span" style="cursor: pointer;">
                Talos
              </router-link><br>
              <router-link to="/product/osiris" tag="span" style="cursor: pointer;">
                Osiris
              </router-link><br>
            </v-flex>
          </v-layout>
          <v-flex class="text-xs-left"
          style="line-height:2;font-weight:300;">
            <span style="line-height:3;font-weight:400"> HELP<br> </span>
            <router-link to="/contact" tag="span" style="cursor: pointer;">
              Contact
            </router-link><br>
          </v-flex>
        </v-layout>
      </section>
      <v-footer class="pa-3" style="background-color:white;">
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
      <section>
        <v-flex style="margin:12px; font-size:9px;color:#9a9a9a" class="text-xs-center">
          Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          Remote Control Car by Creaticca Creative Agency from the Noun Project
          Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          Icons made by <a href="https://www.freepik.com/?__hstc=57440181.1ab5c38eda5ea38a027691836a175cee.1556223094814.1556398117991.1557158761338.3&__hssc=57440181.13.1557158761338&__hsfp=1968921329" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a>
        </v-flex>
      </section>
    </span>
  </v-app>
</template>


<script>
import Toolbar from './components/Toolbar'
import router from '@/router'
import colors from 'vuetify/es5/util/colors'
import Vue from 'vue';
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#343332',
    secondary: '#E5B43D',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>
