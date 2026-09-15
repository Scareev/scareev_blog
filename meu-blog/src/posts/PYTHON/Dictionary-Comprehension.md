Possui a mesma ideia que [[List Comprehension]] porém no tipo de dado `dictionary` em Python.

Abaixo, uma demonstração de sua natureza:

```python

def quadrados():
	return {x: x**2 for x in range(1,10)}
print(quadrados())

```

Aqui é um dicionário que mostra todos os quadrados e seus respectivos indíces.

Caso você queira percorrer sob os itens de um dicionário:

```python
def apenas_os_precos_mais_baixos():
	carrinho = {"banana": 5.00, "abacaxi": 9.00, "toranja": 12.00}
	return {fruta: preco for fruta, preco in carrinho.items() if preco <= 9.00}
print(apenas_os_precos_mais_baixos())

```

---
### Imagem demonstrativa do processo:

![[Pasted image 20260824183307.png]]

## Mesclar conceitos

Agora que você sabe o que é Comprehension, você pode juntar os dois conceitos ao mesmo tempo.

```python
#Dada uma lista de palavras, crie um dicionário onde as chaves sejam as primeiras letras e os valores sejam listas das palavras correspondentes. 

lista = 'cax abe b13 c23 arr d12'.split()

saída:
{'a': ['abe', 'arr'], 
'b':['b13'], 
'c':['cax', 'c23'],
'd': ['d12']}
```

Para realizar este exercício, vamos realizar em etapas:

## Exercício passo a passo

### 1. Identificar o retorno

Pelo exemplo, o retorno é um **dicionário**. Então já criemos nossa função:

```python
def exercicio():
	lista = 'cax abe b13 c23 arr d12'.split()
	return {}
```

já é um ótimo começo, tá!?

### 2. Pensar na lógica

Se as chaves precisam ser as primeiras letras, a gente pode usar *slicing* para pegar pelo **[0]** de cada string, só pegando o primeiro caractere.

```python
def exercicio():
	lista = 'cax abe b13 c23 arr d12'.split()
	return {index, palavra for ???}
```

Então já nomeamos como `index` para saber a próxima etapa.

Agora aqui entra a junção com *List Comprehension*

**Por quê?** 

Para garantir que peguemos todas as palavras, a gente precisa fazer uma dupla analise, percorrer toda vez em `lista` para poder pegar cada item a cada laço.

Uma passada só em Comprehension não permitiria percorrer o mesmo item de novo, e é algo que a gente precisa checar, daí vem algo como um *"Nested For"* 

```python
def exercicio():
	lista = 'cax abe b13 c23 arr d12'.split()
	return {index: palavra for [p for p in lista if index == p[0]], index in lista}
```

