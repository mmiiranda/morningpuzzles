<template>
    <div id="timer">
        Tempo Restante:  
        <span id="span-hour">00</span>:
        <span id="span-minute">00</span>:
        <span id="span-second">00</span>
    </div>
</template>

<script>
    export default {
        name: "timerContent",
        mounted(){
            this.setTime();

            this.interval = setInterval(this.setTime, 1000);
        },  
        beforeUnmount() {
            clearInterval(this.interval);
        },
        methods:{
            setTime(){  
                let data = new Date;

                let spanHour = document.querySelector("#span-hour");
                let spanMinute = document.querySelector("#span-minute");
                let spanSecond = document.querySelector("#span-second");
            
                let hour =  this.formatTime(23 - data.getHours());
                let minute = this.formatTime(59 - data.getMinutes());
                let second = this.formatTime(59 - data.getSeconds());

                spanHour.innerHTML = hour;
                spanMinute.innerHTML = minute;
                spanSecond.innerHTML = second;
            },
            formatTime(n){
                return n > 9 ? n : '0'+ n;
            }
        }
    }
</script>

<style>
#timer{
    position: absolute;

    right: 2%;
    bottom: 2%;
}</style>