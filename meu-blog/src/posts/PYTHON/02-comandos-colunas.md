# Pandas — Comandos para Colunas

Do mais essencial ao mais opcional.

## 🔴 Essenciais

| Método | Descrição |
|---|---|
| `df['coluna']` | Seleciona uma coluna (retorna Series) |
| `df[['col1','col2']]` | Seleciona múltiplas colunas (retorna DataFrame) |
| `df['nova'] = ...` | Cria ou sobrescreve uma coluna |
| `df.drop(columns=[])` | Remove uma ou mais colunas |
| `df.rename(columns={})` | Renomeia colunas |
| `df.dtypes` | Verifica o tipo de dado de cada coluna |
| `df.astype()` | Converte o tipo de dado de uma coluna |

## 🟠 Muito úteis

| Método | Descrição |
|---|---|
| `df.apply(func)` | Aplica uma função a cada coluna (ou linha) |
| `df['col'].map()` | Aplica uma função/dicionário elemento a elemento em uma Series |
| `df.assign()` | Cria novas colunas de forma encadeada (chaining) |
| `df.sort_values(by='col')` | Ordena o DataFrame com base em uma coluna |
| `df.select_dtypes()` | Seleciona colunas por tipo de dado (ex: só numéricas) |
| `df.columns.tolist()` | Converte os nomes das colunas em lista |
| `df.set_index('col')` | Define uma coluna como índice |
| `df.reset_index()` | Reseta o índice, voltando ao numérico padrão |

## 🟡 Úteis em contextos específicos

| Método | Descrição |
|---|---|
| `df.insert()` | Insere uma coluna em uma posição específica |
| `df['col'].value_counts()` | Conta valores únicos de uma coluna |
| `df['col'].unique()` | Lista os valores únicos de uma coluna |
| `df['col'].nunique()` | Conta quantos valores únicos existem |
| `df.add_prefix()` / `add_suffix()` | Adiciona prefixo/sufixo aos nomes das colunas |
| `df.reindex(columns=[])` | Reordena ou filtra colunas por uma lista de nomes |
| `pd.get_dummies()` | Transforma coluna categórica em colunas binárias (one-hot) |
