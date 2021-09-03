import data from "./data.json";
import useTable from './Table/useTable';
import { ActionTableColumn, CountColumn, NameTableColumn } from './ExampleTable/ExampleTableColumns';
import GenericTable from './GenericTable';

const count = new CountColumn('');
const nameColumn = new NameTableColumn('name');
const actionColumn = new ActionTableColumn('action');
const anotherActionColumn = new ActionTableColumn('another action');

function App() {
  const { rows: rows1 , columns: columns1 } = useTable(data, [count, nameColumn, actionColumn, anotherActionColumn])
  const { rows: rows2 , columns: columns2 } = useTable(data, [count, nameColumn, actionColumn])

  return (
    <div>
      <GenericTable rows={rows1} data={data} columns={columns1} />
      <GenericTable rows={rows2} data={data} columns={columns2} />
    </div>
  );
}

export default App;
