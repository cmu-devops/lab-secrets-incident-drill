const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const { parseServiceResponse } = require("../src/response");

const fixturePath = path.join(
  __dirname,
  "fixtures",
  "service-response.json",
);

test("the service response fixture represents an authenticated response", () => {
  const serialized = fs.readFileSync(fixturePath, "utf8");
  const fixtureHash = crypto.createHash("sha256").update(serialized).digest("hex");

  assert.equal(
    fixtureHash,
    "fcfc4e3e2ac4f478f54674032d4ed24c3c1560037a1c084a48be4106968b5b35",
  );
  assert.deepEqual(parseServiceResponse(serialized), {
    service: "fixture-api",
    status: "ok",
    authenticated: true,
  });
});
