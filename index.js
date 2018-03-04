function produceDrivingRange(blockRange){
  return function(start, end){
    let distance = Math.abs(parseInt(end) - parseInt(start))
    let difference = blockRange - distance
    return blockRange > distance ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`
  }
}

function produceTipCalculator(tipPercentage){
	return function(fare){
		return fare * tipPercentage
	}
}
