import { Ingridients } from "../ingridients"

export class Recept {
    constructor(public ime, public opis, public imagePath, public ingridient: Ingridients[]){}
}
