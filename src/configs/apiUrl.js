export const API_URL = 'http://eventapi.dpcdev.click/';
export const ASSETS_URL = 'http://eventapi.dpcdev.click';

export const endpoint = {
    //AUTH
    AUTH_REGISTER: 'register',
    AUTH_LOGIN: 'login',
    AUTH_LOGOUT: 'logout',

    //DECENTRAILIZATION - PERMISSIONS
    DECENT_PERMISSION_LIST: 'admin/permissions',


    //CATEGORIES
    CATEGORY_LIST: 'admin/categories',
    CATEGORY_CREATE: 'admin/categories/store',
    CATEGORY_SHOW: 'admin/categories/show', //${id}
    CATEGORY_UPDATE: 'admin/categories/update', //${id}
    CATEGORY_SWAP_ORDER: 'admin/categories/update-order',
    CATEGORY_DELETE: 'admin/categories/delete', //${id}
    CATEGORY_TRASH_BIN: 'admin/categories/get-trash',
    CATEGORY_TRASH_RESTORE: 'admin/categories/restore', //${id}
    CATEGORY_TRASH_DELETE: 'admin/categories/delete-trash', //${id}
}