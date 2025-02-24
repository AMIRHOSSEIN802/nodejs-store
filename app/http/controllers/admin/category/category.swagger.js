/**
 * @swagger
 * tags:
 *  name: Category(Admin panel)
 *  description: Manage categories (admin access required)
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateCategory:
 *              type: object
 *              required:
 *                  -   title
 *              properties:
 *                  title:
 *                      type: string
 *                      default: ""
 *                  parent:
 *                      type: string
 *                      default: ""
 *          UpdateCategory:
 *              type: object
 *              required:
 *                  -   title
 *              properties:
 *                  title:
 *                      type: string
 *                      default: ""
 */

/**
 * @swagger
 * /admin/category/create:
 *  post:
 *      summary: create new category
 *      tags:
 *          -   Category(Admin panel)
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *      responses:
 *          200:
 *              description: success          
 */
/**
 * @swagger
 * /admin/category/child/{parentId}:
 *  post:
 *      summary: find children
 *      tags:
 *          -   Category(Admin panel)
 *      parameters:
 *          -   in: path
 *              name: parentId
 *              required: true
 *      responses:
 *          200:
 *              description: success  
 */
/**
 * @swagger
 * /admin/category/{id}:
 *  post:
 *      summary: find category by id
 *      tags:
 *          -   Category(Admin panel)
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *      responses:
 *          200:
 *              description: success  
 */
/**
 * @swagger
 * /admin/category/parents:
 *  get:
 *      summary: get all parents
 *      tags:
 *          -   Category(Admin panel)
 *      responses:
 *          200:
 *              description: success  
 */
/**
 * @swagger
 * /admin/category/:
 *  get:
 *      summary: get all categories
 *      tags:
 *          -   Category(Admin panel)
 *      responses:
 *          200:
 *              description: success  
 */
/**
 * @swagger
 * /admin/category/{categoryId}:
 *  delete:
 *      summary: remove category
 *      tags:
 *          -   Category(Admin panel)
 *      parameters:
 *          -   in: path
 *              name: categoryId
 *              required: true
 *      responses:
 *          200:
 *              description: success  
 */
/**
 * @swagger
 * /admin/category/update/{id}:
 *  patch:
 *      summary: find category by id
 *      tags:
 *          -   Category(Admin panel)
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateCategory'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateCategory'
 *      responses:
 *          200:
 *              description: success  
 */