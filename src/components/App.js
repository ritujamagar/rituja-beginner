import React from 'react';
import User from './User';
import axios from 'axios';
import Loading from './Loading';



class App extends React.Component{
state={data: [], loading: true};
componentDidMount = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    this.setState({data: response.data, loading:false});
}



    render(){
        if(this.state.loading){
            return <Loading />;
        }
        return(
            <div className="ui container">
                <User data={this.state.data} />
            </div>
        );
    }
}

export default App;
