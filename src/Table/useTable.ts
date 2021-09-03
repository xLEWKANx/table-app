import { useState } from 'react';
import { TableColumn } from './TableColumn';
import useDecoratedColumns from './useDecoratedColumns';

const useTable = <D>(data: D[], columns: TableColumn<D>[]) => {

  const [dataState, setState] = useState(data);

  let sortedDataState = dataState;
  const { decoratedColumns, sortColumn } = useDecoratedColumns(columns)

  if (sortColumn && sortColumn.sortFn) {
    sortedDataState = [...sortedDataState].sort(sortColumn.sortFn)
  } else {
    sortedDataState = dataState;
  }

  return { rows: sortedDataState, columns: decoratedColumns, setRows: setState }
}

export default useTable