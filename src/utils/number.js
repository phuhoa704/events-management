export const formatNumberToMoney = (number) => {
    if(number) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    }
}