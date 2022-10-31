import React from "react"
import { useSelector } from "react-redux"
import ApiResponse from "../models/ApiResponse"
import { RootState } from "../store"
import ListRow from "./ListRow"
const ResponseList = () => {
    const list = useSelector<RootState, ApiResponse[]>(state => state.userReducer.list)
    
    return <React.Fragment>
        {list.length > 0 && <h3>List</h3>}
        <div className="response-list">
            {list.map(response => <ListRow response={response} />)}
        </div>
    </React.Fragment>
}

export default ResponseList