import { http } from '../buscarCEP/config.js'

export default {

	cep:(cep) => {
		return http.get(cep)
	}
}