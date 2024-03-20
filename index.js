import { userRouter,express} from "./controller/UserController.js";
import {productRouter,express} from './controller/ProductController.js';
import { supplierRouter,express} from "./controller/SupplierController.js";
import { errorHandling } from './middleware/errorHandling.js'
import cookieParser from "cookie-parser";
import path from 'path';
import cors from 'cors'

const app = express();
const port = +process.env.PORT || 4500

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorisation");
    next();
})

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)

app.get('^/$|/scourgifydb', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/suppliers', supplierRouter)
app.use(errorHandling)
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})