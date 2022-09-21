import { createBrowserRouter } from 'react-router-dom';

import Countries from '../pages/Countries';
import Country, { loader as countryLoader } from '../pages/Country';
import App, { loader as appLoader } from '../App';
import Error from '../pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Countries />,
      },
      {
        path: ':countryId',
        element: <Country />,
        loader: countryLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
