import "./card.scss";

export default function Card({ children, className }) {
  const clName = !className ? `card` : `card ${className}`;
  return (
    <div className={clName}>
      <div className="card-content">{children}</div>
    </div>
  );
}
