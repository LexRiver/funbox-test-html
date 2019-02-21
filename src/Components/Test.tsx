import * as React from 'react';

export interface Props{
    name:string
    enthusiasmLevel?:number
}

interface State{
    name:string
}



export class Test extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {name: this.props.name+'!'}
    }

    render(){
        return (
            <div>Test[ name={this.state.name} <button onClick={this.onButtonClick} >button</button>]</div>
        )
    }
    onButtonClick = (e:any) => {
        console.log('e=', e)
        e.preventDefault()
        this.setState((prevState) => ({
            name: prevState.name+'!'
        }))
        //this.setState({name:this.state.name+'!'})
    }
}