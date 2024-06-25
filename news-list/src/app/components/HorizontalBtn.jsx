import './HorizontalBtn.css';

function HorizontalBtn(props) {
  const { clickBtnHorizontal, activBtnHorizontal } = props;

  let style = {};

  if (activBtnHorizontal) {
    style = { backgroundColor: '#0029FF' };
  } else {
    style = { backgroundColor: '#c4c4c4' };
  }

  return (
    <div
      className="horizontalBtn"
      onClick={() => {
        clickBtnHorizontal();
      }}
    >
      <div className="strip" style={style}></div>
      <div className="strip" style={style}></div>
    </div>
  );
}

export default HorizontalBtn;
