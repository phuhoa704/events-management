import { createAsyncThunk } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from '../../slices/Loading';
import axiosClient from '../../../configs/axios';
import { endpoint } from '../../../configs/apiUrl';
import { Notification } from '../../../components/Notification';
import { saveListPermissions } from '../../slices/Permissions';

export const getListPermissions = createAsyncThunk(
    'permissions/getListPermissions',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await axiosClient.get(endpoint.DECENT_PERMISSION_LIST);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveListPermissions(res.data.data));
                return {
                    action: true,
                    data: res.data.data
                }
            }
        }catch(err){
            Notification('error', 'Thông báo', err.response.data.message);
            return {
                action: false,
                data: [],
                message: ''
            }
        }
    }
)