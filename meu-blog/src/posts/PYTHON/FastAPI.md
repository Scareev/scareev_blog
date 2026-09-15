É um framework para criar APIs, ou seja, uma forma de você colocar suas funções como rotas `HTTP` 

Você coloca um decorador em cima da sua função e ela já esta pronta para virar uma rota.

--- 
### Contexto:

Uma rota na web é aquela parte da URL que representa aonde você está:

<center> https://site.com/contatos</center>

`/contatos` é uma rota feita para mostrar a parte de contatos.
## Código na prática

```python
from fastapi import FastAPI 

app = FastAPI() 

@app.get("/") 
def home(): 
	return {"status": "ok"} 
```

*ANTES DE TUDO* a gente dá `pip install fastapi uvicorn` para instalar as bibliotecas necessárias.

A gente importa o `fastapi` e depois cria uma variável (com uma mentalidade objeto) chamado `app`. A gente faz isto para poder ter acesso a vários métodos da biblioteca todos em uma instância da framework.

```python
@app.get("/") 
def home(): 
	return {"status": "ok"} 
```

Aqui é feito uma função com o decorador `@app.get()` que dá "superpoderes" para nossa função.

Ela agora virou uma rota na web. O `/` significa página principal.

E o return `{"status": "ok"}` retorna um `.json` para poder sinalizar para nós o que está sendo exposto na nossa API.

Aqui a escolha de palavras pode ser qualquer uma, a gente colocou  `{"status": "ok"}` apenas para sinalizar mesmo. Mas facilmente poderia ser  `{"macarrão": "salsicha"}`.

---
# Encapsulamento de dados

Esta seção é especifica para a atividade do **Übertouch.** Foi pedido para que a gente encapsule em uma rota na FastAPI

*?????????????????*

Ok não surte, não é tão complicado!

Como visto anteriormente, a criação de uma rota é:

```
decorador + função + retorno de um json
```

Então uma função que encapsularia o nosso BD seria esta:

```python
from fastapi import FastAPI
import sqlite3

app = FastAPI()

@app.get("/estoque")
def listar_estoque():
    conn = sqlite3.connect("lojas.db")
    resultado = conn.execute("SELECT * FROM estoque").fetchall()
    conn.close()
    return {"estoque": resultado}
```

Aqui ela possui o *connector* do sqlite3 com o `lojas.db` e também a query para ser executada.

