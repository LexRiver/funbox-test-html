import React, {Component} from 'react';
import './App.scss';
import { Product } from './Components/Product';
import { ProductList } from './Components/ProductList';


class App extends Component {
  public render() {
    return (
      <div className="app">
        <h1>Ты сегодня покормил кота?</h1>
        <ProductList>
            <Product 
                header="Нямушка" 
                subHeader="с фуа-гра" 
                text={"10 порций\nмышь в подарок"} 
                weight="0,5" 
                selectedSubText="Печень утки разварная с артишоками."
                disabledSubText="Печалька, с фуа-гра закончился.."
                isDisabled={false}
                />
            <Product 
                header="Нямушка" 
                subHeader="с рыбой" 
                text={"40 порций\n2 мыши в подарок"} 
                weight="2" 
                selectedSubText="Головы щучьи с чесноком да свежайшая сёмгушка."
                disabledSubText="Печалька, с рыбой закончился."
                isSelected={true}
                />
            <Product 
                header="Нямушка" 
                subHeader="с курой" 
                text={"100 порций\n5 мышей в подарок\nзаказчик доволен"} 
                weight="5" 
                selectedSubText="Филе из цыплят с трюфелями в бульоне."
                disabledSubText="Печалька, с курой закончился."
                isDisabled={true}
                />
        </ProductList>
      </div>
    );
  }
}

export default App;
