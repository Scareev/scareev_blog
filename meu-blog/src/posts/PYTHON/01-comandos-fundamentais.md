# Pandas — Comandos Fundamentais

Do mais essencial ao mais opcional.

## 🔴 Essenciais (usa quase todo dia)

| Método | Descrição |
|---|---|
| `pd.read_csv()` | Lê um arquivo CSV e cria um DataFrame |
| `pd.DataFrame()` | Cria um DataFrame a partir de dict, lista, array, etc. |
| `df.head(n)` | Mostra as primeiras `n` linhas (padrão 5) |
| `df.tail(n)` | Mostra as últimas `n` linhas |
| `df.shape` | Retorna (nº de linhas, nº de colunas) |
| `df.info()` | Mostra tipos de dados, nulos e uso de memória |
| `df.describe()` | Estatísticas descritivas (média, desvio, min, max...) |
| `df.columns` | Lista os nomes das colunas |
| `df.dtypes` | Mostra o tipo de dado de cada coluna |
| `df.loc[]` | Seleciona por rótulo (label) de linha/coluna |
| `df.iloc[]` | Seleciona por posição numérica |

## 🟠 Muito úteis

| Método | Descrição |
|---|---|
| `pd.read_excel()` | Lê arquivo Excel |
| `df.to_csv()` | Exporta o DataFrame para CSV |
| `df.to_excel()` | Exporta o DataFrame para Excel |
| `df.copy()` | Cria uma cópia independente do DataFrame |
| `df.sample(n)` | Retorna `n` linhas aleatórias |
| `df.values` | Retorna os dados como array NumPy |
| `df.index` | Mostra/define o índice do DataFrame |
| `df.T` | Transpõe (troca linhas por colunas) |
| `pd.concat()` | Concatena múltiplos DataFrames/Series |
| `pd.merge()` | Junta DataFrames como um JOIN de SQL |

## 🟡 Úteis em contextos específicos

| Método | Descrição |
|---|---|
| `pd.read_json()` | Lê dados no formato JSON |
| `pd.read_sql()` | Lê dados de um banco de dados via query SQL |
| `df.to_json()` | Exporta para JSON |
| `df.to_dict()` | Converte o DataFrame em dicionário |
| `pd.set_option()` | Ajusta opções de exibição (ex: nº de colunas mostradas) |
| `df.memory_usage()` | Mostra uso de memória por coluna |

