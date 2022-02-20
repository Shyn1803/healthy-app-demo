import Api from './config';

export const getColumn = async () => {
  const response = await Api.get('column');
  return response.data;
};
