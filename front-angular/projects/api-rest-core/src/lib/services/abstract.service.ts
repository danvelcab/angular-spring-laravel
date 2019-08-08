import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { ApiConfigHelper } from '../helpers/api-config.helper';
import { ListRequestData } from '../helpers/list-request-data';
import { QueryParamsHelper } from '../helpers/query-params.helper';
import { FormatHelper } from '../helpers/format.helper';

/**
 * Esta clase abstracta provee de las funciones necesarias para hacer las peticiones cruds a un backend
 */
export abstract class AbstractService {

  public modelName: string = null;
  public modelConfigurationClass: any = null;

  constructor(modelName: string,
              modelConfigurationClass: {structure: any[]},
              public _http: HttpClient,
              public apiCongihHelper: ApiConfigHelper) {
    this.modelName = modelName;
    this.modelConfigurationClass = modelConfigurationClass;
  }

  get(id: any): Observable<any> {
    return this._http.get(this.apiCongihHelper.buildURL(this.modelName, id));
  }
  list(listRequestData: ListRequestData): Observable<object> {
    let query_params = QueryParamsHelper.addQueryParams(listRequestData); // Añadimos paginación, filtros, orden, selectores y número de items por pagina
    return this._http.get(this.apiCongihHelper.buildURL(this.modelName), {params: query_params});
  }
  selectList(listRequestData: ListRequestData): Observable<object> {
    let query_params = QueryParamsHelper.addQueryParams(listRequestData); // Añadimos paginación, filtros, orden, selectores y número de items por pagina
    return this._http.get(this.apiCongihHelper.buildURL(this.modelName, null, false, 'select'), {params: query_params});
  }
  store(model: any): Observable<object> {
    const params = this.buildParams(model);
    return this._http.post(this.apiCongihHelper.buildURL(this.modelName), params);
  }
  bulkStore(bulkData: any) {
    const params = JSON.parse(JSON.stringify(bulkData));
    return this._http.post(this.apiCongihHelper.buildURL(this.modelName, null, false, null, true), params);
  }
  update(model: any): Observable<object> {
    const params = this.buildParams(model);
    return this._http.put(this.apiCongihHelper.buildURL(this.modelName, model.id), params);
  }
  delete(id: any): Observable<object> {
    return this._http.delete(this.apiCongihHelper.buildURL(this.modelName, id));
  }

  public buildParams(model: any): any {
    let params: any = {};
    this.modelConfigurationClass.structure.forEach(function (field) {
      if (field.type == 'DateComponent') { // TODO - A corregir
        params[field.name] = FormatHelper.formatToApi(FormatHelper.DATE_FORMAT, model[field.name]);
      } else if(field.type == 'checkbox'){
        params[field.name] = FormatHelper.formatToApi(FormatHelper.CHECKBOX_FORMAT, model[field.name]);
      } else {
        params[field.name] = model[field.name];
      }
    });
    params = this.extendBuildParams(model, params);
    return params;
  }

  public extendBuildParams(model: any, params: any): any {
    return params;
  };

}
