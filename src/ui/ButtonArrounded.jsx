export default function ButtonArrounded({texte,color}) {
    return (
      <div className="bg-blue-300 rounded-full">
        <button className={" h-7 w-20 "+color}>{texte}</button>
      </div>
    )
  }