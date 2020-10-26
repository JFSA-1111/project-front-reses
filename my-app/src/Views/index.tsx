import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import Proveedores from '../Views/Proveedores/proveedores'
import Fincas from '../Views/Fincas/fincas'
import Novedades from '../Views/Novedades/novedades'
import Pedidos from '../Views/Pedidos/pedidos'
import Lotes from '../Views/Lotes/lotes'


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/proveedores'} component={Proveedores}/>
                <Route exact path={'/fincas'} component={Fincas}/>
                <Route exact path={'/novedades'} component={Novedades}/>
                <Route exact path={'/pedidos'} component={Pedidos}/>
                <Route exact path={'/lotes'} component={Lotes}/>
            </Switch>
        </BrowserRouter>

    )
}
