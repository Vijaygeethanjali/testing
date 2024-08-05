import {useParams} from 'react-router-dom'

export default function Cart(){
    const {id}= useParams()
    return (
        <div>
        <center>cart items {id}</center>
        <h1>vijay</h1>
        </div>
    )
}
