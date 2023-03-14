class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;  
  }

  addClock(newTime, callback) {
  	if (newTime === undefined || callback === undefined ) {
		throw new Error('Отсутствуют обязательные аргументы');
	}
    
  	newTime = new Date(hours, minutes);
  	let indexAlarm = this.alarmCollection.findIndex(alarm => alarm.time === newTime);
	if (indexAlarm !== -1) {
	  console.warn('Уже присутствует звонок на это же время');
	}

    this.alarmCollection.push({callback, time: newTime, canCall: true});
  }
}