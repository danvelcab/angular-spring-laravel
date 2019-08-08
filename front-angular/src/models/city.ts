
export class City {
  id: any;
  name: string;

  /**
   * Claves ajenas
   */

  /**
   * Atributos derivados de la clave ajena
   */

  constructor() {
    this.id = null;
    this.name = null;

  }

  public static copy(model: any) {
    let aux = new City();
    aux.id = model.id;
    aux.name = model.name;

    return aux;
  }
}
