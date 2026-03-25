export const QuickStart = () => {
  return (
    <div
      className="pb-10 md:scroll-m-[180px] scroll-m-28"
      id="start"
      data-oid="cjy-icl"
    >
      <h3
        className=" text-black text-2xl font-semibold mt-8 dark:text-white"
        data-oid="jggs5.6"
      >
        Quick Start
      </h3>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="wx6qg.k"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="xqrc9gj">
          1. Requirements
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50"
          data-oid="2su:enl"
        >
          Before proceeding, you need to have the latest stable{" "}
          <a
            href="https://nodejs.org/"
            className="text-primary"
            data-oid=".4bo_:5"
          >
            node.js
          </a>{" "}
        </p>
        <h6
          className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"
          data-oid="ev13sk-"
        >
          Recommended environment:
        </h6>
        <ul className="list-disc ps-6" data-oid="xmbawpz">
          <li data-oid="c_kh02x">node js 20+</li>
          <li data-oid="m6qxzbx">npm js 10+</li>
        </ul>
      </div>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="p8xhris"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="_cwjgzz">
          2. Install
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50"
          data-oid="n6hi5hz"
        >
          Open package folder and install its dependencies. We recommanded yarn
          or npm.{" "}
        </p>
        <h6
          className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"
          data-oid="gz0-ir1"
        >
          1) Install with npm:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black" data-oid="gpik_1s">
          <p className="text-sm text-gray-400" data-oid="qjqq61f">
            <span className="text-yellow-500" data-oid="3h1lk9f">
              cd
            </span>{" "}
            sk-new-city
          </p>
          <p className="text-sm text-gray-400 mt-2" data-oid="ry-_sz.">
            npm install
          </p>
        </div>
        <h6
          className="mt-4 mb-2 dark:text-white text-dark font-medium text-base"
          data-oid="5e9rrvw"
        >
          1) Install with yarn:
        </h6>
        <div className="py-4 px-3 rounded-md bg-black" data-oid="3ixjj8_">
          <p className="text-sm text-gray-400" data-oid="0vq3.o2">
            <span className="text-yellow-500" data-oid=".:mfkx5">
              cd
            </span>{" "}
            sk-new-city
          </p>
          <p className="text-sm text-gray-400 mt-2" data-oid="sidqmw7">
            yarn install
          </p>
        </div>
      </div>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="25mdkif"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="b04wwmn">
          3. Start
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mb-4"
          data-oid="1ak4e21"
        >
          Once npm install is done now you an run the app.
        </p>

        <div className="py-4 px-3 rounded-md bg-black" data-oid="a:n8e-l">
          <p className="text-sm text-gray-400" data-oid="fuapv23">
            npm run dev or yarn run dev
          </p>
        </div>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 my-4"
          data-oid="za0r6bo"
        >
          This command will start a local webserver{" "}
          <span className="dark:text-white" data-oid="8-wjbfr">
            http://localhost:3000:
          </span>
        </p>
        <div className="py-4 px-3 rounded-md bg-black" data-oid="pksyq.n">
          <p className="text-sm text-gray-400" data-oid="sfrf1xp">
            {"> sk-new-city@1.0.0 dev"}
          </p>
          <p className="text-sm text-gray-400 mt-1" data-oid="75ois4i">
            {"> next dev"}
          </p>
          <p className="text-sm text-gray-400 mt-6" data-oid="sekwfhg">
            {"-Next.js 15.2.2"}
          </p>
          <p className="text-sm text-gray-400 mt-1" data-oid="n8.:coj">
            {"-Local: http://localhost:3000"}
          </p>
        </div>
      </div>
      <div
        className="p-6 rounded-md border mt-6 border-black/10 dark:border-white/20"
        data-oid="dfyqq03"
      >
        <h6 className="dark:text-white text-lg font-medium" data-oid="dk6i0bl">
          4. Build / Deployment
        </h6>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mb-4"
          data-oid="djoyf.-"
        >
          After adding url run below command for build a app.
        </p>

        <div className="py-4 px-3 rounded-md bg-black" data-oid="q8h:.d7">
          <p className="text-sm text-gray-400" data-oid="5g1_3j6">
            npm run build or yarn build
          </p>
        </div>
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50 mt-6"
          data-oid="-gu9s49"
        >
          После сборки проект SK New City готов к деплою.
        </p>
      </div>
    </div>
  );
};
