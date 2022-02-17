import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import expressfrom 'express';
import { AppRouter } from './AppRouter';
import { router } from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['kronos'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
