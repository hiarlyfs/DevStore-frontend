import { useHistory, useLocation } from 'react-router-dom';

interface IStatePage {
  afterLoginRedirectTo: string;
}

export const useRedirectAfterSignInSuccess = (): void => {
  const history = useHistory();
  const {
    state: { afterLoginRedirectTo },
  } = useLocation<IStatePage>();

  if (afterLoginRedirectTo) history.push(afterLoginRedirectTo);
  else history.push('/shop');
};
