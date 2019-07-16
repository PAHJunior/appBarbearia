<template>
  <q-card  bordered class="transparent no-border no-border-radius no-shadow">
    <q-card-section class="row ">

      <q-table
        class="col-12"
        title="Barbearia 1 de outubro"
        :data="data"
        :columns="columns"
        row-key="_id"
        :pagination.sync="pagination"
        :loading="loading"
        :filter="filter"
      >
        <template v-slot:top-right>
          <q-btn dense flat round class="bg-grey-10 text-amber-14" @click="buscar" icon="search"/>
        </template>

      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import Barbearia from '../services/barbearia/barbearia.js'
import { dirname, parse } from 'path';
export default {
  data () {
    return {
      filter: '',
      loading: false,
      pagination: {
        sortBy: 'name',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10
      },
      columns: [
        {
          name: 'create',
          required: true,
          label: 'Data',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'tipo', align: 'center', label: 'Tipo', field: 'tipo', sortable: true },
        { name: 'categoria', label: 'Categoria', field: 'categoria', sortable: true },
        { name: 'cartao', label: 'Cartão', field: 'cartao', sortable: true },
        { name: 'dinheiro', label: 'Dinheiro', field: 'dinheiro', sortable: true },
        { name: 'quantidade', label: 'Quantidade', field: 'quantidade', sortable: true, sort: (a, b) => parseInt(a) + parseInt(b) }
      ],
      data: []
    }
  },
  mounted () {

  },
  methods: {
    buscar(){
      Barbearia.buscaBarbearia()
        .then((barbearia) => {
          let dados = barbearia.data.data
          function createLinha(create, tipo, categoria, cartao, dinheiro){
            return {
              create: create,
              tipo: tipo,
              categoria: categoria,
              cartao: cartao,
              dinheiro: dinheiro,
              quantidade: parseInt(cartao) + parse(dinheiro)
            }
          }
          for(let i = 0; i < dados.length; i++){

            this.data.push(dados[i].cortes.cabelo)
            // this.data.push(createLinha(dados[i].create, object.keys(dados[i].cortes.cabelo), "cortes", dados[i].cortes.cabelo.dinheiro, dados[i].cortes.cabelo.cartao))
          }
        })
    },
  }
}
</script>