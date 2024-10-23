"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { useDisclosure } from "@chakra-ui/react";
import {updateUser} from "@/lib/actions"
import React from "react";
import { useRouter } from "next/navigation";
import { payment } from "@/lib/ServerActions";


const Joinlayout = ({disabled,firstname,lastname,email,course,user,content,amount,kindeUserId,mode}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const username = firstname + " " + lastname;

  const router = useRouter();

  // const [data, setData] = useState();

  // const handleFormData = (e) => {
  //   // console.log(e.target.value);
  //   const dd = { ...data, [e.target.name]: e.target.value };
  //   setData(dd);
  // };

  const userId = user;
  const courseId = course;

const FormSubmit = ()=>(
  alert("Data Saved successfully")
 
)
  const makePayment = async (e) => {
    e.preventDefault();
    const redirect = await payment();
    console.log("redirect>>>",redirect.url)
     router.push(redirect.url);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        disabled={disabled}
        size="sm"
        style={{ backgroundColor: "#e50202" }}
      >
        {content}
      </Button>
      <div className="flex-col">
        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          size="xl"
          scrollBehavior="inside"
        >
        
          <ModalOverlay />
          <ModalContent >
            <div className="overflow-auto mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Enrole Now!</h1>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  libero nulla eaque error neque ipsa culpa autem, at itaque
                  nostrum!
                </p>
              </div>

              <form action={updateUser} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                <input className="sr-only" value={user} name="id"/>
                <input className="sr-only" value="" name="transactionId"/>
                <input className="sr-only" value={kindeUserId} name="loginId"/>
                <input className="sr-only" value="pending" name="paymentStatus"/>
                  <label >
                     Name
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      // readOnly
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      //  placeholder={username}
                      //  value={username}
                      name="name"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                  </div>
                </div>
                

                <div>
                  <label  className="mt-3">
                    Email
                  </label>

                  <div className="relative">
                  <div className="mt-4"></div>
                    <input
                      type="email"
                      // readOnly
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder={email}
                      name="email"
                      // value={email}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                  </div>
                  <div className="mt-4">
                  <label  className="mt-3">
                     Amount:
                  </label>

                  <div className="relative">
                    <input
                      type="tel"
                      // readOnly
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Amount"
                      name="amount"
                      // value={amount}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                  </div>
                  </div>
                  <div className="mt-4">
                  <label  className="mt-3">
                     Phone No.:
                  </label>

                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Phone Number"
                      name="phone"
                      required
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                  </div>
                  </div>
                  <div className="mt-4">
                  <label className="mt-3">
                     State:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="State"
                      name="state"
                      required
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                  </div>
                  </div>
                  <div className="mt-4">
                  {/* <label  >
                     Course Id:
                  </label> */}
                  <div>
                    <input
                      // className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      className="sr-only"
                      value={course}
                      name="courseId"
                    />

                    {/* <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span> */}
                  </div>
                  </div>
                  {mode === "" &&
                  <div className="mt-4">
                  <label for="dropdown" className="text:sm">Learning Mode</label>
                  <select
                    id="dropdown"
                    name="mode"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  >
                    <option value="Offline Training" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">Offline Training</option>
                    <option value="Online Training" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">Online Training</option>
                    <option value="1-To-1 Training" className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm">1-To-1 Training</option>
                  </select>
                </div>
              }
              {mode === "Offline Training" && 
                <input
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      
                      name="mode"
                      required
                      value={mode}
                      readOnly
                    />}
              {mode === "Online Training" && 
                <input
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      
                      name="mode"
                      required
                      value={mode}
                      readOnly
                    />}
              {mode === "1-To-1 Training" && 
                <input
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      
                      name="mode"
                      required
                      value={mode}
                      readOnly
                    />}
                </div>
                <div>
                  <p className="flex items-center"><span >*</span>Save before Next</p>
                </div>
                <div className="flex justify-end gap-6">
                <button
                  type="submit"
                  onClick={() => FormSubmit()}
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Save
                </button>
                <button
                  // type="submit"
                  onClick={(e) => makePayment(e)}
                  className="inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
                >
                  Next
                </button>
                </div>
              </form>
            </div>
            <ModalCloseButton />
            {/* <ModalBody>
              <p className="font-light text-md">{desc}</p>
              <div>
                <h2 className="font-semibold text-lg mt-4">
                  What you&apos;ll <span className="text-red-700">Learn</span>
                </h2>
                <ol className="list-decimal">
                  {syllabus.map((item) => (
                    <li className="font-light" key={item.id}>
                      {item}
                    </li>
                  ))}
                </ol>
                <p>{syllabus}</p>
              </div>
            </ModalBody> */}

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Joinlayout;
