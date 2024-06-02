import React from "react";
import './Home.css';

const Whatsapp = () => {
  return (
    <div>
      <div class="msg-container">
        <div class="msg-icons">
          <i class="fa-solid fa-arrow-right-long msg-icon-1"></i>
          <i class="fa-solid fa-arrow-left-long msg-icon-2"></i>
        </div>
        <div id="msg-type"></div>
        <div class="whatsapp">
          <a href="https://wa.me/7014863105" target="_blank">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div class="sms">
          <a href="sms:+91-7568108383" target="_blank">
            <i class="fa-regular fa-message"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
