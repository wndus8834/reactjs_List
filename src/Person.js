import React from 'react';
import './Person.css';

class Person extends React.Component {
  onTrClick(index) {
    this.props.onPersonSelect(index);
  }

  renderPerson(person, index) {
    return (
      <tr key={ person.id } onClick={ this.onTrClick.bind(this, index) } className="clickable">
          <td>{ person.id }</td>
          <td>{ person.name }</td>
          <td>{ person.age }</td>
          <td>{ person.department }</td>
          <td>{ person.enrolled? 'o':'x' }</td>
      </tr>
    );
  }

  render() {
    let persons = this.props.value;
    let tags=persons.map((person, index) => this.renderPerson(person, index))
    return (
      <table className="Person">
        <thead>
          <tr>
           <th>id</th><th>이름</th><th>나이</th><th>학과</th><th>등록여부</th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
    );
  }
}
export default Person;
