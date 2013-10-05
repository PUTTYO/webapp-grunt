describe("test case name", function() {
    var foo;
    beforeEach(function() {
        foo = sample.test('hallo');
    });

    it("should say", function (){
        var say = foo.say('hallo');
        expect(say).toEqual("say hallo");
    });
});
