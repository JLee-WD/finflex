import axios from 'axios';
import { PortfolioGet, PortfolioPost } from '../Models/Portfolio';
import { handleError } from '../Helpers/ErrorHandler';

const api = process.env.REACT_APP_API_URL;

export const portfolioAddAPI = async (symbol: string) => {
  try {
    const data = await axios.post<PortfolioPost>(api + `portfolio?symbol=${symbol}`);
    return data;
  } catch (portfolioError) {
    handleError(portfolioError);
  }
};
export const portfolioDeleteAPI = async (symbol: string) => {
  try {
    const data = await axios.delete<PortfolioPost>(api + `portfolio?symbol=${symbol}`);
    return data;
  } catch (portfolioError) {
    handleError(portfolioError);
  }
};
export const portfolioGetAPI = async () => {
  try {
    const data = await axios.get<PortfolioGet[]>(api + `portfolio`);
    return data;
  } catch (portfolioError) {
    handleError(portfolioError);
  }
};
