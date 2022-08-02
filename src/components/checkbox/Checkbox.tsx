import { useEffect, useRef } from "react"

type CheckboxProps = {
  onClick: (state: number) => void
  initialState: number
}

export const Checkbox = ({ onClick, initialState }: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    //Stryker disable next-line ConditionalExpression
    if (checkboxRef.current != null) {
      if (initialState === 1) {
        checkboxRef.current.checked = true
        checkboxRef.current.indeterminate = false
      } else if (initialState === 0) {
        //Stryker disable next-line BlockStatement
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
    />
  )
}
