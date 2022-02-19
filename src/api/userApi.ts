import Api from './config';
export const getDiet = async () => {
  const response = await Api.get('diet');
  return response.data;
};

export const getDiary = async () => {
  const response = await Api.get('diary');
  return response.data;
};
