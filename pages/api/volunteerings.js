import { datavolunteerings } from "../../utils/fixtures/DevData"

export default (req, res) => {
    res.statusCode = 200
    res.json(datavolunteerings)
}