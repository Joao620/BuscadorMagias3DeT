// listaCoisas = {
//     "água": "W",
//     "fogo": "F",
//     "terra": "T",
//     "ar": "A",
//     "espírito": "E",
//     "negra": "N",
//     "branca": "B",
//     "todas": "WFTAENB"
// }

export enum Escolas {
    agua,
    fogo,
    terra,
    ar,
    espirito,
    negra,
    branca
}

export const NomeEscolas = {
    [Escolas.agua]: "Água",
    [Escolas.fogo]: "Fogo",
    [Escolas.terra]: 'Terra',
    [Escolas.ar]: 'Ar',
    [Escolas.espirito]: 'Espírito',
    [Escolas.negra]: 'Negra',
    [Escolas.branca]: 'Branca',
}

export const MinificadoEscolas = {
    [Escolas.agua]: "W",
    [Escolas.fogo]: "F",
    [Escolas.terra]: 'T',
    [Escolas.ar]: 'A',
    [Escolas.espirito]: 'E',
    [Escolas.negra]: 'N',
    [Escolas.branca]: 'B',
}