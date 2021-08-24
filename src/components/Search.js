const Search = () => {
  return (
    <div className="search-page">
      <form>
        <div className="container">
          <div className="form-field">
            <input
              type="text"
              name="search"
              placeholder="Enter Your Keywords"
            />
            <button type="submit">
              <i className="la la-search"></i>
            </button>
          </div>
        </div>
      </form>
      <a title="" href="/" className="close-search">
        <i className="la la-close"></i>
      </a>
    </div>
  );
};

export default Search;
