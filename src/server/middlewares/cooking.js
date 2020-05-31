import multer from 'multer';

// setup the multer storage location
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    if (file.mimetype !== 'image/png' || file.mimetype !== 'image/gif' || file.mimetype !== 'image/jpeg') {
      callback([400, "INVALID_FILE_TYPE"]);
    }

    const event = req.body.event;
    if(event === 'UPLOAD_recipe'){
      callback(null, path.join(__dirname, 'client/src/images/cooking'));
    } else {
      callback([400, "INVALID_UPLOAD"]);
    }
  },
  filename: function (req, file, callback) {
    const fileName = file.originalname.substr(0, file.originalname.indexOf('.'));
    const id = new Date().toLocaleDateString().replace('/', '_').replace('/','_');//uuid.v4();
    const extension = path.extname(file.originalname);
    callback(null, `${fileName}_${id}${extension}`);
  }
});
let upload = multer({storage: storage });

// setup the fileds for uploading a recipe
let recipeUploadConfig = upload.fields([{ name: 'images', maxCount: 6 }, { name: 'recipe', maxCount: 1 }])

export const cookingMiddlewares = (app, ) => {
  // takes recipe and images and returns the recipe and img src
  app.post('/api/recipe', recipeUploadConfig, (req, res, next) => {
    let recipe = JSON.parse(req.body.recipe);
    let images = req.files.images;

    recipe.images = [...images.map(img => img.path)];
    res.json(recipe);
  });
}