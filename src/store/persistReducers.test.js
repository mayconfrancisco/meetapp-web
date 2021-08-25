const persistReducers = require("./persistReducers")
// @ponicode
describe("persistReducers.default", () => {
    test("0", () => {
        let callFunction = () => {
            persistReducers.default("Intelligent")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            persistReducers.default("Awesome")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            persistReducers.default("Tasty")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            persistReducers.default("Rustic")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            persistReducers.default("Gorgeous")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            persistReducers.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
