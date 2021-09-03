import { TableColumn } from './Table/TableColumn';

const ExampleTable: React.ComponentType<{ 
  rows: unknown[];
  data: unknown[];
  columns: TableColumn<any>[]
}> = ({ rows, columns, data }) => {

  return <table>
    <thead>
      <tr>{
        columns.map(column => (
          <th key={column.label}>
            <column.HeaderComponent config={column} />
          </th>
        ))
      }</tr>
    </thead>
    <tbody>
      {rows.map((row, index) => {
        return (
          <tr key={index}>{
            columns.map((column, i) => {
              return (
                <td key={column.label}>
                  <column.BodyComponent item={row} config={column} index={data.indexOf(row)} />
                </td>
              )
            })
          }</tr>
        )
      })}
    </tbody>
  </table>
}

export default ExampleTable;