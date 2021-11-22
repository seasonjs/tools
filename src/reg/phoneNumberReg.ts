export const phoneNumberReg = /^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/;
//由于工信部放号段不定时，所以建议使用泛解析
export const phoneNumberXReg = /^([1][3,4,5,6,7,8,9])\d{9}$/;
export const telephoneNumberReg = /^(\(\d{3,4}-)|\d{3,4}-)?\d{7,8}$/;
