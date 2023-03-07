const Description = (props) => {
    return (
      <div className="description-content-article">
        <img className="description-content-article-image" src={props.image} alt="logo" />
        <h3>{props.title}</h3>
        <p className="mid-text">{props.text}</p>
      </div>
    );
  }; 

  export default Description;