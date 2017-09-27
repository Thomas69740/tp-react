import React from 'react';
import '../styles/index.scss';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExample from './tab'


export default class App extends React.Component {
  render() {
    return (
			<MuiThemeProvider>
				<div>
					<AppBar
						title="Mon app"
						iconClassNameRight="muidocs-icon-navigation-expand-more"
					/>
					<TableExample/>
				</div>
			</MuiThemeProvider>
    )
  }
}
