import Card from "../card/Index";
import "./table.scss";

export default function Table({ tableData }) {
  const { leftZone, rightZone } = tableData;
  return (
    <Card className="summary">
      <div className="table">
        <div className="table-header">Summary</div>
        <div className="table-column">
          <p>leftZone</p>
          <ul>
            {leftZone?.map((item, idx) => {
              const id = idx + 1;
              return (
                <li key={idx}>
                  <ul className="liste">
                    <li>{id}</li>
                    <li>{item}</li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="table-column">
          <p>rightZone</p>
          <ul>
            {rightZone?.map((item, idx) => {
              const id = idx + 1;
              return (
                <li key={idx}>
                  <ul className="liste">
                    <li>{id}</li>
                    <li>{item}</li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Card>
  );
}
