import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
    const {dish,
        dish:{name,img},
        dishSelect
    } = props;
    return (
        <div style={{margin:"20px"}}>
            <Card>
                <CardImg 
                src={img}
                style={{opacity: "0.7"}}/>
                <CardImgOverlay>
                    <CardTitle 
                    className='text-center text-2xl' tag='h4' 
                    style={{cursor:"pointer"}}
                    onClick={()=>dishSelect(dish)}>
                        {name}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default MenuItem;