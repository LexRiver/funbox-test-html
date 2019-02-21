import * as React from 'react';
import './Product.scss';

export interface Props{
    header:string
    subHeader:string
    text:string
    weight:string
    selectedSubText:string
    disabledSubText:string
    isSelected?:boolean
    isDisabled?:boolean
}

interface State{
    isHovered: boolean
    isSelected: boolean
    isDisabled: boolean
}

export class Product extends React.Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {
            isSelected: props.isSelected || false,
            isDisabled: props.isDisabled || false,
            isHovered: false,
        }
    }

    render(){
        return (
            
            <div className={`product-container ${this.state.isSelected?'selected':''} ${this.state.isDisabled?'disabled':''} ${this.state.isHovered?'hover':''}`}>
                <div className="product-border">
                    <div className="product" onClick={this.onClick} onMouseOut={this.onMouseOut}>
                        <div className="product-above-header">{this.state.isHovered && this.state.isSelected ? "Котэ не одобряет?" : "Сказочное заморское яство"}</div>
                        <div className="product-header">{this.props.header}</div>
                        <div className="product-sub-header">{this.props.subHeader}</div>
                        <div className="product-text">{this.props.text}</div>
                        <div className="product-weight">
                            <div className="number">{this.props.weight}</div>
                            <div className="label">кг</div>
                            </div>
                    </div>
                </div>

                <div className="product-sub-text">{this.renderSubText()}</div>
            </div>
        )
    }

    renderSubText(){
        if(this.state.isDisabled) return this.props.disabledSubText
        if(this.state.isSelected) return this.props.selectedSubText
        return <>Чего сидишь? Порадуй котэ, <a href="" onClick={this.onClick}>купи.</a></>
    }

    onClick = (e:React.MouseEvent) => {
        e.preventDefault()
        this.setState((prevState) => ({
            isSelected: !prevState.isSelected,
            isHovered: false
        }))
    }

    onMouseOut = () => {
        this.setState({isHovered: true})
    }
}