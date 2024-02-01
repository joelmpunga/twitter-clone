export default function ButtonArrounded({texte,color,taille,type="button"}) {
    return (
        <button className={taille+" "+color+" rounded-full text-center justify-start"} type={type}>{texte}</button>
    )
  }