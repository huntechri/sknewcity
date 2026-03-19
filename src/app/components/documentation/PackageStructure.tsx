import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import tline from "/public/images/svgs/T-Line.svg";
import t_half_line from "/public/images/svgs/T-half_line.svg";
import straight_line from "/public/images/svgs/straight_group.svg";
import small_straight_line from "/public/images/svgs/smal_straight_line.svg";

export const PackageStructure = () => {
  const Counts = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <div
      id="structure"
      className="md:scroll-m-[130px] scroll-m-28"
      data-oid="3ay9r:8"
    >
      <h3
        className=" text-black text-2xl font-semibold mt-8 dark:text-white"
        data-oid="cjthql2"
      >
        Pacakge Structure
      </h3>
      <div
        className="rounded-2xl p-6 pt-3 border border-black/10 dark:border-white/20 mt-6"
        data-oid="3elk41-"
      >
        <div className="flex items-center gap-4" data-oid="y7dkbll">
          <h5 className="text-base font-medium mt-3 mb-1" data-oid="jrohpt7">
            Структура проекта SK New City
          </h5>
        </div>
        <ul className="ps-0 md:ps-5 list-unstyled" data-oid="bligg2s">
          <li className="py-2" data-oid="f30m_jg">
            <div className="flex items-center gap-3" data-oid="d:zedok">
              <p
                className="text-xl text-black dark:text-white/50"
                data-oid="t1b5tuq"
              >
                |—
              </p>
              <span
                className="font-medium text-dark dark:text-white/50"
                data-oid="zx5iagf"
              >
                <Icon
                  icon="tabler:folder"
                  className="text-primary text-base inline-block me-2"
                  data-oid="oenh149"
                />
                packages
              </span>
            </div>
            <ul className="ps-5 md:ps-5 list-unstyled" data-oid="ytp8bzd">
              <li className="py-0" data-oid=".:uxl4l">
                <ul className="ps-2 ps-md-3 list-unstyled" data-oid="gvqo0cx">
                  <li className="py-2" data-oid="7hvt-7-">
                    <ul
                      className="ps-0 md:ps-5 list-unstyled"
                      data-oid="zby8-r9"
                    >
                      <li className="py-2" data-oid="d-5kanx">
                        <div
                          className="flex items-center gap-3"
                          data-oid="q0dieey"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="c7say7s"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="ph_ropw"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="f8rkktx"
                            />
                            markdown
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="z1:asks">
                        <div
                          className="flex items-center gap-3"
                          data-oid="xw1zh.-"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="bkggr-7"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="c2aguxc"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="67y.cda"
                            />
                            public
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="snvkfzm">
                        <div
                          className="flex items-center gap-3"
                          data-oid="36lofux"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid=":97wz2r"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="lz371:t"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="1mg-3_d"
                            />
                            src
                          </span>
                        </div>
                        <div className="flex" data-oid="eq7diud">
                          <div
                            className="flex flex-col justify-between gap-2 mt-2"
                            data-oid="x5m6ds_"
                          >
                            {Counts.slice(0, 19).map((item, index) => {
                              return (
                                <p
                                  key={index}
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="q4ng3wn"
                                >
                                  |
                                </p>
                              );
                            })}
                          </div>
                          <ul
                            className="ps-5 md:ps-12 list-unstyled"
                            data-oid="zpfynbn"
                          >
                            <li className="py-2" data-oid="8pyd-bp">
                              <div
                                className="flex items-center gap-3"
                                data-oid="w_8d-m2"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="9.b3rrr"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="-s2eg9h"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="pnmkc-v"
                                  />
                                  app
                                </span>
                              </div>
                              <div className="flex" data-oid="4id0ypn">
                                <div
                                  className="flex flex-col justify-between gap-2 mt-2"
                                  data-oid="cr6r03z"
                                >
                                  {Counts.slice(0, 12).map((item, index) => {
                                    return (
                                      <p
                                        key={index}
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="xu3mqko"
                                      >
                                        |
                                      </p>
                                    );
                                  })}
                                </div>
                                <ul
                                  className="ps-5 md:ps-12 list-unstyled red"
                                  data-oid="p0ddahv"
                                >
                                  <li className="py-2" data-oid="f1to0hz">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="k:lu:c7"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="bdriwv5"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="ue:okwm"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="lb8i05i"
                                        />
                                        (site)
                                      </span>{" "}
                                      <span
                                        className="fs-9 text-dark dark:text-white/50 ms-4"
                                        data-oid="vvaf-ib"
                                      >
                                        (Contains all the pages)
                                      </span>
                                    </div>
                                    <div className="flex" data-oid=":xi6vdr">
                                      <div
                                        className="flex flex-col justify-between gap-2 mt-2"
                                        data-oid="93ci_ag"
                                      >
                                        {Counts.slice(0, 5).map(
                                          (item, index) => {
                                            return (
                                              <p
                                                key={index}
                                                className="text-xl text-black dark:text-white/50"
                                                data-oid="8rv.uta"
                                              >
                                                |
                                              </p>
                                            );
                                          },
                                        )}
                                      </div>

                                      <ul
                                        className="ps-5 md:ps-12 list-unstyled"
                                        data-oid="ef0q3qt"
                                      >
                                        <li className="py-2" data-oid="udsqjp5">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="w_i4zvy"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="9ein58l"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="dn4thf6"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="j95q8tk"
                                              />
                                              (auth) (Contains all the auth
                                              pages)
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="9v9tr7b">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="_t-dd6h"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="4mf4qd4"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="pos_n9_"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="_.ogstj"
                                              />
                                              blogs
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="m_dzfnl">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="aht3tg_"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="j.p.hll"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="p.0sorz"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="94:vk6w"
                                              />
                                              contactus
                                            </span>
                                          </div>
                                        </li>

                                        <li className="py-2" data-oid="lnu_ir3">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="j.hweqh"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="zn9w.78"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="-t-w8b-"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="9nnhi-j"
                                              />
                                              documentation
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="za_ase3">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="ridzw13"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="l3h4k8s"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="d12au7m"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="ct17_co"
                                              />
                                              properties
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="jfqhr2u">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="s6aokod"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="2rz7z6j"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="dnuhyz7"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="wv_bu4f"
                                        />
                                        api
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="tnda4oe">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="i440:r0"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="ttd_pud"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="2ek2nbw"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="vbxpim3"
                                        />
                                        components (contains all the components)
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="8a1w3nb">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="-rvlb65"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="co111av"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="eg0eaiv"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="pko0nv4"
                                        />
                                        types
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="g4g7i.z">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="qn69lnu"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="s..yc4c"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="f7g_c5w"
                                      >
                                        global.css
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="nnu67fs">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="ygv_2o-"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="9vz8ogz"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="rg-naby"
                                      >
                                        layout.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="q3i3c:.">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="ogka:cz"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="c8k0jc."
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="l55yvou"
                                      >
                                        not-found.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="3k89les">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="rkep8t."
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="4fkybq."
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="rak2t.o"
                                      >
                                        page.tsx
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="py-2" data-oid="hgmxss-">
                              <div
                                className="flex items-center gap-3"
                                data-oid="01ixtlz"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid=".lv-0er"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="8vqhk4."
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="l5w0sjn"
                                  />
                                  lib
                                </span>
                              </div>
                            </li>
                            <li className="py-2" data-oid="t451q8b">
                              <div
                                className="flex items-center gap-3"
                                data-oid="qkpvhjn"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="8l-wtb2"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="-y38ri-"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="3gu0tk-"
                                  />
                                  providers
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="py-2" data-oid="z:rs:5q">
                        <div
                          className="flex items-center gap-3"
                          data-oid="v1ajgku"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="w9lwg6t"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="tvyk_4."
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="e7e70gj"
                            />
                            next.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="bx:ha8h">
                        <div
                          className="flex items-center gap-3"
                          data-oid="qm-.hkp"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="8x3kaha"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="4:f8gm9"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="yzps2fk"
                            />
                            postcss.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="qxmels6">
                        <div
                          className="flex items-center gap-3"
                          data-oid="6el4p4p"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="tddih0s"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="pf_l-c8"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="wv5be1i"
                            />
                            package.json
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="hoe23e8">
                        <div
                          className="flex items-center gap-3"
                          data-oid="-fj.c70"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="q6l.nn_"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="6234gr6"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="b6oz_02"
                            />
                            tailwind.config.ts
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="-59-x0b">
                        <div
                          className="flex items-center gap-3"
                          data-oid="q0th_ya"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="bv5ah:k"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="-yjveri"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="xgtwx.k"
                            />
                            tsconfig.json
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
