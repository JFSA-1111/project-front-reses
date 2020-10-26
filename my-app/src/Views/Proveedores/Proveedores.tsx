import React, {Component} from 'react';
import Navbar from "../../Components/Navigation/navigation";
import ModalForm from "../../Components/Modal/modal";


const Data = [
    {
        algo: 12323,
        algo1: 2,
        algo2: 3,
        algo3: 4,
        algo4: 4,
    }
]

const lisItems = Data.map(item => (
    <>
        <th scope="row">{item.algo}</th>
        <td>{item.algo1}</td>
        <td>{item.algo2}</td>
        <td>{item.algo3}t</td>
        <td>{item.algo4}</td>
    </>
))


type MyState = {
    isVisible: false;
};

class Proveedores extends Component <MyState> {

    state: MyState = {

        isVisible: false,
    };

    OpenModal = (visible: any) => {
        this.setState({isVisible: visible})
    }


    Formulario() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="w-100"></div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                </div>
            </div>
        )
    }

    render() {

        const {isVisible} = this.state

        return (
            <div>
                <Navbar/>
                <div className="container-sm mt-5">
                    <h4>PROVEEDORES</h4>
                    <div className={'mt-2'}>
                        <div className={'float-left'}>
                            <form className="form-inline my-2 my-lg-0 ">
                                <input className="form-control mr-sm-2" type="text"
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
                            <th scope="col">Tipo</th>
                            <th scope="col">Municipio</th>
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
                    Title={'Nuevo Proveedor'}
                    isVisible={isVisible}/>
            </div>
        );
    }
}


export default Proveedores;
