import { http } from './config.js'

export default {

	buscaBarbearia:() => {
		return http.get('/barbearia')
	},
	excelBarbearia:() => {
		return http.get('/barbearia/excel')
	},
	cadastraBarbearia:(cad) => {
		console.log(cad)
		return http.post('/barbearia', cad)
	},
	deletar:() => {
		return http.delete('/barbearia')
	}
}