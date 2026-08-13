function parseServiceResponse(serialized) {
  const response = JSON.parse(serialized);

  return {
    service: response.service,
    status: response.status,
    authenticated: response.service_token.startsWith("svc_live_"),
  };
}

module.exports = { parseServiceResponse };
