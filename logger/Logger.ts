export default abstract class Logger{
    abstract error(): void

    log(){
        console.log(...arguments);
    }
}