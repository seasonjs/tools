// 当天0:0:0
export const todayStart = new Date(new Date(new Date().toLocaleDateString()).getTime());
// 当天23:59:59
export const todayEnd = new Date(
    new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1,
);
