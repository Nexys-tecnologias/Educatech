# 📘 Educatech

aplicação **Educatech**, desenvolvido com Node.js e TypeScript.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- TSX (ambiente de desenvolvimento)

---

## 📦 Instalação

### 1️⃣ Clonar o repositório

git clone <URL_DO_REPOSITORIO>

### 2️⃣ Acesse a pasta do projeto

cd Educatech/backend

### 3️⃣ Instale as dependências

npm install

---

## ▶️ Executando o Projeto

npm run dev

- Servidor disponível em:

http://localhost:3000

---

## 🏗️ Build da Aplicação

- Para compilar o projeto TypeScript para JavaScript:

npm run build

- Os arquivos compilados serão gerados na pasta:

dist/

- Para executar a versão compilada:

npm start

---

## 📁 Estrutura do Projeto

Educatech/
└── backend/
    ├── src/
    │   ├── server.ts
    │   ├── routes/
    │   ├── controllers/
    │   └── services/
    ├── dist/
    ├── package.json
    ├── tsconfig.json
    ├── .env
    └── .gitignore
    
---

## 🔐 Variáveis de Ambiente

- Crie um arquivo .env dentro da pasta backend/.

Exemplo:

PORT=3000

- ⚠️ O arquivo .env não deve ser enviado para o repositório.

---

## 📦 Scripts disponíveis

npm run dev      → Executa o servidor em modo desenvolvimento  
npm run build    → Compila o projeto TypeScript  
npm start        → Executa a versão compilada  
