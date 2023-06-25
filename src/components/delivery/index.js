import React from 'react'
import './delivery.css'
import Filters from '../common/filters';
import DeliveryCollections from './deliveryCollections';

const deliveryFilters=[
  {
    id:1,
    icon: <span class="material-symbols-outlined">
          filter_list
          </span>,
    title: 'Filters',
  },
  {
    id:2,
    title: 'Rating: 4.0+',
  },
  {
    id:3,
    title: 'Safe and Hygenic',
  },
  {
    id:4,
    title: 'Pure Veg',
  },
  {
    id:5,
    icon: <span class="material-symbols-outlined">
            swap_vert
          </span>,
    title: 'Delivery Time',
  },
  {
    id:6,
    title: 'Great Offers',
  },
];

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
    </div>
  )
}

export default Delivery;