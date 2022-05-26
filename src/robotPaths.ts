export type Command = "n" | "s" | "e" | "w";
type CoordinateVector = { lat: number; long: number };

export function reachesAnyDestination(
  journey: Command[],
  destinations: Command[][],
): boolean {
  const destinationsArray = [];

  for (const route of destinations) {
    const coordinates = findCoordinates(route);
    destinationsArray.push(coordinates);
  }

  const journeyCoordinates = findCoordinates(journey);

  for (const destination of destinationsArray) {
    if (isVectorTheSame(journeyCoordinates, destination)) {
      return true;
    }
  }
  return false;
}

export function findCoordinates(route: Command[]): CoordinateVector {
  let longitude = 0;
  let latitude = 0;
  for (const command of route) {
    if (command === "s") {
      longitude--;
    } else if (command === "n") {
      longitude++;
    } else if (command === "e") {
      latitude++;
    } else {
      latitude--;
    }
  }
  return { lat: latitude, long: longitude };
}

function isVectorTheSame(
  journey: CoordinateVector,
  destination: CoordinateVector,
): boolean {
  const isSameLat = journey.lat === destination.lat;
  const isSameLong = journey.long === destination.long;
  return isSameLat && isSameLong;
}
