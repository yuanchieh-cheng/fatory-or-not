import SlackLogger from "./logger/SlackLogger";
import MongoDbLogger from "./logger/MongoDbLogger";
import UserService from "./userService";
import UserService2 from "./userService2";

function main(){
    const slackLogger = new SlackLogger();
    const mongoDbLogger = new MongoDbLogger();

    const userService = new UserService(slackLogger, mongoDbLogger);
    const userService2 = new UserService2();
}