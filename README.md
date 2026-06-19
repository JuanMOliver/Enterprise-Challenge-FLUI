[README.md](https://github.com/user-attachments/files/29152461/README.md)
# Flui - Protótipo Mobile

Protótipo mobile navegável desenvolvido para a primeira etapa do Enterprise Challenge. O aplicativo Flui é voltado para motoristas de veículos elétricos que precisam localizar pontos de recarga de forma rápida, clara, acessível e confiável.

## Objetivo

Criar uma experiência inicial do aplicativo mobile da Flui, contemplando as telas principais, identidade visual, navegação funcional e dados simulados.

## Telas desenvolvidas

- Mapa de pontos de recarga
- Tela de busca
- Ficha detalhada do ponto de recarga

## Como visualizar o protótipo

Abra o arquivo `index.html` diretamente no navegador.

Também é possível rodar um servidor local com:

```bash
python3 -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

## Navegação implementada

- Mapa -> Ver detalhes -> Ficha do ponto
- Mapa -> Buscar -> Lista de estações
- Busca -> Detalhes -> Ficha do ponto
- Detalhes -> Voltar -> Mapa

## Identidade visual

A identidade visual utiliza verde elétrico, azul tecnológico, azul petróleo e branco gelo para comunicar mobilidade elétrica, sustentabilidade, inovação e confiança.

Paleta principal:

- Verde elétrico: `#00E676`
- Azul tecnológico: `#00B8D9`
- Azul petróleo: `#0B1220`
- Branco gelo: `#F5F7FA`
- Texto principal: `#1F2937`
- Texto secundário: `#6B7280`

Fonte sugerida: Inter.

## Dados simulados

Os pontos de recarga são fictícios e foram criados apenas para representar a experiência do app nesta etapa.

Estações simuladas:

- EcoCharge Paulista
- Flui Station Vila Mariana
- GreenVolt Shopping Center
- EletroPosto Ibirapuera

## Recursos de acessibilidade

- Alto contraste entre textos e fundos
- Botões grandes e com boa área de toque
- Estados escritos com texto, como "Disponível" e "Ocupado"
- Ícones acompanhados de rótulos
- Cards com hierarquia visual clara
- Informações organizadas em blocos objetivos

## Solução disruptiva

O protótipo apresenta o **Índice Flui**, uma pontuação simulada que recomenda o melhor ponto de recarga com base em distância, disponibilidade, potência, segurança e estrutura do local.

## Estrutura do projeto

```text
flui-app-prototype/
├── index.html
├── package.json
├── README.md
├── src/
│   ├── script.js
│   └── styles.css
├── design/
│   ├── tela-mapa.png
│   ├── tela-busca.png
│   ├── tela-detalhes.png
│   └── style-guide.png
└── docs/
    ├── Relatorio_Enterprise_Challenge_Flui.pdf
    ├── Relatorio_Enterprise_Challenge_Flui.docx
    └── INSTRUCOES_GITHUB.md
```

## Links da entrega

Link do repositório público no GitHub: **substituir pelo link final após publicar**

Link do protótipo navegável: **substituir pelo link do GitHub Pages ou abrir o index.html localmente**
