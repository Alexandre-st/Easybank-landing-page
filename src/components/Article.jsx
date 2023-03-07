const Article = (props) => {
  return (
    <article className="article">
      <img className="article-img" src={props.image} alt="Illustration" />
      <div className="article-content">
        <p className="article-content-name">{props.name}</p>
        <h4 className="article-content-title">{props.title}</h4>
        <p className="lil-text">{props.paragraph}</p>
      </div>
    </article>
  );
};

export default Article;
