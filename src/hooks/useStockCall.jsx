import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastSuccessNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const dispatch = useDispatch();
  const axiosWithToken = useAxios();

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
        toastSuccessNotify("Firm successfully deleted");
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
      toastSuccessNotify("New Firm successfully created");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const putStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${info._id}`, info);
      toastSuccessNotify("Firm successfully updated");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(url);
    }
  };

  return {
    deleteStockData,
    getStockData,
    postStockData,
    putStockData,
  };
};

export default useStockCall;
