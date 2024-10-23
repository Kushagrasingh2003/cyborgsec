import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"


const Footer = () => {
  return (
    <>
      <footer className="bg-white mt-20 md:flex md:flex-row flex-col">
        <div className="mx-auto max-w-screen-xl space-y-2 px-4 py-6 sm:px-6 lg:space-y-4 lg:px-2">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-600 flex justify-center md:justify-normal">
                <Image  src="/logo.png" alt="Logo" width="220" height="180" />
              </div>

              <ul className="mt-8 flex gap-6 justify-center md:justify-normal mb-4 md:mb-0">
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61550268785044">
                    <FaFacebook size={23} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/mcyberacademy/">
                    <FaInstagram size={23} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/mcyberacademy/">
                    <FaLinkedin size={23} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/channel/UCYgQk1T9VR_P78oNbq5J_jg">
                    <FaYoutube size={23} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap- sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900">Company</p>

                <ul className="md:mt-6 md:space-y-4 text-sm">

                  <li>
                    <Link
                      href="/directors"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Directors{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/careers/jobs"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Jobs{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/careers/summertraining"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Summer Training{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers/placementcell"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Placement Cell{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="hidden md:flex ">
                <p className="font-medium text-gray-900">Courses</p>

                <ul className="md:mt-6 md:space-y-4 text-sm w-36 -ml-14">
                  <li>
                    <Link
                      href="/course/six-months-diploma-program-in-cyber-forensic"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Six Months of certification in digital forensics{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/course/six-months-certification-course-in-cybersecurity"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Six Months Certification in cybersecurity{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/course/one-year-diploma-program-in-cybersecurity"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      One Year diploma course in cybersecurity{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p id="contactUs" className="font-medium text-gray-900 mt-3 md:mt-0">Support</p>

                <ul className="md:mt-6 md:space-y-4 text-sm">
                  <li>
                    <Link
                      href="/about-us"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Blogs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Gallery{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund-cancellation "
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Refund Policy{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900 mt-3 md:mt-0">Contact Info</p>

                <ul className="md:mt-6 md:space-y-4 text-sm">
                  <li>
                    <div
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      +919653533324,+919653533325
                    </div>
                  </li>

                  <li>
                    <Link
                      href="mailto:info@mcyberacadmey.com"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      info@mcyberacademy.com{" "}
                    </Link>
                  </li>

                  <li>
                    <div
                      
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      2nd Floor, Plot No - 129L, Maheshwara Complex, Model Town , Rohtak, Haryana ,India ,124001
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator />
          <p className="text-xs text-gray-500 text-center">
            &copy; 2023. M Cyber Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
