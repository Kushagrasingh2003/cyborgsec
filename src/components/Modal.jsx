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
import { CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDisclosure } from "@chakra-ui/react";

const ModalLayout = ({desc,syllabus}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} size="sm" variant="outline">
        <CirclePlay className="mr-2 h-4 w-4" />
        What You Will Learn
      </Button>
      <div className="flex-col">
        <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent >
            <ModalHeader>Course <span className="text-red-700">Content</span></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <p className="font-light text-md">{desc}</p>
                <div>
                    <h2 className="font-semibold text-lg mt-4">What you&apos;ll <span className="text-red-700">Learn</span></h2>
                    <ol className="">
                    {syllabus.map((item)=>(
                        
                            <li className="font-light" key={item.id}>{item}</li>
                    )

                    )}
                        </ol>
                    {/* <p>{syllabus}</p> */}
                </div>
            </ModalBody>

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

export default ModalLayout;
