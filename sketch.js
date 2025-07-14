let scene = 0; // A cena inicial
let images = []; // Array para armazenar as imagens
let storyTexts = []; // Array para armazenar os textos da história

function preload() {
  // Carrega as imagens dos cenários
  images[0] = loadImage("campo.jpg", 
    () => console.log('Imagem campo.jpg carregada com sucesso!'), 
    (err) => console.error('Erro ao carregar a imagem campo.jpg:', err)
  ); // Cena 1 - Campo

  images[1] = loadImage("estrada.jpg", 
    () => console.log('Imagem estrada.jpg carregada com sucesso!'), 
    (err) => console.error('Erro ao carregar a imagem estrada.jpg:', err)
  ); // Cena 2 - Estrada

  images[2] = loadImage("cidade.jpg", 
    () => console.log('Imagem cidade.jpg carregada com sucesso!'), 
    (err) => console.error('Erro ao carregar a imagem cidade.jpg:', err)
  ); // Cena 3 - Cidade
}

function setup() {
  createCanvas(800, 600); // Cria a tela com as dimensões de 800x600px

  textAlign(CENTER, CENTER); // Alinha o texto no centro

  textSize(22); // Define o tamanho da fonte

  rectMode(CENTER); // Define o modo da caixa do retângulo como centro

  noStroke(); // Remove o contorno das figuras

  // Texto da história de Hagrinho
  storyTexts = [
    "At sunrise, Hagrinho prepares his cart with fresh vegetables to sell in the city. A dream is taking root.",
    "On the bumpy road, Hagrinho faces mud and a broken bridge. But villagers come together and help him pass.",
    "He finally arrives! At the fair, people from the city and countryside celebrate unity, food, and sustainability."
  ];
}

function draw() {
  background(0); // Define o fundo como preto

  // Exibe a imagem da cena atual
  if (images[scene]) {
    image(images[scene], 0, 0, width, height); // Exibe a imagem ajustada ao tamanho da tela
  }

  // Caixa de fundo para o texto
  fill(0, 180); // Cor de fundo da caixa de texto
  rect(width / 2, height - 80, width - 100, 100); // Desenha o retângulo de fundo para o texto

  // Exibe o texto da história
  fill(255); // Cor do texto
  text(storyTexts[scene], width / 2, height - 80, width - 120, 100); // Exibe o texto dentro da caixa
}

function keyPressed() {
  // Avança para a próxima cena com a seta direita
  if (keyCode === RIGHT_ARROW) {
    if (scene < storyTexts.length - 1) {
      scene++; // Avança uma cena
    }
  }
  // Retorna para a cena anterior com a seta esquerda
  else if (keyCode === LEFT_ARROW) {
    if (scene > 0) {
      scene--; // Retrocede uma cena
    }
  }
}
