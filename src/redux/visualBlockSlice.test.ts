import { Perspective } from "../threejs/Perspective"
import { ViewStyle } from "../threejs/ViewStyles"
import visualBlockSlice, {
  changeCamPosition,
  changeMeshStyle,
  changePlane,
  changeTitleVisibility,
} from "./visualBlockSlice"
describe("viewerSlice states tests", () => {
  it("initial state test", () => {
    expect(visualBlockSlice(undefined, { type: "" })).toEqual({
      meshStyle: ViewStyle.DOUBLE.toString(),
      camPosition: Perspective.TOP.toString(),
      titleVisible: false,
    })
  })
  it("changeCamPosition state test", () => {
    expect(
      visualBlockSlice(
        {
          meshStyle: ViewStyle.DOUBLE.toString(),
          camPosition: Perspective.TOP.toString(),
          titleVisible: false,
        },
        changeCamPosition({ camPosition: Perspective.BOTTOM.toString() })
      )
    ).toEqual({
      meshStyle: ViewStyle.DOUBLE.toString(),
      camPosition: Perspective.BOTTOM.toString(),
      titleVisible: false,
    })
    expect(
      visualBlockSlice(
        {
          meshStyle: ViewStyle.DOUBLE.toString(),
          camPosition: Perspective.TOP.toString(),
          titleVisible: false,
        },
        changeCamPosition({})
      )
    ).toEqual({
      meshStyle: ViewStyle.DOUBLE.toString(),
      camPosition: Perspective.TOP.toString(),
      titleVisible: false,
    })
  })
  it("changeMeshStyle state test", () => {
    expect(
      visualBlockSlice(
        {
          meshStyle: ViewStyle.DOUBLE.toString(),
          camPosition: Perspective.TOP.toString(),
          titleVisible: false,
        },
        changeMeshStyle({ meshStyle: ViewStyle.CIRCLE.toString() })
      )
    ).toEqual({
      meshStyle: ViewStyle.CIRCLE.toString(),
      camPosition: Perspective.TOP.toString(),
      titleVisible: false,
    })
    expect(
      visualBlockSlice(
        {
          meshStyle: ViewStyle.DOUBLE.toString(),
          camPosition: Perspective.TOP.toString(),
          titleVisible: false,
        },
        changeMeshStyle({})
      )
    ).toEqual({
      meshStyle: ViewStyle.DOUBLE.toString(),
      camPosition: Perspective.TOP.toString(),
      titleVisible: false,
    })
  })
  it("changeTitleVisibility state test", () => {
    expect(
      visualBlockSlice(
        {
          meshStyle: ViewStyle.DOUBLE.toString(),
          camPosition: Perspective.TOP.toString(),
          titleVisible: false,
        },
        changeTitleVisibility()
      )
    ).toEqual({
      meshStyle: ViewStyle.DOUBLE.toString(),
      camPosition: Perspective.TOP.toString(),
      titleVisible: true,
    })
  })
  it("changePlane state test", () => {
    expect(
      visualBlockSlice(
        {
          meshStyle: ViewStyle.DOUBLE.toString(),
          camPosition: Perspective.TOP.toString(),
          titleVisible: false,
        },
        changePlane({
          plane: {
            normal: [1, 0, 0],
            sectionsVisible: true,
            vectorLength: 1,
          },
        })
      )
    ).toEqual({
      meshStyle: ViewStyle.DOUBLE.toString(),
      camPosition: Perspective.TOP.toString(),
      titleVisible: false,
      plane: { normal: [1, 0, 0], sectionsVisible: true, vectorLength: 1 },
    })

    expect(
      visualBlockSlice(
        {
          meshStyle: ViewStyle.DOUBLE.toString(),
          camPosition: Perspective.TOP.toString(),
          titleVisible: false,
          plane: {
            normal: [1, 0, 0],
            sectionsVisible: true,
            vectorLength: 1,
          },
        },
        changePlane({})
      )
    ).toEqual({
      meshStyle: ViewStyle.DOUBLE.toString(),
      camPosition: Perspective.TOP.toString(),
      titleVisible: false,
      plane: undefined,
    })
  })
})
