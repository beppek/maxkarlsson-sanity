import React, { createContext, ReactElement, useReducer } from 'react';
import { theme, ThemeColors } from '../styles/theme';

export type ContextColors = {
  [ThemeColors.accent]: string;
  [ThemeColors.primary]: string;
  [ThemeColors.header]: string;
  [ThemeColors.background]: string;
  [ThemeColors.foreground]: string;
};

type State = {
  colors: ContextColors;
  showAbout: boolean;
};

type ContextProps = {
  dispatch: React.Dispatch<Action>;
  state: State;
};

type ProviderProps = {
  children: ReactElement | ReactElement[];
};

export enum DispatchActions {
  toggleAbout = 'toggleAbout',
  setColor = 'setColor',
}

type Actions = DispatchActions.toggleAbout | DispatchActions.setColor;

type ColorPayload = {
  type: ThemeColors;
  value: string;
};

type Payload = string | ColorPayload;

type Action =
  | { type: DispatchActions.toggleAbout; payload: Payload }
  | { type: DispatchActions.setColor; payload: Payload };

type ActionFunction = (state: State, payload: Payload) => State;

const initialState: State = {
  showAbout: false,
  colors: {
    accent: theme.accent,
    primary: theme.primary,
    header: 'transparent',
    background: theme.white,
    foreground: theme.black,
  },
};

export const Context = createContext<Partial<ContextProps>>({
  state: initialState,
});

const actions: Record<Actions, ActionFunction> = {
  toggleAbout: (state: State) => ({ ...state, showAbout: !state.showAbout }),
  setColor: (state: State, payload: ColorPayload) => ({
    ...state,
    colors: { ...state.colors, [payload.type]: payload.value },
  }),
};

function reducer(state: State, action: Action): State {
  return actions[action.type](state, action.payload) || state;
}

export function Provider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}
