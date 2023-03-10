import React from 'react';
import { Link } from "react-router-dom";



class ModelList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            models: []
        }
    }



    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({ models: data.models });


        }
    }


    async handleDelete(id) {
        const modelsUrl = `http://localhost:8100/api/models/${id}`
        const fetchConfig = {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(modelsUrl, fetchConfig);
        if (response.ok) {

            this.componentDidMount();
        }

    }




    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="offset-3 col-6"> */}
                    <div className="col">
                        <div className="shadow p-4 mt-4">
                            <h1>Models</h1>
                            <table className="table table-lite table-striped">
                                <thead className="table-dark">
                                    <tr>
                                        <td>Model</td>
                                        <td>Manufacturer</td>
                                        <td>Picture</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.models.map(model => {
                                        return (
                                            <tr key={model.id}>
                                                <td>{model.name}</td>
                                                <td>{model.manufacturer.name}</td>
                                                <td><img src={model.picture_url} className='img-thumbnail' alt="model" width="120px" height="120px" /></td>
                                                <td><button className="btn btn-dark" onClick={() => this.handleDelete(model.id)}>Delete</button></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div>
                                <Link to="/models/new"
                                    className="d-block fs-3 p-2 bg-success text-white text-center text-decoration-none">New Model</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    };
};

export default ModelList;
