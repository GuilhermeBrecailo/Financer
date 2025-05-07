# Etapa 1 - Build da aplicação
FROM node:18 AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos da sua aplicação
COPY . .

# Instala as dependências
RUN npm install

# Faz o build da aplicação Nuxt
RUN npm run build

# Etapa 2 - Container para produção
FROM node:18-alpine

WORKDIR /app

# Copia o resultado do build
COPY --from=builder /app ./

# Instala apenas as dependências necessárias para produção
RUN npm install --omit=dev

# Expõe a porta padrão usada pelo Nuxt
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
