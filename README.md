# API
api metodo http


# API
api metodo http

# Comandos Usados
npm init -y   ------Criar o package.json
npm i express ------Criar Biblioteca Express

# Dependencia dev para usar node watch
npm install --save-dev nodemon  
node --watch server.js ------ para continuar rodando node apos atualizar o arquivo


npx prisma init ----Configurar Prisma

npm install prisma --save-dev ----Dependencia de desenvolvimento

npx prisma migrate dev --name init  -----Cria estrutura do banco e aplica primeira migração

npx prisma studio ------Abrir interface do prisma

# Instalar Vite para criar o projeto react

npm create vite@latest

# Biblioteca para requisões do servidor
npm install axios

# Biblioteca cors para ter acesso ao backend

npm install cors

# Erro ao clonar do github

Como resolver

Confirme se você tem o Prisma instalado:

npm install @prisma/client
npm install prisma --save-dev


Rode a geração do cliente:

npx prisma generate


Isso vai recriar a pasta node_modules/.prisma e também a pasta generated/prisma (caso seu projeto esteja configurado para gerar lá).

Depois, inicie de novo:

npm run dev

✅ Como resolver

Dentro da pasta raiz do projeto (D:\TEMP\paulo\API), rode:

npx prisma generate


Isso vai criar a pasta generated/prisma com o arquivo index.js.
Agora seu import vai funcionar normalmente.

Reinicie seu servidor:

npm run dev