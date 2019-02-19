import React from 'react';
import Person from './Person';
import PersonForm from './PersonForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    let persons= [
      { id: 1,name:'홍길동', age:18, department: '컴공', enrolled: true  },
      { id: 2,name:'전우치', age:19, department: '컴공', enrolled: true  },
      { id: 3,name:'임꺽정', age:20, department: '컴공', enrolled: true  }
    ];
    this.state = { persons: persons, selectedIndex: -1 };
  }

  onPersonSelect(index) {
    this.setState({ selectedIndex: index });
  }

  onPersonChange(newPerson) {
    let persons = this.state.persons.slice(0);
    persons[this.state.selectedIndex] = newPerson;
    this.setState({ persons: persons, selectedIndex: -1 });
  }

  onPersonChangeCancel() {
    this.setState({ selectedIndex: -1  });
  }

  

  render() {
    if (this.state.selectedIndex < 0)
      return <Person value={this.state.persons}
      onPersonSelect={ this.onPersonSelect.bind(this) } />
    else{
      let person = this.state.persons[this.state.selectedIndex];
      return <PersonForm value={ person }
      onChange={ this.onPersonChange.bind(this) } 
      onCancel={ this.onPersonChangeCancel.bind(this) } />;
    }
  }
}
export default App;
