import React from 'react';
import './Cartdetails.css';

function Cartdetails() {
    let intobj=[{actual_price: "840.00",
    author: "Arthur Hansen",
    description: "Tempore sed unde laboriosam qui consequatur rem.",
    details: "Incidunt enim veniam.     Id fugit odit ipsam et iusto esse est dignissimos eum.      Totam ut est nobis consequatur aut consequuntur.      Et nesciunt tempore.     Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n       \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas.        Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt volu"
    }
    ,
    {actual_price: "840.00",
    author: "Arthur Hansen",
    description: "Tempore sed unde laboriosam qui consequatur rem.",
    details: "Incidunt enim veniam.     Id fugit odit ipsam et iusto esse est dignissimos eum.      Totam ut est nobis consequatur aut consequuntur.      Et nesciunt tempore.     Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n       \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas.        Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt volu"
    }
];
        return (
        
            <div className="container">
            <div className="Cart">YOUR CART DETAILS</div>
            <div className="Coursecart">
                {intobj.map((value:any,index:number)=>{
                    return(
                        <div>{value.description}<span>{value.actual_price}</span></div>
                        
                    )
                })}
            </div>

            <hr className="hr-line" />

            <div className="total">
                <div className="value">
                    Total Cart Value <br />
                    <div className="Price">
                    {intobj.reduce((sum:number,val:any)=>{
                        return(sum+parseInt(val.actual_price))
                    },0)}
                    </div>
                </div>

                <div className="checkout">
                    
                        <button><span>GO TO CHECKOUT</span></button>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Cartdetails;
