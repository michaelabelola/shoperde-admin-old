import React, { Component, FC } from "react";
import Button from "../Button/Button";
import styles from "./Dashboard.module.scss";

interface DashboardProps {}

var textO:string = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
laboriosam? Assumenda eaque magni, laboriosam inventore officia,
tenetur dolore`;
const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.Dashboard}>
    <div className={styles.View1}></div>
    <h3>
      Businesses (<small>12</small>)
    </h3>
    <div className={styles.myGrid}>
    <BusinessCard name="Noon Burgers" text={textO} coverImage="http://localhost:5500/coverImg1.jpeg" logo="http://localhost:5500/logo1.png" link="" />
    <BusinessCard name="Mhunis" text={textO} coverImage="http://localhost:5500/coverImg2.jpeg" logo="http://localhost:5500/logo2.webp" link="" />
    <BusinessCard name="Dave Eateries" text={textO} coverImage="http://localhost:5500/coverImg3.webp" logo="http://localhost:5500/logo.svg" link="" />
    <BusinessCard name="Emoji" text={textO} coverImage="http://localhost:5500/coverImg4.jpeg" logo="http://localhost:5500/logo.svg" link="" />
    <BusinessCard name="Mark Up Treats" text={textO} coverImage="http://localhost:5500/coverImg5.jpeg" logo="http://localhost:5500/logo1.png" link="" />
    <BusinessCard name="Solar Foods" text={textO} coverImage="http://localhost:5500/coverImg6.jpeg" logo="http://localhost:5500/logo2.webp" link="" />
    </div>
    <h3>Finances</h3>
    <div className={styles.myGrid}>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  </div>
);

interface BusinessCardProps {
name?: string;
text?:string;
coverImage?:string;
logo?:string;
link?:string;
}
class BusinessCard extends Component<BusinessCardProps> {
  render() {
    return (
      <div>
      <div className={styles.BusinessCard}>
        <div className={styles.coverImg} style={{backgroundImage: 'url(' + this.props.coverImage + ')'}}></div>
        <div className={styles.topView}>
        <div className={styles.star}>
ggggg
        </div>
        </div>
        <div className={styles.logo}>
          <img src={this.props.logo} alt="logo" />
        </div>
        <div className={styles.title}>{this.props.name}</div>
        <div className={styles.body}>
        {this.props.text}
        </div>
        <div className={styles.buttonsHolder}>
          <Button text={"Hello"} />
          <Button link={this.props.link} text={"Open"} />
        </div>
      </div>
    </div>
    )
  }
}

export default Dashboard;
