import Api from './config';

export class AuthService {
  async me() {
    return await Api.get('me');
  }

  async login(user: any) {
    // return await Api.post('login', user);
    console.log('params: ', user);
    const data = await Api.post('login', { data: user });
    console.log('API response: ', data);
    return data;
    // return await Api.post('84ca8f4a-2a66-4679-a6e1-7f4e0753d04a', user);
  }

  meTemp() {
    return Api.get('me');
  }
}

const authService = new AuthService();

export default authService;

export const me = async () => {
  const response = await Api.get('me');
  return response;
};
