# 📊 Teste Prático Front-end - BeTalent

Este projeto é uma aplicação desenvolvida para o teste prático de Front-end da BeTalent. A aplicação consiste em uma tabela de colaboradores que exibe informações obtidas de uma API simulada utilizando `json-server`.

## 🌐 Deploy na Vercel

A aplicação foi implantada na Vercel e pode ser acessada através do seguinte link:

🔗 [Aplicação na Vercel](https://challenge-frontend-betalent.vercel.app)

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** - Biblioteca para construção da interface.
- ⚡ **Vite** - Ferramenta para criação e otimização do projeto.
- 🎨 **Tailwind CSS** - Framework para estilização responsiva.
- 🔌 **json-server** - Simulação da API.
- 📦 **TypeScript** - Tipagem estática para maior segurança no código.
- 🐳 **Docker e Docker Compose** - Para rodar a aplicação com um único comando.

## 🎯 Funcionalidades Implementadas

- ✅ Exibição de uma tabela de colaboradores com:
  - Imagem do colaborador.
  - Nome.
  - Cargo.
  - Data de admissão.
  - Telefone.
- 🔍 **Campo de busca** que filtra os colaboradores por **nome, cargo e telefone**.
- 📅 **Formatação de datas e números de telefone** no front-end.
- 📱 **Design responsivo** para dispositivos móveis e desktop.
- 🏗 **Ambiente Dockerizado** para facilitar a execução do projeto.

## 📂 Estrutura do Projeto

```
📦 nome-do-projeto
├── 📂 src
│   ├── 📂 @types         # Definições de tipos TypeScript
│   │   ├── employee.ts   # Tipagem dos colaboradores
│   ├── 📂 api            # Chamadas para a API simulada
│   │   ├── getEmployees.ts
│   ├── 📂 assets         # Ícones e imagens
│   │   ├── chevron-down.svg
│   │   ├── chevron-up.svg
│   │   ├── logo.svg
│   │   ├── search-icon.svg
│   ├── 📂 components     # Componentes reutilizáveis
│   │   ├── 📂 input      # Campo de pesquisa
│   │   │   ├── index.tsx
│   │   ├── 📂 table-desktop # Componentes da tabela para desktop
│   │   │   ├── index.tsx
│   │   ├── 📂 table-mobile  # Componentes da tabela para mobile
│   │   │   ├── DetailsRow.tsx
│   │   │   ├── EmployeeDetails.tsx
│   │   │   ├── EmployeeRow.tsx
│   │   │   ├── TableHeader.tsx
│   │   │   ├── index.tsx
│   ├── 📂 utils          # Funções auxiliares
│   │   ├── format.ts
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada da aplicação
│   ├── styles.css       # Estilização global
│   ├── env.ts           # Variáveis de ambiente internas
│   ├── vite-env.d.ts    # Tipagens globais para o Vite
├── db.json              # Banco de dados fake para a API
├── .env.example         # Exemplo de arquivo de variáveis de ambiente
├── index.html           # Estrutura HTML base
├── package.json         # Dependências do projeto
├── pnpm-lock.yaml       # Arquivo de bloqueio do pnpm
├── tsconfig.json        # Configuração do TypeScript
├── vite.config.ts       # Configuração do Vite
├── .gitignore           # Arquivos ignorados pelo Git
├── docker-compose.yml   # Configuração para Docker Compose
├── Dockerfile           # Configuração do container Docker
├── README.md            # Documentação do projeto
```

## 🛠 Como Executar o Projeto

Agora que o projeto está dockerizado, basta rodar um único comando para iniciar tudo.

### 📌 **Executar com Docker**
1. **Construa e inicie os containers**:
   ```bash
   docker-compose up --build
   ```

2. Acesse o projeto no navegador:  
   - Frontend: `http://localhost:5173`
   - API (`json-server`): `http://localhost:3000/employees`

3. **Parar a execução**:
   ```bash
   docker-compose down
   ```

### 🛠 **Executar Localmente (Sem Docker)**
Caso prefira rodar o projeto sem Docker, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Kaduh15/betalent-challenge-frontend.git
   cd betalent-challenge-frontend
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Crie um arquivo `.env` e defina a URL da API:**
   ```
   VITE_API_URL=http://localhost:3000
   ```

4. **Inicie a API simulada com `json-server`:**
   ```bash
   pnpm dlx json-server --watch db.json --host 0.0.0.0 --port 3000
   ```

5. **Execute o frontend:**
   ```bash
   pnpm dev
   ```

## 📌 Requisitos Atendidos

- [x] Consumo de API com `json-server`.
- [x] Pesquisa e filtros na tabela.
- [x] Layout responsivo para desktop e mobile.
- [x] Formatação de datas e telefones.
- [x] Código organizado seguindo boas práticas.
- [x] Uso de TypeScript.
- [x] Dockerização do projeto para facilitar a execução. (Extra)