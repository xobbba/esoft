import React from "react";
import "./flat.css"


class Flat extends React.Component{
  render() {

    const {
      id,
      floor,
      price,
      rooms,
      area_total,
      image,
      onClick
    } = this.props;

    return (
      <div className='flat'>
        <div className='flat_image'>
          <img src={image} alt="not found"/>
        </div>
        <div className='flat_head'>
          Стоимость: {price} ₽
        </div>
        <div className='flat_body'>
          <div className='info'>
            <div className='info-item'>{floor} эт.</div>
            <div className='info-item'>{rooms}-комн</div>
            <div className='info-item'>{area_total} м²</div>
          </div>
          <div className='info-button' onClick={(e) => {onClick(id)}}>Перейти</div>
        </div>
      </div>
    )
  }
}

export default Flat