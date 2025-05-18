# Série do Dia

Este projeto contém um pequeno script em JavaScript que seleciona e exibe uma série consoante o dia.

## Como funciona

O código faz uso da função `retornarSerieDoDia` importada do módulo `Funcoes.js`. Essa função determina qual série será exibida no console.

## Estrutura do código

```javascript
import retornarSerieDoDia from "./Funcoes/Funcoes.js";

const serieDoDia = retornarSerieDoDia();

console.log(`A série do dia é: ${serieDoDia}`);
