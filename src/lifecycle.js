import React, { Component } from 'react';
import Sublifcycle from './Sublifcycle';

export default class Lifecycles extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         makanan : "Bakso",
         data : {},
         tampilanHalamanSub: false,
      }
    }


    componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((json) => {
        this.setState({
            data : json
        })
      })
    }

    ubahMakanan(value) {
        this.setState({
            makanan : value
        })
    }


    render() {
        // console.log("Data : ", this.state.data)
        return (
        <div>
            <h2>{ this.state.data.title }</h2>

            {this.state.tampilanHalamanSub && <Sublifcycle ubahMakanan={(value) => this.ubahMakanan(value)} />}

            <button onClick={() => this.setState({tampilanHalamanSub: !this.state.tampilanHalamanSub})}>Tampilkan Halaman Sub</button>
        </div>
        )
    }
}
