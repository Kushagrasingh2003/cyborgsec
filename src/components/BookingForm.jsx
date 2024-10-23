"use client"
import { addBooking } from "@/lib/actions";
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
export default function Page({mode}) {
  const blockInvalidChar = e => ['e', 'E','+','-'].includes(e.key) && e.preventDefault()
    const FormSubmit = ()=>(
        alert("Booking Created successfully") 
       
      )
    return (
        <div className="w-[80%] md:w-1/3 items-center p-4 md:p-8 rounded-2xl shadow-md mt-10 mx-auto"
              style={{
                background: "rgba(0, 0, 0, 0.20)",
                backdropFilter: "blur(10px)",
                maxWidth: "400px", // Restrict maximum width
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold text-red-600">
                  Book a Demo Class, For Free!
                </h2>
              </div>
              <form
                action={addBooking} 
                className="mt-4 md:mt-8 space-y-4 md:space-y-6"
              >
                <div></div>
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-lg border-gray-200 p-2 md:p-4 text-sm shadow-sm"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-lg border-gray-200 p-2 md:p-4 text-sm shadow-sm"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <div>
                    <input
                      type="number"
                      name="phone"
                      className="w-full rounded-lg border-gray-200 p-2 md:p-4 text-sm shadow-sm"
                      placeholder="Enter Phone Number"
                      onKeyDown={blockInvalidChar}
                      required
                    />
                  </div>
                </div>
                <div>
                {mode === "" &&
                  <div className="mt-4">
                  <label htmlFor="dropdown" className="text:sm sr-only">Courses</label>
                  <select
                    id="dropdown"
                    name="course"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    required
                  >
                    <option value="6 Months Diploma In Cyber Security" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">Six Months Certification In Cyber Security</option>
                    <option value="6 Months Diploma in Cyber Forensics" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">Six Months Certification in Cyber Forensics</option>
                    <option value="1 Year Diploma In Cyber Security" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">One Year Diploma In Cyber Security</option>
                  </select>
                </div>
              }
              {mode != "" && 
                <input
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      name="course"
                      required
                      value={mode}
                      readOnly
                    />}
                </div>
                <button
                  type="submit"
                  onClick={() => FormSubmit()}
                  className="w-full py-2 md:py-3 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600"
                >
                  Continue Booking Demo Live Class
                </button>
              </form>
              <div className="text-center">
              Already have an account? <span> <LoginLink className="inline-block rounded-lg  px-3 py-3 text-sm font-medium text-blue-500">Click here</LoginLink></span>
              </div>
            </div>
    );
}