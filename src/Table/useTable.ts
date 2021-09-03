import { useState } from 'react';
import { Item } from '../data';
import { TableColumn } from './TableColumn';
import useDecoratedColumns from './useDecoratedColumns';

const useTable = (data: Item[], columns: TableColumn<Item>[]) => {

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