export const getImageUrl = (name) => {
    return new URL(`/src/assets/images/${name}`, import.meta.url).href;
};
export const getImageUrlByUrl = (url) => {
    return new URL(`/src${url}`, import.meta.url).href;
};

/**
 * 是否是空json对象
 * @param obj
 * @returns {boolean}
 */
export function isEmptyObject(obj) {
    return !obj || Object.keys(obj).length === 0;
}

// 验证输入是否为空
export const checkLen = (str, len = 0) => {
    return String(str).trim().length <= len;
};

/* 11位手机号 */
export const validateChinaMobile = (str) => {
    const reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    return reg.test(str);
};
