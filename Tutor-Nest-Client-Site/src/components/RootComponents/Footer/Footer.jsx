import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import image from "../../../images/logo.png";
import app1 from "../../../images/app1.png";
import app2 from "../../../images/app2.png";
import app3 from "../../../images/app3.png";

export default function Footer() {
  return (
    <div
      data-aos="fade-up"
      className=" w-full sizefooter bg-neutral text-neutral-content"
    >
      <footer data-aos="fade-up" className="footer p-10 container mx-auto">
        <nav data-aos="fade-up">
          <h6 className="footer-title">Services</h6>
          <Link to={`/`} className="link link-hover">
            Home
          </Link>
          <Link to={`/about`} className="link link-hover">
            About
          </Link>
          <Link to={`/services`} className="link link-hover">
            Services
          </Link>
          <Link to={`/addServices`} className="link link-hover">
            Add Service
          </Link>
        </nav>
        <nav data-aos="fade-up">
          <h6 className="footer-title">Social Contact</h6>
          <Link
            href="https://web.facebook.com/"
            className="flex justify-center items-center gap-3"
          >
            <FaFacebook />
            <p>Facebook</p>
          </Link>
          <Link
            href="https://www.instagram.com/"
            className="flex justify-center items-center gap-3"
          >
            <FaSquareInstagram />
            <p>Instagram</p>
          </Link>
          <Link
            href="https://twitter.com/home"
            className="flex justify-center items-center gap-3"
          >
            <FaSquareTwitter />
            <p>Twitter</p>
          </Link>
          <Link
            href="https://web.whatsapp.com/"
            className="flex justify-center items-center gap-3"
          >
            <IoLogoWhatsapp />
            <p>WhatsApp</p>
          </Link>
        </nav>
        <nav data-aos="fade-up">
          <h6 className="footer-title">Other Contact</h6>
          <Link className="my-2">
            +1234567890 <br /> john.doe@gmail.com
          </Link>
          <Link className="my-2">
            +0987654321 <br /> jane.smith@gmail.com
          </Link>
          <Link className="my-2">
            +1122334455 <br /> alice.johnson@gmail.com
          </Link>
        </nav>
        <nav data-aos="fade-up">
          <h6 className="footer-title">Get Our App</h6>
          <div className="flex items-center">
            <img src={app1} className="w-[100px] cursor-pointer m-2" alt="" />
            <img src={app2} className="w-[120px] cursor-pointer m-2" alt="" />
          </div>
          <div className="flex items-center">
            <img src={app3} className="w-[150px] cursor-pointer mx-2" alt="" />
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-neutral text-neutral-content border-base-300">
        <aside className="items-center grid-flow-col">
          <img
            src={image}
            className="w-[60px] bg-gray-400 rounded-md h-[50px]"
            alt=""
          />
          <p>
            Tutor <span className="text-orange-500">Nest</span>
            <br />
            copyright &copy; services 2024
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link href="https://twitter.com/home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link href="https://www.youtube.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link href="https://web.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
