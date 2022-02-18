interface Params {
  [key: string]: string;
}

export class PATH {
  static replaceParams(route: string, params: Params = {}) {
    let finalRoute = route;
    Object.keys(params).forEach((key) => {
      finalRoute = finalRoute.replace(`:${key}`, params[key]);
    });
    return finalRoute;
  }

  static HOME = '/';
  static MY_RECORD = '/myRecord';
  static COLUMN = '/column';

  static LOGIN = '/login';
  static PAGE_404 = '/404';
  static PAGE_500 = '/500';

  //schedule list
  static SCHEDULE_MANAGEMENT = '/schedules';
  static SCHEDULE_LIST = '/schedules/list';
  static SCHEDULE_DETAIL = '/schedules/detail/:id/:abc';
}
