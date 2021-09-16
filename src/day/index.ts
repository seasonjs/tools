// 某天开始0:0:0
export const somedayStart = (day?: Date) =>
  new Date(
    new Date(new Date(day ?? new Date()).toLocaleDateString()).getTime(),
  );
// 某天结束
export const somedayEnd = (day?: Date) =>
  new Date(
    new Date(new Date(day ?? new Date()).toLocaleDateString()).getTime() +
      24 * 60 * 60 * 1000 -
      1,
  );
// 当天0:0:0
export const todayStart = somedayStart();
// 当天23:59:59
export const todayEnd = somedayEnd();
