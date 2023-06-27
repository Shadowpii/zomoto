import React from 'react';
import "./diningout.css";
import Collection from '../common/collection';
import Filters from '../common/filters';
import { diningOut } from '../../data/diningOut';
import ExploreSection from '../common/exploreSection';

const collectionList=[
  {
    id:1,
    title:"Live Sports Screenings",
    cover:"",
    places: "12 Places",
  },
  {
    id:2,
    title:"Newly Opened",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
    places: "12 Places",
  },
  {
    id:3,
    title:"Veggie Friendly",
    cover:"",
    places: "12 Places",
  },
  {
    id:4,
    title:"Trending This Week",
    cover:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places: "9 Places"
  },
  {
    id:5,
    title:"Best of Bengaluru",
    cover:"",
    places: "12 Places",
  },
  {
    id:6,
    title:"Outdoor Seating",
    cover:"",
    places: "12 Places",
  },
]

const diningFilters=[
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

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
      <Filters filterList={diningFilters}/>
      </div>
      <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Bengaluru"/>
    </div>
  )
}

export default DiningOut;