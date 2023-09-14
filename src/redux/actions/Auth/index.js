import { createAsyncThunk } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from '../../slices/Loading';
import axiosClient from '../../../configs/axios';
import { endpoint } from '../../../configs/apiUrl';
import { Notification } from '../../../components/Notification';
import { saveToken, saveUser, saveTypeToken, saveUserDashboard } from '../../slices/Auth';
import { router } from '../../../configs/router';
import { CC_TOKEN, CC_TYPETOKEN, CC_USER } from '../../../configs/constants';

export const register = createAsyncThunk(
    'auth/register',
    async (data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(endpoint.AUTH_REGISTER, data);
            thunky.dispatch(hideLoading());
            if (res.data.result) {
                Notification('success', 'Đăng ký', res.data.message);
                return {
                    action: true,
                    message: res.data.message
                }
            }
        } catch (err) {
            Notification('warning', 'Đăng ký', err.response.data.message);
            return {
                action: false,
                message: err.response.data.message
            }
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(endpoint.AUTH_LOGIN, data);
            thunky.dispatch(hideLoading());
            if (res.data.result) {
                const token = res.data.data.access_token;
                const user = res.data.information;
                const typeToken = res.data.data.type_token;
                //set local store
                window.localStorage.setItem(CC_TOKEN, token);
                window.localStorage.setItem(CC_TYPETOKEN, typeToken);
                window.localStorage.setItem(CC_USER, JSON.stringify(user));
                thunky.dispatch(saveToken(token));
                thunky.dispatch(saveTypeToken(typeToken));
                thunky.dispatch(saveUser(user));
                thunky.dispatch(saveUserDashboard((res.data.information.user_type === 1) ? router.ADM_DASHBOARD : router.DASHBOARD))
                Notification('success', 'Đăng nhập', res.data.message);
                return {
                    action: true,
                    message: res.data.message,
                    route: (res.data.information.user_type === 1) ? router.ADM_DASHBOARD : router.HOME
                }
            }
        } catch (err) {
            Notification('error', 'Đăng nhập', err.response.data.message);
            thunky.dispatch(hideLoading());
            return {
                action: err.response.data.result,
                message: err.response.data.message
            }
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            let res = await axiosClient.post(endpoint.AUTH_LOGOUT, { logout_all: true });
            thunky.dispatch(hideLoading());
            if (res.data.result) {
                //remove localstore
                window.localStorage.removeItem(CC_TOKEN);
                window.localStorage.removeItem(CC_TYPETOKEN);
                window.localStorage.removeItem(CC_USER);
                thunky.dispatch(saveToken(''));
                thunky.dispatch(saveUser({}));
                thunky.dispatch(saveUserDashboard(''));
                Notification('success', 'Đăng xuất', res.data.message);
                return {
                    action: true,
                    message: res.data.message
                }
            }
        } catch (err) {
            Notification('error', 'Đăng nhập', err.response.data.message);
            return {
                action: err.response.data.result,
                message: err.response.data.message
            }
        }
    }
)