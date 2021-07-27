//@ts-nocheck
export default function removeURLParameter(url, parameterToRemove) {
  const urlParts = url.split("?");
  const baseUrl = urlParts[0];
  const params = urlParts[1];

  if (params) {
    const search = new URLSearchParams(params);
    search.delete(parameterToRemove);
    const newParams = search.toString();

    if (newParams === "") return baseUrl;

    return baseUrl + "?" + newParams;
  }

  return baseUrl;
}
