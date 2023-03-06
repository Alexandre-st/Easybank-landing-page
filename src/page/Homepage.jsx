import { AnimatePresence, motion } from "framer-motion";
// Image for the description
import Api from "../assets/images/icon-api.svg";
import Budgeting from "../assets/images/icon-budgeting.svg";
import Onboarding from "../assets/images/icon-onboarding.svg";
import Banking from "../assets/images/icon-online.svg";
// Image for the Hero
import mockups from "../assets/images/image-mockups.png";

const Homepage = () => {

  const Description = (props) => {
    return (
      <div className="description-content-article">
        <img className="description-content-article-image" src={props.image} alt="logo" />
        <h3>{props.title}</h3>
        <p className="mid-text">{props.text}</p>
      </div>
    );
  }; 

  return (
    <main>
      <AnimatePresence>
        <motion.section
          className="hero container-img"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
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
            <button className="hero-content-button button">
              Request Invite
            </button>
          </div>
        </motion.section>
      </AnimatePresence>
      {/* Why Choose Easybank */}
      <section className="description">
        <div className="container description-container">
          <div className="description-header">
            <h2 className="mid-title">Why choose Easybank?</h2>
            <p className="text">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="description-content">
            <Description
              image={Banking}
              title="Online Banking"
              text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
            />
            <Description
              image={Budgeting}
              title="Simple Budgeting"
              text="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
            />
            <Description
              image={Onboarding}
              title="Fast Onboarding"
              text="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
            />
            <Description
              image={Api}
              title="Open API"
              text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
