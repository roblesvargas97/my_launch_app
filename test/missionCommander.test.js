const MissionCommander = require("./../app/missionCommander");

describe("Esto es una suite de pruebas", () => {
  test("Caso de prueba", () => {
    const result = 1 + 2;
    expect(result).toBe(3);
  });
});

describe("Unit test for Mission Commander Class", () => {
  test("1.- Create Mission Commander Object", () => {
    const myMissionCommander = new MissionCommander("Woopa");
    expect(myMissionCommander.name).toBe("Woopa");
  });
});
