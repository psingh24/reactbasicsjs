import React from 'react';


export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.age
        }
        
    }

    onMakeOlder() {
       
        this.setState({
            age: this.state.age + 3
        })
   
    }
    render() {
        return (
            <div>
           

                <div>
                    <h4>Hi my name is {this.props.name} and my age is {this.state.age}</h4>
                    <hr/>
                  <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me Older</button>

                </div>
            </div>
        )
    }
}



