import { useEffect, useRef } from "react"

type CheckboxProps = {
  onClick: (state: number) => void
  initialState: number
}

export const Checkbox = ({ onClick, initialState }: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (checkboxRef.current != null) {
      if (initialState === 1) {
        checkboxRef.current.checked = true
        checkboxRef.current.indeterminate = false
      } else if (initialState === 0) {
        checkboxRef.current.checked = false
        checkboxRef.current.indeterminate = false
      } else {
        checkboxRef.current.checked = false
        checkboxRef.current.indeterminate = true
      }
    }
  }, [initialState])

  return (
    <input
      type="checkbox"
      data-testid="checkbox"
      ref={checkboxRef}
      onClick={() =>
        onClick(checkboxRef.current && checkboxRef.current.checked ? 1 : 0)
      }
      defaultChecked={initialState === 1}
    />
  )
}
