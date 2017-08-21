import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';


class Test extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-md-10">
                    <Header/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <Home  name="Prabhdeep" age={27}/>
                 
                </div>
            </div>
            
        </div>)
    }
}

ReactDOM.render(<Test/>, document.getElementById('app'))