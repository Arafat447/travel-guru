import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Booking.css';
import Header from '../Header/Header';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../FakeData/FakeData'
const Booking = () => {

    const placeData = fakeData;
    const {locationId} = useParams();
    const locationData = placeData.filter(place => place.id == locationId);
    console.log(locationData)
    const handleSubmit = ()=>{
        
    }
    return (
        <div className="home-container">
            <Header></Header>
            <div className="container place-detail-container">
                <div className="row">
                    <div className="col-md-6 place-detail">
    <h1>{locationData[0].name}</h1>
    <p>{locationData[0].description}</p>
                    </div>

                    <div className="col-md-6 form-container">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="form-group">
                                <div className="form-group">
                                    <label className="form-control-label">Origin</label>
                                    <input class="form-control" type="text" name="firstName" placeholder="Origin" />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">Destination</label>
                                    <input className="form-control" type="text" name="destination" placeholder="Destination" />
                                </div>
                            </fieldset>
                            <div className="date-container">
                                <div className="from">
                                    <label htmlFor="from">From</label>
                                    <br />
                                    <input type="date" name="from" id="" />
                                </div>
                                <div className="to">
                                    <label htmlFor="from">To</label>
                                    <br />
                                    <input type="date" name="to" id="" />
                                </div>
                            </div>
                            <br /><br />
                            <Link to="/destination"><input type="submit" value="Start Booking" /></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;