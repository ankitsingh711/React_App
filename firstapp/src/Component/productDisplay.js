import React from "react";
import './productDisplay.css'

const Product = (props)=>{
    console.log(props)

    const thisProduct = props.allData.map((item) => {
        return(
            <div className='col'>
                <div className='card'>
                    <img src={item.image} className='card-img-top'/>
                    <div className="card-body">
                        <h5 className='card-title'>{item.name}</h5>
                        <p className='card-text'>Rs.{item.cost}</p>
                        <p className='card-text'>Use: {item.uses}</p>
                        <p className='card-text'>Discount: {item.discount}</p>
                    </div>
                </div>
            </div>
        )
    })


    return(
        <div className="row row-cols-1 row-cols-4 g-4">
            {thisProduct}
        </div>
    )
}

export default Product;