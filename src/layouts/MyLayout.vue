<template>
  <q-layout view="hHh lpR fFf" class="shadow-2 rounded-borders">
    <q-header reveal class="bg-black">
      <q-toolbar class="bg-grey-10  text-amber-14">
        <q-btn v-if="this.$q.platform.is.desktop" flat @click="drawerLeft = !drawerLeft" class="text-white" round dense icon="menu" />
        <q-toolbar-title>Barbearia 1 de outubro</q-toolbar-title>
        </q-toolbar>
    </q-header>

    <q-drawer
      v-if="this.$q.platform.is.desktop"
      v-model="drawerLeft"
      bordered
      content-class="bg-grey-8"
    >

      <q-scroll-area class="fit">

        <q-list bordered padding class="rounded-borders text-white">

          <!-- Aba Cortes -->
          <q-item
            clickable
            v-ripple
            :active="link === 'cortes'"
            @click="SETTAB('cortes')"
            active-class="my-menu-link"
          >
            <q-item-section>Cortes</q-item-section>
          </q-item>

          <!-- Aba Bebidas -->
          <q-item
            clickable
            v-ripple
            :active="link === 'bebidas'"
            @click="SETTAB('bebidas')"
            active-class="my-menu-link"
          >
            <q-item-section>Bebidas</q-item-section>
          </q-item>

          <!-- Aba Produtos -->
          <q-item
            clickable
            v-ripple
            :active="link === 'produtos'"
            @click="SETTAB('produtos')"
            active-class="my-menu-link"
          >
            <q-item-section>Produtos</q-item-section>
          </q-item>


          <!-- Aba Tabela -->
          <q-item
            clickable
            v-ripple
            :active="link === 'produtos'"
            @click="SETTAB('tabela')"
            active-class="my-menu-link"
          >
            <q-item-section>Tabela</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-footer v-if="this.$q.platform.is.mobile" class="bg-grey-10 text-amber-14 row" elevated>

      <q-toolbar>
        <q-tabs
          v-model="tab"
          inline-label
          class="col-12"
        >
          <q-tab @click="SETTAB('cortes')" name="cortes" label="Cortes" />
          <q-tab @click="SETTAB('bebidas')" name="bebidas" label="Bebidas" />
          <q-tab @click="SETTAB('produtos')" name="produtos" label="Produtos" />
        </q-tabs>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MyLayout',
  data () {
    return {
      enviar: false,
      tab: 'cortes',
      versao: process.env.VERSAO,
      link: 'inbox',
      drawerLeft: false
    }
  },
  methods: {
    ...mapMutations('barbearia', ['SETTAB']),
  }
}
</script>

<style>
.q-page{
  background-image: url("../statics/Logo.jpg");
  background-repeat: no-repeat;
  background-position: center; /* Center the image */
  background-attachment: fixed;
  /* background-size: cover; Resize the background image to cover the entire container */
  background-color: #ECE7E4;
}

.q-panel{
  background-color: none;
}
.q-tab-panel{
  background-color: none;
}
.q-tab-panels{
  background-color: none;
}
</style>