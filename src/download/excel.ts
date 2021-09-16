import { saveAs } from 'file-saver';
import type {
  BookType,
  CellObject,
  Range,
  WorkBook,
  WorkSheet,
  WSKeys,
} from 'xlsx';
import XLSX from 'xlsx';

/**
 * 格式化数据 主要是处理转换过程的类型，目前只会导出一张表
 * @param data
 * @param option
 */
function arrayToSheet(
  data: WorkSheet,
  option?: { maxRange?: number },
): WorkSheet {
  const ws: WorkSheet = {};
  const range: Range = {
    // 开始行
    s: {
      // 最大列数默认最大10w条
      c: option?.maxRange ?? 100_000,
      // 最大行数默认最大10w条
      r: option?.maxRange ?? 100_000,
    },
    // 结束行
    e: {
      c: 0,
      r: 0,
    },
  };

  for (let R = 0; R !== data.length; ++R) {
    for (let C = 0; C !== data[R].length; ++C) {
      // 检查数据大小，过大不予以导出
      if (range.s.r > R) range.s.r = R;
      if (range.s.c > C) range.s.c = C;
      if (range.e.r < R) range.e.r = R;
      if (range.e.c < C) range.e.c = C;
      const cell: CellObject | WSKeys | any = {
        v: data[R][C],
      };
      // 如果为 nil 则不需要处理
      if (cell.v == null) continue;
      // 获取表格encode地址
      const ca = XLSX.utils.encode_cell({
        c: C,
        r: R,
      });

      if (typeof cell.v === 'number') cell.t = 'n';
      else if (typeof cell.v === 'boolean') cell.t = 'b';
      else if (cell.v instanceof Date) {
        cell.t = 'n';
        // cell.z = XLSX.SSF._Table[14];
        // cell.v = cell.v;
      } else cell.t = 's';
      ws[ca] = cell;
    }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  return ws;
}

function s2ab(str: string) {
  const buf = new ArrayBuffer(str.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i !== str.length; ++i) view[i] = str.charCodeAt(i) & 0xff;
  return buf;
}

function formatSheet(
  ws: WorkSheet,
  data: any[],
  merges: any[],
  autoWidth: boolean,
) {
  if (merges.length > 0) {
    if (!ws['!merges']) ws['!merges'] = [];
    merges.forEach((item) => {
      ws['!merges']?.push?.(XLSX.utils.decode_range(item));
    });
  }

  if (autoWidth) {
    /* 设置worksheet每列的最大宽度 */
    const colWidth = data.map((row) =>
      row.map(
        (
          val: {
            toString: () => {
              (): any;
              new (): any;
              charCodeAt: { (arg0: number): number; new (): any };
              length: number;
            };
          } | null,
        ) => {
          /* 先判断是否为null/undefined */
          if (val == null) {
            return {
              wch: 10,
            };
          }
          if (val.toString().charCodeAt(0) > 255) {
            /* 再判断是否为中文 */
            return {
              wch: val.toString().length * 2,
            };
          }
          return {
            wch: val.toString().length,
          };
        },
      ),
    );
    /* 以第一行为初始值 */
    const result = colWidth[0];
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j].wch < colWidth[i][j].wch) {
          result[j].wch = colWidth[i][j].wch;
        }
      }
    }
    ws['!cols'] = result;
  }
  return ws;
}

type exportExcelProps = {
  header?: any[];
  data: any[];
  filename?: string;
  merges: any;
  autoWidth: boolean;
  bookType?: BookType;
};

/**
 * @description.ZH_CN 根据后台数据,生成为EXCEL并下载
 * @param  { exportExcelProps } param
 */

export function downLoadExcel(param: exportExcelProps) {
  const {
    header,
    data,
    filename,
    merges = [],
    autoWidth,
    bookType = 'xlsx',
  } = param;
  // 初始化 excel WorkBook
  const wb: WorkBook = {
    SheetNames: [],
    Sheets: {},
  };

  const item = data[0];
  if (item instanceof Array) {
    if (header && header.length) {
      data.unshift(header);
    }
    const ws_name = 'Sheet1';
    let ws = arrayToSheet(data);
    ws = formatSheet(ws, data, merges, autoWidth ?? true);
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
  } else {
    for (let i = 0; i < data.length; i++) {
      const { sheetName, sheetData } = data[i];
      if (header && header.length) {
        sheetData.unshift(header);
      }
      const sName = `${i + 1}.${sheetName}`;
      let ws = arrayToSheet(sheetData);
      ws = formatSheet(ws, sheetData, merges, autoWidth ?? true);
      wb.SheetNames.push(sName);
      wb.Sheets[sName] = ws;
    }
    console.log(wb.SheetNames);
  }

  const wbout = XLSX.write(wb, {
    bookType,
    bookSST: false,
    type: 'binary',
  });
  saveAs(
    new Blob([s2ab(wbout)], {
      type: 'application/octet-stream',
    }),
    `${filename ?? 'excel-list'}.${bookType ?? 'xlsx'}`,
  );
}
