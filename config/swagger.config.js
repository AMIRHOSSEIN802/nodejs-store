const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function SwaggerConfig(app) {
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "Boto Start Store",
                description: "nodejs course",
                version: "2.0.0",
            },
            servers: [
                {
                    url: "http://localhost:5000",
                }
            ]
        },
        apis: ["./app/router/**/*.js"] 
    });

    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use("/swagger", swaggerUi.serve, swagger);
}

module.exports = SwaggerConfig;