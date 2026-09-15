import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

type blog_post = {
    titulo: string,
    tipo: string,
    id: number,
    conteudo: string,
    mostrarInfo?: boolean
}

function BlogItem({ titulo, tipo, id, conteudo, mostrarInfo = true }: blog_post) {
    return (
        <div className="prose prose-invert max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            >
                {conteudo}
            </ReactMarkdown>

            {mostrarInfo && (
                <div className="bg-blue-900">
                    <h1>ignore o conteúdo abaixo</h1>
                    <h2>TITULO: {titulo}</h2>
                    <h2>TIPO: {tipo}</h2>
                    <h5>ID: {id}</h5>
                </div>
            )}
        </div>
    )
}

export default BlogItem;