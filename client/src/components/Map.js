import React from "react";

const Map = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-0 m-5" style={{ paddingBottom: "30%", position: "relative" }}>
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9786040122995!2d75.79486433642504!3d26.872420861924354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53715bec55d%3A0x26f4456d44d1d274!2sB%20R%20Sons%20Jewellers!5e0!3m2!1sen!2sin!4v1715589228725!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
