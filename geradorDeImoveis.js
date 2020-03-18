const enderecos = [ //Endereços tirados do site 4devs, é para conter 162 endereços
    'Travessa Aldeia',
  'Rua São José',
  'Rua Brasilândia',
  'Estrada Deputado José Rui da Silveira Lino',
  'Travessa Café',
  'Travessa Osvaldo Coelho',
  'Rua dos Lirios',
  'Travessa da Alegria',
  'Rua Projetada 302',
  'Rua I',
  'Rua da União',
  'Rua Gonçalves Dias',
  'Travessa Liberdade II',
  'Rua James Carlos',
  'Rua Sabiá',
  'Estrada Juarez Távora',
  'Rua José de Araújo',
  'Rua Tião Naturaza',
  'Rua Andiroba',
  'Travessa Avestruz',
  'Rua Marte',
  'Avenida Antônio da Rocha Viana',
  'Estrada São do Francisco',
  'Rua Estrela',
  'Travessa Verde',
  'Travessa Monte das Oliveiras',
  'Travessa Campo do Jordão',
  'Ramal da Zezé',
  'Rua Brigadeiro Damasceno',
  'Avenida Edmundo Pinto',
  'Via Parma',
'Rua Waldemar Kruger',
'Rua Waldemar Hesse',
'Rua Abílio de Oliveira Borges',
'Rua Tenente Lauro Gomes de Oliveira',
'Avenida Hermann August Lepper 980',
'Rua Maria Paulina Kluck',
'Rua Portugal',
'Rua Max Colin',
'Rua Alfredo Colin',
'Rua Américo Matrangola',
'Rua Chede Dippe',
'Rua Uruguaiana',
'Rua Mossoró',
'Rua Iracema Luckow',
'Rodovia BR-101',
'Rua Dom Gregório Warmeling',
'Servidão Rubens Antonio Zimmermann',
'Rua Natanael Amorim Vieira',
'Rua Affonso Voss',
'Rua Major Gercino',
'Servidão Ione Rosa Correa Costa',
'Servidão Ubatuba',
'Rua Coronel Alyre Borges Carneiro',
'Rua João Gomes de Oliveira',
'Rua João Ramalho',
'Rua Maria Elisabete Bagatoli',
'Rua Maria Neves Niemeyer',
'Rua Rudolpho Bruske',
'Rua Martinho Rodolfo Heidemann',
'Rua Luzia Russo Rodrigues',
'Rua Iracema Bittencourt Ferraro',
'Rua Café Catuaí',
'Rua Dona Carlota',
'Rua Café Cereja',
'Rua Carmen Marcolla Pazini',
'Avenida Isaltino Gonçalves Mendes',
'Rua Elzira Bittencourt Guides',
'Rua Guarapuava',
'Praça Vicente Leporace',
'Rua Quiri',
'Rua do Guamirim',
'Avenida José Ventura Pinto',
'Rua Anita Garibaldi',
'Rua São Vicente',
'Rua Luiz Antônio Mayrink Goes',
'Rua Florindo Boni',
'Rua Raul Costa Júnior',
'Rua Kirio Miyamura',
'Rua Immo Vicentin',
'Rua Pintassilgo',
'Rua Ignacio Gonçalves',
'Rua Acylino Augusto do Nascimento',
'Rua Guararapes',
'Praça George Graig Smith',
'Rua Armando Forim',
'Rua Heber Soares Vargas',
'Rua Celso Kiyokatsu Mizuno',
'Praça Pedro Caraco',
'Rua Bauxita',
'Rua Cidadania da Santa Felicidade',
'Rua Bororós',
'Rua Júlio Graf',
'Rua Patrício Bagolin',
'Rua Euclides Figueiredo',
'Rua Major Eulálio Dudek',
'Rua Rovigo',
'Rua Ruy de Santis',
'Rua Acelino Grande',
'Rua Lídia Wosch',
'Rua Campos Sales 623',
'Rua Capitão Augusto do Rego Barros',
'Rua Serafim Amur Ferreira do Amaral',
'Rua Irene Túlio',
'Rua Joaquim Amaral',
'Rua Antônio Vieira dos Santos',
'Rua Carlos Leinig Júnior',
'Rua Betty Moreira Pacheco',
'Rua Manoel Valdomiro de Macedo',
'Rua Reinaldo Casagrande',
'Rua José Lass',
'Rua Werner Jehring',
'Rua Adair Gelenski',
'Rua Janusz Korczak',
'Rua Estanislau Muchau',
'Rua Doutor Plínio de Mattos Pessoa',
'Rua Bento Azambuja',
'Rua Brigadeiro Eduardo Gomes',
'Rua Felipe Percegona',
'Avenida Caviúna',
'Rua Três Mil e Vinte e Sete',
'Rua Nilson da Silva Santos',
'Praça José Bartolomeu Greco',
'Praça Diogo de Vasconcelos',
'Rua Alexandre Stockler',
'Rua Islândia',
'Rua Padre Orlando Machado',
'Rua Dez de Novembro',
'Rua Brant Horta',
'Praça Maria José Santiago',
'Rua Guatambu',
'Rua José Eduardo Moraes',
'Rua Bananal',
'Beco João Soares',
'Rua Materlândia',
'Rua Setecentos e Quinze',
'Avenida Amazonas',
'Rua Manila',
'Rua José Bonifácio',
'Rua Fernando Cândido de Souza',
'Praça da Liberdade, s/n',
'Praça Santa Rita',
'Rua Maria Adelaide',
'Rua Renato Luiz Lima',
'Rua Pedra do Mar',
'Rua José Brandão',
'Rua Doutor Gonçalo de Moura',
'Rua Doutor Roberto de Las Casas',
'Avenida Neném Lara Rocha',
'Estrada do Cercado',  
'Rodovia Francisco Thomaz dos Santos',
  'Servidão dos Curumins',
  'Travessa Júlia Mercedes da Conceição',
  'Rua Silva Jardim',
  'Rua Nossa Senhora do Rosário',
  'Rua Coronel Carlos Wenceslau Pacheco',
  'Servidão Bento Sales',
  'Servidão Ana Rita de Jesus',
  'Servidão Artino Rensi',
  'Rua Procurador Abelardo Gomes',
  'Rua Berlim',
  'Servidão Celso Domingos Martins'
];

