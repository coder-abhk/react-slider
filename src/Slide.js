const Slide = (props) => {
  return (
    <div className="slide">
      <div className="slide__image">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="slide__caption">
        <h1>{props.caption}</h1>
      </div>
    </div>
  );
};

export default Slide;
