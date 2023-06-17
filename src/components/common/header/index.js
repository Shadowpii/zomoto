import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='max-width header'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
        alt='ZOMATO-LOGO'
        className='header-logo'/>
        <div className='header-right'>
            <div className='header-location-search-container'>
                <div className='location-wrapper'>
                    <div className='location-icon-name'>
                        <span class="material-symbols-outlined absolute-center location-icon">
                            location_on
                        </span>
                        <div>Bangalore</div>
                    </div>
                    <span className="material-symbols-outlined absolute-center">
                        expand_more
                    </span>
                </div>
                <div className='location-search-separator'></div>
                <div className='header-searchbar'>
                    <span class="material-symbols-outlined absolute-center search-icon">
                        search
                    </span>
                    <input placeholder='Search for restraunt,cuisine or a dish' className='search-input'/>
                </div>
            </div>
            <div className='profile-wrapper'>
                <img src='https://b.zmtcdn.com/data/user_profile_pictures/7de/c4bb4a9ac7b8e7c08e50d870e2cbc7de.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A' 
                alt='Profile'
                className='header-profile-image'/>
                <span className='header-username'>Sumit</span>
                <span className="material-symbols-outlined absolute-center profile-options-icon">
                keyboard_arrow_down
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header;