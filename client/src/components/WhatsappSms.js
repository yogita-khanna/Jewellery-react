import React, {useState} from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaCommentSms } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const WhatsappSms = () => {
    const [showIcons, setShowIcons] = useState(true);

    const toggleIconsVisibility = () => {
        setShowIcons(!showIcons);
    };
  return (
    <div>
        <div className="fixed bottom-[25%] left-1 z-50 flex flex-col space-y-0 text-xl font-light cursor-pointer">
          <div
            className="flex justify-center ml-2 items-center py-2 px-3 bg-blue-500 rounded-lg"
            onClick={toggleIconsVisibility}
          >
            {showIcons ? <FaLongArrowAltLeft /> : <FaLongArrowAltRight />}
          </div>
          <div id="msg-type" className="text-white text-center py-2"></div>
          {showIcons && (
            <div className="">
              <div className="whatsapp ml-2 flex items-center justify-center py-1 px-1 bg-green-500 rounded-lg hover:bg-green-600">
                <a
                  href="https://wa.me/7014863105"
                  target="_blank"
                  className="text-white flex items-center"
                >
                  <div className="mr-1">
                    <FaWhatsapp />
                  </div>
                  {/* <span>WhatsApp</span> */}
                </a>
              </div>
              <div className="sms flex mt-1 ml-2 items-center justify-center py-1 px-1 bg-blue-600 rounded-lg hover:bg-blue-700">
                <a
                  href="sms:+91-7014863105"
                  target="_blank"
                  className="text-white flex items-center"
                >
                  <div className="mr-2">
                    <FaCommentSms />
                  </div>
                  {/* <span>SMS</span> */}
                </a>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default WhatsappSms