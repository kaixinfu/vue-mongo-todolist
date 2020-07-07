const conf = require("./conf");
const MongoClient = require("mongodb").MongoClient;

const EventEmitter = require("events").EventEmitter;

class Mongodb{
    constructor(conf) {
        this.conf = conf;
        this.emmiter = new EventEmitter();

        this.client = new MongoClient(conf.url, { useNewUrlParser: true });
        this.client.connect(err => {
            if (err) {
                throw err
            }
            console.log("mongo ---> connect成功");
            this.emmiter.emit("connect");
        })
    }
    once(event, cb) {
        this.emmiter.emit(event, cb);
    }
}

module.exports = new Mongodb(conf);