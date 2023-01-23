import ErrorRepository from "../Map";

test("Проверка фунции map", () => {
  const errors = new ErrorRepository();
  errors.code.set(404, "not found");
  expect(errors.translate(404)).toBe("not found");
  expect(errors.translate(502)).toBe("Unknown error");
});

test("Проверка фунции map на возврат Unknown error", () => {
  const errors = new ErrorRepository();
  errors.code.set(404, "not found");
  expect(errors.translate(502)).toBe("Unknown error");
});
