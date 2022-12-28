export enum Perspective {
  TOP = "top",
  BOTTOM = "bottom",
  SOUTH = "south",
  NORTH = "north",
  EAST = "east",
  WEST = "west",
}

export const perspectives = [
  { id: Perspective.TOP, name: "Вид сверху" },
  { id: Perspective.BOTTOM, name: "Вид снизу" },
  { id: Perspective.SOUTH, name: "Вид на юг" },
  { id: Perspective.NORTH, name: "Вид на север" },
  { id: Perspective.EAST, name: "Вид на восток" },
  { id: Perspective.WEST, name: "Вид на запад" },
]

export const getCoordinates = (perspective: string) => {
  switch (perspective) {
    case Perspective.TOP:
      return [0, 100, 0]
    case Perspective.BOTTOM:
      return [0, -100, 0]
    case Perspective.SOUTH:
      return [100, 0, 0]
    case Perspective.NORTH:
      return [-100, 0, 0]
    case Perspective.EAST:
      return [0, 0, 100]
    case Perspective.WEST:
      return [0, 0, -100]
  }
}
