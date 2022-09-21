function TopAmenities() {
    return (
        <>
            {/* wifi lobby */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-wifi"></i>
                </div>
                <div>
                    <span className='badge bg-primary'>Free</span>
                </div>
                <span className='font-monospace'>WiFi in lobby</span>
            </div>

            {/* WiFi in rooms */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-wifi"></i>
                </div>
                <div>
                    <span className='badge bg-primary'>Free</span>
                </div>
                <span className='font-monospace'>WiFi in rooms</span>
            </div>

            {/* Pool */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-person-swimming"></i>
                </div>
                <span className='font-monospace'>Pool</span>
            </div>

            {/* Spa */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-spa"></i>
                </div>
                <span className='font-monospace'>Spa</span>
            </div>

            {/* Parking */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-square-parking"></i>
                </div>
                <span className='font-monospace'>Parking</span>
            </div>

            {/* Pets */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-paw"></i>
                </div>
                <span className='font-monospace'>Pets</span>
            </div>

            {/* A/C */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-temperature-arrow-up"></i>
                </div>
                <span className='font-monospace'>A/C</span>
            </div>

            {/* Restaurant */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-utensils"></i>
                </div>
                <span className='font-monospace'>Restaurant</span>
            </div>

            {/* Hotel bar */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-wine-glass"></i>
                </div>
                <span className='font-monospace'>Hotel bar</span>
            </div>

            {/* Gym */}
            <div className="card text-center p-3 m-3" style={{ width: '10rem' }}>
                <div className='fs-1 fw-bolder'>
                    <i className="fa-solid fa-dumbbell"></i>
                </div>
                <span className='font-monospace'>Gym</span>
            </div>
        </>
    )
}

export default TopAmenities