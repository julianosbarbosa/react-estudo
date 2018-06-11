import React, { Component } from 'react'
import Axios from 'axios'

const BASE_URL = 'http://enderecoApi.com/'


export default class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = { names: "", emails: [] }
    }

    componentWillMount() {
        Axios.get(`${BASE_URL}/cadastro`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { name, email } = this.state
        return (
            <div>
                Username: <input type="text" name="usrname" value={`${name}`}/>
                Email: <input type="text" name="usrname" value={`${email}`}/>
            </div>
        )
    }

}