const ProgressBar = ({ value, icon: Icon }) => {
    const normalizedValue = Math.min(Math.max(value, 0), 100);
  
    return (
      <div className="progressbar">
        <div
            className="progressbar__back"
            style={{
                height: `${normalizedValue}%`
            }}
        ></div>
        <img className='progressbar__front' src={`/img/icons/${Icon}-maison.svg`} alt="" />
      </div>
    );
  };

export default ProgressBar;