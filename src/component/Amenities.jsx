function Amenities() {
    const hotelFacilities = [
        '24-hour reception',
        '24-hour room service',
        'Airport shuttle',
        'Bell service',
        'Breakfast',
        'Business centre',
        'Car park',
        'Cashless payment',
        'Computer with Internet',
        'Concierge',
        'Conference rooms',
        'Convenience store',
        'Deck chairs',
        'Doctor on site',
        'Elevator',
        'Express check-in',
        'Free WiFi',
        'Free WiFi in public areas',
        'Gym',
        'Hairdresser',
        'Hand sanitizer provided',
        'Hotel bar',
        'Housekeeping',
        'Hypoallergenic rooms',
        'Laundry service',
        'Masks provided',
        'New safety protocols',
        'Nightclub',
        'Non-smoking rooms',
        'On-site boutique shopping',
        'Online check in/check out',
        'Outdoor swimming pool',
        'Pool',
        'Pool bar',
        'Regular disinfection',
        'Response protocol',
        'Restaurant',
        'Room service',
        'Safe distance',
        'Spa',
        'Sun umbrellas',
        'Temperature screening',
        'Terrace',
        'Towels at the pool'
    ]

    const roomFacilities = [
        'Air conditioning',
        'Balcony(upon inquiry)',
        'Central heating',
        'Electric kettle',
        'Free WiFi(rooms)',
        'Ironing board',
        'Outdoor Grill',
        'Safe',
        'Satellite TV',
        'Television',
        'WiFi'
    ]

    const wellnessSpa = [
        'Beauty salon',
        'Body treatments',
        'Massage',
        'Sauna',
        'Steam room',
        'Whirlpool / Hot tub',
    ]

    return (
        <div className="mt-3">
            <h4 className="font-monospace">Hotel Facilities</h4>
            <hr />
            <div className="row row-cols-2 row-cols-sm-3">
                {hotelFacilities.map((item, i) =>
                    <div key={i} className='col'>
                        <i className="fa-solid fa-circle-check text-success me-2"></i>{item}
                    </div>)
                }
            </div>

            {/* Room Facilities */}
            <h4 className="mt-3 font-monospace">Room Facilities</h4>
            <hr />
            <div className="row row-cols-2 row-cols-sm-3">
                {roomFacilities.map((item, i) =>
                    <div key={i} className='col'>
                        <i className="fa-solid fa-circle-check text-success me-2"></i>{item}
                    </div>)
                }
            </div>

            {/* Wellness / Spa */}
            <h4 className="mt-3 font-monospace">Wellness / Spa</h4>
            <hr />
            <div className="row row-cols-2 row-cols-sm-3">
                {wellnessSpa.map((item, i) =>
                    <div key={i} className='col'>
                        <i className="fa-solid fa-circle-check text-success me-2"></i>{item}
                    </div>)
                }
            </div>
        </div>
    )
}

export default Amenities