import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useTranslation } from "react-i18next";
import { translations } from "../locales/translations";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/`, userInfo);
      console.log(data);
      dispatch(registerSuccess(data));
      toastSuccessNotify(t(translations.messages.register.success));
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(t(translations.messages.register.error));
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login/`, userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify(t(translations.messages.login.success));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(t(translations.messages.login.error));
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.get(`${BASE_URL}auth/logout/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      toastSuccessNotify(t(translations.messages.logout.success));
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(t(translations.messages.logout.error));
    }
  };

  return { register, login, logout };
};

export default useAuthCall;
