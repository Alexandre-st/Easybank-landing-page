import mockups from "../assets/images/image-mockups.png";

const Homepage = () => {
  return (
    <main>
      <section className="hero container-img">
        <div className="hero-img">
          <img src={mockups} alt="Application mockups" />
        </div>
        <div className="hero-content">
          <h1 className="hero-content-title big-title">
            Next generation digital banking
          </h1>
          <p className="hero-content-text text">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="hero-content-button button">Request Invite</button>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
