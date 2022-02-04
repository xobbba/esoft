import React from "react";
import s from './flatsFilter.module.css'
import Button from "../button/button";

class FlatsFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      price: {
        min: null,
        max: null
      },
      area_total: {
        min: null,
        max: null
      }
    }

    this.handleRoomChange = this.handleRoomChange.bind(this)
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
  }

  handleRoomChange(room) {
      let {rooms} = this.state
      if (rooms.includes(room)) {
        rooms = rooms.filter(el => el !== room)
      } else {
        rooms.push(room)
      }

      this.setState({rooms})
  }

  handleSubmitButton() {
    return () => {
      const {onSubmit} = this.props
      onSubmit(this.state)
    }
  }

  handleChangePriceMin = e => {
    const {price} = this.state
    price.min = parseInt(e.currentTarget.value)
    this.setState({...price})
  }

  handleChangePriceMax = e => {
    const {price} = this.state
    price.max = parseInt(e.currentTarget.value)
    this.setState({price})
  }

  handleChangeAreaMin = e => {
    const {area_total} = this.state
    area_total.min = parseFloat(e.currentTarget.value)
    this.setState({...area_total})
  }

  handleChangeAreaMax = e => {
    const {area_total} = this.state
    area_total.max = parseFloat(e.currentTarget.value)
    this.setState({...area_total})
  }

  render() {

    const {onSubmit} = this.props

    const {
      rooms,
      price,
      area_total
    } = this.state


    return(
      <div className={s.flatsFilter}>
        <h3 className={s.filterHead}>Выбрать квартиру:</h3>
        <div className={s.filterBody}>
          <div className={s.filerRooms}>
            <div className={s.filterTitle}>Комнатность</div>
            <div className={s.apartmentRooms}>
              <Button
                onClick={() => this.handleRoomChange(1)}
                active={rooms.includes(1)}
                title={"1"}
              />
              <Button
                onClick={() => this.handleRoomChange(2)}
                active={rooms.includes(2)}
                title={"2"}
              />
              <Button
                onClick={() => this.handleRoomChange(3)}
                active={rooms.includes(3)}
                title={"3"}
              />
            </div>
          </div>
          <div className={s.filterPrice}>
            <div className={s.filterTitle}>Стоимость, ₽</div>
            <div className={s.apartmentPrice}>
              <span className={s.apartmentPrice_frame}>
                <span className={s.apartmentPrice_frame_text}>
                  <input type="number" placeholder={'От'} className={s.filterInput} onChange={this.handleChangePriceMin} value={price.min}/>
                </span>
              </span>
              <span className={s.apartmentPrice_frame}>
                <span className={s.apartmentPrice_frame_text}>
                  <input type="number" placeholder={'До'} className={s.filterInput} onChange={this.handleChangePriceMax} value={price.max}/>
                </span>
              </span>
            </div>
          </div>
          <div className={s.filterArea}>
            <div className={s.filterTitle}>Площадь, м²</div>
            <div className={s.apartmentArea}>
              <span className={s.apartmentArea_frame}>
                <span className={s.apartmentArea_frame_text}>
                  <input type="number" placeholder={'От'} className={s.filterInput} onChange={this.handleChangeAreaMin} value={area_total.min}/>
                </span>
              </span>
              <span className={s.apartmentArea_frame}>
                <span className={s.apartmentArea_frame_text}>
                  <input type="number" placeholder={'До'} className={s.filterInput} onChange={this.handleChangeAreaMax} value={area_total.max}/>
                </span>
              </span>
            </div>
          </div>
        {/*</div>*/}
        {/*<div className={s.filterButton}>*/}
          <Button
            onClick={() => onSubmit(this.state)}
            active={false}
            title={"Применить"}
          />
        </div>
      </div>
    )
  }
}

export default FlatsFilter