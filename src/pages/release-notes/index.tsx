const ReleaseNote = () => (
  <div>
    <h2>Title</h2>
    <p>
      <span>Marketing Site</span> · <span>Mar 22nd, 2020</span>
    </p>
    <hr />
    <p>Preamble!</p>
  </div>
);

export default () => (
  <div className="container">
    <h1 className="text-gray-800 my-5 text-5xl font-bold">Release Notes</h1>
    <ReleaseNote />
  </div>
);
