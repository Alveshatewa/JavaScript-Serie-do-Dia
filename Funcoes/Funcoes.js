import serie from '../Dados/Dados.js'
import retornaDiaDaSemana from '../DiaSemana/RetornaDia.js'


function retornaSerieDoDia(){

    let diaSemana = retornaDiaDaSemana()

    let serieDoDia = serie[diaSemana]

    return serieDoDia
}

export default retornaSerieDoDia


