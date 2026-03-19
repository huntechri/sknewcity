export const QuickStart = () => {
  return (
    <div
      className="pb-10 md:scroll-m-[180px] scroll-m-28"
      id="start"
      data-oid="-q1v.9d"
    >
      <h3
        className=" text-black text-2xl font-semibold mt-8 dark:text-white"
        data-oid="6rfsy47"
      >
        Quick Start
      </h3>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="5zhtw3x"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="f:25p0.">
          1. Requirements
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50"
          data-oid="mh058h7"
        >
          Before proceeding, you need to have the latest stable{" "}
          <a
            href="https://nodejs.org/"
            className="text-primary"
            data-oid="6zq_5ip"
          >
            node.js
          </a>{" "}
        </p>
        <h6
          className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"
          data-oid="s696f9g"
        >
          Recommended environment:
        </h6>
        <ul className="list-disc ps-6" data-oid="u.bb:bv">
          <li data-oid="f.u-8m7">node js 20+</li>
          <li data-oid="zv2o3i0">npm js 10+</li>
        </ul>
      </div>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="if0fbl."
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="b3dv:rt">
          2. Install
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50"
          data-oid="f52ti35"
        >
          Open package folder and install its dependencies. We recommanded yarn
          or npm.{" "}
        </p>
        <h6
          className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"
          data-oid="_jr-glm"
        >
          1) Install with npm:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black" data-oid="jhymm:c">
          <p className="text-sm text-gray-400" data-oid="vcidbqa">
            <span className="text-yellow-500" data-oid="g:oo2o3">
              cd
            </span>{" "}
            sk-new-city
          </p>
          <p className="text-sm text-gray-400 mt-2" data-oid="38aiitx">
            npm install
          </p>
        </div>
        <h6
          className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"
          data-oid=":mfp9g3"
        >
          1) Install with yarn:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black" data-oid="i:1irzc">
          <p className="text-sm text-gray-400" data-oid="zg.w7ka">
            <span className="text-yellow-500" data-oid="4205mg-">
              cd
            </span>{" "}
            sk-new-city
          </p>
          <p className="text-sm text-gray-400 mt-2" data-oid="pgm6drl">
            yarn install
          </p>
        </div>
      </div>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="fn6b_bt"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="gy6ivdc">
          3. Start
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mb-4"
          data-oid="83yhrjz"
        >
          Once npm install is done now you an run the app.
        </p>

        <div className="py-4 px-3 rounded-md bg-black" data-oid="treqlkd">
          <p className="text-sm text-gray-400" data-oid=".u2ofre">
            npm run dev or yarn run dev
          </p>
        </div>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 my-4"
          data-oid="47xhycz"
        >
          This command will start a local webserver{" "}
          <span className="dark:text-white" data-oid="ho_d8-5">
            http://localhost:3000:
          </span>
        </p>
        <div className="py-4 px-3 rounded-md bg-black" data-oid="ihpe-ug">
          <p className="text-sm text-gray-400" data-oid="7fp.4xx">
            {"> sk-new-city@1.0.0 dev"}
          </p>
          <p className="text-sm text-gray-400 mt-1" data-oid="i8p5xia">
            {"> next dev"}
          </p>
          <p className="text-sm text-gray-400 mt-6" data-oid="6pwrhgc">
            {"-Next.js 15.2.2"}
          </p>
          <p className="text-sm text-gray-400 mt-1" data-oid="pe1giru">
            {"-Local: http://localhost:3000"}
          </p>
        </div>
      </div>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="de9-7h:"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="tsxsn3r">
          4. Build / Deployment
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mb-4"
          data-oid="n443cz9"
        >
          After adding url run below command for build a app.
        </p>

        <div className="py-4 px-3 rounded-md bg-black" data-oid="huyqqic">
          <p className="text-sm text-gray-400" data-oid="kk18zv8">
            npm run build or yarn build
          </p>
        </div>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mt-6"
          data-oid="xevcef7"
        >
          После сборки проект SK New City готов к деплою.
        </p>
      </div>
    </div>
  );
};
