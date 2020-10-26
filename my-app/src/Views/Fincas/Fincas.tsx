import React, {Component} from 'react';
import Navbar from '../../Components/Navigation/navigation'
import ModalForm from "../../Components/Modal/modal";
import {Button, FormGroup, Label, Input} from 'reactstrap';
import {Formik, Form} from 'formik'


const Data = [
    {
        algo: 12323,
        algo1: 2,
        algo2: 3,
        algo3: 4,
        algo4: 4,
    }
]

const lisItems = Data.map((item, key) => (
    <>
        <th key={key} scope="row">{item.algo}</th>
        <td>{item.algo1}</td>
        <td>{item.algo2}</td>
        <td>{item.algo3}t</td>
        <td>{item.algo4}</td>
    </>
))


interface InitialValues {
    finquero: string;
    nombreFinca: string;
    departamento: string;
    municipio: string;
    coordinador: string;
    latitud: string;
    longitud: string;
    estado: boolean;
}

type MyState = {
    isVisible: false;
};

class Fincas extends Component <MyState> {

    initialValues: InitialValues = {
        finquero: '',
        nombreFinca: '',
        departamento: '',
        municipio: '',
        coordinador: '',
        latitud: '',
        longitud: '',
        estado: false,

    };

    state: MyState = {
        isVisible: false,
    };

    OpenModal = (visible: any) => {
        this.setState({isVisible: visible})
    }

    Formulario() {
        return (
            <div className="container">
                <Formik
                    initialValues={this.initialValues}
                    onSubmit={(values) => {
                        console.log({values});
                    }}>
                    <Form>
                        <div className="row">
                            <div className="col">
                                <Label>
                                    <strong>Finquero</strong>
                                </Label>
                                <Input type="select" name="select" id="finquero">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </div>
                            <div className="col">
                                <Label>
                                    <strong>Nombre de la Finca</strong>
                                </Label>
                                <Input type="text" name="select" id="nombreFinca"/>

                            </div>
                            <div className="w-100"><br/></div>
                            <div className="col">
                                <Label>
                                    <strong>Departamento</strong>
                                </Label>
                                <Input type="select" name="select" id="departamento">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </div>
                            <div className="col">
                                <Label>
                                    <strong>Municipio</strong>
                                </Label>
                                <Input type="select" name="select" id="municipio">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6 col-md-4">
                                <Label>
                                    <strong>Coordinador</strong>
                                </Label>
                                <Input type="select" name="select" id="coordinador">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input></div>
                            <div className="col-6 col-md-4">
                                <Label>
                                    <strong>Latitud</strong>
                                </Label>
                                <Input type="text" name="select" id="latitud"/>
                            </div>
                            <div className="col-6 col-md-4">
                                <Label>
                                    <strong>Longitud</strong>
                                </Label>
                                <Input type="text" name="select" id="longitud"/>
                            </div>
                        </div>
                        <div className="row mt-3 ml-5">
                            <div className="col-6">
                                <FormGroup check>
                                    <Label check>
                                        <strong>Estado</strong>
                                    </Label>
                                    <br/>
                                    <Input type="checkbox" id={'estado'}/>{' '}Activo
                                </FormGroup>
                            </div>
                            <div className="col-6 mt-2">
                                <Button color={'success'}>Guardar</Button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }

    render() {

        const {isVisible} = this.state

        return (
            <div>
                <Navbar/>
                <div className="container-sm mt-5">
                    <h4>FINCAS</h4>
                    <div className={'mt-2'}>
                        <div className={'float-left'}>
                            <form className="form-inline my-2 my-lg-0 ">
                                <input className="form-control mr-sm-2"
                                       type="text"
                                       placeholder="Codigo SAP o Nombre"/>
                                <button className="btn btn-secondary my-2 my-sm-0">Buscar</button>
                            </form>
                        </div>
                        <button type="button"
                                className="btn btn-primary float-right"
                                onClick={() => {
                                    this.OpenModal(true)
                                }}>Nuevo
                        </button>
                    </div>
                    <br/>
                    <br/>
                    <table className="table table-hover ">
                        <thead>
                        <tr>
                            <th scope="col">Codigo SAP</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Municipio</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="table-active">
                            {lisItems}
                        </tr>
                        </tbody>
                    </table>
                </div>
                <ModalForm
                    Form={this.Formulario()}
                    OnClose={() => this.OpenModal(false)}
                    Title={'Nueva Finca'}
                    isVisible={isVisible}/>
            </div>
        );
    }
}

export default Fincas;
