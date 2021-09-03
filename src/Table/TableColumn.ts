export type SortFn<D> = (b: D, a: D) => number;

export interface TableColumnProps {
  label: string;
}

export interface TableColumnHeaderParams<T = TableColumnProps> {
  config: T;
}

export interface TableColumnBodyParams<T extends TableColumnProps, D> {
  item: D;
  index: number;
  config: T;
}

export abstract class TableColumn<D> implements TableColumnProps {
  abstract HeaderComponent: React.ComponentType<any>;
  abstract BodyComponent: React.ComponentType<any>;

  label: string = '';

  sortFn: SortFn<D> | null = null;
}
