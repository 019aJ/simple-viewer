import { Block } from "./Block"

export default {
  title: "Block",
  component: Block,
}
export const TitledBlockNoButtons = () => (
  <Block title="Какой-то заголовок, достаточно длинный">
    <div style={{ height: "100px" }}>Тут какое-то содержимое</div>
  </Block>
)
export const TitledBlockWithButtons = () => (
  <Block
    style={{ width: "600px" }}
    title="Какой-то заголовок, достаточно длинный"
    widgets={[
      <button>Кнопка</button>,
      <button>Кнопка2</button>,
      <button>Кнопка3</button>,
    ]}
  >
    <div style={{ height: "100px" }}>Тут какое-то содержимое</div>
  </Block>
)

export const UntitledBlockNoButtons = () => (
  <Block>
    <div style={{ height: "100px" }}>Тут какое-то содержимое</div>
  </Block>
)

export const UntitledBlockWithButtons = () => (
  <Block
    style={{ width: "600px" }}
    widgets={[
      <button>Кнопка</button>,
      <button>Кнопка2</button>,
      <button>Кнопка3</button>,
    ]}
  >
    <div style={{ height: "100px" }}>Тут какое-то содержимое</div>
  </Block>
)
