Aqui a ideia é sair do básico e ver o Pandas resolvendo problemas mais parecidos com o dia a dia: ordenar, criar colunas novas, tratar dados faltando e juntar tabelas.

---
### Contexto:

Vamos usar como base uma tabela de vendas de uma loja fictícia, parecida com a do post anterior, só que um pouco mais "suja" (com dados faltando), que é como os dados chegam pra você na vida real.

## Ordenando valores

```python
import pandas as pd

vendas = pd.DataFrame({
    "produto": ["mouse", "teclado", "monitor", "cabo"],
    "preco": [45.00, 120.00, 890.00, 15.00],
    "estoque": [30, 12, 5, 100]
})

por_preco = vendas.sort_values("preco", ascending=False)
print(por_preco)
```

O `sort_values` ordena a tabela toda pela coluna que você escolher. Com `ascending=False`, ele coloca do mais caro para o mais barato.

---
# Criando colunas novas

Às vezes você precisa de uma coluna que não veio pronta, tipo o valor total em estoque de cada produto:

```python
vendas["valor_em_estoque"] = vendas["preco"] * vendas["estoque"]
print(vendas)
```

É bem direto: você "cria" a coluna igual criaria uma chave num dicionário, só que o valor dela é o resultado de uma operação entre outras colunas, linha por linha.

---
# Aplicando uma função personalizada

Quando uma conta simples (tipo multiplicação) não resolve, dá pra usar o `.apply()` com uma função sua:

```python
def classificar_estoque(qtd):
    if qtd < 10:
        return "baixo"
    elif qtd < 50:
        return "médio"
    else:
        return "alto"

vendas["situacao"] = vendas["estoque"].apply(classificar_estoque)
print(vendas)
```

O `.apply()` passa cada valor da coluna `estoque` pela função `classificar_estoque`, um de cada vez, e guarda o retorno numa coluna nova. É tipo um `for` disfarçado, só que mais rápido e em uma linha só.

---
# Tratando dados faltando

Dados do mundo real quase sempre têm buracos. O Pandas representa isso com `NaN`:

```python
import numpy as np

vendas.loc[2, "preco"] = np.nan
print(vendas.isna())
```

O `.isna()` mostra `True` em toda posição onde falta valor. Pra resolver isso, você tem duas saídas:

```python
sem_buraco = vendas.dropna()

preenchido = vendas.fillna(0)
```

`.dropna()` apaga a linha inteira que tem algum valor faltando. `.fillna(0)` mantém a linha, só troca o `NaN` pelo valor que você passar (aqui, `0`).

---
# Juntando duas tabelas (merge)

É comum os dados estarem espalhados em tabelas diferentes, tipo uma com produtos e outra com fornecedores:

```python
fornecedores = pd.DataFrame({
    "produto": ["mouse", "teclado", "monitor", "cabo"],
    "fornecedor": ["TechSup", "TechSup", "VisionCorp", "CaboMax"]
})

completo = vendas.merge(fornecedores, on="produto")
print(completo)
```

O `.merge()` funciona parecido com um `JOIN` do SQL: ele olha a coluna `produto` nas duas tabelas e junta as linhas que combinam, formando uma tabela só com as informações das duas.