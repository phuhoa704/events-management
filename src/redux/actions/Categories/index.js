import { createAsyncThunk } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from '../../slices/Loading';
import axiosClient from '../../../configs/axios';
import { endpoint } from '../../../configs/apiUrl';
import { Notification } from '../../../components/Notification';
import { saveCategories, saveCategoryById, saveTrashBin } from '../../slices/Categories';

export const listCategories = createAsyncThunk(
    'categories/listCategories',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(endpoint.CATEGORY_LIST);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveCategories(res.data.data));
                return {
                    action: true,
                    data: res.data.data,
                    message: res.data.message
                }
            }
        }catch(err){
            return {
                action: false,
                message: err.response.data.message,
            }
        }
    }
)

export const createCategory = createAsyncThunk(
    'categories/createCategory',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(endpoint.CATEGORY_CREATE, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(listCategories([]));
                Notification('success', 'Tạo loại', res.data.message);
                return {
                    action: true,
                    message: res.data.message
                }
            }
        }catch(err){
            Notification('error', 'Tạo loại', err.response.data.message);
            return {
                action: false,
                message: err.response.data.message
            }
        }
    }
)

export const categoryById = createAsyncThunk(
    'categories/categoryById',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.CATEGORY_SHOW}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveCategoryById(res.data.data));
                return {
                    action: true,
                    data: res.data.data
                }
            }
        }catch(err){
            Notification('error', 'Tìm loại', err.response.data.message);
            return {
                action: false,
                message: err.response.data.message
            }
        }
    }
)

export const updateCategory = createAsyncThunk(
    'categories/updateCategory',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(`${endpoint.CATEGORY_UPDATE}/${data.id}`, data.data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(listCategories([]));
                Notification('success', 'Cập nhật loại', res.data.message);
                return {
                    action: true,
                    message: res.data.message
                }
            } 
        }catch(err){
            Notification('error', 'Cập nhật loại', err.response.data.message);
            return {
                action: false,
                message: err.response.data.message
            }
        }
    }
)

export const swapCategoriesOrder = createAsyncThunk(
    'categories/swapCategoriesOrder',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.post(endpoint.CATEGORY_SWAP_ORDER, data);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(listCategories([]));
                Notification('success', 'Đổi thứ tự danh mục', res.data.message);
                return {
                    action: true,
                    message: res.data.message
                }
            }
        }catch(err){
            Notification('error', 'Đổi thứ tự danh mục', err.response.data.message);
            return {
                action: false,
                message: err.response.data.message
            }
        }
    }
)

export const deleteCategory = createAsyncThunk(
    'categories/deleteCategory',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.CATEGORY_DELETE}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(listCategories([]));
                thunky.dispatch(getTrashList([]));
                Notification('success', 'Xóa danh mục', res.data.message);
                return {
                    action: true,
                    message: res.data.message
                }
            }
        }catch(err){
            Notification('error', 'Xóa danh mục', err.response.data.message);
            return {
                action: false,
                message: err.response.data.message
            }
        }
    }
)

//trash bin
export const getTrashList = createAsyncThunk(
    'categories/getTrashList',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(endpoint.CATEGORY_TRASH_BIN);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveTrashBin(res.data.data));
                return {
                    action: true,
                    message: res.data.message
                }
            }
        }catch(err){
            Notification('error', 'Danh sách rác', err.response.data.message);
            return {
                action: false,
                message: err.response.data.message
            }
        }
    }
)

export const restoreTrash = createAsyncThunk(
    'categories/restoreTrash',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.CATEGORY_TRASH_RESTORE}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                Notification('success', 'Hoàn tác danh mục', res.data.message);
                thunky.dispatch(getTrashList([]));
                thunky.dispatch(listCategories([]));
                return {
                    action: true,
                    message: res.data.message
                }
            }
        }catch(err){
            Notification('error', 'Hoàn tác danh mục', err.response.data.message);
            return {
                action: false,
                message: err.response.data.message
            }
        }
    }
)

export const deleteTrash = createAsyncThunk(
    'categories/deleteTrash',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(`${endpoint.CATEGORY_TRASH_DELETE}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                Notification('success', 'Xóa danh mục', res.data.message);
                thunky.dispatch(getTrashList([]))
                return {
                    action: true,
                    message: res.data.message
                }
            }
        }catch(err){
            Notification('error', 'Xóa danh mục', err.response.data.message);
            return {
                action: false,
                message: err.response.data.message
            }
        }
    }
)