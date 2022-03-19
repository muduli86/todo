const http = (
  url,
  { method = "GET", searchParams, headers, json, signal, ...options } = {}
) =>
  fetch(
    `${url}${
      searchParams ? `?${new URLSearchParams(searchParams).toString()}` : ""
    }`,
    {
      method,
      signal,
      headers: {
        ...headers,
        ...(json ? { "content-type": "application/json" } : {}),
      },
      ...(json ? { body: JSON.stringify(json) } : {}),
      ...options,
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });

// Simple fetch wrapper
const api = {
  get: http,
  post: (url, options) => http(url, { method: "POST", ...options }),
  put: (url, options) => http(url, { method: "PUT", ...options }),
  delete: (url, options) => http(url, { method: "DELETE", ...options }),
  patch: (url, options) => http(url, { method: "PATCH", ...options }),
};

export default api;
