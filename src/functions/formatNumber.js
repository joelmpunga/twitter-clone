export default function formatNumber(value){
    if(value>1000000000){
        return Math.round(value/1000000000)+"md";
    }
    else if(value>1000000){
        return Math.round(value/1000000)+"M";
    }
    else if(value>1000){
        return Math.round(value/1000)+"K";
    }
    else return value;
}