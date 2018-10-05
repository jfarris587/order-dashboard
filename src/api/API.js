///////////////////////////////////////////////////
//
//
//  ORDER DATABASE API FUNCTIONS
//
//
///////////////////////////////////////////////////

class API {
  FETCH = async (path) => {
    const response = await fetch(path);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  ADD_ORDER = async (path) => {
    const response = await fetch('/api/add-order',
      {
        method: 'POST',
        body: {name: 1, b: 'Textual content'}
      }
    );

    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

}

export default API;
