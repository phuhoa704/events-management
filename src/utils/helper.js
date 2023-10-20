export const checkPermissions = (permissions, pk) => {
    if(permissions.includes(pk)) {
        return true;
    } else {
        return false;
    }
}