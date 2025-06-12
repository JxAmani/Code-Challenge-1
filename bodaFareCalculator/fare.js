function calculateBodaFare() {
    const distanceInKmInput = prompt("Enter the distance of your trip in kilometers");//pop-up
    const distanceInKm = parseFloat(distanceInKmInput);// input to a number

    if (isNaN(distanceInKm) || distanceInKm <= 0) {// if input is not a number or distance is below zero it will tell them  to put the correct distance
        console.log("Kindly put the correct distance")
    }
    const baseFare = 50 ; //KES per ride
    const chargePerKmPer =15 ;// KES for every kilometer traveled.
    
    //Fare formula
    totalFare = baseFare + (distanceInKm * chargePerKmPer)
    
    //console output
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