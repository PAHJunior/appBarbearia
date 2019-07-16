<template>
  <q-page :class="this.$q.platform.is.mobile? 'row': 'row' ">
    <div class="col-md-6 col-sm-6 col-xs-12   fixed-center">
      <q-tab-panels v-model="tab" :animated="this.$q.platform.is.mobile" class="transparent bg-grey-2">
        <q-tab-panel name="cortes" class="q-gutter-y-md">

          <!-- Cabelo -->
            <q-card  bordered>
              <q-card-section>
                <div class="text-h5 text-center">CABELOS</div>
              </q-card-section>

              <q-card-section class="row justify-center">
                <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                  Dinheiro
                </div>
                <div class="row col-md-3 col-sm-6 col-xs-6">
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      :disable="barbearia.cortes.cabelo.dinheiro == 0 ? true : false"
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="remove"
                      v-touch-repeat:0:150.mouse.enter.space="cabeloDinheiroMenos"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-input type="number" v-model="barbearia.cortes.cabelo.dinheiro" outlined dense />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="add"
                      v-touch-repeat:0:150.mouse.enter.space="cabeloDinheiroMais"
                      />
                  </div>
                </div>
              </q-card-section>


              <q-card-section class="row justify-center">
                <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                  Cartão
                </div>
                <div class="row col-md-3 col-sm-6 col-xs-6">
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="remove"
                      :disable="barbearia.cortes.cabelo.cartao <= 0 ? true : false"
                      v-touch-repeat:0:150.mouse.enter.space="cabeloCartaoMenos"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-input type="number" v-model="barbearia.cortes.cabelo.cartao" outlined dense />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      v-touch-repeat:0:150.mouse.enter.space="cabeloCartaoMais"
                      round
                      push
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="add"
                    />
                  </div>

                </div>
              </q-card-section>
            </q-card>

          <!-- Barbas -->
            <q-card bordered>
              <q-card-section>
                <div class="text-h5 text-center">BARBAS</div>
              </q-card-section>

              <q-card-section class="row justify-center">
                <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                  Dinheiro
                </div>
                <div class="row col-md-3 col-sm-6 col-xs-6">
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      v-touch-repeat:0:150.mouse.enter.space="barbaDinheiroMenos"
                      :disable="barbearia.cortes.barba.dinheiro == 0 ? true : false"
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="remove"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-input type="number" v-model="barbearia.cortes.barba.dinheiro" outlined dense />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      v-touch-repeat:0:150.mouse.enter.space="barbaDinheiroMais"
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="add"
                    />
                  </div>

                </div>
              </q-card-section>
              <q-card-section class="row justify-center">
                <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                  Cartão
                </div>
                <div class="row col-md-3 col-sm-6 col-xs-6">
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      v-touch-repeat:0:150.mouse.enter.space="barbaCartaoMenos"
                      :disable="barbearia.cortes.barba.cartao == 0 ? true : false"
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="remove"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-input type="number" v-model="barbearia.cortes.barba.cartao" outlined dense />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      v-touch-repeat:0:150.mouse.enter.space="barbaCartaoMais"
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="add"
                    />
                  </div>

                </div>
              </q-card-section>
            </q-card>
        </q-tab-panel>


      <!-- Bebidas -->
        <q-tab-panel name="bebidas">
          <q-card bordered>
              <q-card-section>
                <div class="text-h5 text-center">Bebidas</div>
              </q-card-section>

              <!-- Coca cola -->
              <q-card-section class="row justify-center">
                <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                  Coca 350ml
                </div>
                <div class="row col-md-3 col-sm-6 col-xs-6">
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      :disable="barbearia.bebidas.coca.quantidade == 0 ? true : false"
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="remove"
                      v-touch-repeat:0:150.mouse.enter.space="cocaMenos"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-input type="number" v-model="barbearia.bebidas.coca.quantidade" outlined dense />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="add"
                      v-touch-repeat:0:150.mouse.enter.space="cocaMais"
                      />
                  </div>
                </div>
              </q-card-section>

              <!-- Budweiser -->
              <q-card-section class="row justify-center">
                <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                  Budweiser 350ml
                </div>
                <div class="row col-md-3 col-sm-6 col-xs-6">
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="remove"
                      :disable="barbearia.bebidas.budweiser.quantidade <= 0 ? true : false"
                      v-touch-repeat:0:150.mouse.enter.space="budweiserMenos"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-input  type="number" v-model="barbearia.bebidas.budweiser.quantidade" outlined dense />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      v-touch-repeat:0:150.mouse.enter.space="budweiserMais"
                      round
                      push
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="add"
                    />
                  </div>

                </div>
              </q-card-section>

              <!-- Skol -->
              <q-card-section class="row justify-center">
                <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                  Skol 290ml
                </div>
                <div class="row col-md-3 col-sm-6 col-xs-6">
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="remove"
                      :disable="barbearia.bebidas.skol.quantidade <= 0 ? true : false"
                      v-touch-repeat:0:150.mouse.enter.space="skolMenos"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-input  type="number" v-model="barbearia.bebidas.skol.quantidade" outlined dense />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      v-touch-repeat:0:150.mouse.enter.space="skolMais"
                      round
                      push
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="add"
                    />
                  </div>

                </div>
              </q-card-section>

              <!-- Stella -->
              <q-card-section class="row">
                <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                  Stella g. 275ml
                </div>
                <div class="row col-md-3 col-sm-6 col-xs-6">
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="remove"
                      :disable="barbearia.bebidas.stella.quantidade <= 0 ? true : false"
                      v-touch-repeat:0:150.mouse.enter.space="stellaMenos"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-input  type="number" v-model="barbearia.bebidas.stella.quantidade" outlined dense />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      v-touch-repeat:0:150.mouse.enter.space="stellaMais"
                      round
                      push
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="add"
                    />
                  </div>

                </div>
              </q-card-section>

              <!-- Bonafont -->
              <q-card-section class="row ">
                <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                  Bonafont 500ml
                </div>
                <div class="row col-md-3 col-sm-6 col-xs-6">
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      round
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="remove"
                      :disable="barbearia.bebidas.bonafont.quantidade <= 0 ? true : false"
                      v-touch-repeat:0:150.mouse.enter.space="bonafontMenos"
                    />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-input  type="number" v-model="barbearia.bebidas.bonafont.quantidade" outlined dense />
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                    <q-btn
                      v-touch-repeat:0:150.mouse.enter.space="bonafontMais"
                      round
                      push
                      class="justify-center bg-grey-10 text-amber-14"
                      icon="add"
                    />
                  </div>

                </div>
              </q-card-section>

            </q-card>
            {{ verify }}
        </q-tab-panel>
      
      <!-- Produtos -->
        <q-tab-panel name="produtos" class="q-gutter-y-md">

          <!-- Produtos -->
          <q-card  bordered>

            <q-card-section>
              <div class="text-h5 text-center">PRODUTOS</div>
            </q-card-section>

            <!-- Gel -->
            <q-card-section class="row">
              <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                Gel Mutation
              </div>
              <div class="row col-md-3 col-sm-6 col-xs-6">
                <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                  <q-btn
                    :disable="barbearia.produtos.gel.quantidade == 0 ? true : false"
                    round
                    class="justify-center bg-grey-10 text-amber-14"
                    icon="remove"
                    v-touch-repeat:0:150.mouse.enter.space="gelMenos"
                  />
                </div>
                <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                  <q-input type="number" v-model="barbearia.produtos.gel.quantidade" outlined dense />
                </div>
                <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                  <q-btn
                    round
                    class="justify-center bg-grey-10 text-amber-14"
                    icon="add"
                    v-touch-repeat:0:150.mouse.enter.space="gelMais"
                  />
                </div>
              </div>
            </q-card-section>

            <!-- Cera -->
            <q-card-section class="row">
              <div class="text-h6 col-md-9 col-sm-6 col-xs-6">
                Cera Infinty
              </div>
              <div class="row col-md-3 col-sm-6 col-xs-6">
                <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                  <q-btn
                    round
                    class="justify-center bg-grey-10 text-amber-14"
                    icon="remove"
                    :disable="barbearia.produtos.cera.quantidade <= 0 ? true : false"
                    v-touch-repeat:0:150.mouse.enter.space="ceraMenos"
                  />
                </div>
                <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                  <q-input type="number" v-model="barbearia.produtos.cera.quantidade" outlined dense />
                </div>
                <div class="col-md-4 col-sm-4 col-xs-4 q-gutter-sm">
                  <q-btn
                    v-touch-repeat:0:150.mouse.enter.space="ceraMais"
                    round
                    push
                    class="justify-center bg-grey-10 text-amber-14"
                    icon="add"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <!-- btn enviar -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click.native="enviar = true" round color="grey-10" class="text-amber-14" icon="send" size="400" />
    </q-page-sticky>

    <q-dialog v-model="enviar">
      <q-card>
        <q-card-section>
          <div class="row">
            <div class="col-12 text-h6 text-center">Cortes</div>
            <div class="text-subtitle1 col-9">Cabelos - Dinheiro</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.cortes.cabelo.dinheiro }}</div>
            <div class="text-subtitle1 col-9">Cabelos - Cartão</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.cortes.cabelo.cartao }}</div>
            <div class="text-subtitle1 col-9">Barbas - Dinheiro</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.cortes.barba.dinheiro }}</div>
            <div class="text-subtitle1 col-9">Barbas - Cartão</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.cortes.barba.cartao }}</div>
          </div>
          <q-separator />
          <div class="row">
            <div class="col-12 text-h6 text-center">Bebidas</div>
            <div class="text-subtitle1 col-9">Coca 350ml</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.bebidas.coca.quantidade }}</div>
            <div class="text-subtitle1 col-9">Budweiser</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.bebidas.budweiser.quantidade }}</div>
            <div class="text-subtitle1 col-9">Skol</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.bebidas.skol.quantidade }}</div>
            <div class="text-subtitle1 col-9">Stella g. 275ml</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.bebidas.stella.quantidade }}</div>
            <div class="text-subtitle1 col-9">Bonafont 500ml</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.bebidas.bonafont.quantidade }}</div>
          </div>
          <q-separator />
          <div class="row">
            <div class="col-12 text-h6 text-center">Produtos</div>
            <div class="text-subtitle1 col-9">Gel Mulation</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.produtos.gel.quantidade }}</div>
            <div class="text-subtitle1 col-9">Cera Infinty</div>
            <div class="text-subtitle1 col-2 text-right">{{ this.barbearia.produtos.cera.quantidade }}</div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions class="row">
          <q-btn  label="Salvar" @click.native="cadastrar" class="col-12 bg-grey-10 text-amber-14" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style>
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}
</style>

