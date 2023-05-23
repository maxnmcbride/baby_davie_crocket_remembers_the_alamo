function ParkPage({parkData}) {

    // console.log('parkData on ParkPage', parkData[1]["description"])

    // const parkInfo = parkData.map((item, index) => {
    //     return (
    //         <>
    //             <h1>{item.fullName}</h1>
    //         </>
    //     )
    // })

    return ( 
        <>
            <div style={{textAlign: "center"}} >
                <h2 style={{border: "solid black 2px"}}>MAINE</h2>
                <h1>Acadia National Park</h1>
                {/* {parkInfo} */}
                <div className="parkContainer">
                    <div className="parkImgContainer">
                        <img src="https://media.istockphoto.com/id/1322937048/photo/cadillac-mountain.jpg?b=1&s=170667a&w=0&k=20&c=4iwvk2YIzRIN90bBazqF6pm5x5YSn4YFOaHBLGhys3g="  alt="park-name"/>
                    </div>
                    {/* lil park description */}
                    <h4>Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 4 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.</h4>

                </div>
            </div>
        </>
     );
}

export default ParkPage;