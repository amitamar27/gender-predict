import { useState } from "react"
import { useDispatch } from "react-redux"
import { getGenderNationallity } from "../services/ApiService"
import { actions } from "../store"
import { Circles } from "react-loader-spinner"

const Form = () => {
    const dispatch = useDispatch()

    const [sendState, setSendState] = useState(false)

    const sendForm = async (e: any) => {
        e.preventDefault()
        setSendState(true)
        let name = e.target[0].value
        try {
            const response = await getGenderNationallity(name)
            dispatch(actions.add(response))
        } catch (e) {
            alert("Error: " + e)
            console.log("Error: " + e)
        }
        setSendState(false)
    }
    return <form onSubmit={sendForm}>
        <label>Name:</label>
        <input required type={'text'} name='name' placeholder="Enter your name" />
        <button type="submit" disabled={sendState}>
            Check Gender and Nationality
        </button>
        <Circles
            height="40"
            width="40"
            color="#12BD95"
            ariaLabel="circles-loading"
            wrapperStyle={{ alignSelf: 'center', opacity: sendState ? '1' : '0' }}
            wrapperClass=""
            visible={true}
        />
    </form>
}
export default Form