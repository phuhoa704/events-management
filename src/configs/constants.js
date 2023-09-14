export const FILTER_BUTTON = [
    { id: 'ALL', name: 'Tất cả' },
    { id: 'PENDING', name: 'Chờ duyệt' },
    { id: 'APPROVE', name: 'Đã duyệt' },
]

export const CC_TOKEN = 'CC_TOKEN';
export const CC_TYPETOKEN = 'CC_TYPETOKEN';
export const CC_USER = 'CC_USER';

export const TRANSACTION_FILTER_BTN = [
    { id: 'ALL', name: 'Tất cả' },
    { id: 'DEPOSIT', name: 'Nạp tiền vào tài khoản' },
    { id: 'PAYUP', name: 'Thanh toán' },
]

export const GENDER = [
    {id: 1, name: 'Nam' },
    {id: 2, name: 'Nữ' },
    {id: 3, name: 'Khác' },
]

export const MOVE_TO_TRASH = {
    OKTEXT: 'Có',
    CANCELTEXT: 'Không',
    TITLE: 'Di chuyển vào thùng rác ?'
}

export const DELETE_POPCONFIRM = {
    OKTEXT: 'Có',
    CANCELTEXT: 'Không',
    TITLE: 'Bạn có chắc muốn xóa không ?'
}

export const RESTORE_POPCONFIRM = {
    OKTEXT: 'Có',
    CANCELTEXT: 'Không',
    TITLE: 'Bạn có chắc muốn hoàn tác danh mục ?'
}

export const FORM_MESSAGE = {
    PHONE: {
        REQUIRED: 'Vui lòng nhập số điện thoại',
        INVALID: 'Số điện thoại sai định dạng'
    },
    PASSWORD: {
        REQUIRED: 'Vui lòng nhập mật khẩu',
        INVALID: 'Mật khẩu có ít nhất 8 ký tự, bao gồm ít nhất một số'
    },
    EMAIL: {
        REQUIRED: 'Vui lòng nhập email',
        INVALID: 'Email không đúng định dạng'
    },
    NAME: {
        REQUIRED: 'Vui lòng nhập họ và tên'
    },
    IMAGE: {
        REQUIRED: 'Vui lòng chọn ảnh'
    },
    CATEGORY: {
        REQUIRED: 'Vui lòng nhập tên danh mục'
    }
}