const { parse } = require("csv-parse");

const fs = require("fs");

const results = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED' &&
  planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 &&
  planet['koi_prad'] < 1.6
}

fs.createReadStream("kepler_data.csv")
.pipe(parse({
  comment: '#',
  columns: true,
}))
  .on("data", (data) => {
    if(isHabitablePlanet(data)){
      results.push(data);
    }
  })
  .on("end", () => {
    console.log(results);
    console.log(`Found ${results.length} habitable planents that are closely related to Earth's conditions...`)
    console.log(results.map(planet => planet.kepler_name))
    console.log("done");
  })
  .on("error", (err) => {
    console.log(error);
  });
