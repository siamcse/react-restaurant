import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

const DishDetails = (props) => {
    const {name,img,dsc,price} = props.dish;
    return (
        <div>
            <Card top style={{margin:"20px"}} className=''>
                <CardImg src={img}/>
                <CardTitle className='text-center pt-4' tag="h5">{name}</CardTitle>
                <p className='text-center'>Price: {price}</p>
                <CardBody>{dsc}</CardBody>
            </Card>
        </div>
    );
};

export default DishDetails;