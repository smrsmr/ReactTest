import React from 'react';
const themes = {
  light: {
    foreground: '#ffffff',
    background: 'yellow'
  },
  dark: {
    foreground: '#000000',
    background: 'red'
  }
};

const ThemeContext = React.createContext(
  themes.dark // 默认值
);

const ThemeButton = (props) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button {...props} style={{backgroundColor: theme.background}} />
		 )}
    </ThemeContext.Consumer>
  );
};

const Toolbar = (props) => {
  return (
    <ThemeButton onClick={props.changeTheme}>
		 change click
    </ThemeButton> 
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
  }
	toggle = () => {
	  this.setState(state => ({
	    theme: state.theme === themes.dark ? themes.light : themes.dark
	  }));
	  console.log(this.state.theme);
	}
	render() {
	  return (
	    <div>
			 <ThemeContext.Provider value={this.state.theme}>
			 		<Toolbar changeTheme={this.toggle} />
	      </ThemeContext.Provider>
	      <div>
				  <ThemeButton />
	      </div>
	    </div>
	  );
	}
}

export default App;