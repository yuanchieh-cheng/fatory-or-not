import SlackLogger from "./logger/SlackLogger";
import MongoDbLogger from "./logger/MongoDbLogger";

export default class UserService{
    constructor(private slackLogger: SlackLogger, private mongoDbLogger: MongoDbLogger ){

    }

    method(){
        this.slackLogger.log();
        this.mongoDbLogger.log();
    }
}