const fs=require('fs');
const os=require('os');

const eventEmitter=require('events');        //grabbing whole events class in a variable

class Logger extends eventEmitter{
    log(message){
        this.emit(`message`,{message});     //this will throw the message and available to listen
    }
}

const logger=new Logger();
const logFile='./eventlog.txt';

const logToFile=(event)=>{
    const logMessage=`${new Date().toISOString()} - ${event.message}\n`;   //this will be the message to be put to logFile
    fs.appendFileSync(logFile,logMessage);
}

logger.on('message',logToFile)  //this will turn on the logger and constantly listen, when event occurs logToFile is performed

setInterval(()=>{
    const memoryUsage=(os.freemem()/os.totalmem())*100;     //this will return memory being used in percentage
    logger.log("Memory being used is : "+memoryUsage.toFixed(2));
},3000)
logger.log("Application started");
logger.log("Application processing");
