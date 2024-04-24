import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getSuccess,
  getProCatBrandSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastSuccessNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const dispatch = useDispatch();
  const axiosWithToken = useAxios();

  const singularize = (text) => {
    // firms => Firm
    return text.charAt(0).toUpperCase() + text.slice(1, -1);
  };

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}`);
      console.log(data);

      dispatch(getSuccess({ data: data.data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    if (confirm("Are you sure you want to delete?")) {
      dispatch(fetchStart());
      try {
        await axiosWithToken.delete(`${url}/${id}`);
        toastSuccessNotify(`${singularize(url)} successfully deleted`);
      } catch (error) {
        console.log(error);
        dispatch(fetchFail());
      } finally {
        getStockData(url);
      }
    }
  };

  const postStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}`, info);
      getStockData(url); // only if we post it successfully
      toastSuccessNotify(`New ${singularize(url)} successfully created`);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const putStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${info._id}`, info);
      toastSuccessNotify(`${singularize(url)} successfully updated`);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(url);
    }
  };

  // Get all datas after all fullfilled with Promise.all()
  const getProCatBrand = async () => {
    dispatch(fetchStart());
    try {
      // const [a,b] = [1,2] // array destructuring
      const [products, categories, brands] = await Promise.all([
        axiosWithToken("products"),
        axiosWithToken("categories"),
        axiosWithToken("brands"),
      ]);
      dispatch(
        getProCatBrandSuccess([
          products?.data?.data,
          categories?.data?.data,
          brands?.data?.data,
        ])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return {
    deleteStockData,
    getStockData,
    postStockData,
    putStockData,
    getProCatBrand,
  };
};

export default useStockCall;
