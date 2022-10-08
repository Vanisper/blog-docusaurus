export type tipPage = "blog" | "doc" | "about" | "link";
export interface tipItem {
  id: string;
  enabled?: boolean;
  content: string;
  color?: "info" | "secondary" | "success" | "warning" | "danger";
  pages?: Array<tipPage> | "all";
  closeable?: boolean;
  closeTime?: number;
  center?: boolean;
}
