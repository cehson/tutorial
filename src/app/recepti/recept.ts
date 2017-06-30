import { Ingridients } from "../ingridients"

export class Recept {
    constructor(public ime: string, public opis: string, public imagePath: string, public ingridient: Ingridients[]){}
}
