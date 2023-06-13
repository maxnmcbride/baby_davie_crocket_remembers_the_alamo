

function StatePage({parkData}) {

    console.log('parkData on StatePage', parkData)

    const filteredParks = parkData.filter(park => park.states ===  parkData.states)

    return ( 
        <>
            <h1>State Page</h1>
        </>
     );
}

export default StatePage;