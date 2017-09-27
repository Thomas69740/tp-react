import React from 'react';
import '../styles/index.scss';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const tableData = [
  {
    name: 'Mathématique',
    note: '5',
  },
  {
    name: 'Géographie',
    note: '10',
  },
  {
    name: 'Histoire',
    note: '12',
  },
  {
    name: 'Français',
    note: '13',
  },
  {
    name: 'Philosophie',
    note: '7',
  },
  {
    name: 'Anglais',
    note: '15',
  },
  {
    name: 'Allemand',
    note: '11',
  }
];

export default class TableExample extends React.Component {
	rowCheckbox = false;
	render() {
		return (
			<div>
				<Table>
					<TableHeader adjustForCheckbox={this.rowCheckbox} displaySelectAll={this.rowCheckbox}>
						<TableRow>
							<TableHeaderColumn>Matière</TableHeaderColumn>
							<TableHeaderColumn>Note</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={this.rowCheckbox}>
						{tableData.map(	(row, index) => (
							<TableRow key={index}>
								<TableRowColumn>{row.name}</TableRowColumn>
								<TableRowColumn>{row.note}</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		);
	}
}
