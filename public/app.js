const locais = [
  {
    id: 1,
    nome: "Coco Bambu Minas Shopping",
    descricao:
      "Restaurante da Semana: frutos do mar e pratos nordestinos em ambiente elegante.",
    imagem: "../img/coco_bambu.jpg",
    categoria: "Restaurante da Semana",
    endereco: "Av. Cristiano Machado, 4000 – União, BH",
    detalhes:
      "O Coco Bambu é conhecido pela variedade de pratos com frutos do mar, porções generosas e ambiente refinado. Ideal para encontros em família ou comemorações especiais.",
  },
  {
    id: 2,
    nome: "L'Entrecôte de Paris",
    descricao:
      "Novidade no Pedaço: experiência francesa com prato único e molho secreto.",
    imagem: "../img/lentrecote.jpg",
    categoria: "Novidade no Pedaço",
    endereco: "Rua Marília de Dirceu, 226 – Lourdes, BH",
    detalhes:
      "O L'Entrecôte de Paris oferece uma experiência gastronômica francesa com foco em um prato principal: entrecôte com batatas fritas e molho exclusivo. Sofisticação e simplicidade em um só lugar.",
  },
  {
    id: 3,
    nome: "Xapuri",
    descricao: "Mais Bem Avaliado: referência em comida mineira tradicional.",
    imagem: "../img/xapuri.jpg",
    categoria: "Mais Bem Avaliado",
    endereco: "Av. Deputado Anuar Menhem, 1179 – Pampulha, BH",
    detalhes:
      "O Xapuri é um dos restaurantes mais tradicionais de Belo Horizonte, com pratos típicos mineiros feitos no fogão à lenha. Ambiente rústico, acolhedor e rodeado de natureza.",
  },
];

function montarCards() {
  const container = document.getElementById("destaques-container");

  if (container) {
    locais.forEach((local) => {
      const card = document.createElement("article");
      card.classList.add("destaques-caixa");

      card.innerHTML = `
        <a href="detalhes.html?id=${local.id}" class="destaques-link">
          <img src="${local.imagem}" alt="${local.nome}" />
          <h3>${local.nome}</h3>
          <p>${local.descricao}</p>
        </a>
      `;

      container.appendChild(card);
    });
  }
}

function getIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

function mostrarDetalhes() {
  const id = getIdFromURL();
  const local = locais.find((item) => item.id === id);

  const container = document.getElementById("detalhes-container");

  container.innerHTML = `
    <section class="secao-detalhes">
      <h1>${local.nome}</h1>
      <img src="${local.imagem}" alt="${local.nome}" class="imagem-detalhes" />
      <p><strong>Categoria:</strong> ${local.categoria}</p>
      <p><strong>Endereço:</strong> ${local.endereco}</p>
      <p>${local.detalhes}</p>
      <a href="index.html">← Voltar para a Home</a>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname.includes("index.html") ||
    window.location.pathname === "/"
  ) {
    montarCards();
  }

  if (window.location.pathname.includes("detalhes.html")) {
    mostrarDetalhes();
  }
});
