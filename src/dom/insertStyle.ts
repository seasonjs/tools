const prefix = 'dynamic-inserted-style-';

/**
 * 全局插入css
 * */
export function insertStyle(
  id: string,
  cssText: string,
): HTMLStyleElement | null {
  let style: HTMLStyleElement | null = null;
  if (typeof document === 'object') {
    style = document.getElementById(prefix + id) as HTMLStyleElement;
    if (!style) {
      style = document.createElement('style');
      style.id = prefix + id;

      // IE8/9 can not use document.head
      document.getElementsByTagName('head')[0].appendChild(style);
    }
    if (style.textContent !== cssText) {
      style.textContent = cssText;
    }
  }
  return style;
}
