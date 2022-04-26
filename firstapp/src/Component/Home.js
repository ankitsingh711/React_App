import React,{Component,Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import Product from './productDisplay'

class Home extends Component {
    constructor(){
        super()

        this.state={
            productData:JSON
        }
    }

    filterProduct = (keyword) => {
        let output = this.state.productData.filter((item) =>{
            return item.name.toLowerCase().indexOf(keyword.toLoweCase)>-1
        })
        this.setState({filterData:output})
    }

    render(){
        return(
            <Fragment>
                <Header userText={(data) =>{this.filterProduct(data)}}/>
                <Product allData={this.state.productData}/>
                <Footer developed='Developed By'/>
            </Fragment>
        )
    }
}

export default Home;























