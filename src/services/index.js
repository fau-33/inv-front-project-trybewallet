const URL = 'https://economia.awesomeapi.com.br/json/all';

const getAPI = async () => {
  const response = await (URL);
  const data = await response.json();
  return data;
};

export default getAPI;
