import { RemoveProps, TarefaProps } from "@/types";
import { FaTrashAlt as X } from "react-icons/fa";

export default function Tarefas({ titulo, setor, descricao, remove }: TarefaProps & RemoveProps) {

    return (
        <div className="tarefa">
            <button onClick={() => remove(titulo)}><X /></button>
            <h2>{titulo}</h2>
            <p>Para: {setor}</p>
            <p>Fazer: {descricao}</p>

        </div>
    )
}