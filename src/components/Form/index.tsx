import { useCallback, useState } from "react"
import { Input, Button } from 'antd'

export function Form() {
  const [tagName, setTagName] = useState("")
  const [color, setColor] = useState("")

  const changeTagHandler = useCallback((event) => {
    setTagName(event.target.value)
  }, [])

  const changeColorHandler = useCallback((event) => {
    setColor(event.target.value)
  }, [])

  return (
    <div>
      <Input value={tagName} onChange={changeTagHandler} placeholder='Селектор' />
      <Input value={color} onChange={changeColorHandler} placeholder='Цвет' />
      <Button>Применить</Button>
    </div>
  )
}
