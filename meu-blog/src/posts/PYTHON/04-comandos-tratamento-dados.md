# Pandas — Comandos para Tratamento de Dados

Do mais essencial ao mais opcional.

## 🔴 Essenciais

| Método | Descrição |
|---|---|
| `df.isnull()` / `df.isna()` | Identifica valores nulos/ausentes |
| `df.notnull()` | Identifica valores não nulos |
| `df.dropna()` | Remove linhas (ou colunas) com valores ausentes |
| `df.fillna(valor)` | Preenche valores ausentes com um valor definido |
| `df.drop_duplicates()` | Remove registros duplicados |
| `df.astype()` | Converte tipos de dados (ex: string para int) |
| `df.replace()` | Substitui valores específicos por outros |

## 🟠 Muito úteis

| Método | Descrição |
|---|---|
| `df['col'].str.strip()` | Remove espaços em branco no início/fim de strings |
| `df['col'].str.lower()` / `.upper()` | Padroniza texto em minúsculas/maiúsculas |
| `df['col'].str.replace()` | Substitui trechos de texto dentro de uma coluna |
| `pd.to_datetime()` | Converte coluna para o tipo data/hora |
| `pd.to_numeric()` | Converte coluna para tipo numérico, tratando erros |
| `df.interpolate()` | Preenche valores ausentes por interpolação |
| `df.duplicated()` | Sinaliza quais linhas são duplicadas |
| `df.clip(lower, upper)` | Limita valores dentro de um intervalo (trata outliers) |

## 🟡 Úteis em contextos específicos

| Método | Descrição |
|---|---|
| `df['col'].str.contains()` | Verifica se strings contêm um padrão/texto |
| `df['col'].str.split()` | Divide strings em partes (ex: separar nome e sobrenome) |
| `df['col'].str.extract()` | Extrai partes de uma string usando regex |
| `df.applymap()` | Aplica uma função a todos os elementos do DataFrame |
| `df.where(condição)` | Mantém valores que atendem à condição, substitui os demais |
| `pd.cut()` | Divide dados contínuos em faixas/categorias (bins) |
| `pd.qcut()` | Divide dados em faixas com quantidades iguais (quantis) |
| `df['col'].clip_lower()/clip_upper()` | *(legado)* Limita valores mínimos/máximos |

