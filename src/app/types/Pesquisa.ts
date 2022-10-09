import { Escolas } from "./Escolas"

export default interface Pesquisa {
    texto: string
    escolas: Escolas[]
    custoMaximo: number
    custoMinimo: number
}