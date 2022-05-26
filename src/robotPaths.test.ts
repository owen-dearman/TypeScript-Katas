import { reachesAnyDestination, findCoordinates, Command } from "./robotPaths";

const destinations: Command[][] = [
  ["e", "n", "e", "e", "n"],
  ["w", "n", "w", "n", "w", "w", "n"],
];

test("if robot end where it started and desination is empty ", () => {
  expect(reachesAnyDestination(["n", "s"], [[]])).toStrictEqual(true);
  expect(reachesAnyDestination(["w", "e"], [[]])).toStrictEqual(true);
  expect(reachesAnyDestination(["s", "s"], [[]])).toStrictEqual(false);
});

test("return false if the robot doesn't end in specified destination ", () => {
  expect(reachesAnyDestination(["n", "s"], [["e"]])).toStrictEqual(false);
  expect(
    reachesAnyDestination(
      ["n", "e", "w", "w"],
      [
        ["n", "s"],
        ["n", "n", "e"],
      ],
    ),
  ).toStrictEqual(false);
  expect(
    reachesAnyDestination(
      ["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"],
      destinations,
    ),
  ).toStrictEqual(false);
});

test("", () => {
  expect(
    reachesAnyDestination(["s", "e", "e", "n", "n", "e", "n"], destinations),
  ).toStrictEqual(true);
  expect(
    reachesAnyDestination(
      ["n", "s", "n", "n", "e", "n", "w", "w", "s", "w", "w", "w", "n"],
      destinations,
    ),
  ).toStrictEqual(true);
});

test("returning coordinates from a journey", () => {
  expect(findCoordinates(["n", "n", "e", "n"])).toStrictEqual({
    lat: 1,
    long: 3,
  });
  expect(findCoordinates(["s", "w", "w"])).toStrictEqual({ lat: -2, long: -1 });
});
