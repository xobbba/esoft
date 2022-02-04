import React from "react";
import s from './flatInfo.module.css'
import Button from "../button/button";

class FlatInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      atciveImg: 1
    }

    this.button = this.button.bind(this)
  }

  button(value) {
    return () => this.setState({activeImg: value})
  }

  render () {

    const floorImage = 'https://cdn.esoft.digital/content/layouts//cluster/layouts/18/0c/e293cb975e87b72b6fba22106422e03e9f8b0c18.png'

    const {
      floor,
      price,
      rooms,
      areaTotal,
      areaKitchen,
      areaLive,
      image,
      hadleFlatInfo
    } = this.props;

    const {activeImg} = this.state

    return (
      <div className={s.flatInfo}>
        <div className={s.flatImg}>
          <img src={ activeImg === 2 ? floorImage : image} alt="not found"/>
        </div>
        <div className={s.additional}>
              <Button
                onClick={this.button(1)}
                active={activeImg === 1}
                title={"План квартиры"}
              />
            <Button
                  onClick={this.button(2)}
                  active={activeImg === 2}
                  title={"На этаже"}
            />
        </div>
        <div className={s.flatBody}>
          <div className={s.flatTitle}>Общая информация: </div>
          <div className={s.moreInfo}>
            <div className={s.flatMoreInfo}>Комнат: {rooms}</div>
            <div className={s.flatMoreInfo}>Этаж: {floor}</div>
            <div className={s.flatMoreInfo}>Площадь: {areaTotal} м²</div>
            <div className={s.flatMoreInfo}>Площадь кухни: {areaKitchen} м²</div>
            <div className={s.flatMoreInfo}>Жилая площадь: {areaLive} м²</div>
            <div className={s.flatMoreInfo}>Стоимость: {price} ₽</div>
          </div>
        </div>
        <div className={s.homePage} onClick={(e) => {hadleFlatInfo(null)}}>Назад</div>
      </div>
    )
  }
}

export default FlatInfo