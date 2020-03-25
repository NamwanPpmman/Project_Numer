import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Root of Equations</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/Bisection">Bisection Method</DropdownItem>
                <DropdownItem href="/Falseposition">False-Position Method</DropdownItem>
                <DropdownItem href="/Onepoint">One-Point Iteration Method</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Linear Algebraic</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/Cramer">Cramer's Rule</DropdownItem>
                <DropdownItem href="/GaussJordan">Gauss-Jordan Method</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Interpolation & Extrapolation</DropdownToggle>
              <DropdownMenu right>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>Newton's Divided-Differences</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/LinearNDD">Linear Interpolation</DropdownItem>
                            <DropdownItem href="/QuadNDD">Quadratic Interpolation</DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>Lagrange Polynomials</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/LinearLG">Linear Interpolation</DropdownItem>
                            <DropdownItem href="/QuadLG">Quadratic Interpolation</DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>Spline Interpolations</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/LinearSp">Linear Spline</DropdownItem>
                            <DropdownItem href="/QuadSp">Quadratic Spline</DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
                </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Regression</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/Linear">Linear Regression</DropdownItem>
                <DropdownItem href="/Poly">Polynomial Regression</DropdownItem>
                <DropdownItem href="/Multi">Multiple Linear Regression</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Integration Techniques</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/Trap">Trapzoidal's Rule</DropdownItem>
                <DropdownItem href="/ComTrap">Composite Trapzoidal's Rule</DropdownItem>
                <DropdownItem href="/Simpson">Simpson's Rule</DropdownItem>
                <DropdownItem href="/ComSimp">Composite Simpson's Rule</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>Numerical Differentiation</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/FW">Forward Divided-Differences O(h)</DropdownItem>
                <DropdownItem href="/FW2">Forward Divided-Differences O(h2)</DropdownItem>
                <DropdownItem href="/BW">Backward Divided-Differences O(h)</DropdownItem>
                <DropdownItem href="/BW2">Backward Divided-Differences O(h2)</DropdownItem>
                <DropdownItem href="/CT">Central Divided-Differences O(h2)</DropdownItem>
                <DropdownItem href="/CT4">Central Divided-Differences O(h4)</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;