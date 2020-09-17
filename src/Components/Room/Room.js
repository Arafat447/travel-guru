import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import hotelData from '../FakeData/hotelData'
import Header from '../Header/Header';
import './Room.css'

const Room = () => {
    const roomData = hotelData;

    return (
        <div className="home-container">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {
                            roomData.map(room =>
                                <div className="room-container d-flex mt-4">
                                    <img src={room.img} alt="" />
                                    <div className="room-details">
                                        <h6>{room.hotelName}</h6>
                                        <p>{room.roomDetails}</p>
                                        <p>$ {room.price}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="col-md-6"></div>
                </div>
            </div>

        </div>
    );
};

export default Room;