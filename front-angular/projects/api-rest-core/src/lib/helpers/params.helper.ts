
export class Params {
    public static cleanParams(params): any {
        for (let field in params) {
            if (params[field] == null || params[field] === '') {
                delete params[field];
            }
        }
        return params;
    }
}
