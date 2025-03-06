# 📊 Teste Prático Front-end - BeTalent

Este projeto é uma aplicação desenvolvida para o teste prático de Front-end da BeTalent. A aplicação consiste em uma tabela de colaboradores que exibe informações obtidas de uma API simulada utilizando `json-server`.

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** - Biblioteca para construção da interface.
- ⚡ **Vite** - Ferramenta para criação e otimização do projeto.
- 🎨 **Tailwind CSS** - Framework para estilização responsiva.
- 🔌 **json-server** - Simulação da API.
- 📦 **TypeScript** - Tipagem estática para maior segurança no código.

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
│   ├── vite-env.d.ts    # Tipagens globais para o Vite
├── db.json              # Banco de dados fake para a API
├── index.html           # Estrutura HTML base
├── package.json         # Dependências do projeto
├── tsconfig.json        # Configuração do TypeScript
├── vite.config.ts       # Configuração do Vite
├── .gitignore           # Arquivos ignorados pelo Git
├── README.md            # Documentação do projeto
```

## 🛠 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/kaduh15/challenge-frontend-betalent.git
   cd challenge-frontend-betalent
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Inicie a API simulada com `json-server`:**
   ```bash
   pnpm dlx json-server --watch db.json
   ```

4. **Execute o projeto:**
   ```bash
   pnpm dev
   ```

5. Acesse o projeto no navegador: `http://localhost:5173`
