export default function Protein() {
  return (
    <div className="dashboard-protein dashboard-card">
      <div className="dashboard-protein__img">
        <img src="./src/assets/img/chicken.svg" alt="Protein logo" />
      </div>
      <div>
        <p className="dashboard-protein__value">50g</p>
        <p className="dashboard-protein__title">Protéines</p>
      </div>
    </div>
  );
}
