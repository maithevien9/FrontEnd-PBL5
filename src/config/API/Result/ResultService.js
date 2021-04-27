import HandleAPI from "../HandleAPI";

const getResult = async () => {
  return await HandleAPI.APIGet("Result");
};
const getResultWarning = async () => {
  return await HandleAPI.APIGet("ResultWarning");
};

const ResultService = { getResult, getResultWarning };

export default ResultService;
