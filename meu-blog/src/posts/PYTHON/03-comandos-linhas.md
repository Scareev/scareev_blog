# Pandas — Comandos para Linhas

Do mais essencial ao mais opcional.

## 🔴 Essenciais

| Método | Descrição |
|---|---|
| `df.loc[linha]` | Seleciona linha(s) por rótulo/índice |
| `df.iloc[posição]` | Seleciona linha(s) por posição numérica |
| `df[df['col'] > x]` | Filtra linhas com base em condição booleana |
| `df.drop(index=[])` | Remove linha(s) pelo índice |
| `df.sort_values(by='col')` | Ordena as linhas com base em uma ou mais colunas |
| `df.append()` / `pd.concat()` | Adiciona novas linhas (concat é o atual recomendado) |
| `df.reset_index(drop=True)` | Reindexa as linhas sequencialmente |

## 🟠 Muito úteis

| Método | Descrição |
|---|---|
| `df.query('condição')` | Filtra linhas usando sintaxe de string, mais legível |
| `df.isin([])` | Filtra linhas cujo valor está em uma lista |
| `df.drop_duplicates()` | Remove linhas duplicadas |
| `df.groupby('col')` | Agrupa linhas por valores de uma coluna (para agregações) |
| `df.sample(n)` | Seleciona linhas aleatórias |
| `df.nlargest(n, 'col')` | Retorna as `n` linhas com maiores valores de uma coluna |
| `df.nsmallest(n, 'col')` | Retorna as `n` linhas com menores valores de uma coluna |

## 🟡 Úteis em contextos específicos

| Método | Descrição |
|---|---|
| `df.iterrows()` | Itera linha a linha (lento, evitar em grandes volumes) |
| `df.itertuples()` | Itera linha a linha de forma mais rápida que `iterrows` |
| `df.shift()` | Desloca os valores das linhas para cima/baixo |
| `df.diff()` | Calcula a diferença entre linhas consecutivas |
| `df.duplicated()` | Marca quais linhas são duplicadas (retorna booleanos) |
| `df.head(n)` / `df.tail(n)` | Seleciona as primeiras/últimas `n` linhas |
| `df.at[]` | Acessa/edita um único valor específico (mais rápido que `loc`) |

