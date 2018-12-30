function litres(time) {
  console.log(time)
  if (time <= 0) return 0;
  let litres = 0;
  for (let t = 1; t <= time; t++){
    litres += 0.5;
  }
  return Math.floor(litres);
}