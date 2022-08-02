import { ButtonPanel } from "./ButtonPanel"

export default {
  title: "ButtonPanel",
  component: ButtonPanel,
}

export const TitledButtonPanelNoButtons = () => (
  <ButtonPanel
    title="Какой-то заголовок, достаточно длинный"
    style={{ width: "300px" }}
  />
)

export const TitledButtonPanelWithButtons = () => (
  <ButtonPanel title="Какой-то заголовок" style={{ width: "400px" }}>
    <button>Кнопка</button>
    <button>Кнопка2</button>
    <button>Кнопка3</button>
  </ButtonPanel>
)
