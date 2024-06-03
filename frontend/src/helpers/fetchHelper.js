export async function fetchHelper(url, isProtected, method, body) {
  let options = {};

  const token = localStorage.getItem("token");

  if (isProtected && !token) {
    throw new Error("No token present!");
  }

  if (method === "POST" || method === "PATCH") {
    options = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (isProtected) {
      options.headers.authorization = "Bearer " + token;
    }
  }

  if (method === "DELETE") {
    options = { method: method };
    if (isProtected) {
      options.headers = {
        authorization: "Bearer " + token,
      };
    }
  }

  if (isProtected && !options.headers?.authorization) {
    options.headers = { authorization: "Bearer " + token };
  }

  const response = await fetch(url, options);
  const data = await response.json();

  // if (data.success === false && data.msg === "Token expired!") {
  //   localStorage.removeItem("token");
  // }

  return data;
}
