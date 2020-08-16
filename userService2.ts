import LoggerFactory from "./logger/LoggerFactory";

export default class UserService2 {
    constructor(){}

    method(){
        const slackLogger = LoggerFactory('slack');
        const mongoLogger = LoggerFactory("mongo");
    }
}