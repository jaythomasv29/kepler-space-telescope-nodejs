# Habitable Planets Planets Projects (KEPLER SPACE DATA)

## Using Node.js to parse a csv file

## Utilized File System (fs) module in node to create a Read Stream using `CreateReadStream()`
- The function fs.createReadStream() allows you to open up a readable stream in a very simple manner. All you have to do is pass the path of the file to start streaming in.

## Used `csv-parse` to convert Kepler Microscope Data on planets into array of objects. Implemented using Node.js stream API to parse through over 9000+ lines of planent data with various columns as properties.

## `.pipe()` to take a readable stream and connect it with `csv-parse` writeable stream.

## Found habitable planets using `Koi_Disposition` property
- A Kepler object of interest (KOI) is a star observed by the Kepler space telescope that is suspected of hosting one or more transiting planets.