import { http } from './config.js'

export default {

	buscaBarbearia:() => {
		return http.get('/barbearia')
	},
	excelBarbearia:() => {
		return http.get('/barbearia/excel')
	},
	cadastraBarbearia:(cad) => {
		return http.post('/barbearia', cad)
	}
}