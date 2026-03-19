"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const reset = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL || "bhainirav772@gmail.com"}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
        }),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data.success);
        reset();
      })
      .catch(() => {
        // Silent failure keeps the form usable without exposing internals.
      });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div
      className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28"
      data-oid="9aeaa5n"
    >
      <div className="mb-16" data-oid="a36ow8r">
        <div
          className="flex gap-2.5 items-center justify-center mb-3"
          data-oid="xep:gyu"
        >
          <span data-oid="zfx4xgh">
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-primary"
              data-oid="psd3kuk"
            />
          </span>
          <p
            className="text-base font-semibold text-badge dark:text-white/90"
            data-oid="m0hm7bt"
          >
            Контакты
          </p>
        </div>
        <div className="text-center" data-oid="4p3wajl">
          <h1
            className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14"
            data-oid=".w499t_"
          >
            Есть вопросы? Мы на связи
          </h1>
          <p
            className="text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6"
            data-oid="4j0cfcf"
          >
            Поможем рассчитать стоимость, подобрать формат ремонта и сроки.
          </p>
        </div>
      </div>

      <div
        className="border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10"
        data-oid="68f2ogg"
      >
        <div
          className="flex flex-col lg:flex-row lg:items-center gap-12"
          data-oid="2km991w"
        >
          <div className="relative w-fit" data-oid="oh__g86">
            <Image
              src={"/images/contactUs/contactUs.jpg"}
              alt="Команда SK New City на консультации по ремонту квартиры"
              width={497}
              height={535}
              className="rounded-2xl brightness-50 h-full"
              unoptimized={true}
              data-oid="d_vhkce"
            />

            <div
              className="absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2"
              data-oid="pl757ek"
            >
              <h2
                className="text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white"
                data-oid="8tz_7v5"
              >
                Контактная информация
              </h2>
              <p
                className="text-sm xs:text-base mobile:text-xm font-normal text-white/80"
                data-oid="_k2vgid"
              >
                Ответим на вопросы и подготовим смету под ваш объект.
              </p>
            </div>
            <div
              className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white"
              data-oid="y.afwmy"
            >
              <Link
                href="tel:+79167673434"
                className="w-fit"
                data-oid="jv40aw7"
              >
                <div
                  className="flex items-center gap-4 group w-fit"
                  data-oid="u.oh2gt"
                >
                  <Icon
                    icon={"ph:phone"}
                    width={32}
                    height={32}
                    data-oid="7:ooa2w"
                  />
                  <p
                    className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary"
                    data-oid="fhgn:3h"
                  >
                    +7 916 767-34-34
                  </p>
                </div>
              </Link>
              <Link
                href="mailto:info@sk-new-city.ru"
                className="w-fit"
                data-oid="kp5_a0a"
              >
                <div
                  className="flex items-center gap-4 group w-fit"
                  data-oid="d29-6ki"
                >
                  <Icon
                    icon={"ph:envelope-simple"}
                    width={32}
                    height={32}
                    data-oid="5fj-bh3"
                  />
                  <p
                    className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary"
                    data-oid="uavo23i"
                  >
                    info@sk-new-city.ru
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-4" data-oid="4m23v3g">
                <Icon
                  icon={"ph:map-pin"}
                  width={32}
                  height={32}
                  data-oid="87ndsxn"
                />
                <p
                  className="text-sm xs:text-base mobile:text-xm font-normal"
                  data-oid="-29y5_d"
                >
                  г. Москва, ул. Митинская, д. 26
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1/2" data-oid="5.ppimd">
            <form onSubmit={handleSubmit} data-oid=".a0rw1d">
              <div className="flex flex-col gap-8" data-oid="obb-ixj">
                <div
                  className="flex flex-col lg:flex-row gap-6"
                  data-oid="lohcel."
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Имя*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                    data-oid="t.y3ui4"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    autoComplete="tel"
                    placeholder="Телефон*"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                    data-oid="to99fey"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline"
                  data-oid="6uzspvg"
                />

                <textarea
                  rows={8}
                  cols={50}
                  name="message"
                  id="message"
                  placeholder="Опишите задачу и площадь"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline"
                  data-oid="upn8zxz"
                ></textarea>
                <button
                  className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300"
                  data-oid="-f.9xk4"
                >
                  Отправить заявку
                </button>
              </div>
              {submitted && (
                <p className="text-primary mt-4" data-oid="zx7jtdo">
                  Спасибо! Сообщение отправлено, мы свяжемся с вами в ближайшее
                  время.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
