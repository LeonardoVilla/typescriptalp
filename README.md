# Projeto TypeScript - Entrada de Dados no Terminal

## Passos para rodar o projeto

### 1. Instalar o TypeScript e ts-node
Execute no terminal:

```
npm install typescript ts-node --save-dev
```

### 2. Instalar os tipos do Node.js
Essencial para que o TypeScript reconheça módulos como `readline` e objetos como `process`:

```
npm install @types/node --save-dev
```

### 3. Configurar o TypeScript
O arquivo `tsconfig.json` deve conter:

### 4. Instalar prompt-sync (para entrada de dados via prompt)
Execute no terminal:

```
npm install prompt-sync
```

Motivo: Permite capturar entrada do usuário de forma simples no terminal.

```
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2020",
    "esModuleInterop": true,
    "strict": true,
    "types": ["node"]
  }
}
```

### 4. Exemplo de código para entrada de dados
Arquivo: `app2.ts`

```typescript
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu nome: ", (nome) => {
  console.log(`Olá, ${nome}!");
  rl.close();
});
```

### 5. Executar o código TypeScript
No terminal, execute:

```
npx ts-node app2.ts
```

O terminal irá pedir para digitar o nome e exibirá a mensagem personalizada.

---

## Ignorar pastas de dependências
Crie um arquivo `.gitignore` com o seguinte conteúdo:

```
node_modules/
```

Assim, a pasta de dependências não será enviada para o repositório Git.
