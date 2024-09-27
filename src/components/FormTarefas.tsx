import { ActionsProps, TarefaProps } from "@/types";

export default function FormTarefas({ titulo, setor, descricao, add, digit }: TarefaProps & ActionsProps) {
    return (
        <div className="form-tarefa">
            <form onSubmit={add}>
                <div>
                    <input name="titulo" placeholder="Título"
                        value={titulo} onChange={digit} />
                </div>
                <div>
                    <input name='setor' placeholder="Setor"
                        value={setor} onChange={digit} />
                </div>
                <div>
                    <input name="descricao" placeholder="descricao"
                        value={descricao} onChange={digit} />
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}