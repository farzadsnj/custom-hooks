import React from 'react'
import useInput from './useInput'

function UserFrom() {
    // const [firstName, setFirstname] = useState('')
    // const [lastName, setLastname] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetlastName] = useInput('')

    const submitHandler = (e) =>{
        e.preventDefault()
        alert(`Hello ${firstName} & ${lastName}`)
        resetFirstName()
        resetlastName()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>firstName</label>
                <input {...bindFirstName} type='text'/>
            </div>
            <div>
                <label>lastName</label>
                <input type='text' {...bindLastName}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserFrom