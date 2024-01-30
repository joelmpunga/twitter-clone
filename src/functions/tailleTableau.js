export default function tailleTableau(comments) {
    let number = comments.reduce((previousValue,currentValue)=>{currentValue++});
    return number;
}