import { useEffect, useState } from "react"

const initialValues = {
  name: '',
  tel: ''
}

function Form({ addContact, contacts }) {
  const [formDatas, setFormDatas] = useState(initialValues)

  const setData = (e) => {
    setFormDatas({ ...formDatas, [e.target.name]: e.target.value })
  }

  const saveData = () => {
    if (formDatas.name !== '' && formDatas.tel !== '') {
      addContact([...contacts, formDatas])   
      // setFormDatas(initialValues) inputları boşalttım
    }
  }

  useEffect(() => {
    setFormDatas(initialValues)
  }, [contacts])

  return (
    <div>
      <div>
        <label htmlFor="name">
          Name:
          <input id="name" name="name" type="text"
            value={formDatas.name}
            placeholder={formDatas.name}
            onChange={setData}
          />
        </label>
      </div>
      <div>
        <label htmlFor="tel">
          Phone:
          <input id="tel" name="tel" type="text"
            value={formDatas.tel}
            placeholder={formDatas.tel}
            onChange={setData}
          />
        </label>
      </div>
      <div>
        <button onClick={saveData}>Add</button>
      </div>
    </div>
  )
}

export default Form