import { render,screen, act,fireEvent,getByTestId } from '@testing-library/react'
import  Home  from './Home'
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import axios from "axios";
import characters from '../../data/data.json'
import { useNavigate } from 'react-router-dom';

jest.mock('axios');
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const charactersFactory = async () => {
   axios.get.mockImplementation(() => Promise.resolve({ data: characters }));
   // eslint-disable-next-line testing-library/no-unnecessary-act
   await act(async() => render( <Provider store={store}>
      <Home />
    </Provider>,));
};
describe('Home test', () => {
    beforeEach(async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })})
    it('should render the  list', async () => {
        await charactersFactory();
        expect(screen.getByTestId('cardSection')).toBeInTheDocument();
    });
    it('should go to detaol', async () => {
        await charactersFactory();
        act(() => screen.getByTestId('Morty Smith2').click())
        expect(mockedUsedNavigate).toBeCalled();
    });
    it('should  change page', async () => {
        await charactersFactory();
        act(() => screen.getByTitle("2").click())
        expect(screen.getByTestId("Naruto Smith7313")).toBeInTheDocument();
    });
    it('should  change search', async () => {
        await charactersFactory();
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            const contentInput =screen.getByTestId("inputSearch");
            fireEvent.change(contentInput, {
                target: { value: "rick" }
            });
            fireEvent.keyUp(contentInput, {
                key: 'Enter'
            });
            fireEvent.keyUp(contentInput, {
                key: 'Scape'
            });
            screen.getByTestId("buttonSearch").click()
        })
        expect(screen.getByTestId("Naruto Smith7313")).toBeInTheDocument();
    });
     it('error', async () => {
        axios.get.mockImplementation(() => Promise.reject({ response: {data:{error:'error characters'}} }));
         // eslint-disable-next-line testing-library/no-unnecessary-act
         await act(async() => render( 
            <Provider store={store}>
                <Home />
            </Provider>))
           expect(screen.getByText("error characters")).toBeInTheDocument();
     })
})
    
