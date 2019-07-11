<template>
  <div class="q-pa-md">
    <q-table
      title="Barbearia 1 de outubro"
      :data="data"
      :columns="columns"
      row-key="id"
      :pagination.sync="pagination"
      :loading="loading"
      :filter="filter"
      @request="onRequest"
      binary-state-sort
    >
      <template v-slot:top-right>
        <q-input  dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>
</template>

<script>
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
          name: 'data',
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

  }
}
</script>