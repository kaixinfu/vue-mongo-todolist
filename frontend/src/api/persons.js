import {getRequest} from '../utils/axios';

class Persons{
    constructor() {
        this.getAll = "/api/list";
    }
    fnGetAll(params) {
        return getRequest(this.getAll, params)
    }
}

export default Persons