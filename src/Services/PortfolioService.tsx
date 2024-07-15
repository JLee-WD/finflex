import axios from 'axios';
import { PortfolioGet, PortfolioPost } from '../Models/Portfolio';
import { handleError } from '../Helpers/ErrorHandler';

// const api = 'http://localhost:5162/api/portfolio';

export const portfolioAddAPI = async (symbol: string) => {
  try {
    const data = await axios.post<PortfolioPost>(process.env.REACT_APP_API_KEY + `portfolio?symbol=${symbol}`);
    return data;
  } catch (portfolioError) {
    handleError(portfolioError);
  }
};
export const portfolioDeleteAPI = async (symbol: string) => {
  try {
    const data = await axios.delete<PortfolioPost>(process.env.REACT_APP_API_KEY + `portfolio?symbol=${symbol}`);
    return data;
  } catch (portfolioError) {
    handleError(portfolioError);
  }
};
export const portfolioGetAPI = async () => {
  try {
    const data = await axios.get<PortfolioGet[]>(process.env.REACT_APP_API_KEY + `portfolio`);
    return data;
  } catch (portfolioError) {
    handleError(portfolioError);
  }
};
