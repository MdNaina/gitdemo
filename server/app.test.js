const app = require("./app")
const request = require("supertest")


describe("Testing Server is Running", () =>{
    it("GET /", async () => {
        console.log(request)
        const res = await request(app).get("/").expect(200)
        expect(res.text).toEqual("Ok")
    })
})