import React, { Component } from 'react';
import {
  Link, NavLink as LinkNav
} from 'react-router-dom';

import {
  Nav, NavItem, NavLink
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="site-header">
        <div className="header-banner">
          <div className="message">
            Text
          </div>
          <div className="ml-auto">
            <Nav>
              <NavItem>
                <NavLink tag={Link} to="/help">Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/logout" active>Logout</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="header-navigation">
          <Link className="brand" to="/">Logo Image</Link>
          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/menu1">Main Menu1</NavLink>
            </NavItem>
            <NavItem className="has-subnav">
              <NavLink href="#">Main Menu2</NavLink>
              <Nav className="subnav">
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu2/sub1">
                    <span>Sub Menu1</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu2/sub2">
                    <span>Sub Menu2</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </NavItem>
            <NavItem className="has-subnav">
              <NavLink href="#">Main Menu3</NavLink>
              <Nav className="subnav">
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu3/sub1">
                    <span>Sub Menu1</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu3/sub2">
                    <span>Sub Menu2</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu3/sub3">
                    <span>Sub Menu3</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu3/sub4">
                    <span>Sub Menu4</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu3/sub5">
                    <span>Sub Menu5</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu3/sub6">
                    <span>Sub Menu6</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu3/sub7">
                    <span>Sub Menu7</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </NavItem>
            <NavItem className="has-subnav">
              <NavLink href="#">Main Menu4</NavLink>
              <Nav className="subnav">
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu4/sub4-1">
                    <span>Sub Menu1</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={LinkNav} to="/menu4/sub4-2">
                    <span>Sub Menu2</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Header;
