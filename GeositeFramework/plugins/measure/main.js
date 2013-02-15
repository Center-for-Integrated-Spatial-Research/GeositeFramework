﻿define(
    ["dojo/_base/declare"],
    function (declare) {
        return declare(null, {
            toolbarName: "Measure",
            fullName: "Measure distances and area on the map",
            toolbarType: "map",
            initialize: function (args) {
                declare.safeMixin(this, args);
            }
        });
    }
);