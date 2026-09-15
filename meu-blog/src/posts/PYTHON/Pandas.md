É uma biblioteca para trabalhar com dados em Python, tipo uma planilha do Excel só que dentro do seu código.

Ela é ótima para ler, filtrar, organizar e analisar dados de forma rápida.

---
### Contexto:

O Pandas trabalha com duas estruturas principais:

- **Series**: uma coluna só, tipo uma lista com rótulos (índices).
- **DataFrame**: uma tabela inteira, com várias colunas e linhas.

Pense no DataFrame como a "planilha" e a Series como uma "coluna" dessa planilha.

## Código na prática

```python
import pandas as pd

dados = {
    "fruta": ["banana", "abacaxi", "toranja"],
    "preco": [5.00, 9.00, 12.00]
}

df = pd.DataFrame(dados)
print(df)
```

*ANTES DE TUDO* a gente dá `pip install pandas` para instalar a biblioteca.

A gente importa o `pandas` como `pd` (todo mundo coloca assim) e depois cria um `DataFrame` a partir de um dicionário, onde cada chave vira uma coluna.

```
    fruta  preco
0  banana    5.0
1 abacaxi    9.0
2 toranja   12.0
```

Repara que o Pandas já cria um índice numérico (0, 1, 2...) do lado esquerdo automaticamente.

---
# Lendo um arquivo CSV

Na prática, você raramente vai digitar os dados na mão como no exemplo acima. O mais comum é ler de um arquivo:

```python
df = pd.read_csv("estoque.csv")
print(df.head())
```

O `.head()` mostra só as 5 primeiras linhas, só para dar uma espiadinha nos dados sem precisar imprimir a tabela inteira.

---
# Selecionando colunas e linhas

Para pegar uma coluna só, é só usar colchetes com o nome dela:

```python
print(df["fruta"])
```

Para filtrar linhas com base em uma condição (tipo o `if` do Dictionary Comprehension, só que aplicado na tabela toda):

```python
baratas = df[df["preco"] <= 9.00]
print(baratas)
```

Aqui o Pandas olha linha por linha, verifica se o preço é menor ou igual a 9.00, e devolve só as que passaram no teste.

---
# Agrupando dados

Se você quer resumir informações (tipo "quanto cada categoria vende no total"), usa o `.groupby()`:

```python
vendas = pd.DataFrame({
    "categoria": ["fruta", "fruta", "limpeza"],
    "valor": [5.00, 9.00, 12.00]
})

total_por_categoria = vendas.groupby("categoria")["valor"].sum()
print(total_por_categoria)
```

Isso agrupa as linhas que têm a mesma categoria e soma os valores de cada grupo, parecido com um `SELECT categoria, SUM(valor) GROUP BY categoria` do SQL.