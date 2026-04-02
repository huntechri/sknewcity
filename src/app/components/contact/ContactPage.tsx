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
      data-oid="p0t-1j-"
    >
      <div className="mb-16" data-oid="n..imux">
        <div
          className="flex gap-2.5 items-center justify-center mb-3"
          data-oid="k7ouevm"
        >
          <span data-oid="hi37ujq">
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-primary"
              data-oid="yyodd.d"
            />
          </span>
          <p
            className="text-base font-semibold text-badge dark:text-white/90"
            data-oid="3j5._z0"
          >
            Контакты
          </p>
        </div>
        <div className="text-center" data-oid=".egz:pl">
          <h1
            className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14"
            data-oid="kez05kt"
          >
            Есть вопросы? Мы на связи
          </h1>
          <p
            className="text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6"
            data-oid="q17nkn1"
          >
            Поможем рассчитать стоимость, подобрать формат ремонта и сроки.
          </p>
        </div>
      </div>

      <div
        className="border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10"
        data-oid="tra1kej"
      >
        <div
          className="flex flex-col lg:flex-row lg:items-center gap-12"
          data-oid="d41bhsj"
        >
          <div className="relative w-fit" data-oid="kpkk2cu">
            <Image
              src={"/images/contactUs/contactUs.jpg"}
              alt="Команда SK New City на консультации по ремонту квартиры"
              width={497}
              height={535}
              className="rounded-2xl brightness-50 h-full"
              unoptimized={true}
              data-oid="w9-id3y"
            />

            <div
              className="absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2"
              data-oid="my4srjz"
            >
              <h2
                className="text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white"
                data-oid="lg84nce"
              >
                Контактная информация
              </h2>
              <p
                className="text-sm xs:text-base mobile:text-xm font-normal text-white/80"
                data-oid=":q315ka"
              >
                Ответим на вопросы и подготовим смету под ваш объект.
              </p>
            </div>
            <div
              className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white"
              data-oid="pky5mmq"
            >
              <Link
                href="tel:+79167673434"
                className="w-fit"
                data-oid="krcuuee"
              >
                <div
                  className="flex items-center gap-4 group w-fit"
                  data-oid="zo_m33q"
                >
                  <Icon
                    icon={"ph:phone"}
                    width={32}
                    height={32}
                    data-oid=":oq3_w7"
                  />

                  <p
                    className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary"
                    data-oid="1er9lok"
                  >
                    +7 916 767-34-34
                  </p>
                </div>
              </Link>
              <Link
                href="mailto:info@sk-new-city.ru"
                className="w-fit"
                data-oid="ls9qy02"
              >
                <div
                  className="flex items-center gap-4 group w-fit"
                  data-oid="b3l93m6"
                >
                  <Icon
                    icon={"ph:envelope-simple"}
                    width={32}
                    height={32}
                    data-oid="o1m6u9w"
                  />

                  <p
                    className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary"
                    data-oid="o17k7-5"
                  >
                    info@sk-new-city.ru
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-4" data-oid="rgcyx8b">
                <Icon
                  icon={"ph:map-pin"}
                  width={32}
                  height={32}
                  data-oid="xt-wmjy"
                />

                <p
                  className="text-sm xs:text-base mobile:text-xm font-normal"
                  data-oid="lxp856w"
                >
                  г. Москва, ул. Митинская, д. 26
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1/2" data-oid="e13r0ec">
            <form onSubmit={handleSubmit} data-oid="b_2bpfv">
              <div className="flex flex-col gap-8" data-oid="1hoi2:1">
                <div
                  className="flex flex-col lg:flex-row gap-6"
                  data-oid="oc-69v9"
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
                    data-oid=":78dqlc"
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
                    data-oid="dfcbboa"
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
                  data-oid="iknz0me"
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
                  data-oid="4.99f4t"
                ></textarea>
                <button
                  className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300"
                  data-oid="dreljtv"
                >
                  Отправить заявку
                </button>
              </div>
              {submitted && (
                <p className="text-primary mt-4" data-oid="-znm7ld">
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
