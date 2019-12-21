import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: insertStringAfter} = indexModule

it("should run", () => {
  expect(insertStringAfter("Heo", "e", "ww")).toBe("Hewwo")
  expect(insertStringAfter("13", "1", "2")).toBe("123")
  expect(insertStringAfter("13", "", "2")).toBe("213")
  expect(insertStringAfter("I am Sanic!", "Sanic", " the Hedgehog")).toBe("I am Sanic the Hedgehog!")
})