//texto - string
let cidade = 'Tupã';

//inteira - number
let populacao = 75000;

//decimal - number
let temperaturaMedia = 25.5;

//sim/não - boolean
let temMCDONALDS = true;

//undefined
let totalAnimaisRua;

//null
let mortesPorTerremoto = null;

//date
const fundacaoCidade = new Date('1929-10-12');
const dataCorreta = new Date(1929, 10, 12);
//console.log(fundacaoCidade); Saída: 1929-10-12

//objeto
let enderecoPrefeitura = {
    logradouro : 'Praça da Bandeira',
    numero: 1,
    complemento: null,
    cep: '17600000',
    fundacaoCidade:`${fundacaoCidade.getDate() + 1}/${fundacaoCidade.getMonth() + 1}/${fundacaoCidade.getFullYear()}`,
    fundacaoDataFormatoCorreto: `${dataCorreta.getDate()}/${dataCorreta.getMonth()}/${dataCorreta.getFullYear()}`
};

//array
let principaisAvenidas = ['Tamoios', 'Aimores', 'Lélio Pizza'];

//função
function ExibeDados(){
    console.log(`
        A cidade de ${cidade} tem ${populacao} habitantes.
        A prefeitura fica localizada na ${enderecoPrefeitura.logradouro} nº ${enderecoPrefeitura.numero} - ${enderecoPrefeitura.cep}. As principais avenidas são: ${principaisAvenidas[0]}, ${principaisAvenidas[1]} e ${principaisAvenidas[2]}, Data de fundação: ${enderecoPrefeitura.fundacaoDataFormatoCorreto}   
    `);
}

ExibeDados();