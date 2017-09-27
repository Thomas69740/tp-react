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
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

var tableData = [
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

const buttonStyle = {
  marginRight: 20,
  marginTop: 5,
  right: 20,
  position: 'fixed'
};

const divStyle = {
	marginLeft: 10
};

export default class TableExample extends React.Component {
	rowCheckbox = false;
	constructor() {
		super();
		this.state = {tableData : tableData, matiereInput : "", noteInput : ""};
	};

	handleMatiere(e) {
		this.state.matiereInput = e.target.value;
		this.forceUpdate();
	};

	handleNote(e) {
		this.state.noteInput = e.target.value;
		this.forceUpdate();
	};

	addLine() {
		this.state.tableData.push({'name': this.state.matiereInput, 'note': this.state.noteInput});
		this.state.matiereInput = "";
		this.state.noteInput = "";
		this.forceUpdate();
	};

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
						{this.state.tableData.map(	(row, index) => (
							<TableRow key={index}>
								<TableRowColumn>{row.name}</TableRowColumn>
								<TableRowColumn>{row.note}</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<div style={divStyle}>
					<FloatingActionButton mini={true} style={buttonStyle} onClick={this.addLine.bind(this)}>
						<ContentAdd />
					</FloatingActionButton>

					<TextField value={this.state.matiereInput} onChange={this.handleMatiere.bind(this)} hintText="Matière" floatingLabelText="Matière"/>
					<TextField value={this.state.noteInput} onChange={this.handleNote.bind(this)} hintText="Note" floatingLabelText="Note"/>
				</div>
			</div>
		);
	}
}
