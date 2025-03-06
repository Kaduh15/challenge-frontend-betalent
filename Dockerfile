# Usa a imagem oficial do Node.js
FROM node:22-alpine

# Define o diretório de trabalho
WORKDIR /app

RUN npm install -g pnpm@10

# Copia os arquivos necessários
COPY package.json pnpm-lock.yaml ./

# Instala as dependências
RUN pnpm install

# Copia o restante do código para o container
COPY . .

# Expõe a porta do frontend e do json-server
EXPOSE 5173 3000

# Inicia os serviços usando um script
CMD ["sh", "-c", "pnpm dev"]
