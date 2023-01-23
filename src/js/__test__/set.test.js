import Team from "../Set";

test("Тест функции set", () => {
  const team = new Team();
  team.add({ name: "Ivan" });
  const result = team.toArray();
  expect(result).toEqual([{ name: "Ivan" }]);
});

test("Тест вывода ошибки при попытке повторно ввести то же имя", () => {
  expect(() => {
    const team = new Team();
    const obj = {
      name: "Ivan",
    };

    team.add(obj);
    team.add(obj);
  }).toThrow();
});

test("Тест добавления массива в set", () => {
  const team = new Team();
  const obj1 = {
    name: "Ivan",
  };
  const obj2 = {
    name: "Alex",
  };
  team.addAll(obj1, obj2);
  const result = team.toArray();

  expect(result).toEqual([{ name: "Ivan" }, { name: "Alex" }]);
});
