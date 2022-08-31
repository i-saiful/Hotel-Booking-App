import React, { Component } from 'react';
import Rooms from '../component/Rooms';
import { connect } from 'react-redux';
import { getRooms } from '../redux/roomReducer';

const mapDispatchToProps = dispatch => ({
    getRooms: () => dispatch(getRooms())
})

const mapStateToProps = state => ({
    rooms: state.rooms.roomList
})

class Home extends Component {

    componentDidMount() {
        this.props.getRooms();
    }

    render() {
        const rooms = this.props.rooms.map(room =>
            <Rooms key={room.roomId} room={room} />
        )


        return (
            <div className="container">
                <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4'>
                    {rooms}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)