import SlackLogger from "./SlackLogger";
import MongoDbLogger from "./MongoDbLogger";

export default function LoggerFactory(type: string) {
    switch (type) {
        case "slack":
            return new SlackLogger();
        case "mongo":
            return new MongoDbLogger();
        default:
            throw Error("Not Support");
    }
}
