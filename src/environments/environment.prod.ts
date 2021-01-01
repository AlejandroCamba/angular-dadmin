export const environment = {
  production: true,
  apiUrl: 'https://www.api.gameitemprices.com/api',
  endpoints: { // IMPORTANT TO DEFINE EVEN IF IT'S NOT USED
  login: {
    path: 'auth/login',
    body: {
      email: 'username',
      password: 'password'
    }
  },
  logout: {
    path: 'auth/logout'
  },
  widthCredentials: true
}
};
