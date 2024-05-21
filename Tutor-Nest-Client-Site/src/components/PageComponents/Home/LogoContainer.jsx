import l1 from "../../../images/l1.png";
import l2 from "../../../images/l2.png";
import l3 from "../../../images/l3.png";
import l4 from "../../../images/l4.png";
import l5 from "../../../images/l5.png";
import l6 from "../../../images/l6.png";
import l7 from "../../../images/l7.png";
import l8 from "../../../images/l8.png";

export default function LogoContainer() {
  return (
    <div className="grid animate__animated animate__fadeInUp grid-cols-4 container mx-auto sm:grid-cols-8">
      <img src={l1} data-aos="zoom-in-up" alt="logo" className="w-full" />
      <img src={l2} data-aos="zoom-in-up" alt="logo" className="w-full" />
      <img src={l3} data-aos="zoom-in-up" alt="logo" className="w-full" />
      <img src={l4} data-aos="zoom-in-up" alt="logo" className="w-full" />
      <img src={l5} data-aos="zoom-in-up" alt="logo" className="w-full" />
      <img src={l6} data-aos="zoom-in-up" alt="logo" className="w-full" />
      <img src={l7} data-aos="zoom-in-up" alt="logo" className="w-full" />
      <img src={l8} data-aos="zoom-in-up" alt="logo" className="w-full" />
    </div>
  );
}
