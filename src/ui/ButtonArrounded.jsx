export default function ButtonArrounded({texte,color,taille}) {
    return (
        <button className={taille+" "+color+" rounded-full text-center justify-start"}>{texte}</button>
    )
  }