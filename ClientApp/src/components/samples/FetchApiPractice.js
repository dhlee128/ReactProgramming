import React, {Component} from 'react';

class FetchApiPractice extends Component{
    constructor(){
        console.log('constructor');
        super();
        this.state = {forecasts: [], loading: true};
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.setState({loading: true});
        fetch("/weatherforecast").then(response => response.json())
            .then(data => { this.setState({forecasts: data, loading: false}); });
    }

    static displayData(forecasts){
        console.log('displayData');
        return(
            <table className="table table-bordered">
                <thead>
                    <tr><td>날짜</td><td>요약</td></tr>
                </thead>
                <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}  
                </tbody>
            </table>
        );
    }

    render(){
        console.log('render');
        let contents = this.state.loading ? <p>loading</p> : FetchApiPractice.displayData(this.state.forecasts);
        return (
            <>
                {contents}
            </>
        );
    }
}

export default FetchApiPractice;