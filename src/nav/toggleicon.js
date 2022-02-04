import React, { Component } from 'react';
import OverlayMenu from 'react-overlay-menu';
import ToggleContent from './toggleContent';
// import MyMenu from './components/ui/MyMenu';

class ToggleIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
 
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }
 
  render() {
    return (
      <div>
        <button type="button" style={{border:'transparent', background:'transparent'}} onClick={this.toggleMenu}><span class="inline-icon material-icons">sort</span></button>
        <OverlayMenu 
          open={this.state.isOpen} 
          onClose={this.toggleMenu}
        >
          {/* <MyMenu /> */}
          <ToggleContent/>
        </OverlayMenu>
      </div>
    );
  }
}

export default ToggleIcon;