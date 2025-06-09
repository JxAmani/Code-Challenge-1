function calculateBodaFare(distanceInKm) {
    if (distanceInKm <= 0) {
        console.log("enter the distance of your trip in kilometers")
    }
    distanceInKm =5 ;

    const baseFare = 50 ; //KES per ride
    const chargePerKmPer =15 ;// KES for every kilometer traveled.

    totalFare = baseFare + (distanceInKm * chargePerKm)
    
    console.log(`Uko kwote ni ${distanceInKm}`)
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`)
    console.log(`Mpaka Uko KES ${chargePerKmPer}`)
    console.log(`Total: KES ${totalFare}`)

    console.log(`Panda pikipiki!`)
}