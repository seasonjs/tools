import { insertStyle } from '@/dom/insertStyle';

export function useInsertStyle(id: string, style: string) {
  return insertStyle(id, style);
}
