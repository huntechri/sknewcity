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
      data-oid="-jh97pb"
    >
      <h3
        className=" text-black text-2xl font-semibold mt-8 dark:text-white"
        data-oid="xjslnk8"
      >
        Pacakge Structure
      </h3>
      <div
        className="rounded-2xl p-6 pt-3 border border-black/10 dark:border-white/20 mt-6"
        data-oid="67o9bsh"
      >
        <div className="flex items-center gap-4" data-oid="3n41pjx">
          <h5 className="text-base font-medium mt-3 mb-1" data-oid="gcrew49">
            Структура проекта SK New City
          </h5>
        </div>
        <ul className="ps-0 md:ps-5 list-unstyled" data-oid=":bfa15p">
          <li className="py-2" data-oid=".8c:4jf">
            <div className="flex items-center gap-3" data-oid="ow1yt3a">
              <p
                className="text-xl text-black dark:text-white/50"
                data-oid="r1k-ypd"
              >
                |—
              </p>
              <span
                className="font-medium text-dark dark:text-white/50"
                data-oid="hdaj9-a"
              >
                <Icon
                  icon="tabler:folder"
                  className="text-primary text-base inline-block me-2"
                  data-oid="qy6pi3:"
                />
                packages
              </span>
            </div>
            <ul className="ps-5 md:ps-5 list-unstyled" data-oid="hfxp25:">
              <li className="py-0" data-oid="kgpk-4.">
                <ul className="ps-2 ps-md-3 list-unstyled" data-oid="gmvm:9_">
                  <li className="py-2" data-oid="65x-k-d">
                    <ul
                      className="ps-0 md:ps-5 list-unstyled"
                      data-oid="-wi2par"
                    >
                      <li className="py-2" data-oid=":bh9f5u">
                        <div
                          className="flex items-center gap-3"
                          data-oid="u_7kwb3"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="9e2_dh5"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="837c.iu"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="aq6izbm"
                            />
                            markdown
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="uspedmf">
                        <div
                          className="flex items-center gap-3"
                          data-oid="-vystfv"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="_gk3idq"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="oi4mv.g"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="k:46fqk"
                            />
                            public
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="9hf9atw">
                        <div
                          className="flex items-center gap-3"
                          data-oid="ihhqat_"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="_8:tcbf"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="ivw3_3q"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="vduyxkc"
                            />
                            src
                          </span>
                        </div>
                        <div className="flex" data-oid="_qmmh0a">
                          <div
                            className="flex flex-col justify-between gap-2 mt-2"
                            data-oid="cxtigeb"
                          >
                            {Counts.slice(0, 19).map((item, index) => {
                              return (
                                <p
                                  key={index}
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="8s795k1"
                                >
                                  |
                                </p>
                              );
                            })}
                          </div>
                          <ul
                            className="ps-5 md:ps-12 list-unstyled"
                            data-oid="hp92_n:"
                          >
                            <li className="py-2" data-oid="y6fabqy">
                              <div
                                className="flex items-center gap-3"
                                data-oid="edf44vj"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="no8ocbj"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="ce0lzis"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="o4hd2_7"
                                  />
                                  app
                                </span>
                              </div>
                              <div className="flex" data-oid="a7o6-sv">
                                <div
                                  className="flex flex-col justify-between gap-2 mt-2"
                                  data-oid="om55yof"
                                >
                                  {Counts.slice(0, 12).map((item, index) => {
                                    return (
                                      <p
                                        key={index}
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="rc_bzr2"
                                      >
                                        |
                                      </p>
                                    );
                                  })}
                                </div>
                                <ul
                                  className="ps-5 md:ps-12 list-unstyled red"
                                  data-oid="ezo6.8a"
                                >
                                  <li className="py-2" data-oid="a:jt4xc">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="yxikm8_"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="2m3:9kg"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="-jvd47o"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="afyy-n7"
                                        />
                                        (site)
                                      </span>{" "}
                                      <span
                                        className="fs-9 text-dark dark:text-white/50 ms-4"
                                        data-oid="v0-ogqi"
                                      >
                                        (Contains all the pages)
                                      </span>
                                    </div>
                                    <div className="flex" data-oid="jm_qfmm">
                                      <div
                                        className="flex flex-col justify-between gap-2 mt-2"
                                        data-oid="5x1i:7n"
                                      >
                                        {Counts.slice(0, 5).map(
                                          (item, index) => {
                                            return (
                                              <p
                                                key={index}
                                                className="text-xl text-black dark:text-white/50"
                                                data-oid="jink9u0"
                                              >
                                                |
                                              </p>
                                            );
                                          },
                                        )}
                                      </div>

                                      <ul
                                        className="ps-5 md:ps-12 list-unstyled"
                                        data-oid="l7u.y67"
                                      >
                                        <li className="py-2" data-oid="xm9t:ju">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="oumtcn_"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="fh43eb_"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="fuhkc15"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="h302_a_"
                                              />
                                              (auth) (Contains all the auth
                                              pages)
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="t-hvj7n">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="ocz1jxh"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="8gbqead"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="gl_r6.w"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="i6cizc2"
                                              />
                                              blogs
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="si2yrca">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="adh4rsf"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="0z:zm52"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="i3u_j72"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="zlfwt2o"
                                              />
                                              contactus
                                            </span>
                                          </div>
                                        </li>

                                        <li className="py-2" data-oid="uni1bdn">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="t.4oag1"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="y3o5sd5"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="c47y340"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="-uzr9m3"
                                              />
                                              documentation
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="86etn-g">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="xma85vh"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="4w9x2ag"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="18yow01"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="gz2.:u5"
                                              />
                                              properties
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="orhjb9v">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="nr1_0ri"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="fia4c-l"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="-pnpe2_"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="-06.wv-"
                                        />
                                        api
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="qegn6cy">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="2:tbi2j"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="6gx4d:o"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="2swgvwf"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="z345lgm"
                                        />
                                        components (contains all the components)
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="420n_x-">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="7i0uovl"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="3u4k9g_"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="9xhbrdl"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="k7mqr9v"
                                        />
                                        types
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="7pgix.x">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="pf.bha7"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="is291m7"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="i3fso3k"
                                      >
                                        global.css
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="4pi-o7n">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="9zr-9c."
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="w5g_uqc"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="577hl6h"
                                      >
                                        layout.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid=".-pn99w">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="o9wu4q:"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="5y2:v7r"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid=":4_7kdg"
                                      >
                                        not-found.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="1y2quvs">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="p3.-v08"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid=":khyd5:"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="k09lbi6"
                                      >
                                        page.tsx
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="py-2" data-oid="l7np9wg">
                              <div
                                className="flex items-center gap-3"
                                data-oid="u0:d2s4"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="1pl.6qq"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="rmznziw"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="7ts-q_o"
                                  />
                                  lib
                                </span>
                              </div>
                            </li>
                            <li className="py-2" data-oid="_l0dwn6">
                              <div
                                className="flex items-center gap-3"
                                data-oid="gqcste7"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid=".2uipy7"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="_uw_4.x"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="7c0c6f1"
                                  />
                                  providers
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="py-2" data-oid="f7v.mkv">
                        <div
                          className="flex items-center gap-3"
                          data-oid="uzkd8xf"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="qbbr.6-"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid=".q25os0"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="af37:lh"
                            />
                            next.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="wybqv4w">
                        <div
                          className="flex items-center gap-3"
                          data-oid="03:n1d4"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid=".zzf34_"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="gcgnf29"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="zrmwa0d"
                            />
                            postcss.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid=".ncx6jv">
                        <div
                          className="flex items-center gap-3"
                          data-oid="dq0t-vo"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="qh03e8m"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="mqlvtel"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="-1j9vet"
                            />
                            package.json
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="7-_k.9p">
                        <div
                          className="flex items-center gap-3"
                          data-oid="oqbn8.1"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="c7_f7ry"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="tcozrgm"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="e79pt.i"
                            />
                            tailwind.config.ts
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="s:y0c2j">
                        <div
                          className="flex items-center gap-3"
                          data-oid="zmqp6ba"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="50u79.."
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="dn0ttxa"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="3top02q"
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
