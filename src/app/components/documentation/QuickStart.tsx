export const QuickStart = () => {
  return (
    <div
      className="pb-10 md:scroll-m-[180px] scroll-m-28"
      id="start"
      data-oid="w4tr8v0"
    >
      <h3
        className=" text-black text-2xl font-semibold mt-8 dark:text-white"
        data-oid="4mj-b3p"
      >
        Quick Start
      </h3>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="6vw1.z6"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid=":zkqpj1">
          1. Requirements
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50"
          data-oid="_htpk36"
        >
          Before proceeding, you need to have the latest stable{" "}
          <a
            href="https://nodejs.org/"
            className="text-primary"
            data-oid="4::b3.r"
          >
            node.js
          </a>{" "}
        </p>
        <h6
          className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"
          data-oid="tkcv7v:"
        >
          Recommended environment:
        </h6>
        <ul className="list-disc ps-6" data-oid="-3w:8l7">
          <li data-oid="grtfpe6">node js 20+</li>
          <li data-oid="_z5-qh.">npm js 10+</li>
        </ul>
      </div>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="mcpwzss"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="0xbm5v:">
          2. Install
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50"
          data-oid="nj0-n_y"
        >
          Open package folder and install its dependencies. We recommanded yarn
          or npm.{" "}
        </p>
        <h6
          className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"
          data-oid="yu6_iej"
        >
          1) Install with npm:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black" data-oid="ekq3vjk">
          <p className="text-sm text-gray-400" data-oid="eotepw8">
            <span className="text-yellow-500" data-oid="uv.lntf">
              cd
            </span>{" "}
            sk-new-city
          </p>
          <p className="text-sm text-gray-400 mt-2" data-oid="am787mq">
            npm install
          </p>
        </div>
        <h6
          className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"
          data-oid="n6wkh7:"
        >
          1) Install with yarn:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black" data-oid="hw0m2ai">
          <p className="text-sm text-gray-400" data-oid="obsp-lm">
            <span className="text-yellow-500" data-oid="2emo74v">
              cd
            </span>{" "}
            sk-new-city
          </p>
          <p className="text-sm text-gray-400 mt-2" data-oid="nrtf1q3">
            yarn install
          </p>
        </div>
      </div>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="bbyubie"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="p:0y68p">
          3. Start
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mb-4"
          data-oid="pj-jjgx"
        >
          Once npm install is done now you an run the app.
        </p>

        <div className="py-4 px-3 rounded-md bg-black" data-oid="x.h-oys">
          <p className="text-sm text-gray-400" data-oid="rs3pe1m">
            npm run dev or yarn run dev
          </p>
        </div>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 my-4"
          data-oid="wqgyk41"
        >
          This command will start a local webserver{" "}
          <span className="dark:text-white" data-oid="_o-90oz">
            http://localhost:3000:
          </span>
        </p>
        <div className="py-4 px-3 rounded-md bg-black" data-oid="20c0rw9">
          <p className="text-sm text-gray-400" data-oid="7boh14a">
            {"> sk-new-city@1.0.0 dev"}
          </p>
          <p className="text-sm text-gray-400 mt-1" data-oid="nlc9fx6">
            {"> next dev"}
          </p>
          <p className="text-sm text-gray-400 mt-6" data-oid="atp8-bt">
            {"-Next.js 15.2.2"}
          </p>
          <p className="text-sm text-gray-400 mt-1" data-oid="ny0q-g5">
            {"-Local: http://localhost:3000"}
          </p>
        </div>
      </div>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="qst14eq"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="vqcjwz7">
          4. Build / Deployment
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mb-4"
          data-oid="d7nzj6h"
        >
          After adding url run below command for build a app.
        </p>

        <div className="py-4 px-3 rounded-md bg-black" data-oid="6j_sxve">
          <p className="text-sm text-gray-400" data-oid="m4vg9x7">
            npm run build or yarn build
          </p>
        </div>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mt-6"
          data-oid="7md0cq8"
        >
          После сборки проект SK New City готов к деплою.
        </p>
      </div>
    </div>
  );
};
