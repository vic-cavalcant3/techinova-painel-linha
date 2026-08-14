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

- `<<<<<<<` : marca o inicio do trecho conflitante, mostrando a versao que já estava na nossa branch (HEAD) — ou seja, o que a pessoa A já tinha commitado na main.
- `=======` : é a linha divisória, separa a nossa versão da versão que veio de fora (a branch que estamos tentando mergear).
- `>>>>>>> painel-b` : marca o fim do trecho e mostra de onde veio a outra versão, nesse caso a branch da pessoa B.

Basicamente o Git não sabe qual das duas mudanças é a "certa" porque as duas mexeram na mesma linha, então ele mostra as duas lado a lado e deixa a gente escolher manualmente.

**Qual pedaco veio de quem, e qual titulo voces decidiram manter:**

O trecho de cima (antes do `=======`) era o título que a pessoa A já tinha commitado na main. O de baixo (depois do `=======`) era o título da pessoa B, que ainda não tinha entrado. A gente conversou e ficou com o título de [preencher qual foi escolhido], apagando o outro e os três marcadores.

---


**Hash do commit que quebrou o painel:** 01ef93b

**Hash do commit de revert:** 08585e5

**Por que `git revert` e nao `git reset` neste caso:** porque o commit 01ef93b já tinha sido enviado (push) pro repositório remoto e a dupla toda dependia dele. Usar `git reset` reescreveria o histórico e apagaria o commit como se ele nunca tivesse existido, o que quebra quem já puxou essa branch. O `git revert` cria um commit novo desfazendo a mudança, preservando o histórico real do que aconteceu.
