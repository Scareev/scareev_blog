import { useState } from "react";
import BlogItem from "./BlogItem";

const posts = import.meta.glob("../posts/PYTHON/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

const metadados = [
  { caminho: "../posts/PYTHON/Pandas.md", titulo: "1 - Pandas (Básicos)", tipo: "Dados", id: 3 },
  { caminho: "../posts/PYTHON/Pandas2.md", titulo: "2 - Pandas (Exemplos)", tipo: "Dados", id: 4 },
  { caminho: "../posts/PYTHON/01-comandos-fundamentais.md", titulo: "3 - comandos fundamentais", tipo: "Dados", id: 5 },
  { caminho: "../posts/PYTHON/02-comandos-colunas.md", titulo: "4 - comandos colunas", tipo: "Dados", id: 6 },
  { caminho: "../posts/PYTHON/03-comandos-linhas.md", titulo: "5 - comandos linhas", tipo: "Dados", id: 7 },
  { caminho: "../posts/PYTHON/04-comandos-tratamento-dados.md", titulo: "6 - tratamento de dados", tipo: "Dados", id: 8 }
];

export default function MainContent() {
  const [postAtual, setPostAtual] = useState(metadados[0]);
  const [modoLeitura, setModoLeitura] = useState(false);

  return (
    <section className="bg-teal-200 p-6 grid grid-cols-5 gap-6 font-mono">

      {!modoLeitura && (
        <div className="bg-white border-2 border-black shadow-[4px_4px_0_0_#000]">
          <div className="bg-purple-600 px-2 py-1 flex items-center justify-between border-b-2 border-black">
            <h1 className="text-white text-sm font-bold uppercase tracking-wide">Outras notícias</h1>
            <div className="flex gap-1">
              <span className="w-3 h-3 bg-yellow-300 border border-black"></span>
              <span className="w-3 h-3 bg-red-500 border border-black"></span>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-3 text-sm">
            <p>» nada ainda</p>
          </div>
        </div>
      )}

      <div className={`${modoLeitura ? "col-span-5" : "col-span-3"} bg-slate-900 p-4 border-2 border-black shadow-[4px_4px_0_0_#000]`}>
        <div className="flex items-center justify-between pb-3 border-b-2 border-teal-500">
          <h1 className="text-3xl text-teal-300 uppercase tracking-wide">
            {postAtual.titulo}
          </h1>
          <button
            onClick={() => setModoLeitura(!modoLeitura)}
            className="text-xs bg-teal-300 text-black px-2 py-1 border-2 border-black shadow-[2px_2px_0_0_#000] hover:bg-teal-200"
          >
            {modoLeitura ? "◀ Voltar" : "Modo Leitura"}
          </button>
        </div>
        <BlogItem
          titulo={postAtual.titulo}
          tipo={postAtual.tipo}
          id={postAtual.id}
          conteudo={posts[postAtual.caminho]}
          mostrarInfo={!modoLeitura}
        />
      </div>

      {!modoLeitura && (
        <>
          <div className="bg-white border-2 border-black shadow-[4px_4px_0_0_#000]">
            <div className="bg-purple-600 px-2 py-1 flex items-center justify-between border-b-2 border-black">
              <h1 className="text-white text-sm font-bold uppercase tracking-wide">Blogs recentes</h1>
              <div className="flex gap-1">
                <span className="w-3 h-3 bg-yellow-300 border border-black"></span>
                <span className="w-3 h-3 bg-red-500 border border-black"></span>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
              {metadados.map((post) => (
                <button
                  key={post.caminho}
                  onClick={() => setPostAtual(post)}
                  className={`text-left text-sm px-3 py-2 border-2 border-black transition-colors ${
                    postAtual.id === post.id
                      ? "bg-purple-600 text-white font-semibold"
                      : "bg-yellow-200 hover:bg-yellow-300"
                  }`}
                >
                  {post.titulo}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-yellow-300 col-span-5 p-3 border-2 border-black shadow-[4px_4px_0_0_#000] flex justify-between items-center">
            <p className="text-sm text-black font-bold uppercase">Metadados</p>
            <p className="text-xs text-black">nada</p>
          </div>
        </>
      )}

    </section>
  );
}