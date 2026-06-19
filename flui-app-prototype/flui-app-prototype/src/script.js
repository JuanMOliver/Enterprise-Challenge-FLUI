const stations = [
  {
    name: 'EcoCharge Paulista',
    address: 'Av. Paulista, 1000 - Sao Paulo/SP',
    distance: '1,2 km',
    connector: 'CCS2 / Tipo 2',
    status: 'Disponivel',
    available: true
  },
  {
    name: 'Flui Station Vila Mariana',
    address: 'Rua Domingos de Morais, 2200',
    distance: '2,8 km',
    connector: 'Tipo 2',
    status: 'Ocupado',
    available: false
  },
  {
    name: 'GreenVolt Shopping Center',
    address: 'Av. das Nacoes Unidas, 4777',
    distance: '4,5 km',
    connector: 'CCS2',
    status: 'Disponivel',
    available: true
  },
  {
    name: 'EletroPosto Ibirapuera',
    address: 'Av. Pedro Alvares Cabral, s/n',
    distance: '3,1 km',
    connector: 'Tipo 2',
    status: 'Disponivel',
    available: true
  }
];

const app = document.getElementById('app');
let currentScreen = 'map';

function setScreen(screen) {
  currentScreen = screen;
  render();
}

function bottomNav(active) {
  return `
    <nav class="bottom-nav" aria-label="Menu principal">
      <button class="nav-item ${active === 'map' ? 'active' : ''}" onclick="setScreen('map')">⚡<br>Mapa</button>
      <button class="nav-item ${active === 'search' ? 'active' : ''}" onclick="setScreen('search')">🔎<br>Buscar</button>
      <button class="nav-item ${active === 'profile' ? 'active' : ''}" onclick="setScreen('search')">👤<br>Perfil</button>
    </nav>`;
}

function renderMap() {
  app.innerHTML = `
    <section class="app-screen">
      <header class="header-dark">
        <div class="header-row">
          <div>
            <div class="logo">Flu<span>i</span></div>
            <div class="subtitle">Encontre energia para seguir seu caminho</div>
          </div>
          <div aria-hidden="true">🔋</div>
        </div>
        <button class="searchbar" onclick="setScreen('search')" aria-label="Ir para busca">
          <span>🔎</span><span>Buscar ponto de recarga</span>
        </button>
      </header>

      <div class="content">
        <div class="map-card" aria-label="Mapa simulado com pontos de recarga">
          <span class="road r1"></span><span class="road r2"></span><span class="road r3"></span><span class="road r4"></span><span class="road r5"></span>
          <button class="pin p1" onclick="setScreen('detail')"><span>⚡</span></button>
          <button class="pin p2 warning" onclick="setScreen('detail')"><span>⚡</span></button>
          <button class="pin p3" onclick="setScreen('detail')"><span>⚡</span></button>
          <button class="pin p4" onclick="setScreen('detail')"><span>⚡</span></button>
        </div>

        <article class="recommend-card">
          <h2 class="card-title">EcoCharge Paulista</h2>
          <p class="card-text">Av. Paulista, 1000 - Sao Paulo/SP</p>
          <p class="card-text">1,2 km • Carregador rapido • CCS2</p>
          <div class="status"><span class="dot"></span>Disponivel agora</div>
          <button class="btn btn-primary" onclick="setScreen('detail')">Ver detalhes</button>
        </article>
      </div>
      ${bottomNav('map')}
    </section>`;
}

function renderSearch() {
  const cards = stations.map(station => `
    <article class="station-card">
      <div class="station-info">
        <h2 class="card-title">${station.name}</h2>
        <p class="card-text">${station.address}</p>
        <p class="card-text">${station.distance} • ${station.connector}</p>
        <div class="status ${station.available ? '' : 'warning'}"><span class="dot ${station.available ? '' : 'warning'}"></span>${station.status}</div>
      </div>
      <button class="btn btn-small" onclick="setScreen('detail')">Detalhes</button>
    </article>
  `).join('');

  app.innerHTML = `
    <section class="app-screen">
      <header class="simple-header">
        <h1 class="title">Buscar recarga</h1>
        <p class="screen-subtitle">Compare estacoes proximas antes de sair</p>
        <div class="searchbar"><span>🔎</span><span>Digite endereco, bairro ou estacao</span></div>
      </header>
      <div class="chips" aria-label="Filtros visuais simulados">
        <span class="chip active">Proximos</span>
        <span class="chip">Rapidos</span>
        <span class="chip">24h</span>
        <span class="chip">Gratuitos</span>
      </div>
      <section class="list" aria-label="Lista de pontos de recarga">
        ${cards}
      </section>
      ${bottomNav('search')}
    </section>`;
}

function renderDetail() {
  app.innerHTML = `
    <section class="app-screen">
      <header class="detail-header">
        <button class="back-btn" onclick="setScreen('map')" aria-label="Voltar para o mapa">←</button>
        <h1 class="title">EcoCharge Paulista</h1>
        <p class="screen-subtitle">Av. Paulista, 1000 - Sao Paulo/SP</p>
        <span class="badge"><span class="dot"></span>Disponivel agora</span>
      </header>

      <main class="detail-content">
        <section class="index-card">
          <div class="index-label">Indice Flui</div>
          <div class="index-score">94/100</div>
          <p class="index-text"><strong>Recomendado para sua rota.</strong><br>Boa disponibilidade, carregamento rapido e localizacao segura.</p>
        </section>

        <h2 class="section-title">Informacoes da recarga</h2>
        <section class="info-grid">
          <div class="info-block"><div class="info-label">Distancia</div><div class="info-value">1,2 km</div></div>
          <div class="info-block"><div class="info-label">Conectores</div><div class="info-value">CCS2 e Tipo 2</div></div>
          <div class="info-block"><div class="info-label">Potencia</div><div class="info-value">Ate 50 kW</div></div>
          <div class="info-block"><div class="info-label">Preco estimado</div><div class="info-value">R$ 2,10/kWh</div></div>
          <div class="info-block"><div class="info-label">Tempo medio</div><div class="info-value">35 a 50 min</div></div>
          <div class="info-block"><div class="info-label">Horario</div><div class="info-value">24 horas</div></div>
        </section>

        <h2 class="section-title">Estrutura disponivel</h2>
        <div class="amenities">
          <span class="chip">Estacionamento</span>
          <span class="chip">Banheiro</span>
          <span class="chip">Cafeteria</span>
          <span class="chip">Acessibilidade</span>
          <span class="chip">Area coberta</span>
        </div>

        <div class="action-bar">
          <button class="btn btn-primary">Tracar rota</button>
          <button class="btn btn-secondary">Salvar ponto</button>
        </div>
      </main>
      ${bottomNav('map')}
    </section>`;
}

function render() {
  if (currentScreen === 'map') renderMap();
  if (currentScreen === 'search') renderSearch();
  if (currentScreen === 'detail') renderDetail();
}

render();