const sg =
[ //É necessário as siglas dos estados, nessa ordem
'AC',
'Al',
'AP',
'AM',
'BA',
'CE',
'DF',
'ES',
'GO',
'MA',
'MT',
'MS',
'MG',
'PA',
'PB',
'PR',
'PE',
'PI',
'RJ',
'RN',
'RS',
'RO',
'RR',
'SC',
'SP',
'SE',
'TO'
];

let estado = 0, cidade = 1, bairro = 1, vendedor = 1; //Contadores, considerando a lógica que para cada estado têm três cidades e dois bairros para cada cidade

const geraDataAleatoria = () => {
    const ano = Math.round(Math.random() * 2) + 2017; //Trabalhando com os anos 2017-2019
    const mes = Math.ceil(Math.random() *12);
    const limitesDeDias = mes == 2 ? 28 : 30 //Fevereiro que nos trolle
    const dia = Math.ceil(Math.random() * limitesDeDias);
    
    return ano+'-'+mes+'-'+dia;
}

for (endereco of enderecos){ //Todos os endereços falsificados
    const vendido = Math.round(Math.random()); //Randomizar se está vendido ou nao
    const preco = (5000000 + Math.floor(Math.random() * 94000000))/100; //Preços aleatórios
    const estadoSg = sg[estado];
    const areaUtil = 50 + Math.floor(Math.random() * 250);
    const areaTotal = Math.floor(areaUtil + areaUtil * Math.floor(Math.random() * 180) / 100); //Tentativa de gerar números realistas para a área total
    console.log(
        "("+vendedor+", "+bairro+", "+cidade+", '"
        +estadoSg+"', '"+endereco+"', "+areaUtil+", "+areaTotal+", "
        +preco+", "+0+", "+vendido+", '"+geraDataAleatoria()+"'),"
    );
    
    //Lógica dos contadores aplicada aqui
    if(bairro % 2 == 0){
        cidade++;
    }
    
    if(bairro % 6 == 0){
        estado++;
    }
    
    if(bairro % 11 == 0){
        vendedor++;
    }
    
    bairro++;
    
}

