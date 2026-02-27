🚀 Tecnologias utilizadas

Node.js

TypeScript

Express

TSX (ambiente de desenvolvimento)

📦 Como rodar o projeto
✅ 1️⃣ Clonar o repositório
git clone <URL_DO_REPOSITORIO>
✅ 2️⃣ Entrar na pasta do projeto
cd Educatech/backend
✅ 3️⃣ Instalar as dependências
npm install (rode apenas na pasta do baclend)

Esse comando irá baixar automaticamente todas as dependências listadas no package.json.

✅ 4️⃣ Rodar o projeto em modo desenvolvimento
npm run dev

O servidor iniciará em:

http://localhost:3000
📂 Estrutura do Projeto
Educatech/
 └── backend/
      ├── src/
      │    └── server.ts
      ├── package.json
      ├── tsconfig.json
      └── .env (não versionado)
🔐 Variáveis de Ambiente

Se o projeto utilizar variáveis de ambiente, crie um arquivo:

backend/.env

Exemplo:

PORT=3000
🛠 Scripts disponíveis
npm run dev     # Inicia o servidor em modo desenvolvimento
npm run build   # Compila o projeto (se configurado)
npm start       # Inicia versão compilada (se configurado)
👨‍💻 Requisitos

Node.js versão LTS instalada

NPM instalado

📌 Observações

A pasta node_modules não é enviada para o repositório.

Sempre rode npm install antes de iniciar o projeto.

O arquivo .env não deve ser versionado.

