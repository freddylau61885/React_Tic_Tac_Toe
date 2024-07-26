function Square({val}) {
  return <button className="square">{val}</button> 
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square val="1"/>
        <Square val="2"/>
        <Square val="3"/>
      </div>
      <div className="board-row">
        <Square val="4"/>
        <Square val="5"/>
        <Square val="6"/>
      </div>
      <div className="board-row">
        <Square val="7"/>
        <Square val="8"/>
        <Square val="9"/>
      </div>
    </>
  );
}
  