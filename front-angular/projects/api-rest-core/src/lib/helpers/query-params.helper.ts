import { forEach } from '@angular/router/src/utils/collection';
import { EventEmitter } from '@angular/core';
import { ListRequestData } from './list-request-data';
import { FormatHelper } from './format.helper';
export class QueryParamsHelper {
  public static addQueryParams(listRequestData: ListRequestData) {
    let query_params = {};
    if (listRequestData) {
      query_params = QueryParamsHelper.addPagination(query_params, listRequestData.currentPage);
      query_params = QueryParamsHelper.addFilters(query_params, listRequestData.filter);
      query_params = QueryParamsHelper.addOrders(query_params, listRequestData.order);
      query_params = QueryParamsHelper.addSelects(query_params, listRequestData.select);
      query_params = QueryParamsHelper.addItemsPerPage(query_params, listRequestData.itemsPerPage);
    }
    return query_params;
  }
  public static addSelectorQueryParams(listRequestData: ListRequestData) {
    let query_params = {};
    if(listRequestData) {
      query_params = QueryParamsHelper.addFilters(query_params, listRequestData.filter);
      query_params = QueryParamsHelper.addOrders(query_params, listRequestData.order);
    }
    return query_params;
  }
  public static addOrders(query_params, orders): any {
    for (let field in orders) {
      if (orders[field] != '+-') {
        if (orders[field] === '-') {
          query_params['sort'] = '-' + field;
        } else if(orders[field] === '+') {
          query_params['sort'] = field;
        }
      }
    }
    return query_params;
  }

  public static addPagination(query_params, currentPage): any {
    if (currentPage) {
      query_params['page'] = currentPage;
    }
    return query_params;
  }

  public static addFilters(query_params, filters): any {
    if(filters.toFilter){
      let toFilterArray = filters.toFilter();
      for (let i = 0; i < toFilterArray.length; i++) {
        let field = toFilterArray[i];
        if(!field['type']) { // Si no es un array metemos el valor directamente
          if (filters[field] != null && filters[field] != 'null') {
            query_params[field] = filters[field];
          }
        } else { // Si es un array procesamos el valor antes de meterlo
          if (filters[field['field']] != null && filters[field['field']] != 'null') {
            let value = FormatHelper.formatToApi(field['type'], filters[field['field']]);
            if(value) {
              query_params[field['field']] = value;
            }
          }
        }
      }
    } else {
      query_params = filters;
    }
    return query_params;
  }

  public static addItemsPerPage(query_params, itemsPerPage): any {
    if (itemsPerPage) {
      query_params['pagination'] = itemsPerPage;
    }
    return query_params;
  }

  public static addCols(query_params, cols): any {
    query_params['cols'] = cols;
    return query_params;
  }

  public static addSelects(query_params, selects): any {
    let selects_string = '';
    if (selects.length > 0) {
      for (let i = 0; i < selects.length; i++) {
        if (i !== 0) {
          selects_string += ',';
        }
        selects_string += selects[i];
      }
      query_params['selects'] = selects;
    }
    return query_params;
  }
}
