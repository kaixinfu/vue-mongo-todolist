import {getRequest} from '../utils/axios';

class Persons{
    constructor() {
        this.getAll = "/persons/list";
    }
    fnGetAll(params) {
        return getRequest(this.getAll, params)
    }
}

export default Persons