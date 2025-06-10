function calculateBodaFare(distanceInKm) {
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        console.log("enter the distance of your trip in kilometers")
    }
    const baseFare = 50 ; //KES per ride
    const chargePerKmPer =15 ;// KES for every kilometer traveled.

    totalFare = baseFare + (distanceInKm * chargePerKmPer)
    
    console.log(`Uko kwote ni ${distanceInKm}`)
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`)
    console.log(`Mpaka Uko KES ${chargePerKmPer}`)
    console.log(`Total: KES ${totalFare}`)

    console.log(`Panda pikipiki!`)
}
console.log("travelling 5 km");
calculateBodaFare(5);

console.log("travelling 17 km");
calculateBodaFare(17);