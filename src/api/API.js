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
        body: JSON.stringify({
          name: "HELLO WORLDS"
        }),
        headers: {"Content-Type": "application/json"}
      }
    );

    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

}

export default API;
