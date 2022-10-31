import ApiResponse from "../models/ApiResponse"

const ListRow = ({ response }: { response: ApiResponse }) => {

    return <div className="list-row">
        <label>Name</label>
        <span>{response.genderResponse.name}</span>

        <label>Gender</label>
        <span>{response.genderResponse.gender}</span>

        <label>Nationallity</label>
        <span>{response.nationResponse.country.country_id}</span>
    </div>
}

export default ListRow