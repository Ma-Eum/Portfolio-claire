import './SakuraPetals.scss'

// Effet décoratif de pétales de sakura utilisé en arrière-plan.
// Composant purement visuel, masqué aux technologies d’assistance
// pour ne pas perturber la lecture.
function SakuraPetals() {
  return (
    <div className="sakura-petals" aria-hidden="true">
      {/* Chaque span représente un pétale animé en CSS */}
      <span className="petal petal--1" />
      <span className="petal petal--2" />
      <span className="petal petal--3" />
      <span className="petal petal--4" />
      <span className="petal petal--5" />
      <span className="petal petal--6" />
      <span className="petal petal--7" />
      <span className="petal petal--8" />
    </div>
  )
}

export default SakuraPetals