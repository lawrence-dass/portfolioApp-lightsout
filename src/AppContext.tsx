import { createContext } from 'react';

const AppContext = createContext<[string, (theme: string) => void]>(["green", () => {}] );

export default AppContext;