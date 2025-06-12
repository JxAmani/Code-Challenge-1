function calculateBodaFare() {
    const distanceInKmInput = prompt("Enter the distance of your trip in kilometers");
    const distanceInKm = parseFloat(distanceInKmInput);// input to a number

    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        console.log("enter the distance of your trip in kilometers")
    }
    const baseFare = 50 ; //KES per ride
    const chargePerKmPer =15 ;// KES for every kilometer traveled.

    totalFare = baseFare + (distanceInKm * chargePerKmPer)
    
    console.log(`Uko kwote ni ${distanceInKm}
    Ukikalia Pikipiki: KES ${baseFare}
    Mpaka Uko KES ${chargePerKmPer}
    Total: KES ${totalFare}

    Panda pikipiki!`);

    //Added alert because i like the idea of the user getting output instantly
    alert(`Uko kwote ni ${distanceInKm}
    Ukikalia Pikipiki: KES ${baseFare}
    Mpaka Uko KES ${chargePerKmPer}
    Total: KES ${totalFare}

    Panda pikipiki!`)
}
calculateBodaFare();