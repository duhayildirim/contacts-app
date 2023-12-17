import { useEffect, useState } from "react"
import Form from "./form"
import List from "./list"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      name: 'Duha',
      tel: '05422526990'
    },
    {
      name: 'Asena',
      tel: '05396845656'
    },
    {
      name: 'Selami',
      tel: '05422526878'
    },
    {
      name: 'Haluk',
      tel: '05366615236'
    },
    {
      name: 'Ayşe',
      tel: '05369911990'
    }
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts