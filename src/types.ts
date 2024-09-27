import React from "react";

export type TarefaProps = {
    titulo: string;
    setor: string;
    descricao: string;
}

export type RemoveProps = {
    remove: (tit: string) => void

}

export type ActionsProps = {
    add: (e: React.FormEvent<HTMLFormElement>) => void;
    digit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}