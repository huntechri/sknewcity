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
      data-oid="ptecs7a"
    >
      <h3
        className=" text-black text-2xl font-semibold mt-8 dark:text-white"
        data-oid="xfi8vs9"
      >
        Pacakge Structure
      </h3>
      <div
        className="rounded-2xl p-6 pt-3 border border-black/10 dark:border-white/20 mt-6"
        data-oid="j4vnq9o"
      >
        <div className="flex items-center gap-4" data-oid="xngtva6">
          <h5 className="text-base font-medium mt-3 mb-1" data-oid="8j99uia">
            Структура проекта SK New City
          </h5>
        </div>
        <ul className="ps-0 md:ps-5 list-unstyled" data-oid="sw-xw_c">
          <li className="py-2" data-oid="iz:og76">
            <div className="flex items-center gap-3" data-oid="u8kvpm_">
              <p
                className="text-xl text-black dark:text-white/50"
                data-oid="a9nkw72"
              >
                |—
              </p>
              <span
                className="font-medium text-dark dark:text-white/50"
                data-oid="4xt64se"
              >
                <Icon
                  icon="tabler:folder"
                  className="text-primary text-base inline-block me-2"
                  data-oid="hzvkzdn"
                />
                packages
              </span>
            </div>
            <ul className="ps-5 md:ps-5 list-unstyled" data-oid="r9ytioa">
              <li className="py-0" data-oid="26pmaln">
                <ul className="ps-2 ps-md-3 list-unstyled" data-oid="qwqq0ge">
                  <li className="py-2" data-oid="v4x_0jp">
                    <ul
                      className="ps-0 md:ps-5 list-unstyled"
                      data-oid="bex5a77"
                    >
                      <li className="py-2" data-oid="w-7jsba">
                        <div
                          className="flex items-center gap-3"
                          data-oid="sos-r4b"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="y1noqli"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="ty5pa4v"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="xweg0od"
                            />
                            markdown
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="s3qbedb">
                        <div
                          className="flex items-center gap-3"
                          data-oid="5qv57_6"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="0l9jn6x"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="c0u96qd"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="-z4_1ez"
                            />
                            public
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="6m54ewc">
                        <div
                          className="flex items-center gap-3"
                          data-oid="zia3.zw"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="t4had:n"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="6n.cs_q"
                          >
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                              data-oid="07erd9j"
                            />
                            src
                          </span>
                        </div>
                        <div className="flex" data-oid="dv7eog6">
                          <div
                            className="flex flex-col justify-between gap-2 mt-2"
                            data-oid="nr4ro:t"
                          >
                            {Counts.slice(0, 19).map((item, index) => {
                              return (
                                <p
                                  key={index}
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="fwhqbpo"
                                >
                                  |
                                </p>
                              );
                            })}
                          </div>
                          <ul
                            className="ps-5 md:ps-12 list-unstyled"
                            data-oid="fd1nntc"
                          >
                            <li className="py-2" data-oid="3kqd6e8">
                              <div
                                className="flex items-center gap-3"
                                data-oid="-uu1dq4"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="-e56set"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="5e79i31"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="jh86mhj"
                                  />
                                  app
                                </span>
                              </div>
                              <div className="flex" data-oid="ww0cy0e">
                                <div
                                  className="flex flex-col justify-between gap-2 mt-2"
                                  data-oid="t5txwyv"
                                >
                                  {Counts.slice(0, 12).map((item, index) => {
                                    return (
                                      <p
                                        key={index}
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="3y3.xhc"
                                      >
                                        |
                                      </p>
                                    );
                                  })}
                                </div>
                                <ul
                                  className="ps-5 md:ps-12 list-unstyled red"
                                  data-oid="jw:dsh-"
                                >
                                  <li className="py-2" data-oid="1u_uex2">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="8glv7u3"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="oozcj:r"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="6wt1os5"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="z8_y2nc"
                                        />
                                        (site)
                                      </span>{" "}
                                      <span
                                        className="fs-9 text-dark dark:text-white/50 ms-4"
                                        data-oid="mk.t-46"
                                      >
                                        (Contains all the pages)
                                      </span>
                                    </div>
                                    <div className="flex" data-oid="nwotnwj">
                                      <div
                                        className="flex flex-col justify-between gap-2 mt-2"
                                        data-oid="3go9fjx"
                                      >
                                        {Counts.slice(0, 5).map(
                                          (item, index) => {
                                            return (
                                              <p
                                                key={index}
                                                className="text-xl text-black dark:text-white/50"
                                                data-oid="zn.e:na"
                                              >
                                                |
                                              </p>
                                            );
                                          },
                                        )}
                                      </div>

                                      <ul
                                        className="ps-5 md:ps-12 list-unstyled"
                                        data-oid="_q-ljh9"
                                      >
                                        <li className="py-2" data-oid="yn2vhgb">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="v_35wkv"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="3bvgbxq"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="qfl9tk_"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="6jj1pw3"
                                              />
                                              (auth) (Contains all the auth
                                              pages)
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="3h86ip3">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="tahrtac"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="_:c3kqx"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="bp_-9-2"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid=":m8pzhf"
                                              />
                                              blogs
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="44.rhfy">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="b-inx6l"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="ass0cie"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="tk9_sne"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="4:ccfh7"
                                              />
                                              contactus
                                            </span>
                                          </div>
                                        </li>

                                        <li className="py-2" data-oid="rg.sic:">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="bq2-vi8"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="9.7x5ka"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="esdaq6e"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="9agup7h"
                                              />
                                              documentation
                                            </span>
                                          </div>
                                        </li>
                                        <li className="py-2" data-oid="cgnfuu4">
                                          <div
                                            className="flex items-center gap-3"
                                            data-oid="6j-2bpu"
                                          >
                                            <p
                                              className="text-xl text-black dark:text-white/50"
                                              data-oid="nwgrcg9"
                                            >
                                              |—
                                            </p>
                                            <span
                                              className="font-medium text-dark dark:text-white/50"
                                              data-oid="aaht9mp"
                                            >
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                                data-oid="8k8qkwg"
                                              />
                                              properties
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="zk9r:82">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="nbnklqm"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid=":4_5zyx"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="eo99adh"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="ag-uf8p"
                                        />
                                        api
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="mkjh0i8">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="a-7zz65"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="mjjwg-2"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="su7lmc6"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="_k9rwof"
                                        />
                                        components (contains all the components)
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="l5jmmoi">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="bdhy-t9"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="s:j7a4g"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="ufvf_37"
                                      >
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                          data-oid="xnfjlyy"
                                        />
                                        types
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="epv1e3j">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="47xdxro"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="yh-:jwp"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid=".gvpiqi"
                                      >
                                        global.css
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="z83xc8b">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="nzjkoij"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="vkcykn4"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="4frlfb9"
                                      >
                                        layout.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="6:1ko0m">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="nevvl0x"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="ph6uzq-"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="ak40_rz"
                                      >
                                        not-found.tsx
                                      </span>
                                    </div>
                                  </li>
                                  <li className="py-2" data-oid="d9a4sjb">
                                    <div
                                      className="flex items-center gap-3"
                                      data-oid="4h6k-2c"
                                    >
                                      <p
                                        className="text-xl text-black dark:text-white/50"
                                        data-oid="r-dva1w"
                                      >
                                        |—
                                      </p>
                                      <span
                                        className="font-medium text-dark dark:text-white/50"
                                        data-oid="8lkjdax"
                                      >
                                        page.tsx
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="py-2" data-oid="zw3dwqp">
                              <div
                                className="flex items-center gap-3"
                                data-oid="s57zchn"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="wueeux."
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="ds98z7z"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="5hlu3j9"
                                  />
                                  lib
                                </span>
                              </div>
                            </li>
                            <li className="py-2" data-oid="h-c8.8:">
                              <div
                                className="flex items-center gap-3"
                                data-oid=".mbd:2e"
                              >
                                <p
                                  className="text-xl text-black dark:text-white/50"
                                  data-oid="l1yzvkl"
                                >
                                  |—
                                </p>
                                <span
                                  className="font-medium text-dark dark:text-white/50"
                                  data-oid="34.jvua"
                                >
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                    data-oid="_5_fpr2"
                                  />
                                  providers
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="py-2" data-oid="ijh-ls3">
                        <div
                          className="flex items-center gap-3"
                          data-oid="-vygf0x"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="to3g:be"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="auu.-9u"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="06h:w6h"
                            />
                            next.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="cl99s__">
                        <div
                          className="flex items-center gap-3"
                          data-oid="7d9igza"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="e-o3ktt"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="h3ndxy0"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="h2o2pay"
                            />
                            postcss.config.mjs
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="ytzz30u">
                        <div
                          className="flex items-center gap-3"
                          data-oid="51k.ro2"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="e:a-6-7"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="4t65cjp"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="u_gc18j"
                            />
                            package.json
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="_ah1426">
                        <div
                          className="flex items-center gap-3"
                          data-oid="x_:8nix"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="9t04i1."
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid="-:_e6j-"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="e:ufb.g"
                            />
                            tailwind.config.ts
                          </span>
                        </div>
                      </li>
                      <li className="py-2" data-oid="43juwo_">
                        <div
                          className="flex items-center gap-3"
                          data-oid="0fsu3b5"
                        >
                          <p
                            className="text-xl text-black dark:text-white/50"
                            data-oid="1vsdjeg"
                          >
                            |—
                          </p>
                          <span
                            className="font-medium text-dark dark:text-white/50"
                            data-oid=".l3f-7t"
                          >
                            <i
                              className="ti ti-file me-2 text-primary font-bold"
                              data-oid="4n7xpko"
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
