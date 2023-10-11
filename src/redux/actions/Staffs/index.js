import { createAsyncThunk } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from '../../slices/Loading';
import axiosClient from '../../../configs/axios';
import { endpoint } from '../../../configs/apiUrl';
import { catchErrorResponse } from '../../../utils/catchErrorResponse';
import { saveStaffById, saveStaffs } from '../../slices/Staffs';
import { logout } from '../Auth';
import { Notification } from '../../../components/Notification';

export const getListStaffs = createAsyncThunk(
    'staffs/getListStaffs',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(endpoint.STAFFS_LIST);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveStaffs(res.data.data));
                return {
                    action: true,
                    data: res.data.data,
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
                message: err.response.data.message
            }
        }
    }
)

export const createStaff = createAsyncThunk(
    'staffs/createStaff',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(endpoint.STAFFS_CREATE, data);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(getListStaffs([]));
                Notification('success', 'Tạo người dùng', res.data.message);
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
                message: err.response.data.message
            }
        }
    }
)

export const showStaff = createAsyncThunk(
    'staffs/showStaff',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.STAFFS_SHOW}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveStaffById(res.data.data));
                return {
                    action: true,
                    data: res.data.data,
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
                message: err.response.data.message
            }
        }
    }
)

export const updateStaff = createAsyncThunk(
    'staffs/updateStaff',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(`${endpoint.STAFFS_UPDATE}/${data.id}`, data.data);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                Notification('success', 'Cập nhật', res.data.message);
                thunky.dispatch(getListStaffs([]));
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
                message: err.response.data.message
            }
        }
    }
)

export const deleteStaff = createAsyncThunk(
    'staffs/deleteStaff',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.STAFFS_DELETE}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                Notification('success', 'Xóa', res.data.message);
                thunky.dispatch(getListStaffs([]));
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
                message: err.response.data.message
            }
        }
    }
)