const fetch = require('node-fetch')

module.exports = async function buscaIbge(ibge){
   const response =await fetch (`https://viacep.com.br/ws/${ibge}/json/`) 
   //const response =await fetch (`https://gist.githubusercontent.com/raw/SP/estados-cidades.json`);
   const json =await response.json()

return json
}
//module.exports = buscaCep