const express = require("express");

const app = express();

const PORT =
    process.env.PORT || 3000;

app.use(
    express.json({
        limit: "20mb"
    })
);

app.use(
    express.static(".")
);

app.get(
    "/api/status",
    (req, res) => {

        res.json({

            success: true,

            app:
            "GOKU AI GAME MAKER",

            version:
            "1.2"

        });

    }
);

app.post(
    "/api/project",
    (req, res) => {

        const project =
            req.body;

        if (!project) {

            return res
                .status(400)
                .json({
                    error:
                    "No project"
                });

        }

        res.json({

            success: true,

            message:
            "Project received",

            project

        });

    }
);

app.listen(
    PORT,
    () => {

        console.log(
            "GOKU AI GAME MAKER running on port "
            + PORT
        );

    }
);
