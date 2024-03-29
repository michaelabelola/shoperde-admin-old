import React, { Component, FC } from "react";
import { BiRightArrowAlt, BiStar } from "react-icons/bi";
import { FaEdit, FaShieldAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "../Button/Button";
import styles from "./Dashboard.module.scss";
import { Link } from 'react-router-dom';

interface DashboardProps { }

var textO: string = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
laboriosam? Assumenda eaque magni, laboriosam inventore officia,
tenetur dolore`;
const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.Dashboard}>
    <div className={styles.View1} style={{ background: "url('http://localhost/cover2.jpg')" }}></div>

    <h3>
      Businesses (<small>6</small>)
    </h3>
    <div className={styles.myGrid}>
      <CardType1 title="Register Business" link="/registerBusiness" icon={<FaEdit />} />
      <CardType1 title="Total Sales" subTitle="32,747,534 sales" link="/ratings" />
      <CardType1 title="Rating" subTitle="Gbo e gbo e" link="/ratings" />
      <CardType1 title="Rating" subTitle="Gbo e gbo e" />
      <CardType1 title="Rating" subTitle="Gbo e gbo e" link="/ratings" />
      <CardType1 title="Rating" subTitle="Gbo e gbo e" link="/ratings" />
      <CardType1 title="Rating" subTitle="Gbo e gbo e" link="/ratings" />
      <CardType1 title="Rating" subTitle="Gbo e gbo e" />
    </div>
    <div className={styles.myGrid}>
      <BusinessCard name="Noon Burgers" text={textO} coverImage={process.env.REACT_APP_BASE_URL + "cover1.jpg"} logo={process.env.REACT_APP_BASE_URL + "logo.png"} />
      <BusinessCard name="Mhunis" text={textO} coverImage={process.env.REACT_APP_BASE_URL + "cover2.jpg"} logo={process.env.REACT_APP_BASE_URL + "logo1.png"} />
      <BusinessCard name="Dave Eateries" text={textO} coverImage={process.env.REACT_APP_BASE_URL + "cover3.jfif"} logo={process.env.REACT_APP_BASE_URL + "logo2.png"} />
      <BusinessCard name="Emoji" text={textO} coverImage={process.env.REACT_APP_BASE_URL + "cover4.jpg"} logo={process.env.REACT_APP_BASE_URL + "logo3.png"} />
      <BusinessCard name="Mark Up Treats" text={textO} coverImage={process.env.REACT_APP_BASE_URL + "cover5.jfif"} logo={process.env.REACT_APP_BASE_URL + "logo4.png"} />
      <BusinessCard name="Solar Foods" text={textO} coverImage={process.env.REACT_APP_BASE_URL + "cover1.jpg"} logo={process.env.REACT_APP_BASE_URL + "logo1.png"} link="/ter" />
    </div>

  </div>
);
interface Card1Props {
  link?: string;
  title?: string;
  subTitle?: string;
  icon?: any;
}
interface Card1State {
  mainContent?: any;
}
class CardType1 extends Component<Card1Props, Card1State> {
  constructor(props: Card1Props) {
    super(props);
    this.state = {
      mainContent: (
        <div className={styles.card1}>
          {this.props.icon ? (<div className={styles.card1Icon}>{this.props.icon}</div>):""}
          <div className={styles.card1Body}>
            {this.props.title ? (<h3 className={styles.title}>{this.props.title}</h3>) : ""}
            {this.props.subTitle ? (<p className={styles.subText}>{this.props.subTitle}</p>) : ""}
          </div>
          <div className={styles.endArrow}><BiRightArrowAlt /></div>
        </div>
      )
    }
  }

  render() {
    if (this.props.link) {
      return (
        <div className={styles.card1Holder}>
          <Link to={this.props.link}>
            {this.state.mainContent}
          </Link>
        </div>
      )
    }
    return (
      <div className={styles.card1Holder}>
        {this.state.mainContent}
      </div>
    )
  }
}

interface BusinessCardProps {
  name?: string;
  text?: string;
  coverImage?: string;
  logo?: string;
  link?: string;
}
class BusinessCard extends Component<BusinessCardProps> {
  render() {
    return (
      <div className={styles.BusinessCardHolder}>
        <div className={styles.BusinessCard}>
          <div className={styles.coverImg} style={{ backgroundImage: 'url(' + this.props.coverImage + ')' }}>
            <div className={styles.coverTint}>

            </div>
          </div>
          <div className={styles.topView}>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />

            </div>
          </div>
          <div className={styles.logo}>
            <img src={this.props.logo} alt="logo" />
          </div>
          <div className={styles.title}>{this.props.name}<span> <FaShieldAlt /></span></div>
          <div className={styles.body}>
            {this.props.text}
          </div>
          <div className={styles.buttonsHolder}>
            <Button text={"View"} />
            <Button link={this.props.link} text={"Open"} />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
