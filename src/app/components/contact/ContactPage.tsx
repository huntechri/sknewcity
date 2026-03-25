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
      data-oid="6_b-t83"
    >
      <div className="mb-16" data-oid=":n0e9qh">
        <div
          className="flex gap-2.5 items-center justify-center mb-3"
          data-oid="9avxs2w"
        >
          <span data-oid="g3-71on">
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-primary"
              data-oid="weyno17"
            />
          </span>
          <p
            className="text-base font-semibold text-badge dark:text-white/90"
            data-oid="l-fks40"
          >
            Контакты
          </p>
        </div>
        <div className="text-center" data-oid="qaijo0x">
          <h1
            className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14"
            data-oid="-1t7xcu"
          >
            Есть вопросы? Мы на связи
          </h1>
          <p
            className="text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6"
            data-oid="bdp7n34"
          >
            Поможем рассчитать стоимость, подобрать формат ремонта и сроки.
          </p>
        </div>
      </div>

      <div
        className="border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10"
        data-oid="1xqsc4g"
      >
        <div
          className="flex flex-col lg:flex-row lg:items-center gap-12"
          data-oid="_s36axv"
        >
          <div className="relative w-fit" data-oid="beam8sh">
            <Image
              src={"/images/contactUs/contactUs.jpg"}
              alt="Команда SK New City на консультации по ремонту квартиры"
              width={497}
              height={535}
              className="rounded-2xl brightness-50 h-full"
              unoptimized={true}
              data-oid="tj5xuzf"
            />

            <div
              className="absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2"
              data-oid="o87ug_2"
            >
              <h2
                className="text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white"
                data-oid="-yx_qvk"
              >
                Контактная информация
              </h2>
              <p
                className="text-sm xs:text-base mobile:text-xm font-normal text-white/80"
                data-oid="6h.x1yj"
              >
                Ответим на вопросы и подготовим смету под ваш объект.
              </p>
            </div>
            <div
              className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white"
              data-oid="njo59vt"
            >
              <Link
                href="tel:+79167673434"
                className="w-fit"
                data-oid="x7g6mxf"
              >
                <div
                  className="flex items-center gap-4 group w-fit"
                  data-oid="3_jfz5g"
                >
                  <Icon
                    icon={"ph:phone"}
                    width={32}
                    height={32}
                    data-oid="4.c6z1f"
                  />

                  <p
                    className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary"
                    data-oid="-ulo9in"
                  >
                    +7 916 767-34-34
                  </p>
                </div>
              </Link>
              <Link
                href="mailto:info@sk-new-city.ru"
                className="w-fit"
                data-oid="d3_e3al"
              >
                <div
                  className="flex items-center gap-4 group w-fit"
                  data-oid="wt9sa83"
                >
                  <Icon
                    icon={"ph:envelope-simple"}
                    width={32}
                    height={32}
                    data-oid="n45kq_l"
                  />

                  <p
                    className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary"
                    data-oid="bxf7pl0"
                  >
                    info@sk-new-city.ru
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-4" data-oid="0019i-a">
                <Icon
                  icon={"ph:map-pin"}
                  width={32}
                  height={32}
                  data-oid="9k:c1ix"
                />

                <p
                  className="text-sm xs:text-base mobile:text-xm font-normal"
                  data-oid="lssiwf3"
                >
                  г. Москва, ул. Митинская, д. 26
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1/2" data-oid="tzlpd7z">
            <form onSubmit={handleSubmit} data-oid="j3doifi">
              <div className="flex flex-col gap-8" data-oid="7yni.s2">
                <div
                  className="flex flex-col lg:flex-row gap-6"
                  data-oid="121609q"
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
                    data-oid="uff_eay"
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
                    data-oid="g4tbh_f"
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
                  data-oid="8w0z9u0"
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
                  data-oid="_wd:0fw"
                ></textarea>
                <button
                  className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300"
                  data-oid="bp85w87"
                >
                  Отправить заявку
                </button>
              </div>
              {submitted && (
                <p className="text-primary mt-4" data-oid="62wwym5">
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
