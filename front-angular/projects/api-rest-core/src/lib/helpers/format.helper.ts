export class FormatHelper {
  static DATE_FORMAT = 'date';
  static DATE_RANGE_FORMAT = 'date_range';
  static TIME_FORMAT = 'time';
  static CHECKBOX_FORMAT = 'checkbox';
  static MULTIPLE_SELECT_FORMAT = 'multiple-select';
  static NUMBER_RANGE_FORMAT = 'number_range';

  public static formatToApi(type: string, value: any): any {
    if (type == FormatHelper.DATE_FORMAT) {
      if(value) {
        return FormatHelper.formatDateToString(value)
      } else {
        return null;
      }
    } else if (type == FormatHelper.DATE_RANGE_FORMAT) {
      if(value && value['fromDate'] && value['toDate']) {
        return JSON.stringify([FormatHelper.formatDateToString(value['fromDate']), FormatHelper.formatDateToString(value['toDate'])]);
      } else {
        return null;
      }
    } else if (type == FormatHelper.NUMBER_RANGE_FORMAT) {
      if(value && value['min'] != null && value['max'] != null) {
        return JSON.stringify(value);
      } else {
        return null;
      }
    } else if (type == FormatHelper.MULTIPLE_SELECT_FORMAT) {
      if(value && value.length > 0) {
        return JSON.stringify(value);
      } else {
        return null;
      }
    } else if (type == FormatHelper.CHECKBOX_FORMAT) {
      if(value) {
        return value;
      } else {
        return false;
      }
    }
    return null;
  }

  public static formatFromApi(type: string, value: any): any {
    if(value) {
      if (type == FormatHelper.DATE_FORMAT) {
        return FormatHelper.formatStringToDate(value);
      } else if (type == FormatHelper.TIME_FORMAT) {
        return FormatHelper.formatStringToTime(value);
      } else if (FormatHelper.DATE_FORMAT) {
        if (value === true || value === 1 || value === '1' || value === 'true') {
          return true;
        } else {
          return false;
        }
      }
    }

    return null;
  }

  public static formatDate(date: Date) {
    var month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  private static formatDateToString(value: { day: any, month: any, year: any }): any {
    return value.year + '-' + value.month + '-' + value.day;
  }
  private static formatStringToDate(value: string): any {
    let splittedValue = value.split('-');
    return {
      day: parseInt(splittedValue[2]),
      month: parseInt(splittedValue[1]),
      year: parseInt(splittedValue[0]),
    }
  }

  private static formatStringToTime(value: string): any {
    let splittedValue = value.split(':');
    return {
      hour: parseInt(splittedValue[0]),
      minutes: parseInt(splittedValue[1]),
      seconds: parseInt(splittedValue[2]),
    }
  }

}
