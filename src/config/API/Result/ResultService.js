import HandleAPI from "../HandleAPI";

const getResult = async () => {
  return await HandleAPI.APIGet("Result");
};

const ResultService = { getResult };

export default ResultService;
