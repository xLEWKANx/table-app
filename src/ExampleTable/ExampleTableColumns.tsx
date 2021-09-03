import { Item } from '../data';
import { TableColumn, TableColumnBodyParams, TableColumnHeaderParams } from '../Table';
import { DecoratedColumn } from '../Table/useDecoratedColumns';

export interface ActionTableColumn {
  action(item: Item): void;
}

type TableColumnItem = TableColumn<Item>;

type NameColumnBodyParams = TableColumnBodyParams<TableColumnItem, Item>
type NameColumnHeaderParams = TableColumnHeaderParams<DecoratedColumn<Item>>

 const ActionColumnBody: React.ComponentType<TableColumnBodyParams<ActionTableColumn, Item>> = ({ item, config }) => {
  return <button onClick={() => config.action(item)}>{config.label}</button>
}

 const ActionColumnHeader: React.ComponentType<TableColumnHeaderParams> = ({ config }) => {
  return <>{config.label}</>
}

 const NameColumnBody: React.ComponentType<NameColumnBodyParams> = ({ item }) => {
  return <>{item.name}</>
}

 const NameColumnHeader: React.ComponentType<NameColumnHeaderParams> = ({ config }) => {
  return <button onClick={config.sort}>{config.label}</button>
}

 const CountColumnBody: React.ComponentType<TableColumnBodyParams<TableColumnItem, Item>> = (props) => {
  return <>{props.index + 1}.</>
}

const CountColumnHeader: React.ComponentType<TableColumnHeaderParams> = () => <></>;

export class CountColumn extends TableColumn<Item> {
  public BodyComponent = CountColumnBody;
  public HeaderComponent = CountColumnHeader;

  constructor(public label: string) {
    super()
  }
}

export class NameTableColumn extends TableColumn<Item> {
  public BodyComponent = NameColumnBody;
  public HeaderComponent = NameColumnHeader;

  constructor(public label: string) {
    super()
  }

  sortFn = (a: Item, b: Item) => {
    return b.name.localeCompare(a.name)
  }
}

export class ActionTableColumn extends TableColumn<Item> {
  public BodyComponent = ActionColumnBody;
  public HeaderComponent = ActionColumnHeader;

  constructor(public label: string) {
    super();
  }

  action = (item: Item) => {
    alert(`${item.name} ${this.label}!`);
  }
}