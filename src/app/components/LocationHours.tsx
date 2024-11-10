import Image from "next/image";
import Link from "next/link";

const LocationHours = () => {
  return (
    <section className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
      <div className="col-span-2 md:col-span-4 flex justify-center">
        <h2 className="font-pacifico text-6xl">Hours & Location</h2>
      </div>
      <div className="col-span-2">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.967129321234!2d-102.40149482437178!3d31.934649774026973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbc7d16e91ac6f%3A0x369ae8444040c66d!2s980%20E%2087th%20St%20g%2C%20Odessa%2C%20TX%20797651318!5e0!3m2!1sen!2sus!4v1730574653746!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="col-span-2">
        LOCATION HOURS HERE
      </div>
    </section>
  );
};

export default LocationHours;