<script>
import VTable from 'components/tabela.vue'
import { mapState, mapMutations } from 'vuex'
import Barbearia from '../services/barbearia/barbearia.js'


export default {
  name: 'PageIndex',
  components:{
    VTable
  },
  data(){
    return{
      enviar: false,
      name: 'Paulo',
      barbearia: {
        cortes:{
          cabelo: {
            dinheiro: 0,
            cartao: 0
          },
          barba: {
            dinheiro: 0,
            cartao: 0
          }
        },
        bebidas:{
          coca:{
            quantidade: 0
          },
          budweiser:{
            quantidade: 0
          },
          skol:{
            quantidade: 0
          },
          stella:{
            quantidade: 0
          },
          bonafont:{
            quantidade: 0
          },
        },
        produtos:{
          gel: {
            quantidade: 0
          },
          cera: {
            quantidade: 0
          }
        }
      }
    }
  },
  methods: {
    // Function para buscar
    cadastrar(){
      this.$q.dialog({
        color: 'primary',
        title: 'Download Excel',
        message: 'Digite sua senha para efeuar o download',
        prompt: {
          model: '',
          type: 'password' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        if (data == '123barbearia'){
          Barbearia.cadastraBarbearia(this.barbearia)
            .then((barbearia) => {
              this.$q.notify({
                message: 'Cadastro efetuado',
                color: 'bg-grey-10',
                textColor: 'text-amber-14'
              })
            })
        }
      }).onCancel(() => {
        console.log('>>>> Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    },


    // Cortes
    // Cabelo
    cabeloCartaoMais(){
      this.barbearia.cortes.cabelo.cartao++
    },
    cabeloCartaoMenos(){
      this.barbearia.cortes.cabelo.cartao--
    },
    cabeloDinheiroMenos(){
      this.barbearia.cortes.cabelo.dinheiro--
    },
    cabeloDinheiroMais(){
      this.barbearia.cortes.cabelo.dinheiro++
    },

    // Barba
    barbaCartaoMais(){
      this.barbearia.cortes.barba.cartao++
    },
    barbaCartaoMenos(){
      this.barbearia.cortes.barba.cartao--
    },
    barbaDinheiroMais(){
      this.barbearia.cortes.barba.dinheiro++
    },
    barbaDinheiroMenos(){
      this.barbearia.cortes.barba.dinheiro--
    },


    // Bebidas
    // Coca-cila
    cocaMais(){
      this.barbearia.bebidas.coca.quantidade++
    },
    cocaMenos(){
      this.barbearia.bebidas.coca.quantidade--
    },

    // Budweiser
    budweiserMais(){
      this.barbearia.bebidas.budweiser.quantidade++
    },
    budweiserMenos(){
      this.barbearia.bebidas.budweiser.quantidade--
    },

    // Skol
    skolMais(){
      this.barbearia.bebidas.skol.quantidade++
    },
    skolMenos(){
      this.barbearia.bebidas.skol.quantidade--
    },

    // Stella
    stellaMais(){
      this.barbearia.bebidas.stella.quantidade++
    },
    stellaMenos(){
      this.barbearia.bebidas.stella.quantidade--
    },

    // Bonafont
    bonafontMais(){
      this.barbearia.bebidas.bonafont.quantidade++
    },
    bonafontMenos(){
      this.barbearia.bebidas.bonafont.quantidade--
    },


    // Produtos

    // Gel
    gelMais(){
      this.barbearia.produtos.gel.quantidade++
    },
    gelMenos(){
      this.barbearia.produtos.gel.quantidade--
    },

    // Cera
    ceraMais(){
      this.barbearia.produtos.cera.quantidade++
    },
    ceraMenos(){
      this.barbearia.produtos.cera.quantidade--
    }
  },
  computed: {
    // Barba
    verify: function(){
      // Cabelo - Dinheiro
      if(this.barbearia.cortes.cabelo.dinheiro <= 0){
        this.barbearia.cortes.cabelo.dinheiro = 0;
      }

      // Cabelo - Cartao
      if(this.barbearia.cortes.cabelo.cartao <= 0){
        this.barbearia.cortes.cabelo.cartao = 0;
      }

      // Barba - Dinheiro
      if(this.barbearia.cortes.barba.dinheiro <= 0){
        this.barbearia.cortes.barba.dinheiro = 0;
      }

      // Barba - Cartao
      if(this.barbearia.cortes.barba.cartao <= 0){
        this.barbearia.cortes.barba.cartao = 0;
      }


      // Bebidas
      // Coca
      if(this.barbearia.bebidas.coca.quantidade <= 0){
        this.barbearia.bebidas.coca.quantidade = 0;
      }

      // Budweiser
      if(this.barbearia.bebidas.budweiser.quantidade <= 0){
        this.barbearia.bebidas.budweiser.quantidade = 0;
      }

      // Skol
      if(this.barbearia.bebidas.skol.quantidade <= 0){
        this.barbearia.bebidas.skol.quantidade = 0;
      }

      // Stella
      if(this.barbearia.bebidas.stella.quantidade <= 0){
        this.barbearia.bebidas.stella.quantidade = 0;
      }

      // Bonafont
      if(this.barbearia.bebidas.bonafont.quantidade <= 0){
        this.barbearia.bebidas.bonafont.quantidade = 0;
      }

      // Produtos
      // Gel
      if(this.barbearia.produtos.gel.quantidade <= 0){
        this.barbearia.produtos.gel.quantidade = 0;
      }

      if(this.barbearia.produtos.cera.quantidade <= 0){
        this.barbearia.produtos.cera.quantidade = 0;
      }
    },

    ...mapState('barbearia', ['tab']),
  },
}
</script>
