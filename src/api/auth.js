import { api } from './base';

// 'auth/users' : {
//     {
//     "first_name": "",
//     "last_name": "",
//     "national_code": "",
//     "password": ""
// }
// }

// {
//     "refresh": "",
//     "access": ""
// }
//  auth/jwt/create {
//     "national_code": "",
//     "password": ""
// }
//

export const login = (dispatch, data) => {
  const p2e = (s) => s.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  const nc = p2e(data.nationalCode);
  const ps = p2e(data.password);
  return api
    .post('/auth/jwt/create', {
      national_code: nc,
      password: ps,
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return new Error({ status: response.status });
      }
    })
    .then((result) => {
      dispatch({ type: 'setToken', payload: result.access });
    });
};

export const register = (data) => {
  const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  const nc = p2e(data.nationalCode);
  const ps = p2e(data.phoneNumber);
  
    return api
        .post('/auth/users/', {
            first_name: data.firstName,
            last_name: data.lastName,
            password: ps,
            national_code: nc,
        });
};
