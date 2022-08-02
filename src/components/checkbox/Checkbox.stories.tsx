import { Checkbox } from "./Checkbox"
import { within, userEvent, waitFor } from "@storybook/testing-library"

export default {
  title: "Checkbox",
  component: Checkbox,
}
export const Checked = () => <Checkbox initialState={1} onClick={() => {}} />

export const Halfchecked = () => (
  <Checkbox initialState={2} onClick={() => {}} />
)

export const Unchecked = () => <Checkbox initialState={0} onClick={() => {}} />
