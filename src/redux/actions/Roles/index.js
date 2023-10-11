import { createAsyncThunk } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from '../../slices/Loading';
import axiosClient from '../../../configs/axios';
import { endpoint } from '../../../configs/apiUrl';
import { Notification } from '../../../components/Notification';
import { logout } from '../Auth';
import { saveRoles, saveRoleById, saveTrashBin, savePermissionsInRoleById } from '../../slices/Roles';
import { catchErrorResponse } from '../../../utils/catchErrorResponse';

export const getListRoles = createAsyncThunk(
    'roles/getListRoles',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(endpoint.ROLES_LIST);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveRoles(res.data.data));
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
                message: err.response.data.message,
            }
        }
    }
)

export const createRole = createAsyncThunk(
    'roles/createRole',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(endpoint.ROLES_CREATE, data);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(getListRoles([]));
                Notification('success', 'Tạo', res.data.message);
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
                message: err.response.data.message,
            }
        }
    }
)

export const showRole = createAsyncThunk(
    'roles/showRole',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.ROLES_SHOW}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveRoleById(res.data.data));
                thunky.dispatch(savePermissionsInRoleById(res.data.permissions));
                return {
                    action: true,
                    data: res.data.data,
                    permissions: res.data.permissions,
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

export const updateRole = createAsyncThunk(
    'roles/updateRole',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(`${endpoint.ROLES_UPDATE}/${data.id}`, data.data);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(getListRoles([]));
                Notification('success', 'Cập nhật', res.data.message);
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
                message: err.response.data.message,
            }
        }
    }
)

export const deleteRole = createAsyncThunk(
    'roles/deleteRole',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.ROLES_DELETE}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(getListRoles([]));
                Notification('success', 'Xóa', res.data.message);
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
                message: err.response.data.message,
            }
        }
    }
)

export const getTrashList = createAsyncThunk(
    'roles/getTrashList',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(endpoint.ROLES_TRASH_BIN);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveTrashBin(res.data.data));
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
                message: err.response.data.message,
            }
        }
    }
)

export const restoreTrash = createAsyncThunk(
    'roles/restoreTrash',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.ROLES_TRASH_RESTORE}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(getTrashList([]));
                thunky.dispatch(getListRoles([]));
                Notification('success', 'Xóa', res.data.message);
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
                message: err.response.data.message,
            }
        }
    }
)

export const deleteTrash = createAsyncThunk(
    'roles/deleteTrash',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.ROLES_TRASH_DELETE}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(getTrashList([]));
                thunky.dispatch(getListRoles([]));
                Notification('success', 'Xóa', res.data.message);
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
                message: err.response.data.message,
            }
        }
    }
)