function towersOfHanoi(array, fromRod, toRod, additionalRod) {
  if (array === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}.`);
    return;
  }

  towersOfHanoi(array - 1, fromRod, additionalRod, toRod);
  console.log(`Move disk ${array} from ${fromRod} to ${toRod}`);

  towersOfHanoi(array - 1, additionalRod, toRod, fromRod);
}

towersOfHanoi(5, "A", "C", "B");
