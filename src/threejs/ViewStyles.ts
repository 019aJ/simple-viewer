export enum ViewStyle {
  WIREFRAME = "wireframe",
  DOUBLE = "double",
  SINGLE = "single",
  POINT = "point",
  CIRCLE = "circle",
  OPACITY = "opacity",
}
export const viewStyles = [
  { id: ViewStyle.WIREFRAME, name: "Контур" },
  { id: ViewStyle.DOUBLE, name: "Двусторонняя заливка" },
  { id: ViewStyle.SINGLE, name: "Односторонняя заливка" },
  { id: ViewStyle.POINT, name: "Квадратики" },
  { id: ViewStyle.CIRCLE, name: "Точки" },
  { id: ViewStyle.OPACITY, name: "Прозрачность" },
]
