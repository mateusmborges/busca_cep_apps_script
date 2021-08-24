/**
 *  Essa função abre a planilha vinculada ao projeto, e retorna uma página (sheet) dessa planilha
 *
 *  @param {number} index 
 *  @return {array}
 *
 */
function buscaCep() {
  //Primeiro passo: buscar o valor na interface
  const interface = abrirPlanilha()
  const valorCep = acessarElementoCep(interface)
  
  //Segundo passo: fazer a pesquisa utilizando o serviço Maps
  const endereco = buscarEndereco(valorCep)

  //Terceiro passo: atualizar a planilha de interface com o endereço encontrado
  atualizarPlanilha(interface, endereco)
}

/**
 *  Essa função abre a planilha vinculada ao projeto, e retorna uma página (sheet) dessa planilha
 *
 *  @return {Sheet}
 *
 */
function abrirPlanilha(){
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Interface")
}

/**
 *  Essa função abre uma página e retorna o texto do intervalo determinado
 *
 *  @param {Sheet} página de interface (classe Sheet)
 *  @return {string} valor do texto no intervalo determinado
 *
 */
function acessarElementoCep(pagina) {
  const intervalo = "C2"

  return pagina.getRange(intervalo).getValue()
}

/**
 *  Essa função utiliza do serviço Maps para encontrar um endereço vinculado ao CEP buscado
 *
 *  @param {string} número do CEP a ser buscado
 *  @return {string} o endereço achado, ou "Não foi possível encontrar", caso dê falhas
 *
 */
function buscarEndereco(valorCep) {
  const resultados = Maps.newGeocoder().geocode("CEP " + valorCep)
  
  let endereco = "Não foi possível encontrar"
 
  if(resultados.status === "OK") {
    endereco = resultados.results[0].formatted_address
  }

  return endereco
}

/**
 *  Função que atualiza a página da planilha com o valor determinado, em um determinado intervalo
 *
 *  @param {Sheet} página da interface (classe Sheet)
 *  @param {string} valor do endereço achado, ou "Não foi possível encontrar", caso dê falhas
 *
 */
function atualizarPlanilha(pagina, valor) {
  const intervalo = "B6"
  
  pagina.getRange(intervalo).setValue(valor)
}




