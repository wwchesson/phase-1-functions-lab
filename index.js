function distanceFromHqInBlocks(manzana) {
    return Math.abs(manzana - 42);
}

function distanceFromHqInFeet(manzana) {
    return distanceFromHqInBlocks(manzana) * 264;
}

function distanceTravelledInFeet(inicio, destino) {
    return (Math.abs(inicio - destino)*264);
}


function calculatesFarePrice(inicio, destino) {
    const distance = distanceTravelledInFeet(inicio, destino); 
    
    if (distance <= 400) {
        return 0.00
    }
    else if (400 < distance && distance <= 2000) {
        return (distance - 400) * 0.02
    }
    else if (2000 < distance && distance < 2500) {
        return 25.00
    }
    else {
        return "cannot travel that far"
    }
}