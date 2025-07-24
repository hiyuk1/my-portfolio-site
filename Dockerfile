# Use uma imagem base com Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código source
COPY . .

# Builda o projeto para produção
RUN npm run build

# Instala um servidor HTTP simples para servir os arquivos estáticos
RUN npm install -g serve

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar quando o container iniciar
CMD ["serve", "-s", "dist", "-l", "3000"]
