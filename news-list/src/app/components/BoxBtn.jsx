import './BoxBtn.css';

function BoxBtn(props) {
  const { clickBtnBox, activBtnBox } = props;

  let style = {};

  if (activBtnBox) {
    style = { backgroundColor: '#0029FF' };
  } else {
    style = { backgroundColor: '#c4c4c4' };
  }

  return (
    <div
      className="boxBtn"
      onClick={() => {
        clickBtnBox();
      }}
    >
      <div className="box" style={style}></div>
      <div className="box" style={style}></div>
      <div className="box" style={style}></div>
      <div className="box" style={style}></div>
    </div>
  );
}

export default BoxBtn;
