import { createAsyncThunk } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from '../../slices/Loading';
import axiosClient from '../../../configs/axios';
import { endpoint } from '../../../configs/apiUrl';
import { catchErrorResponse } from '../../../utils/catchErrorResponse';
import { logout } from '../Auth';
import { saveProfile } from '../../slices/Profile';
import { Notification } from '../../../components/Notification';

export const getMyProfile = createAsyncThunk(
    'profile/getMyProfile',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(endpoint.MYPROFILE);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveProfile(res.data.data));
                return {
                    action: true,
                    data: res.data.data,
                    message: res.data.message
                }
            }
        }catch(err){
            thunky.dispatch(logout({}));
            return {
                action: false,
                message: err.response.data.message,
            }
        }
    }
)

export const updateAvatar = createAsyncThunk(
    'profile/updateAvatar',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(endpoint.MYPROFILE_UPDATE_AVATAR, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                Notification('success', 'Cập nhật', res.data.message);
                thunky.dispatch(getMyProfile({}));
                return {
                    action: true,
                    message: res.data.message
                }
            }
        }catch(err){
            const errRes = catchErrorResponse(err.response);
            if(errRes) {
                thunky.dispatch(logout({}));
            } else {
                Notification('error', 'Lỗi', err.response.data.message);
            }
            return {
                action: false,
                message: err.response.data.message,
            }
        }
    }
)

export const changePassword = createAsyncThunk(
    'profile/changePassword',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(endpoint.MYPROFILE_CHANGE_PASSWORD, data);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                Notification('success', 'Cập nhật', res.data.message);
                thunky.dispatch(getMyProfile({}));
                return {
                    action: true,
                    message: res.data.message
                }
            }
        }catch(err){
            const errRes = catchErrorResponse(err.response);
            if(errRes) {
                thunky.dispatch(logout({}));
            } else {
                Notification('error', 'Lỗi', err.response.data.message);
            }
            return {
                action: false,
                message: err.response.data.message,
            }
        }
    }
)