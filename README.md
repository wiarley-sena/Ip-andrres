# 📍 IP Address Tracker

Aplicação web que permite pesquisar a localização geográfica de qualquer endereço IP, exibindo informações como região, fuso horário e provedor de internet em um mapa interativo.

## 🖥️ Preview

![IP Address Tracker](./public/images/preview.png)

---

## ✨ Funcionalidades

- Carregamento automático com o IP e localização do próprio usuário
- Busca de localização por qualquer endereço IP
- Exibição de região, fuso horário e ISP
- Mapa interativo com animação de voo até a localização
- Tratamento de erros e validação de input

---

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/) — framework React com App Router
- [React Leaflet](https://react-leaflet.js.org/) — mapa interativo
- [ip-api.com](https://ip-api.com/) — API de geolocalização por IP

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ip-address-tracker.git

# Entre na pasta
cd ip-address-tracker

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📁 Estrutura do projeto

```
app/
├── api/
│   └── ip/
│       └── route.js        # Rota de API que consulta o ip-api.com
├── components/
│   ├── Cabecalho.jsx       # Input de busca
│   ├── Info.jsx            # Exibição dos dados do IP
│   ├── Mapa.jsx            # Componente do mapa (Leaflet)
│   └── MapaDinamico.jsx    # Wrapper com carregamento dinâmico (ssr: false)
└── page.jsx                # Página principal
```

---

## 🔌 API Route

A rota `/api/ip` recebe um parâmetro `ip` via query string e consulta a API externa:

```
GET /api/ip?ip=8.8.8.8   → retorna dados do IP informado
GET /api/ip?ip=           → retorna dados do IP do próprio usuário
```

Retorna os dados de geolocalização em JSON com os status codes adequados:

- `500` — Erro interno ao consultar a API

---

## 💡 Decisões técnicas

**`dynamic` com `ssr: false` no Mapa**
O Leaflet depende de APIs do navegador (`window`, `document`) que não existem no servidor. O carregamento dinâmico com `ssr: false` evita erros de renderização no servidor.

**Estado unificado com `useState`**
Todos os dados retornados pela API — incluindo o IP — são armazenados em um único objeto de estado. Isso garante que o componente re-renderiza apenas uma vez por busca, evitando renders em cascata.

**`useCallback` na função de busca**
A função `buscarIp` é estabilizada com `useCallback` para poder ser usada com segurança como dependência do `useEffect` e também passada como prop ao componente `Cabecalho`.

**Busca automática na montagem**
O `useEffect` chama `buscarIp("")` com array vazio, buscando os dados do IP do próprio usuário assim que a página carrega.

**`useEffect` no componente do mapa**
O `map.flyTo` fica dentro de um `useEffect` com `[latitude, longitude, map]` como dependências, garantindo que a animação só dispara quando as coordenadas realmente mudam.

**Semântica HTML**
Uso de `<dl>`, `<dt>` e `<dd>` para a lista de informações do IP, seguindo boas práticas de acessibilidade e semântica.

**Acessibilidade**
- `title` no `Marker` do mapa para leitores de tela
- `aria-label` na seção do mapa durante o carregamento

---

## 📝 Licença

MIT