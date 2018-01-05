forFrame.add({

    name: 'hello-world',

    init: function (api) {

        // and a single box with the id 'theBox';
        api.addBox.call(this, 'theBox');

    },

    forFrame: function (api) {

        var bx = api.get.call(this, 'theBox');

        bx.w = 32;
        bx.h = 32;

        bx.x = (this.canvas.width - bx.w) * this.bias;
        bx.y = this.canvas.height / 2 - bx.h / 2;

    }

});
