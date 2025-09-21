"use client";

import Image from "next/image";
import Link from "next/link";
import useStore from "../store";
import { contactText } from "../translations/contact";

const LocationHours = () => {
  const { language } = useStore() as { language: 'en' | 'es' };

  return (
    <section id="hours-location" className="relative scroll-mt-[120px]md:scroll-mt-[120px]">
      <div className="absolute right-0 top-0 z-[-1] opacity-40">
        <Image src="/bg-icons/pancake.svg" alt="Pancake icon" width={350} height={350} />
      </div>
      <div className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
        <div className="col-span-2 md:col-span-4 flex justify-center">
          <h2 className="font-pacifico text-4xl md:text-6xl">{contactText[language][0]}</h2>
        </div>
        <div className="col-span-2 order-2 md:order-1">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216787.84605841083!2d-102.58790711328132!3d31.898170999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbcf15cc83cd73%3A0xa493f52094164e70!2sBaskin-Robbins!5e0!3m2!1sen!2sus!4v1758416824187!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
        <div className="col-span-2 order-1 md:order-2 flex items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4 items-center">
              <Image src="/icons/clock.svg" alt="Clock Icon" width={32} height={32} />
              <p className="body-copy">
              {contactText[language][1]}<br />
              {contactText[language][2]}
              </p>
            </div>
            <div className="flex gap-x-4 items-center">
              <Image src="/icons/location-pin.svg" alt="Location Pin Icon" width={32} height={32} />
              <p className="body-copy">
              6900 Eastridge Rd <br/>
              Odessa, TX 79765</p>
            </div>
            <div className="flex gap-x-4 items-center">
              <Image src="/icons/phone.svg" alt="Telephone Icon" width={32} height={32} />
              <Link href="tel:11234567890" className="body-copy hover-link">(123) 456-7890</Link>
            </div>
            <div className="flex gap-x-4 items-center">
              <Image src="/icons/mail.svg" alt="Envelope Icon" width={32} height={32} />
              <Link href="mailto:" className="body-copy hover-link">icream@paleteria.com</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;
