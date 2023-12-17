import { useState } from "react"

function List({ contacts }) {
  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) => {
      return contact[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toString().toLowerCase())
    })
  })

  return (
    <div>
      <div>
        <label>
          Search:
          <input type="search" placeholder="name or number"
            onChange={(e) => setFilterText(e.target.value)}
          />
        </label>
      </div>
      <ul>
        {
          filtered.map((contact, index) => {
            return <li style={{ listStyle: "none" }} key={index}>
              <strong>{contact.name}</strong> <small>({contact.tel})</small>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default List