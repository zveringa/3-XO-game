import './FieldLayout.css';

export const FieldLayout = () => {
    return (
        <>
            <div className="container">
                <div className="board">
                <tbody> 
              <tr>
                {NUMS.slice(0, 3).map((number) => (
                  <td key={number}>
                     <Button number={number} onClick={handleCellClick} />
                  </td>
                ))}
              </tr>
              </tbody>
              
                    <div className="row">
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                    </div>
                    <div className="row">
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                    </div>
                    <div className="row">
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                    </div>
                </div>
            </div>
        </>
    );
};