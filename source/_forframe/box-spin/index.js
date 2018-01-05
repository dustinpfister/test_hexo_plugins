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

        let cx = this.canvas.width / 2 - bx.w / 2;
        let cy = this.canvas.height / 2 - bx.h / 2;

        let r = Math.PI * 2 * this.per;

        bx.x = cx + Math.cos(r) * 100;
        bx.y = cy + Math.sin(r) * 100;

    }

});
