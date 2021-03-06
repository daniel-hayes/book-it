import React from 'react';

class Dropdown extends React.Component {
  state = {
    showDropdown: false,
    selection: ''
  };

  toggleDropdown() {
    return !this.state.showDropdown;
  }

  handleClick = () => {
    this.setState({ showDropdown: this.toggleDropdown() });
  };

  handleItemSelect = e => {
    const { stateCallback } = this.props;
    const selection = e.currentTarget.innerHTML;

    this.setState(
      {
        selection,
        showDropdown: this.toggleDropdown()
      },
      () => {
        if (stateCallback) {
          stateCallback(selection);
        }
      }
    );
  };

  render() {
    const { selection, showDropdown } = this.state;
    const { children, items } = this.props;

    return (
      <div className="Dropdown">
        {children({ handleClick: this.handleClick, selection })}
        {showDropdown && (
          <div className="Dropdown-list_wrapper">
            <ul className="Dropdown-list">
              {items.map((itemValue, i) => (
                <li onClick={this.handleItemSelect} className="Dropdown-list_item" key={i}>
                  {itemValue}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
