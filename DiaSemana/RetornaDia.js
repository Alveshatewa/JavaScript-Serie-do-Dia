function retornaDiaDaSemana (){

    let data_app = new Date()

    let diaSemana = data_app.getDay()

    return diaSemana
}

export default retornaDiaDaSemana