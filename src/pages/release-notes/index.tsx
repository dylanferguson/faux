import Link from "next/link";

const ReleaseNote = () => (
  <div className="text-gray-800 space-y-2">
    <h2 className="text-5xl font-semibold leading-snug">
      <Link href="">
        <a>v1.0.0</a>
      </Link>
    </h2>
    <div className="text-xl mb-2 text-gray-700">
      <span>Marketing Site</span> · <span>Mar 22nd, 2020</span>
    </div>
    <p className="text-2xl">
      Unfortunately we need to ask everyone who is using Ruby client with a
      version older than 0.7.3 to upgrade.
    </p>
    <div className="space-y-6">
      <ul className="changelog-tag cl-features text-lg mt-3 mb-5 space-y-1">
        <li>This is a feature</li>
        <li>This is another feature</li>
        <li>This is a third feature</li>
      </ul>
      <ul className="changelog-tag cl-fixes text-lg mt-3 mb-5 space-y-1">
        <li>This is a fix</li>
        <li>This is another fixes</li>
        <li>This is a third fix</li>
      </ul>
      <ul className="changelog-tag cl-enhancements text-lg mt-3 mb-5 space-y-1">
        <li>This is a enhancement</li>
        <li>This is another enhancement</li>
        <li>This is a third enhancement</li>
      </ul>
      <ul className="changelog-tag cl-performance text-lg mt-3 mb-5 space-y-1">
        <li>This is a performance</li>
        <li>This is another performance</li>
        <li>This is a third perf</li>
      </ul>
    </div>
  </div>
);

export default () => (
  <div className="container text-gray-800 mb-16">
    <div className="text-center my-40">
      <h1 className="my-5 text-6xl font-bold">
        <strong className="header-stripe">Release Notes</strong>
      </h1>
      <div className="text-2xl">
        <span className="logo inline-block pr-1"></span> changelog for new
        features and general improvements
      </div>
    </div>
    <div className="mx-3 sm:w-2/3 sm:mx-auto">
      <ReleaseNote />
    </div>
  </div>
);
