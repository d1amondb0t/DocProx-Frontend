const AddDocument = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-6 shadow-lg rounded-md bg-white">
        <form action="" className="text-primary">
          <h1 className="text-center font-semibold text-2xl mb-2 "> Document Add</h1>
          <hr></hr>
          <div className="text-primary mt-3">
            <label htmlFor="" className="block py-2 text-base mb-2 font-semibold">Document Title</label>
            <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Document Title" />
          </div>
          <div className="text-primary mt-3">
            <label htmlFor="" className="block py-2 text-base mb-2 font-semibold">Document Path</label>
            <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
          </div>
          <div className="text-primary mt-6">
            <button className="text-violet-700 bg-violet-50 block w-full py-2 rounded-md border-0 font-semibold hover:bg-violet-100" type="submit">Add Document</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddDocument;
