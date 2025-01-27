export const setIntendedDestination = (url: string) => {
  localStorage.setItem('signInRedirect', url);
};

export const getIntendedDestination = () => {
  return localStorage.getItem('signInRedirect');
};

export const clearIntendedDestination = () => {
  localStorage.removeItem('signInRedirect');
};
