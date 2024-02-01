const request = require("supertest");
const app = require("../../app");

describe("Test GET/launces", () => {
  test("It should response with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("content-type", /json/);
  });
});

describe("Test POST/launcehs", () => {
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    lauchDate: "january 4, 2028",
  };

  const launchDataWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
  };

  const launchDataWithInvalidDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    lauchDate: "xiu",
  };

  test("It should response with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("content-type", /json/)
      .expect(201);

    const reguestDate = new Date(completeLaunchData.lauchDate).valueOf();
    const responseDate = new Date(response.body.lauchDate).valueOf();

    expect(responseDate).toBe(reguestDate);

    expect(response.body).toMatchObject(launchDataWithoutDate);
  });
  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("content-type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      Error: "Missing required launch property",
    });
  });

  test("It should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect("content-type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      Error: "Invalid launch date",
    });
  });
});
