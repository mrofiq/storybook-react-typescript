import * as React from 'react';
import { disconnect } from 'cluster';
import { number } from 'prop-types';

interface IProps {}
interface IState {price:number, discount:number, sell_price:number}

export default class Calculator extends React.Component<IProps, IState> {
    constructor(props:IProps){
        super(props);
        this.state = {price:100,discount:10,sell_price:90};
    }

    updatePrice = (event:React.ChangeEvent<HTMLInputElement>) => {
        let price = +event.target.value;
        let sell_price = price - (price*0.01*this.state.discount);
        this.setState({price,sell_price});
    }
    render() {
        return (
            <div>
                <div>Price <input value={this.state.price} onChange={this.updatePrice}/></div>
                <div>Discount <input value={this.state.discount}/>%</div>
                <div>Sell price <input value={this.state.sell_price}/></div>
            </div>
        )
    }
}
