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
      data-oid="4zs1r84"
    >
      <h3
        className=" text-black text-2xl font-semibold mt-8 dark:text-white"
        data-oid="0ezaa4r"
      >
        Pacakge Structure
      </h3>
      <div
        className="rounded-2xl p-6 pt-3 border border-black/10 dark:border-white/20 mt-6"
        data-oid="uffdqq2"
      >
        <div className="flex items-center gap-4" data-oid="7fgstdl">
          <h5 className="text-base font-medium mt-3 mb-1" data-oid="f3.et7l">
            Структура проекта SK New City
          </h5>
        </div>
        <ul className="ps-0 md:ps-5 list-unstyled" data-oid="ivkm6xi">
          <li className="py-2" data-oid="xds09nt">
            <div className="flex items-center gap-3" data-oid="xmvbmtk">
              <p
                className="text-xl text-black dark:text-white/50"
                data-oid="gv97ihj"
              >
                |—
              </p>
              <span
                className="font-medium text-dark dark:text-white/50"
                data-oid="tpec4oc"
              >
                <Icon
                  icon="tabler:folder"
                  className="text-primary text-base inline-block me-2"
                  data-oid="dr:i_fb"
                />
                packages
              </span>
            </div>
            <ul className="ps-5 md:ps-5 list-unstyled" data-oid="179:.cc">
              <li className="py-0" data-oid="bm49vf9">
                <ul className="ps-2 ps-md-3 list-unstyled" data-oid="wdw8yek">
                  <li className="py-2" data-oid="0b0zvam">
                    <ul
                      className="ps-0 md:ps-5 list-unstyled"
                      data-oid="_xkbptf"
                    >
                      <li className="py-2" data-oid="x1o74ou">
                        <div
                          className="flex items-center gap-3"
                          data-oid="8wz2k96"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="u8por.u"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="j26q3pp"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="6ia.0b_"
                            />
                            markdown
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="poj8c16">
                        <div
                          className="flex items-center gap-3"
                          data-oid="gs98fth"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="um731tz"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="g_:agx8"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="3e-5p7:"
                            />
                            public
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="op8v9v6">
                        <div
                          className="flex items-center gap-3"
                          data-oid="hxnmezc"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="e:-4du_"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="5ahypxr"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="8v.-hmh"
                            />
                            src
                          </span>
                        </div>
                        <div className="flex" data-oid="6opcz-f">
                          <div
                            className="flex flex-col justify-between gap-2 mt-2"
                            data-oid="ukkcjd4"
                          >
                            {Counts.slice(0, 19).map((item, index) => {
                              return (
                                <p
                                  key={index}
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="fuej95."
                                >
                                  |
                                </p>
                              );
                            })}
                          </div>
                          <ul
                            className="ps-5 md:ps-12 list-unstyled"
                            data-oid="xia0nvi"
                          >
                            <li className="py-2" data-oid="puutp08">
                              <div
                                className="flex items-center gap-3"
                                data-oid="l06jy7y"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="f.oazxj"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="k5c1eh3"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="f84jvm6"
                                  />
                                  app
                                </span>
                              </div>
                              <div className="flex" data-oid="361s4xm">
                                <div
                                  className="flex flex-col justify-between gap-2 mt-2"
                                  data-oid="3nep-gl"
                                >
                                  {Counts.slice(0, 12).map((item, index) => {
                                    return (
                                      <p
                                        key={index}
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="b2q4ewj"
                                      >
                                        |
                                      </p>
                                    );
                                  })}
                                </div>
                                <ul
                                  className="ps-5 md:ps-12 list-unstyled red"
                                  data-oid="our0i.d"
                                >
                                  <li className="py-2" data-oid="5aqzhct">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="1ub5dzn"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="1m3cd6k"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="kwoej0p"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="_ez:ees"
                                        />
                                        (site)
                                      </span>{" "}
                                      <span
                                        className="fs-9 text-dark dark:text-white/50 ms-4"
                                        data-oid="ponbb09"
                                      >
                                        (Contains all the pages)
                                      </span>
                                    </div>
                                    <div className="flex" data-oid="-rfc8ab">
                                      <div
                                        className="flex flex-col justify-between gap-2 mt-2"
                                        data-oid="zjgfs:t"
                                      >
                                        {Counts.slice(0, 5).map(
                                          (item, index) => {
                                            return (
                                              <p
                                                key={index}
                                                className="text-xl text-black dark:text-white/50"
                                                data-oid="2n5bbqs"
                                              >
                                                |
                                              </p>
                                            );
                                          },
                                        )}
                                      </div>

                                      <ul
                                        className="ps-5 md:ps-12 list-unstyled"
                                        data-oid="b309:58"
                                      >
                                        <li className="py-2" data-oid="-5du1hg">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="n08ofsm"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="6b_wzo_"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="dn6m1_6"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="13d94k_"
                                              />
                                              (auth) (Contains all the auth
                                              pages)
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid=".acjzjl">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="v0x8dq:"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="ndiatxr"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="h-6_5i1"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="vhy59kd"
                                              />
                                              blogs
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="5dnmn7i">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="e:rvr.2"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="rxr8d1y"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="cjf2_bi"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="8cev6h6"
                                              />
                                              contactus
                                            </span>
                                          </div>
                                        </li>

                                        <li className="py-2" data-oid="sr4puek">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="i7vos-x"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="fxmm0me"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid=":.9lcd3"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="1tmsw:i"
                                              />
                                              documentation
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="jczip44">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="s_k4gsl"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="2m9avix"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="egq5v3d"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="e2_3kom"
                                              />
                                              properties
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="3:r_3tn">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="n_d7ry:"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid=".lzcvcu"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="e22328r"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="lnsorhs"
                                        />
                                        api
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="e16wtp5">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="dmq4bsb"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="vn5w:ii"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid=".7dx9ca"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="mqsnann"
                                        />
                                        components (contains all the components)
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="95a0of6">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="evyb5aw"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="3v9o8rh"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="tex:coo"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="a68c-xt"
                                        />
                                        types
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="lx12aga">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="7uoz3s8"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="_ri2oov"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="ag9dgtf"
                                      >
                                        global.css
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid=".7natvr">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="o15p:50"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="_p0trj0"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="g9ulbk."
                                      >
                                        layout.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="jz:b:ow">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="7wyvrci"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="iht_jd2"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="_s1:-mh"
                                      >
                                        not-found.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid=":gx9gu2">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="t30y.yp"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="y3turcd"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="40fn_y7"
                                      >
                                        page.tsx
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="py-2" data-oid="xq101y9">
                              <div
                                className="flex items-center gap-3"
                                data-oid="r6a7mzt"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="asihvjk"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="96wew6x"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="zyx:w88"
                                  />
                                  lib
                                </span>
                              </div>
                            </li>
                            <li className="py-2" data-oid="x3.sx4w">
                              <div
                                className="flex items-center gap-3"
                                data-oid=".j-mxhz"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="pkn1m:0"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="b.izheu"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="i4-_i39"
                                  />
                                  providers
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="py-2" data-oid="ggyp_zt">
                        <div
                          className="flex items-center gap-3"
                          data-oid="_7.4e0y"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="gvbfmkt"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="3_2k25z"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="c1-4lp."
                            />
                            next.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="7k.1-_v">
                        <div
                          className="flex items-center gap-3"
                          data-oid="k_1t5wx"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="1b8ohah"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="b2clgm-"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="mhu.za_"
                            />
                            postcss.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="ap.4qtv">
                        <div
                          className="flex items-center gap-3"
                          data-oid="298j05w"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="3exf_.y"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="0i8:5cv"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="-sn49:x"
                            />
                            package.json
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid=".ui2wtu">
                        <div
                          className="flex items-center gap-3"
                          data-oid="ft3v4ta"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="yx6dz5g"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="spp6e:v"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="wr7jp1u"
                            />
                            tailwind.config.ts
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="ksqoefk">
                        <div
                          className="flex items-center gap-3"
                          data-oid="a8a72ws"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="d4b6xow"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="fjq7swy"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="_uxn-x:"
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
