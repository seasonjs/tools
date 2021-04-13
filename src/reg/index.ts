const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const phoneNumber = /^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/;
// const url=/^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/;
const qq = /[1-9][0-9]{4,}/;
const ip = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)(\:[0-9]\d{0,4})$/;
export const Reg = {
  email,
  // url,
  phoneNumber,
  qq,
  ip,
};
