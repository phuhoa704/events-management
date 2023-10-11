export const API_URL = 'http://eventapi.dpcdev.click/';
export const ASSETS_URL = 'http://eventapi.dpcdev.click';

export const endpoint = {
    //AUTH
    AUTH_REGISTER: 'register',
    AUTH_LOGIN: 'login',
    AUTH_LOGOUT: 'logout',

    //MYPROFILE
    MYPROFILE: 'admin/profile',
    MYPROFILE_UPDATE_AVATAR: 'upload-avatar',
    MYPROFILE_CHANGE_PASSWORD: 'change-password',

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

    //STAFFS
    STAFFS_LIST: 'admin/staffs',
    STAFFS_CREATE: 'admin/staffs/store',
    STAFFS_SHOW: 'admin/staffs/show', //${id}
    STAFFS_UPDATE: 'admin/staffs/update', //${id}
    STAFFS_DELETE: 'admin/staffs/delete', //${id}

    //ROLES
    ROLES_LIST: 'admin/roles',
    ROLES_CREATE: 'admin/roles/store',
    ROLES_SHOW: 'admin/roles/show', //${id}
    ROLES_UPDATE: 'admin/roles/update', //${id}
    ROLES_DELETE: 'admin/roles/delete', //${id}
    ROLES_TRASH_BIN: 'admin/roles/get-trash',
    ROLES_TRASH_RESTORE: 'admin/roles/restore', //${id}
    ROLES_TRASH_DELETE: 'admin/roles/delete-trash', //${id}
}