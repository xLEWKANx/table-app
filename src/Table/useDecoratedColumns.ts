import { useState } from 'react';
import { TableColumn } from './TableColumn';

export interface DecoratedColumn<D> extends TableColumn<D> {
  sort(): void;
}

const useDecoratedColumns = <D>(columns: TableColumn<D>[]) => {
  const [sortColumn, setSort] = useState<TableColumn<D> | null>(null);
  const decoratedColumns = columns.map(column => ({
    ...column,
    sort: function() {
      if (!sortColumn) {
        if (column.sortFn) return setSort(column)
      }
  
      return setSort(null)
    }
  } as DecoratedColumn<D>))

  return { decoratedColumns, sortColumn };
}

export default useDecoratedColumns;