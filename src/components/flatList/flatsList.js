import React from "react";
import Flat from "../flat/flat";
import {getFlats, getCountPages} from "../../flatsObj";
import './flatList.css'
import Pagination from "react-js-pagination";
import FlatInfo from "../flatInfo/flatInfo";
import FlatsFilter from "../filter/flatsFilter";
import Button from "../button/button";

class FlatsList extends React.Component {
    constructor(props) {
        super(props);
        const allFlats = getFlats().sort((flat1, flat2) => flat1.price - flat2.price)
        this.state = {
            count: allFlats.length,
            activePage: 1,
            allFlats,
            flats: allFlats.slice(0, 9),
            activeFlat: null,
            activeSort: 'price'
        }

        this.getFlatsOnPage = this.getFlatsOnPage.bind(this)
        this.handleFlatInfo = this.handleFlatInfo.bind(this)
        this.handleFilterChanged = this.handleFilterChanged.bind(this)
        this.handleSort = this.handleSort.bind(this)
    }

    getFlatsOnPage(page) {
        const {allFlats, count} = this.state
        if (page > Math.ceil(count / 9)) {
            this.setState({flats: []})
            return
        }
        this.setState({
            flats: allFlats.slice((page - 1) * 9, page * 9),
            activePage: page
        })
    }


    handleFlatInfo(flatId) {
        this.setState({
            activeFlat: flatId
        })
    }

    handleFilterChanged(options) {

        let allFlats = getFlats()

        if (options.price.min) {
            allFlats = allFlats.filter(flat => flat.price >= options.price.min)
        }
        if (options.price.max) {
            allFlats = allFlats.filter(flat => flat.price <= options.price.max)
        }
        if (options.rooms.length !== 0) {
            allFlats = allFlats.filter(flat => options.rooms.includes(flat.rooms))
        }
        if (options.areaTotal.min) {
            allFlats = allFlats.filter(flat => flat.areaTotal >= options.areaTotal.min)
        }
        if (options.areaTotal.max) {
            allFlats = allFlats.filter(flat => flat.areaTotal <= options.areaTotal.max)
        }

        this.setState({
            allFlats,
            count: allFlats.length,
            activePage: 1,
            flats: allFlats.slice(0, 9)
        })
    }
    
    handleSort(option) {
        let allFlats = getFlats();
        if (option === 'price') {
            allFlats = allFlats.sort((flat1, flat2) => flat1.price - flat2.price)
        }
        if (option === 'area') {
            allFlats = allFlats.sort((flat1, flat2) => flat2.areaTotal - flat1.areaTotal)
        }

        this.setState({
            allFlats,
            activeSort: option,
            activePage: 1,
            count: allFlats.length,
            flats: allFlats.slice(0, 9)
        })
    }

    render() {

        const {activeSort} = this.state;

        if (!this.state.activeFlat) {

            return (

              <div className='flatList-wrapper'>
                  <div className='flatsFilter'>
                      <FlatsFilter
                        onSubmit={this.handleFilterChanged}
                      />
                  </div>
                  <div className='buttonSort'>
                      <Button
                        onClick={() => this.handleSort('price')}
                        active={activeSort === 'price'}
                        title={'По возрастанию цены :)'}
                      />
                      <Button
                        onClick={() => this.handleSort('area')}
                        active={activeSort === 'area'}
                        title={'По убыванию площади :)'}
                      />
                  </div>
                  <div className='flatList'>
                      {
                          this.state.flats.map((flat) => {
                              return <Flat
                                key={flat.id}
                                id={flat.id}
                                floor={flat.floor}
                                price={flat.price}
                                rooms={flat.rooms}
                                areaTotal={flat.areaTotal}
                                image={flat.image}
                                onClick={this.handleFlatInfo}
                              />
                          })
                      }

                  </div>
                  <div className='flatList-page'>
                      <Pagination
                        itemClassPrev={'disable'}
                        itemClassNext={'disable'}
                        activePage={this.state.activePage}
                        itemsCountPerPage={9}
                        totalItemsCount={this.state.count}
                        pageRangeDisplayed={3}
                        onChange={this.getFlatsOnPage}
                      />
                  </div>
              </div>
            )
        }

        const {activeFlat} = this.state
        const flat = this.state.allFlats.filter((elem) => {
            return elem.id === activeFlat
        })[0]

        return (
          <FlatInfo
            floor={flat.floor}
            price={flat.price}
            rooms={flat.rooms}
            areaTotal={flat.areaTotal}
            image={flat.image}
            areaKitchen={flat.areaKitchen}
            areaLive={flat.areaLive}
            hadleFlatInfo={this.handleFlatInfo}
          />
        )
    }
}

export default FlatsList