import { AnimatePresence, motion } from "framer-motion";
import Article from "../components/Article";
import Description from "../components/Description";
// Image for the description
import Api from "../assets/images/icon-api.svg";
import Budgeting from "../assets/images/icon-budgeting.svg";
import Onboarding from "../assets/images/icon-onboarding.svg";
import Banking from "../assets/images/icon-online.svg";
// Import for the Article part
import Confetti from "../assets/images/image-confetti.jpg";
import Dollars from "../assets/images/image-currency.jpg";
import Plane from "../assets/images/image-plane.jpg";
import Restaurant from "../assets/images/image-restaurant.jpg";
// Image for the Hero
import mockups from "../assets/images/image-mockups.png";

const Homepage = () => {

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
      <section className="articles">
        <div className="container articles-container">
          <h3 className="mid-title">Latest Articles</h3>

          <div className="articles-content">
            <Article
              image={Dollars}
              name="By Claire Robinson"
              title="Receive money in any currency with no fees"
              paragraph="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
            />
            <Article
              image={Restaurant}
              name="By Wilson Hutton"
              title="Treat yourself without worrying about money"
              paragraph="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
            />
            <Article
              image={Plane}
              name="By Wilson Hutton"
              title="Take your Easybank card wherever you go"
              paragraph="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
            />
            <Article
              image={Confetti}
              name="By Claire Robinson"
              title="Our invite-only Beta accounts are now live!"
              paragraph="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
