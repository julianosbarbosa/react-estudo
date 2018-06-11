import React from 'react'
import Cadastro from './cadastro.service'


export default props=>(
    <div>
        <h1>Teste Cadastro</h1>
        <div className="box box-default">
            <div className="box-header with-border">
                <h3 className="box-title">Select2</h3>

                <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove"></i></button>
                </div>
            </div>

            <div className="box-body">
                <Cadastro/>
            </div>

            <div className="box-footer">

            </div>
        </div>
    </div>
)