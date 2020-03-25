import React from 'react';
import { InputGroup, InputGroupAddon, Input, Table } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import './style.css';
import { evaluate, parse } from 'mathjs';
import api from '../../api/index';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';

const PlotlyComponent = createPlotlyComponent(Plotly);
const LinearNDD = (props) => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header_area">
                        <h1>Linear Interpolation</h1>
                        <h3 className="mt-2">Newton's Divided-Difference</h3>
                    </div>
                </div>
            </header>


            <h3 className="mt-4">Equation</h3>
            <InputGroup className="mt-4" size="lg">
                <InputGroupAddon addonType="prepend">Equation: </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">Xl:</InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">Xr:</InputGroupAddon>
                <Input />
            </InputGroup>

            <ButtonGroup>
                <Button className="mt-4" color="success" type="submit" >Submit</Button>
                <Button className="mt-4" color="warning" type="submit" >API</Button>
            </ButtonGroup>

            <h3 className="mt-4">Table</h3>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Iteration</th>
                        <th>X</th>
                        <th>f(X)</th>
                        <th>Error</th>
                    </tr>
                </thead>
            </Table>

            <h3 className="mt-4">Chart</h3>
            <div
                style={{ width: "100%", height: "550px", float: "middle" }}
            >
                <PlotlyComponent className="whatever"/>

            </div>
        </div>
    );
};

export default LinearNDD;