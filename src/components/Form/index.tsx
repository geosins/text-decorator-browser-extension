import { useCallback, useState } from "react"
import { Input, Button } from 'antd'

import styles from './styles.module.scss'

interface Props {
  onSubmit(tagName: string, color: string): void
}

export function Form({ onSubmit }: Props) {
  const [tagName, setTagName] = useState("")
  const [color, setColor] = useState("")

  const changeTagHandler = useCallback((event) => {
    setTagName(event.target.value)
  }, [])

  const changeColorHandler = useCallback((event) => {
    setColor(event.target.value)
  }, [])

  const submitHandler = useCallback(() => {
    onSubmit(tagName, color)
  }, [onSubmit, tagName, color])

  return (
    <div className={styles.root}>
      <Input value={tagName} onChange={changeTagHandler} placeholder='Селектор' />
      <Input value={color} onChange={changeColorHandler} placeholder='Цвет' />
      <Button
        type='primary'
        onClick={submitHandler}
        disabled={!tagName || !color}
      >
        Применить
      </Button>
    </div>
  )
}
