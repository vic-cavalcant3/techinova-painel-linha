# Respostas do LAB 01

Nome: Victor Rodrigues Cavalcante Rocha
Matricula: *não temos acesso a matricula ainda*
Dupla (M2 em diante): Victor Rodrigues e Raissa Gouvea

---

## M2 - Quem quebrou o painel

**Hash curto do commit que introduziu o erro: 01ef93b **

**Autor:  Tarcisio Melo <tarcisio.melo@techinova.com.br> **

**Data:  Mon Jun 15 22:38:00 2026 -0300 **

**Linha alterada (antes e depois):**

```
antes: return (leitura - 32) * 5 / 9;
depois: return leitura * 9 / 5 + 32;
```

---

## M3 - O segredo vazado

**O que você esperava ver no `git status` e o que apareceu:**
Achei que o arquivo ia sumir do status. Só apareceu o `.gitignore` novo — o `credenciais.env` nem foi citado, porque ele já estava commitado antes.

**Depois do push, alguém que clonar o repositório ainda consegue ler a chave?
Responda em duas linhas, explicando o motivo:**
Sim, ainda dá. O `git rm --cached` só para de rastrear daqui pra frente, mas a chave continua nos commits antigos do histórico.

---

## M4 - Colisao

**O que significavam os marcadores que apareceram dentro do arquivo:**

- `<<<<<<<` :
- `=======` :
- `>>>>>>>` :

**Qual pedaco veio de quem, e qual titulo voces decidiram manter:**

---

## Casa - Incidente na linha 3

**Hash do commit que quebrou o painel:**

**Hash do commit de revert:**

**Por que `git revert` e nao `git reset` neste caso:**
