import { useCallback } from "react"
import { Form } from '~src/components/Form'

import styles from './styles.module.scss'
import 'antd/dist/antd.css'
import { sendMessage } from '~src/utils/sendMessage'

function IndexPopup() {
  const submitHandler = useCallback((tagName: string, color: string) => {
    void sendMessage({
      type: 'changeColor',
      payload: [tagName, color],
    })
  }, [])

  return (
    <div className={styles.root}>
      <Form onSubmit={submitHandler}/>
    </div>
  )
}

export default IndexPopup
