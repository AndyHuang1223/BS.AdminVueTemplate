import ApiRequest from '@/utilities/ApiRequest';

const api = {
    getAllShippers: '/api/Shipper/GetAllShippers',
    updateShipper: '/api/Shipper/UpdateShipper'
};

export function getAllShippers() {
    return ApiRequest.httpGet(api.getAllShippers);
}

export function updateShipper(shipperId, companyName, phone) {
    const request = {
        shipperId: shipperId,
        companyName: companyName,
        phone: phone
    };
    return ApiRequest.httpPut(api.updateShipper, request);
}
