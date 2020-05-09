import { useContext, useCallback } from 'react';
import { ThemeColors } from '../styles/theme';
import { Context, Actions, ContextColors } from '../state/context';

export type ColorActions = {
  setColor: (type: ThemeColors, value: string) => void;
};

export function useColors(): { colors: ContextColors; actions: ColorActions } {
  const { state, dispatch } = useContext(Context);

  const setColor = useCallback(
    (type: ThemeColors, value: string) =>
      dispatch({ type: Actions.setColor, payload: { type, value } }),
    [],
  );

  return {
    colors: {
      ...state.colors,
    },
    actions: {
      setColor,
    },
  };
}
