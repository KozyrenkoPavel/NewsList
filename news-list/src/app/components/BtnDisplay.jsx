import './BtnDisplay.css';

function BtnDisplay(props) {
  const { clickBtn, isBox, isPaint, clas } = props;

  let style = {};

  if (isPaint) {
    style = { backgroundColor: '#0029FF' };
  }

  return (
    <div
      className="boxBtn"
      onClick={() => {
        clickBtn();
      }}
    >
      <div className={clas} style={style}></div>
      <div className={clas} style={style}></div>
      {isBox ? (
        <>
          <div className={clas} style={style}></div>
          <div className={clas} style={style}></div>
        </>
      ) : (
        false
      )}
    </div>
  );
}

export default BtnDisplay;
