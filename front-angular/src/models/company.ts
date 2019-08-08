
import { City } from './city';
export class Company {
  id: any;
  name: string;
  phone: string;
  email: any;

  /**
   * Claves ajenas
   */

  city_id: any;

  /**
   * Atributos derivados de la clave ajena
   */

  city: City;

  constructor() {
    this.id = null;
    this.name = null;
    this.phone = null;
    this.email = null;
    this.city_id = null;
  }

  public static copy(model: any) {
    let aux = new Company();
    aux.id = model.id;
    aux.name = model.name;
    aux.phone = model.phone;
    aux.email = model.email;
    aux.city_id = model.city_id;
    aux.city = model.city;
    return aux;
  }
}
