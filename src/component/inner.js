import {useHistory} from 'react-router-dom'

export default function Inner(){
    const history = useHistory()
    return (
        <div>
        <center>inner items</center>
        <button onClick={()=>history.push('/user')}>button</button>
        </div>
    )
}